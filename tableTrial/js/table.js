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
            // console.log(list);
            let listTrial = list.filter(item => item.x == '3' && item.z == "0");

            let listHistory = list.filter(item => (item.x == '3' && item.z == '2') || item.x == '4' || item.x == '6');
            // data.x == "4" && data.z != "1" && data.z != "2"
            console.log(listTrial);

            list.forEach(function (row) {
                row.TRIAL_DATETIME = row.r + " " + row.s;

            });

            table1 = new Tabulator("#table-records", {
                data: listTrial,
                layout: "fitDataFill", // Adjust table height based on the data
                pagination: "local",
                paginationSize: 25,
                paginationSizeSelector: [25, 50, 100],
                page: 1,
                selectableRows:true,
                /* groupBy: function(data) {
                    // Group "1", "2", and "4" together, and "3" separately
                    if (data.x == "3" && data.z == "0") {
                        return "FOR TRIAL";
                    } else if(data.x != "0" && data.x != "1" && data.x != "2"){
                        return "HISTORY";
                    }
                },
                groupStartOpen:function(value, count, data, group){
                
                    return value != "HISTORY";
                },
                groupHeader: function(value, count, data, group){

                    return value;
                },
                groupValues:[
                    ["FOR TRIAL","HISTORY"]
                ], */
                columns: [
                    {title: "RID", field: "a", visible: false, resizable:false},
                    {title: "RID", formatter: "rownum", },
                    {title: "PR #", field: "b", headerFilter: "input", resizable:false},
                    {title: "MOLD CTRL", field: "c", headerFilter: "input", resizable:false},
                    {title: "PART CODE", field: "MOLD_ITEM_CODE", headerFilter: "input", resizable: false, }, //formatter:displayMoldPartNo
                    {title: "MODEL", field: "MOLD_MODEL", headerFilter: "input",  resizable:false}, //formatter: displayMoldModel,
                    {title: "PART NAME", field: "MOLD_ITEM_NAME", headerFilter: "input",  resizable:false}, //formatter: displayMoldPartName
                    {title: "TOOL #", field: "c", formatter: displayMoldTool, resizable:false},
                    {title: "TYPE", field: "i", formatter: displayType, resizable:false},
                    {title: "DEFECT", field: "k", formatter: displayDefect, resizable:false},
                    {title: "DEFECT/LOCATION", field: "l", resizable:false},
                    {title: "REQUEST DATE", field: "d", resizable:false},
                    {title: "TARGET DATE", field: "g", resizable:false},
                    {title: "PIC", field: "t", formatter: displayPIC, resizable:false},
                    {title: "STATUS", field: "x", formatter: displayStatus2, resizable:false, frozen: true},
                ],
                
            });
            table1.on("rowClick", function(e, row) {
                // Get the row data for the clicked row
                var rowData = row.getData();

                if(rowData.x == "3" && rowData.z =="0"){
                    $("#hiddenRequestID").val(rowData.a)
                    $("#txtRequestRemarks").val(rowData.y)
                    $("#txtSearchMoldCtrl").val(rowData.c)
                    $("#containerUpdateStatus").show()
                    $("#txtMoldDisplayPartName").val(getDisplayMoldPartName(rowData.c));
                    $("#txtMoldDisplayPartCode").val(getDisplayMoldPartNo(rowData.c));
                    $("#txtMoldDisplayModel").val(getDisplayMoldModel(rowData.c));
                    $("#txtMoldDisplayTool").val(getDisplayMoldTool(rowData.c));

                    table1.deselectRow(); // Remove highlight from previously clicked row
                    row.select();        // Highlight the clicked row: .tabulator-row.tabulator-selected change color css
                }
            });


            table2 = new Tabulator("#table-history-records", {
                data: listHistory,
                layout: "fitDataFill",
                pagination: "local",
                paginationSize: 25,
                paginationSizeSelector: [25, 50, 100, 250], 
                page: 1,
                columns: [
                    {title: "RID", field: "a", visible: false, resizable:false},
                    {title: "RID", formatter: "rownum", },
                    {title: "PR #", field: "b", headerFilter: "input", resizable:false},
                    {title: "MOLD CTRL", field: "c", headerFilter: "input", resizable:false},
                    {title: "PART CODE", field: "MOLD_ITEM_CODE", headerFilter: "input", resizable: false, }, 
                    {title: "MODEL", field: "MOLD_MODEL", headerFilter: "input",  resizable:false}, 
                    {title: "PART NAME", field: "MOLD_ITEM_NAME", headerFilter: "input",  resizable:false}, 
                    {title: "TOOL #", field: "c", formatter: displayMoldTool, resizable:false},
                    // {title: "TYPE", field: "i", formatter: displayType, resizable:false},
                    // {title: "DEFECT", field: "k", formatter: displayDefect, resizable:false},
                    // {title: "DEFECT/LOCATION", field: "l", resizable:false},
                    // {title: "REQUEST DATE", field: "d", resizable:false},
                    // {title: "TARGET DATE", field: "g", resizable:false},
                    // {title: "TRIAL DATE", field: "r", resizable:false},
                    // {title: "TRIAL TIME", field: "s", resizable:false},
                    {title: "TRIAL DATETIME", field: "TRIAL_DATETIME", resizable:false},
                    {title: "PIC", field: "t", formatter: displayPIC, resizable:false},
                    {title: "STATUS", field: "x", formatter: displayStatus2, resizable:false, frozen: true},
                ],
                initialSort: [
                    {column: "TRIAL_DATETIME", dir: "desc"} // Sort by "id" column in ascending order
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



