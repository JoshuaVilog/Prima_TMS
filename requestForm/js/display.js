$(document).ready(function() {
    // setTimeout(fetchDataAndInitializeTable, 500);
    fetchDataAndInitializeTable()
});

var table;

function fetchDataAndInitializeTable() {

    $.ajax({
        url: "/"+rootFolder+'/getRecords/request_masterlist.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            list = list.filter(item => item.z == "0");

            table = new Tabulator("#table-record", {
                data: list,
                layout: "fitDataFill", // Adjust table height based on the data
                pagination: "local",
                paginationSize: 25,
                paginationSizeSelector: [25, 50, 100],
                page: 1,
                columns: [
                    {title: "RID", field: "a", visible: false},
                    {title: "MOLD CTRL", field: "c", headerFilter: "input", resizable: false},
                    {title: "CONTROL #", field: "b", headerFilter: "input", resizable: false},
                    {title: "PART CODE", field: "c", headerFilter: "input", resizable: false, formatter:displayMoldPartNo},
                    {title: "TARGET DATE", field: "g", resizable: false},
                    // {title: "PRIORITY", field: "i", formatter: displayPriority, resizable: false},
                    {title: "REQUEST DATE", field: "d", resizable: false},
                    {title: "TYPE", field: "i", formatter: displayType, resizable: false},
                    {title: "CATEGORY", field: "j", formatter: displayCategory, resizable: false},
                    {title: "DEFECT", field: "k", formatter: displayDefect, resizable: false},
                    {title: "DEFECT/LOCATION", field: "l", resizable: false},
                    {title: "REMARKS", field: "y", resizable: false},
                    {title: "STATUS", field: "x", formatter: displayStatus2, frozen: true},
                    {title: "ACTION", field: "a", formatter: formatterAction, width:90, frozen: true},
                ],
            });

        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });
}

function formatterAction(cell, formatterParams, onRendered){
    var rowData = cell.getRow().getData();
    var id = rowData.a;
    var status = rowData.i;

    let view = '<button class="btn btn-sm btn-info btn-minier" onclick="viewMoldHistory(\''+id+'\')" style="font-size: 10px">View</button>';
    let edit = '<button class="btn btn-sm btn-primary btn-minier" onclick="editReport(\''+id+'\')" style="font-size: 10px">Edit</button>';
    return edit;

    // if(status == "0"){
    //     let edit = '<button class="btn btn-sm btn-primary" onclick="editReport(\''+id+'\')">Edit Report</button>';

    //     return edit;
    // } else {
    //     let view = '<button class="btn btn-sm btn-info" onclick="viewReport(\''+id+'\')">View Report</button>';
    //     return view;
    // }
    
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



