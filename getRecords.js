


// let lsDepartmentList = rootSystemTitle+"_department_list";
// let lsPositionList = rootSystemTitle+"_position_list";
let lsUserList = rootSystemTitle+"_user_list";
let lsUserRoleList = rootSystemTitle+"-role-list";


let lsMoldList = rootSystemTitle+"-mold-masterlist";
let lsRequestTypeList = rootSystemTitle+"-request_type-list";
let lsCategoryList = rootSystemTitle+"-category-list";
let lsCauseList = rootSystemTitle+"-cause-list";
let lsCounterMeasureList = rootSystemTitle+"-counter_measure-list";
let lsDefectList = rootSystemTitle+"-defect-list";
let lsLocationList = rootSystemTitle+"-location-list";
let lsOccuredList = rootSystemTitle+"-occured-list";
let lsStatus1List = rootSystemTitle+"-status1-list";
let lsStatus2List = rootSystemTitle+"-status2-list";
let lsStatus3List = rootSystemTitle+"-status3-list";
let lsStatus4List = rootSystemTitle+"-status4-list";
let lsPriorityList = rootSystemTitle+"-priority-list";
let lsMachineNoList = rootSystemTitle+"-machine_no-list";
let lsResultList = rootSystemTitle+"-result-list";

getUserRole();
getUser();

getMoldMasterList();

getRequestTypeList();
getCategoryList();
getCauseList();
getCounterMeasureList();
getDefectList();
getLocationList();
getOccuredList();
getStatus1List();
getStatus2List();
getStatus3List();
getStatus4List();
getPriorityList();
getMachineNoList();
getResultList();


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ////

// function setDepartmentName(deptCode){
//     let deptList = JSON.parse(localStorage.getItem(lsDepartmentList));
//     let deptDesc = "";

//     for(let index = 0; index < deptList.length; index++){
//         if(deptList[index].a == deptCode){
//             deptDesc = deptList[index].c + " "+ deptList[index].b;
//             break;
//         }
//     }

//     return deptDesc;

// }
// async function checkIPAccess(ip) {
//     try {
//         const response = await fetch(`http://${ip}`, {
//             mode: 'no-cors'
//         });
//         alert('IP is accessible.');
//     } catch (error) {
//         alert('IP is not accessible.');
//     }
// }

// checkIPAccess('172.16.1.13:8000'); 

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ////

function getUserRole(){
    let list = [
        {a:"0", b:"ADMIN"},
        {a:"1", b:"ENGINEER"},
        {a:"2", b:"PRODUCTION"},
        {a:"3", b:"MOLD ASSY"},
        {a:"4", b:"TECHNICIAN"},
        {a:"5", b:"QC"},
    ];

    localStorage.setItem(lsUserRoleList, JSON.stringify(list));
}
function getUserStatus(){
    let list = [
        {a:"0", b:"DISABLE"},
        {a:"1", b:"ENABLE"},
    ];

    return list;
}
function getStatus2List(){
    let list = [
        {a:"0", b:""},
        {a:"1", b:"FOR REPAIR"},
        {a:"2", b:"FOR PM"},
        {a:"3", b:"FOR TRIAL"},
        {a:"4", b:"QC INSPECTION"},
        {a:"5", b:"MP"},
        {a:"6", b:"CANCELLED"},
    ];

    localStorage.setItem(lsStatus2List, JSON.stringify(list));
}
function getResultList(){
    let list = [
        {a:"0", b:""},
        {a:"1", b:"OK"},
        {a:"2", b:"BACK JOB"},
        {a:"3", b:"CANCELLED"},
    ];

    localStorage.setItem(lsResultList, JSON.stringify(list));
}

function getStatus3List(){
    let list = [
        {a:"1", b:"IN PROGRESS"},
        {a:"2", b:"DONE"},
    ];

    localStorage.setItem(lsStatus3List, JSON.stringify(list));
}
function getStatus4List(){
    let list = [
        {a:"1", b:"GOOD"},
        {a:"2", b:"BACKJOB"},
    ];

    localStorage.setItem(lsStatus4List, JSON.stringify(list));
}
function getPriorityList(){
    let list = [
        {a:"1", b:"LOW"},
        {a:"2", b:"HIGH"},
        {a:"3", b:"URGENT"},
    ];

    localStorage.setItem(lsPriorityList, JSON.stringify(list));
}

function getUser(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/user.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {
            localStorage.setItem(lsUserList, JSON.stringify(list));
            // console.log(list);
        },
        error: function(error) {
            console.log('Error fetching data from the database.');
        }
    });
}

