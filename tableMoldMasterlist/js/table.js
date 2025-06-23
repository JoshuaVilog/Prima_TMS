$(document).ready(function() {
    
    setTimeout(() => {
        fetchDataAndInitializeTable();
        getLastUpdate();
    }, 500);
    
});

var table;

function fetchDataAndInitializeTable() {
    let list = JSON.parse(localStorage.getItem(lsMoldList))

    table = new Tabulator("#table-record", {
        data: list,
        layout: "fitDataFill", // Adjust table height based on the data
        pagination: "local", // Enable local pagination
        paginationSize: 25,
        paginationSizeSelector: [25, 50, 100], // Page size options
        page: 1, // Initial page number
        columns: [
            {title: "NO.", formatter: "rownum", formatter: function(cell) {
                const row = cell.getRow();
                const table = row.getTable();
                const page = table.getPage(); // current page number
                const size = table.getPageSize(); // rows per page
                const rowIndex = row.getPosition(true); // position in data
                return ((page - 1) * size) + row.getPosition(true);
            },},
            {title: "MOLD CONTROL", field: "b", headerFilter: "input"},
            {title: "ITEM CODE", field: "c", headerFilter: "input"},
            {title: "ITEM NAME", field: "d", headerFilter: "input"},
            {title: "CUSTOMER", field: "e", headerFilter: "input"},
            {title: "MODEL", field: "f", headerFilter: "input"},
            {title: "MAKER", field: "g", headerFilter: "input"},
            {title: "CATEGORY", field: "h", headerFilter: "input"},
            {title: "MOLD LOCATION", field: "i", headerFilter: "input"},
            {title: "MARK", field: "j", headerFilter: "input"},
            {title: "MOLD STATUS", field: "k", headerFilter: "input"},
            {title: "COLOR CODE", field: "l", headerFilter: "input"},
            {title: "GUARANTEE", field: "m", headerFilter: "input"},
            {title: "CAVITY", field: "n", headerFilter: "input"},
            {title: "TRANSFER DATE", field: "o", headerFilter: "input"},
            {title: "APPROVAL DATE", field: "p", headerFilter: "input"},
            {title: "MOLD CONDITION", field: "q", headerFilter: "input"},
            {title: "CREATED AT", field: "r", headerFilter: "input", frozen: true},
            {title: "CREATED BY", field: "s", frozen: true, formatter: function(cell){
                return setUserFullName(cell.getValue());
            }},
            {title: "Action", formatter: formatterAction, frozen:true},
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


}

function formatterAction(cell, formatterParams, onRendered) {
    let rowData = cell.getRow().getData();

    let edit= '<button class="btn btn-success btn-sm mx-1" onclick="modifyRecord(\''+ rowData.a +'\')">Modify</button>';
    let generate = '<button class="btn btn-warning btn-sm mx-1" onclick="generateQRCode(\''+ rowData.b +'\')">Generate QR</button>';
    let remove= '<button class="btn btn-danger btn-sm mx-1" onclick="removeRecord(\''+ rowData.a +'\')">Delete</button>';

    cell.getElement().style.backgroundColor == "#ffffff";

    // return edit + " " + remove;
    return edit + " "+generate +" "+remove;
    // return '';
}

function modifyRecord(id){

    $.ajax({
        url: 'ajax/setUpdate.php', // Replace with your server-side script URL
        type: 'POST',
        data: {
            id: id,
        },
        success: function(data) {
            
            $("#txtEditDesc1").val(data.b);
            $("#txtEditDesc2").val(data.c);
            $("#txtEditDesc3").val(data.d);
            $("#txtEditDesc4").val(data.e);
            $("#txtEditDesc5").val(data.f);
            $("#txtEditDesc6").val(data.g);
            $("#txtEditDesc7").val(data.h);
            $("#txtEditDesc8").val(data.i);
            $("#txtEditDesc9").val(data.j);
            $("#txtEditDesc10").val(data.k);
            $("#txtEditDesc11").val(data.l);
            $("#txtEditDesc12").val(data.m);
            $("#txtEditDesc13").val(data.n);
            $("#txtEditDesc14").val(data.o);
            $("#txtEditDesc15").val(data.p);
            $("#txtEditDesc16").val(data.q);

            $("#hiddenID").val(data.a);
            $('#modalEdit').modal('show');

        },
        error: function(error) {
          alert('Error geting data');
        }
    });
}
function removeRecord(id){

    Swal.fire({
        title: 'Are you sure you want to remove the record?',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yes',
        showCancelButton: true,
        }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: 'ajax/remove.php', // Replace with your server-side script URL
                type: 'POST',
                data: {
                    id: id,
                },
                success: function(data) {
                    Swal.fire({
                        title: 'Record Removed Successfully!',
                        text: '',
                        icon: 'success',
                        timer: 2000,
                        willClose: () => {
                            getMoldMasterList();
                            setTimeout(fetchDataAndInitializeTable, 500);
                            $("#modalAdd").modal("hide");
                        },
                    })
                },
                error: function(error) {
                  alert('Error geting data');
                }
            });
        }
    })
}

