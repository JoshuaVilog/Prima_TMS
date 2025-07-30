$(document).ready(function() {
    
    fetchDataAndInitializeTable()
});

var table1;
var table2;


function fetchDataAndInitializeTable() {

    $.ajax({
        url: "/"+rootFolder+'/getRecords/request_masterlist.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {
            console.log(list);
            let list1 = list.filter(item => (item.x == '0' || item.x == "1" || item.x == "2") && item.z == "0");
            
            // let list2 = list.filter(item => item.x != '0' && item.x != "1" && item.x != "2");
            let list2 = list.filter(item => item.x == "3" && item.z == "0");

            // console.log(list1);
            // console.log(list2);
            list.forEach(function (row) {
                row.ASSY_DATETIME = row.o + " " + row.p;

            });

            table1 = new Tabulator("#table-records", {
                data: list1,
                layout: "fitDataFill", // Adjust table height based on the data
                selectableRows:true,
                groupBy: function(data) {
                    
                    if (data.x == "1" && data.z == "0") {
                        return "FOR REPAIR";
                    } else if (data.x == "2" && data.z == "0") {
                        return "FOR PM";
                    } else if (data.x == "0" && data.z == "0") {
                        return "";
                    } else {
                        return "HISTORY";
                    }
                },
                /* groupStartOpen:function(value, count, data, group){
                
                    return value != "HISTORY";
                }, */
                groupHeader: function(value, count, data, group){

                    return value;
                },
                groupValues:[
                    // ["FOR REPAIR","FOR PM","", "HISTORY"]
                    ["FOR REPAIR","FOR PM",""]
                ],
                columns: [
                    {title: "RID", field: "a", visible: false, resizable:false},
                    {title: "PR #", field: "b", headerFilter: "input", resizable:false},
                    {title: "MOLD CTRL", field: "c", headerFilter: "input", resizable:false},
                    {title: "TYPE", field: "i", formatter: displayType, resizable:false},
                    {title: "PART CODE", field: "c", headerFilter: "input", resizable: false, formatter:displayMoldPartNo},
                    {title: "MODEL", field: "c", headerFilter: "input", formatter: displayMoldModel, resizable:false},
                    {title: "PART NAME", field: "c", headerFilter: "input", formatter: displayMoldPartName, resizable:false},
                    {title: "TOOL #", field: "c", formatter: displayMoldTool, resizable:false},
                    {title: "TARGET DATE", field: "g", resizable:false},
                    {title: "DEFECT", field: "k", formatter: displayDefect, resizable:false},
                    {title: "DEFECT LOCATION", field: "l", resizable:false},
                    {title: "PIC", field: "q", formatter: displayPIC, resizable:false},
                    {title: "STATUS", field: "x", formatter: displayStatus2, resizable:false, frozen: true},
                    // {title: "ACTION", field: "", formatter: formatterAction, frozen: true},
                    // {title: "CONTROL #", field: "b", headerFilter: "input", resizable:false},
                    // {title: "MACHINE NO", field: "j", formatter: displayMachineNo},
                    // {title: "RESULT", field: "l", formatter: displayTrialResult, resizable:false},
                    // {title: "CREATED_AT", field: "m"},
                    // {title: "REMARKS", field: "j"},
                    // {title: "PRIORITY", field: "i", formatter: displayPriority},
                ],
                
            });
            table1.on("rowClick", function(e, row) {
                // Get the row data for the clicked row
                var rowData = row.getData();

                if((rowData.x == "0" || rowData.x == "1" || rowData.x == "2") && rowData.z == "0"){
                    $("#hiddenRequestID").val(rowData.a)
                    $("#txtSearchMoldCtrl").val(rowData.c)
                    $("#containerUpdateStatus").show()
                    $("#txtMoldDisplayPartName").val(getDisplayMoldPartName(rowData.c));
                    $("#txtMoldDisplayPartCode").val(getDisplayMoldPartNo(rowData.c));
                    $("#txtMoldDisplayModel").val(getDisplayMoldModel(rowData.c));
                    $("#txtMoldDisplayTool").val(getDisplayMoldTool(rowData.c));
                    $("#txtDisplayType").val(setRequestType(rowData.i))
                    $("#txtRequestRemarks").val(rowData.y)

                    table1.deselectRow(); // Remove highlight from previously clicked row
                    row.select();        // Highlight the clicked row: .tabulator-row.tabulator-selected change color css
                }
                
            });


            table2 = new Tabulator("#table-history-records", {
                data: list2,
                layout: "fitDataFill",
                pagination: "local",
                paginationSize: 25,
                paginationSizeSelector: [25, 50, 100, 250], 
                page: 1,
                columns: [
                    {title: "RID", field: "a", visible: false, resizable:false},
                    // {title: "RID", formatter: "rownum", },
                    {title: "PR #", field: "b", headerFilter: "input", resizable:false},
                    {title: "MOLD CTRL", field: "c", headerFilter: "input", resizable:false},
                    {title: "PART CODE", field: "MOLD_ITEM_CODE", headerFilter: "input", resizable: false, }, 
                    {title: "MODEL", field: "MOLD_MODEL", headerFilter: "input",  resizable:false}, 
                    {title: "PART NAME", field: "MOLD_ITEM_NAME", headerFilter: "input",  resizable:false}, 
                    {title: "TOOL #", field: "c", formatter: displayMoldTool, resizable:false},
                    {title: "ASSY DATETIME", field: "ASSY_DATETIME", resizable:false},
                    {title: "PIC", field: "q", formatter: displayPIC, resizable:false},
                    {title: "REMARKS", field: "aa", resizable:false, },
                    {title: "STATUS", field: "x", formatter: displayStatus2, resizable:false, frozen: true},
                ],
                initialSort: [
                    {column: "ASSY_DATETIME", dir: "desc"} // Sort by "id" column in ascending order
                ]
                
            });


            

        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });
}




// YUNG FORMATTER DITO BAWAL ILAGAY SA MAIN JS CODE KASE DITO LANG TALAGA SIYA SA MODULE NA TO
function displayPIC(cell, formatterParams){
    let value = cell.getValue();
    var rowData = cell.getRow().getData();
   
    // if(rowData.h == '2'){
    //     return "";
    // } else {
    //     return setUserFullName(value);
    // }
    return setUserFullName(value);
}
function displayTrialResult(cell, formatterParams){
    let value = cell.getValue();
    var rowData = cell.getRow().getData();
   
    // if(rowData.h == '2'){
    //     return "";
    // } else {
    //     return setStatus4(value);
    // }
    return setStatus4(value);
}

function formatterAction(cell, formatterParams, onRendered) {
    var rowData = cell.getRow().getData();
    var id = rowData.a;

    let view = '<button class="btn btn-minier btn-info" onclick="viewMoldHistory(\''+id+'\')">View</button>';
    return view;
}