function getMoldMasterList(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/mold_masterlist.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {
            // console.log(list)
            localStorage.setItem(lsMoldList, JSON.stringify(list));

        },
        error: function(error) {
            console.log('Error fetching data from the database.');
        }
    });
}


function getRequestTypeList(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/list_request_type.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            localStorage.setItem(lsRequestTypeList, JSON.stringify(list));

        },
        error: function(error) {
            console.log('Error fetching data from the database.');
        }
    });
}
function getCategoryList(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/list_category.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            localStorage.setItem(lsCategoryList, JSON.stringify(list));

        },
        error: function(error) {
            console.log('Error fetching data from the database.');
        }
    });
}
function getCauseList(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/list_cause.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            localStorage.setItem(lsCauseList, JSON.stringify(list));

        },
        error: function(error) {
            console.log('Error fetching data from the database.');
        }
    });
}
function getCounterMeasureList(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/list_counter_measure.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            localStorage.setItem(lsCounterMeasureList, JSON.stringify(list));

        },
        error: function(error) {
            console.log('Error fetching data from the database.');
        }
    });
}
function getDefectList(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/list_defect.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            localStorage.setItem(lsDefectList, JSON.stringify(list));

        },
        error: function(error) {
            console.log('Error fetching data from the database.');
        }
    });
}
function getLocationList(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/list_location.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            localStorage.setItem(lsLocationList, JSON.stringify(list));

        },
        error: function(error) {
            console.log('Error fetching data from the database.1');
        }
    });
}
function getOccuredList(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/list_occured.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            localStorage.setItem(lsOccuredList, JSON.stringify(list));

        },
        error: function(error) {
            console.log('Error fetching data from the database.');
        }
    });
}
function getStatus1List(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/list_status.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            localStorage.setItem(lsStatus1List, JSON.stringify(list));

        },
        error: function(error) {
            console.log('Error fetching data from the database.');
        }
    });
}
function getMachineNoList(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/list_machine_no.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            localStorage.setItem(lsMachineNoList, JSON.stringify(list));

        },
        error: function(error) {
            console.log('Error fetching data from the database.');
        }
    });
}




// FORMATTER

function displayUserFullName(cell, formatterParams, onRendered){
    let rowData = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsUserList));

    if(rowData == "" || rowData == null){
        return "";
    } else {
        // cell.getElement().style.backgroundColor = "#FFFFFF";
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        return  result.c + " "+result.b;

    }
}
function displayUserRole(cell, formatterParams, onRendered){
    let rowData = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsUserRoleList));

    if(rowData == "" || rowData == null){
        return "";
    } else {
        // cell.getElement().style.backgroundColor = "#FFFFFF";
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        return result.b;

    }
}
function displayResult(cell, formatterParams, onRendered){
    let id = cell.getValue();
    var rowData = cell.getRow().getData();
    let resultList = JSON.parse(localStorage.getItem(lsResultList));

    if(id == "" || id == null){
        cell.getElement().style.backgroundColor = "#FFFFFF";
        return "";
    } else {
        var result = resultList.find(function(value) {
            return value.a === id;
        });

        if(id == "0"){
            cell.getElement().style.backgroundColor = "#FFFFFF";
        } else if(id == "1"){
            cell.getElement().style.backgroundColor = "#93E9BE";
        } else if(id == "2"){
            cell.getElement().style.backgroundColor = "#E55451";
        }

        return result.b;
    }
}