function generateQRCode(mold){

    $("#displayQR").empty();

    var qrcode = new QRCode(document.getElementById("displayQR"), {
        text: mold,
        width: 200,
        height: 200
    });

    $('#modalQR').modal('show');

}

// generateQRCode()

function generateQRCodeAll(){
    let list = JSON.parse(localStorage.getItem(lsMoldList))
    let container = $("#containerQrCode")
    let element = '';

    for(let index = 0; index < list.length; index++){
        element += '<div class="col-sm-2 displayCard"> <div class="widget-box widget-color-dark displayQRCode"> <div class="widget-body"> <div class="widget-main align-center"> <div id="qrcode'+list[index].b+'"></div> <br> <strong style="font-size: 15px;">'+list[index].b+'</strong> </div> </div> </div> </div>'
        
    }

    container.html(element)

    for(let index = 0; index < list.length; index++){
        let qrID = "qrcode"+list[index].b
        let moldCode = list[index].b;

        var qrcode = new QRCode(document.getElementById(qrID), {
            text: moldCode,
            width: 100,
            height: 100
        });
    }
}

function setQRCode(){
    let qrID = "TEST";
    var qrcode = new QRCode(document.getElementById(qrID), {
        text: qrID,
        width: 100,
        height: 100
    });
}


























function buttonFormatter(cell, formatterParams, onRendered) {
    let rowData = cell.getRow().getData();

    let view = '<button class="btn btn-success btn-sm mx-1" onclick="modifyUser(\''+ rowData.a +'\')">Modify</button>';
    let changePass = '<button class="btn btn-warning btn-sm mx-1" onclick="changePassword(\''+ rowData.a +'\')">Change Password</button>';

    cell.getElement().style.backgroundColor == "#ffffff";

    return view + changePass;
    // return '';
}

function displayPosition(cell, formatterParams, onRendered) {
    let rowData = cell.getRow().getData();
    let status = "";
    let list = JSON.parse(localStorage.getItem(lsPositionList));

    for(let index = 0; index < list.length; index++){
        if(list[index].a == rowData.f){
            status = list[index].b;
            break;
        } 
    }

    return status;
}
function displayDepartment(cell, formatterParams, onRendered) {
    let rowData = cell.getRow().getData();
    let desc = "";
    let list = JSON.parse(localStorage.getItem(lsDepartmentList));

    for(let index = 0; index < list.length; index++){
        if(list[index].a == rowData.e){
            desc = list[index].c;
            break;
        }
    }

    return desc;
}

function displayRole(cell, formatterParams, onRendered) {
    let rowData = cell.getRow().getData();
    let status = "";
    let list = JSON.parse(localStorage.getItem(lsUserRoleList));

    for(let index = 0; index < list.length; index++){
        if(list[index].a == rowData.h){
            status = list[index].b;
            break;
        }
    }
    return status;
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


function modifyUser(code) {
    //alert(code);
    
    var userList = JSON.parse(localStorage.getItem(lsUserList));
    let departmentList = JSON.parse(localStorage.getItem(lsDepartmentList));
    let positionList = JSON.parse(localStorage.getItem(lsPositionList));
    let roleList = JSON.parse(localStorage.getItem(lsUserRoleList));
    
    var result = userList.find(function(value) {
        return value.a === code;
    });
    var sendData = {
        user: result,
        departmentList: departmentList,
        positionList: positionList,
        roleList: roleList,
        statusList: getUserStatus(),
    };
    //console.log(sendData);
    $.ajax({
        url: 'ajax/modalBodyEditUser.php', // Replace with your server-side script URL
        type: 'POST',
        data: JSON.stringify(sendData),
        success: function(data) {
            //console.log(data);
            
            var modalBody = document.querySelector('#modal-body-edit');
            modalBody.innerHTML = data;

            $('#selectEditDepartment, #selectEditPosition').select2({
                minimumInputLength: 0, // Set to 0 to always show the search bar
                allowClear: true, 
                placeholder: 'Select an option'
            });
            
            // Show the modal
            $('#modalEditUser').modal('show');

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



