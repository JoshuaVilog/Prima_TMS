$(document).ready(function() {
    $("#menuDashboard2").addClass("active");
    fetchDataAndInitializeTable()
    setInterval(function () {
        fetchDataAndInitializeTable()
        
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        // let currentTime = `${hours}:${minutes}:${seconds}`;
        let currentTime = `${hours}:${minutes}`;
        console.log(`Current Time: `+ currentTime);
    }, 120000);
});

var table;

function fetchDataAndInitializeTable() {

    $.ajax({
        url: "/"+rootFolder+'/getRecords/request_mold_list.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            list.forEach(function (row) {
                row.MOLD_MODEL = getDisplayMoldModel(row.c);
                row.MOLD_PART_NAME = getDisplayMoldPartName(row.c);
                row.MOLD_TOOL = getDisplayMoldTool(row.c);
                row.MOLD_PART_NO = getDisplayMoldPartNo(row.c);
            });

            table = new Tabulator("#table-records", {
                data: list,
                layout: "fitDataFill",
                
                groupBy: function(data) {
                    // Group "1", "2", and "4" together, and "3" separately
                    if (data.h == "0") {
                        return "FOR REPAIR";
                    } else {
                        return "IN PROCESS";
                    }
                },
                groupHeader: function(value, count, data, group){

                    return value;
                },
                groupValues:[
                    ["IN PROCESS", "FOR REPAIR"]
                ],

                
                columns: [
                    {title: "RID", field: "a", visible: false},
                    {title: "PR #", field: "b", headerFilter: "input", formatter: displayControlNo},
                    {title: "MOLD CODE", field: "c", headerFilter: "input"},
                    {title: "MODEL", field: "MOLD_MODEL", headerFilter: "input"},
                    {title: "PART NAME", field: "MOLD_PART_NAME", headerFilter: "input"},
                    {title: "TOOL", field: "MOLD_TOOL", headerFilter: "input"},
                    // {title: "MAKER", field: "c", formatter: displayMoldMaker},
                    {title: "PART#", field: "MOLD_PART_NO", headerFilter: "input"},
                    // {title: "TYPE", field: "e", mutator: mutatorDisplayType, headerFilter: "input"},
                    {title: "TARGET DATE", field: "d"}, 
                    {title: "DEFECT", field: "f", mutator: mutatorDisplayDefect, headerFilter: "input"},
                    {title: "DEFECT/LOCATION", field: "g",headerFilter:"input"},
                    // {title: "PRIORITY", field: "i", mutator: mutatorDisplayPriority, headerFilter:"input"}, 
                    {title: "COUNTER MEASURE", field: "k", formatter: displayMoldCounterMeasure}, 
                    {title: "STATUS", field: "l", formatter: displayStatus3, visible: false}, 
                    {title: "IN DATETIME", field: "m", formatter: displayInDatetime}, 
                    {title: "IN BY", field: "n", formatter: displayInBy}, 
                    {title: "OUT DATETIME", field: "o", formatter: displayOutDatetime}, 
                    {title: "OUT BY", field: "p", formatter: displayOutBy}, 
                    {title: "STATUS", field: "h", formatter: displayStatus2, frozen: true}, //STATUS REQUEST
                    // {title: "ACTION", field: "", formatter: formatterAction, frozen: true},
                ],
            });

        },
        error: function(error) {
            alert('Error fetching data from the databaseee.');
        }
    });
}

// YUNG FORMATTER DITO BAWAL ILAGAY SA MAIN JS CODE KASE DITO LANG TALAGA SIYA SA MODULE NA TO
function formatterAction(cell, formatterParams, onRendered) {
    var rowData = cell.getRow().getData();
    var id = rowData.a;

    let view = '<button class="btn btn-sm btn-info" onclick="viewMoldHistory(\''+id+'\')">View Report</button>';
    return view;
}
function displayControlNo(cell, formatterParams){
    let value = cell.getValue();
   
    return  "<span class='blue'>"+value+"</span>";

}
function displayMoldCounterMeasure(cell, formatterParams){
    let value = cell.getValue();
    var rowData = cell.getRow().getData();
    let list = JSON.parse(localStorage.getItem(lsCounterMeasureList));

    if(rowData.h == '0'){
        return "";
    } else {
        if(value == "" || value == null|| value == "0"){
            return "";
        } else {
            var result = list.find(function(values) {
                return values.a === value;
            });
            
            return  result.b;
    
        }
    }
}
function displayInDatetime(cell, formatterParams){
    let value = cell.getValue();
    var rowData = cell.getRow().getData();
   
    if(rowData.h == '0'){
        return "";
    } else {
        return value;
    }
}
function displayInBy(cell, formatterParams){
    let value = cell.getValue();
    var rowData = cell.getRow().getData();
   
    if(rowData.h == '0'){
        return "";
    } else {
        return setUserFullName(value);
    }
}
function displayOutDatetime(cell, formatterParams){
    let value = cell.getValue();
    var rowData = cell.getRow().getData();
   
    if(rowData.h == '0'){
        return "";
    } else {
        return value;
    }
}
function displayOutBy(cell, formatterParams){
    let value = cell.getValue();
    var rowData = cell.getRow().getData();
   
    if(rowData.h == '0'){
        return "";
    } else {
        return setUserFullName(value);
    }
}
