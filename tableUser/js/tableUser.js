$(document).ready(function() {
    // getUser();
    fetchDataAndInitializeTable();
});

var table;

function fetchDataAndInitializeTable() {
    $.ajax({
        url: "/"+rootFolder+'/getRecords/user.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {
            table = new Tabulator("#table-user", {
                // pagination: "local", // Enable local pagination
                // paginationSize: 10, // Number of rows per page
                // paginationSizeSelector: [10, 25, 50, 100], // Page size options
                // page: 1, // Initial page number
                ajaxURL: "your_data_endpoint_here.json",
                data: list,
                layout: "fitDataFill", // Adjust table height based on the data
                columns: [
                    {title: "Last Name", field: "b", headerFilter: "input"},
                    {title: "First Name", field: "c", headerFilter: "input"},
                    {title: "Middle Name", field: "d", headerFilter: "input"},
                    {title: "Email", field: "h"},
                    {title: "Username", field: "e", headerFilter: "input"},
                    // {title: "Position", field: "f", formatter: displayPosition},
                    // {title: "Department", field: "e", mutator: displayDepartment, headerFilter:"input"},
                    {title: "User Role", field: "f", formatter: displayUserRole},
                    // {title: "User Status", field: "g", formatter: displayStatus},
                    {title: "Action", formatter: buttonFormatter, width: 300, hozAlign: "center", headerSort: false, frozen:true},
                ],
                downloadConfig: {
                    // Enable CSV export
                    csv: true,
                    // Enable Excel export
                    excel: true,
                    // Enable JSON export
                    json: true,
                    // Enable PDF export
                    pdf: true,
                },
            });
        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });

}

function buttonFormatter(cell, formatterParams, onRendered) {
    let rowData = cell.getRow().getData();

    let view = '<button class="btn btn-success btn-sm mx-1" onclick="modifyUser(\''+ rowData.a +'\')">Modify</button>';
    let changePass = '<button class="btn btn-warning btn-sm mx-1" onclick="changePassword(\''+ rowData.a +'\')">Change Password</button>';

    cell.getElement().style.backgroundColor == "#ffffff";

    return view;
    // return view + changePass;
    // return '';
}


function displayUserRole(cell, formatterParams, onRendered) {
    let rowData = cell.getRow().getData();
    let value = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsUserRoleList));

    if(value == "" || value == null){
        return "";
    } else {
        const result = list.find(element => element.a === value);

        return result ? result.b:"";
    }
}

function displayStatus(cell, formatterParams, onRendered) {
    let rowData = cell.getRow().getData();
    let status = "";
    let list = getUserStatus();

    for(let index = 0; index < list.length; index++){
        if(list[index].a == rowData.i){
            status = list[index].b;
            break;
        }
    }

    return status;
}


function modifyUser(id) {
    $.ajax({
        url: 'ajax/setUpdate.php', // Replace with your server-side script URL
        type: 'POST',
        data: {
            id: id,
        },
        success: function(data) {
            // console.log(data);
            $("#txtEditLastname").val(data.b);
            $("#txtEditFirstname").val(data.c);
            $("#txtEditMiddlename").val(data.d);
            $("#txtEditEmail").val(data.h);
            $("#txtEditUsername").val(data.e);
            // $("#selectEditRole").val(data.f);
            $('#selectEditRole').html(populateRole(data.f));

            $("#hiddenID").val(data.a);
            $('#modalEditUser').modal('show');

        },
        error: function(error) {
          alert('Error geting data');
        }
    });
    
    
}

function changePassword(id) {
    //alert(id);
    Swal.fire({
        title: 'Do you want to change your password?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
    }).then((result) => {
        if (result.isConfirmed) {
            // Swal.fire('Saved!', '', 'success')
            $.ajax({
                url: 'ajax/changePassword.php', // Replace with your server-side script URL
                type: 'POST',
                data: {
                    userId: id
                },
                success: function(data) {
                    Swal.fire({
                        title: 'Do you want to change your password?',
                        text: 'Your Password is '+data,
                        
                    })
                }
            });
        }
    })
}