function displayStatus2(cell, formatterParams, onRendered){
    let id = cell.getValue();
    var rowData = cell.getRow().getData();
    let statusList = JSON.parse(localStorage.getItem(lsStatus2List));

    
    var selectedStatus = statusList.find(function(value) {
        return value.a === id;
    });

    let value = id;

    if(value == "" || value == null){
        cell.getElement().style.backgroundColor = "#FFFFFF";
        return "";
    } else {

        if(rowData.z == "2"){
            cell.getElement().style.backgroundColor = "#E55451";
            return "NG";
        } else {
            
            if(value == "0"){
                cell.getElement().style.backgroundColor = "#FFFFFF";
            } else if(value == "1"){
                cell.getElement().style.backgroundColor = "#B666D2";
            } else if(value == "2"){
                cell.getElement().style.backgroundColor = "#1589FF";
            }  else if(value == "3"){
                cell.getElement().style.backgroundColor = "#FFA600";
            } else if(value == "4"){
                cell.getElement().style.backgroundColor = "#FFE87C";
            } else if(value == "5"){
                cell.getElement().style.backgroundColor = "#93E9BE";
            }
            return "<p style='font-size: 10px'>"+ selectedStatus.b +"</p>";
        }
    }
}
/* 
//WAG MUNA BURAHIN
function displayStatus2(cell, formatterParams, onRendered){
    let value = cell.getValue();
    let statusList = JSON.parse(localStorage.getItem(lsStatus2List));

    if(value == "" || value == null){
        // cell.getElement().style.backgroundColor = "#FFFFFF";
        return "";
    } else {
        let rowData = value;
        // cell.getElement().style.backgroundColor = "#FFFFFF";
        var result = statusList.find(function(value) {
            return value.a === rowData;
        });
        
        if(value == "0"){
            cell.getElement().style.backgroundColor = "#FFFFFF";
        } else if(value == "1"){
            cell.getElement().style.backgroundColor = "#B666D2";
        } else if(value == "2"){
            cell.getElement().style.backgroundColor = "#1589FF";
        }  else if(value == "3"){
            cell.getElement().style.backgroundColor = "#FFA600";
        } else if(value == "4"){
            cell.getElement().style.backgroundColor = "#FFE87C";
        } else if(value == "5"){
            cell.getElement().style.backgroundColor = "#93E9BE";
        }
        return "<p style='font-size: 10px'>"+ result.b +"</p>";

    }
} */
function displayStatus3(cell, formatterParams, onRendered){
    let rowData = cell.getValue();
    let statusList = JSON.parse(localStorage.getItem(lsStatus3List));

    if(rowData == "" || rowData == null){
        return "";
    } else {
        cell.getElement().style.backgroundColor = "#FFFFFF";
        var result = statusList.find(function(value) {
            return value.a === rowData;
        });
        return  result.b;

    }
}
function displayStatus4(cell, formatterParams, onRendered){
    let rowData = cell.getValue();
    let statusList = JSON.parse(localStorage.getItem(lsStatus4List));

    if(rowData == "" || rowData == null){
        return "";
    } else {
        cell.getElement().style.backgroundColor = "#FFFFFF";
        var result = statusList.find(function(value) {
            return value.a === rowData;
        });
        return  result.b;

    }
}
function displayType(cell, formatterParams, onRendered){
    let rowData = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsRequestTypeList));

    if(rowData == "" || rowData == null || rowData == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function displayCategory(cell, formatterParams, onRendered){
    let rowData = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsCategoryList));

    if(rowData == "" || rowData == null|| rowData == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function displayDefect(cell, formatterParams, onRendered){
    let rowData = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsDefectList));

    if(rowData == "" || rowData == null|| rowData == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function displayCounterMeasure(cell, formatterParams, onRendered){
    let rowData = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsCounterMeasureList));

    if(rowData == "" || rowData == null|| rowData == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function displayPriority(cell, formatterParams, onRendered){
    let rowData = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsPriorityList));

    if(rowData == "" || rowData == null|| rowData == "0"){
        return "";
    } else {
        // cell.getElement().style.backgroundColor = "#FFFFFF";
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function displayMachineNo(cell, formatterParams, onRendered){
    let rowData = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsMachineNoList));

    if(rowData == "" || rowData == null || rowData == "0"){
        return "";
    } else {
        cell.getElement().style.backgroundColor = "#FFFFFF";
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function displayAgingMold(cell, formatterParams, onRendered){
    var rowData = cell.getRow().getData();
    let targetDate = rowData.d;
    let status = rowData.h;
  
    // Parse the target date string
    const target = new Date(targetDate);
                
    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceMs = currentDate - target;

    // Convert milliseconds to days
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    let delay = differenceDays - 1;
    let desc = (delay > 1)? "DAYS":"DAY";
    let color = (delay > 3)? "#FF0000":"#000000";
    
    if(delay > 0){
        // return delay + " " + desc;
        return '<span style="color: '+color+'">'+delay+'</span>';
    } else {
        return "";
    }
}

// MOLD
function displayMoldModel(cell, formatterParams){
    let moldCtrl = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    var result = list.find(function(value) {
        return value.b === moldCtrl;
    });
    
    // return  result.f;
    return result ? result.f:"";

}
function displayMoldPartName(cell, formatterParams){
    let moldCtrl = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    var result = list.find(function(value) {
        return value.b === moldCtrl;
    });
    
    // return  result.d;
    return result ? result.d:"";

}
function displayMoldTool(cell, formatterParams){
    let moldCtrl = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    var result = list.find(function(value) {
        return value.b === moldCtrl;
    });
    
    // return  result.j;
    return result ? result.j:"";

}
function displayMoldMaker(cell, formatterParams){
    let moldCtrl = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    var result = list.find(function(value) {
        return value.b === moldCtrl;
    });
    
    // return  result.g;
    return result ? result.g:"";

}
function displayMoldPartNo(cell, formatterParams){
    let moldCtrl = cell.getValue();
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    var result = list.find(function(value) {
        return value.b === moldCtrl;
    });
    
    // return  result.c;
    return result ? result.c:"";

}

////////////////////////////////////////////////////////////
//MUTATOR
function mutatorDisplayUser(value, data, type, params, component){
    let rowData = value;
    let list = JSON.parse(localStorage.getItem(lsUserList));

    if(rowData == "" || rowData == null|| rowData == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.c + " "+result.b;

    }
}
function mutatorDisplayStatus(value, data, type, params, component){
    let rowData = value;
    var list = JSON.parse(localStorage.getItem(lsStatus2List));

    if(rowData == "" || rowData == null){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
    
        return  result.b;

    }
}
function mutatorDisplayResult(value, data, type, params, component){
    let rowData = value;
    var list = JSON.parse(localStorage.getItem(lsResultList));

    if(rowData == "" || rowData == null || rowData == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
    
        return  result.b;

    }
}
function mutatorDisplayDefect(value, data, type, params, component){
    let rowData = value;
    let list = JSON.parse(localStorage.getItem(lsDefectList));

    if(rowData == "" || rowData == null|| rowData == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function mutatorDisplayLocation(value, data, type, params, component){
    let rowData = value;
    let list = JSON.parse(localStorage.getItem(lsLocationList));

    if(rowData == "" || rowData == null|| rowData == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function mutatorDisplayPriority(value, data, type, params, component){
    let rowData = value;
    let list = JSON.parse(localStorage.getItem(lsPriorityList));

    if(rowData == "" || rowData == null|| rowData == "0"){
        return "";
    } else {
        // cell.getElement().style.backgroundColor = "#FFFFFF";
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function mutatorDisplayType(value, data, type, params, component){
    let rowData = value;
    let list = JSON.parse(localStorage.getItem(lsRequestTypeList));

    if(rowData == "" || rowData == null || rowData == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function mutatorDisplayCategory(value, data, type, params, component){
    let rowData = value;
    let list = JSON.parse(localStorage.getItem(lsCategoryList));

    if(rowData == "" || rowData == null|| rowData == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === rowData;
        });
        
        return  result.b;

    }
}
function mutatorDisplayAgingMold(value, data, type, params, component){
    // let rowData = component.getRow().getData();
    let targetDate = data.d;
    let status = data.h;
    
  
    // Parse the target date string
    const target = new Date(targetDate);
                
    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceMs = currentDate - target;

    // Convert milliseconds to days
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    let delay = differenceDays - 1;
    let desc = (delay > 1)? "DAYS":"DAY";
    let color = (delay > 3)? "#FF0000":"#000000"
    
    if(delay > 0){
        // return delay + " " + desc;
        return '<span style="background-color: '+color+'">'+delay+'</span>';
    } else {
        return "";
    }
    

}

////////////////////////////////////////////////////////////
// GET

function setUserFullName(id){
    let list = JSON.parse(localStorage.getItem(lsUserList));

    if(id == "" || id == null || id == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === id;
        });
        return  result.c + " "+result.b;
    }
}
function setCounterMeasure(id){
    let list = JSON.parse(localStorage.getItem(lsCounterMeasureList));

    if(id == "" || id == null){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === id;
        });
        
        return  result.b;

    }
}
function setStatus4(id){
    let list = JSON.parse(localStorage.getItem(lsStatus4List));

    if(id == "" || id == null){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === id;
        });
        
        return  result.b;

    }
}
function setStatus2(id){
    let list = JSON.parse(localStorage.getItem(lsStatus2List));

    if(id == "" || id == null){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === id;
        });
        
        return  result.b;

    }
}
function setRequestType(id){
    let list = JSON.parse(localStorage.getItem(lsRequestTypeList));

    if(id == "" || id == null || id == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === id;
        });
        
        return  result.b;

    }
}
function setLocation(id){
    let list = JSON.parse(localStorage.getItem(lsLocationList));

    if(id == "" || id == null || id == "0"){
        return "";
    } else {
        var result = list.find(function(value) {
            return value.a === id;
        });
        
        return  result.b;

    }
}

function getCurrentDate(num){
    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    let day = 0;

    if(num != undefined){
        day = (currentDate.getDate() - num).toString().padStart(2, '0');
    } else {
        day = currentDate.getDate().toString().padStart(2, '0');
    }

    let formattedDate = `${year}-${month}-${day}`;
    // console.log(formattedDate);  // Outputs something like: 2024-05-29
    return formattedDate;

}
function getCurrentTime(){
    // Create a new Date object
    let now = new Date();

    // Get the current hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format the time as HH:MM:SS
    let currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return currentTime; // Output: current time in HH:MM:SS format

}

// MOLD
function getDisplayMoldModel(moldCtrl){
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    if(moldCtrl == "" || moldCtrl == null || moldCtrl == "0"){
        return "";
    } else {
        const result = list.find(element => element.b === moldCtrl);

        return result ? result.f:"";
    }

}

function getDisplayMoldPartName(moldCtrl){
    
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    if(moldCtrl == "" || moldCtrl == null || moldCtrl == "0"){
        return "";
    } else {
        const result = list.find(element => element.b === moldCtrl);
        
        return result ? result.d:"";
    }

}
function getDisplayMoldTool(moldCtrl){
    
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    if(moldCtrl == "" || moldCtrl == null || moldCtrl == "0"){
        return "";
    } else {
        const result = list.find(element => element.b === moldCtrl);
        
        return result ? result.j:"";
    }

}
function getDisplayMoldMaker(moldCtrl){
    
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    if(moldCtrl == "" || moldCtrl == null || moldCtrl == "0"){
        return "";
    } else {
        const result = list.find(element => element.b === moldCtrl);
        
        return result ? result.g:"";
    }

}
function getDisplayMoldPartNo(moldCtrl){
    
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    if(moldCtrl == "" || moldCtrl == null || moldCtrl == "0"){
        return "";
    } else {
        const result = list.find(element => element.b === moldCtrl);
        
        return result ? result.c:"";
    }
    

}
function getDisplayMoldLocation(moldCtrl){
    
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    if(moldCtrl == "" || moldCtrl == null || moldCtrl == "0"){
        return "";
    } else {
        const result = list.find(element => element.b === moldCtrl);
        
        return result ? result.i:"";
    }
}
function getDisplayMoldCustomer(moldCtrl){
    
    let list = JSON.parse(localStorage.getItem(lsMoldList));

    if(moldCtrl == "" || moldCtrl == null || moldCtrl == "0"){
        return "";
    } else {
        const result = list.find(element => element.b === moldCtrl);
        
        return result ? result.e:"";
    }

}

function getDepartment(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/department.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {
            localStorage.setItem(lsDepartmentList, JSON.stringify(list));
            // console.log(list);
        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });
}
function getPosition(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/position.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {
            localStorage.setItem(lsPositionList, JSON.stringify(list));
            // console.log(list);
        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });
}


// UPDATE `mold_masterlist` SET `CREATED_BY`='1' WHERE `CREATED_IP`= '172.16.102.15'
// UPDATE `mold_masterlist` SET `CREATED_BY`='8' WHERE `CREATED_IP`= '172.16.102.18'
// UPDATE `mold_masterlist` SET `CREATED_BY`='8' WHERE `CREATED_IP`= '172.16.21.111'
// UPDATE `mold_masterlist` SET `CREATED_BY`='49' WHERE `CREATED_IP`= '172.16.9.1'







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getSample(){
    const mainList = [
        {a: 1, b: "EPSON", c: 1},
        {a: 2, b: "LSE", c: 1},
        {a: 3, b: "EPSON", c: 2},
        {a: 4, b: "EPSON", c: 2},
        {a: 5, b: "EPSON", c: 2},
        {a: 6, b: "LSE", c: 2},
        {a: 7, b: "LSE", c: 1},
    ];

    let customerList = ["EPSON", "LSE"];
    let statusList = [1, 2];

    let storeList = {
        1:{},
        2:{},
    };

    mainList.forEach(item => {
        if (!storeList[item.c][item.b]) {
            storeList[item.c][item.b] = 0;
        }
        storeList[item.c][item.b]++;
    });

    /* for(let i = 0; i < mainList.length; i++){
        let list = [];

        for(let j = 0; j < statusList.length; j++){

            for(let k = 0; k < customerList.length; k++){

                if()

            }


        }


    } */

    
    console.log(mainList);
}

/* 
[
    {
        status: 0,
        list: [
            { customer: "EPSON", count: 0 },
            { customer: "LSE", count: 0 },
        ]
    },
    {
        status: 1,
        list: [
            { customer: "EPSON", count: 1 },
            { customer: "LSE", count: 2 },
        ]
    },
    {
        status: 2,
        list: [
            { customer: "EPSON", count: 3 },
            { customer: "LSE", count: 1 },
        ]
    },
]
 */
