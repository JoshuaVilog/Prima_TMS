


$(document).ready(function() {
    fetchDataAndInitializeTable()
});

var table;

async function fetchDataAndInitializeTable() {

    $.ajax({
        url: "/"+rootFolder+'/getRecords/request_masterlist.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {
            console.log(list);
            $("#hTotalRequest").text(list.length);

            table = new Tabulator("#table-records", {
                layout: "fitDataFill",
                data: list,
                pagination: "local", // Enable local pagination
                paginationSize: 100,
                paginationSizeSelector: [50, 100, 250], // Page size options
                page: 1, // Initial page number
                groupBy: function(data) {

                    return data.GROUP_DATE;
                },
                groupStartOpen:true,
                /* groupStartOpen: function(value){
                    var currentDate = new Date();
                    let year = currentDate.getFullYear();
                    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
                    // let day = currentDate.getDate().toString().padStart(2, '0');
                    
                    return (`${year}-${month}` == value)? true: false;
                }, */
                columns: [
                    {title: "#", field: "", formatter: "rownum"},
                    {title: "RID", field: "a", visible: false},
                    {title: "PR NO", field: "b", headerFilter: "input"},
                    {title: "MOLD CTRL", field: "c", headerFilter: "input"},
                    {title: "MODEL", field: "MOLD_MODEL", headerFilter: "input"},
                    {title: "PART NAME", field: "MOLD_ITEM_NAME", headerFilter: "input"},
                    {title: "ITEM CODE", field: "MOLD_ITEM_CODE", headerFilter: "input"},
                    {title: "TOOL", field: "MOLD_MARK", headerFilter: "input"},
                    {title: "CUSTOMER", field: "MOLD_CUSTOMER", headerFilter: "input"},
                    {title: "LOCATION", field: "m", headerFilter: "input", mutator: 3},
                    {title: "CAVITY", field: "l", headerFilter: "input"},
                    {title: "REQUEST DATE", field: "d", headerFilter: "input"},
                    {title: "TARGET DATE", field: "g", headerFilter: "input"},
                    {title: "TYPE", field: "i", mutator:mutatorDisplayType, headerFilter: "input"},
                    //{title: "DEFECT", field: "k", mutator: mutatorDisplayDefect, headerFilter: "input"},
            
                    {
                        title:"MOLD ASSY",
                        hozAlign:"center",
                        columns:[
                            // {title: "PIC", field: "q", mutator: mutatorDisplayUser, headerFilter: "input"},
                            {title: "PIC", field: "q", mutator: function(value){
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
                            }, headerFilter: "input"},
                            {title: "DATE", field: "o", headerFilter: "input"},
                            {title: "TIME", field: "p", headerFilter: "input"},
                        ],
                    },
                    {
                        title:"TRIAL",
                        hozAlign:"center",
                        columns:[
                            // {title: "PIC", field: "t", mutator: mutatorDisplayUser, headerFilter: "input"},
                            {title: "PIC", field: "t", mutator: function(value){
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
                            }, headerFilter: "input"},
                            {title: "DATE", field: "r", headerFilter: "input"},
                            {title: "TIME", field: "s", headerFilter: "input"},
                        ],
                    },
                    {
                        title:"QC",
                        hozAlign:"center",
                        columns:[
                            {title: "PIC", field: "w", mutator: mutatorDisplayUser, headerFilter: "input"},
                            {title: "DATE", field: "u", headerFilter: "input"},
                            {title: "TIME", field: "v", headerFilter: "input"},
                        ],
                    },
                    {title: "REMARKS", field: "y", headerFilter: "input",},
                    {title: "STATUS", field: "x", formatter: displayHistoryStatus, mutator: mutatorDisplayStatus,  headerFilter: "input", frozen: true},
                    {title: "RESULT", field: "z", formatter: displayHistoryResult, mutator: mutatorDisplayResult, headerFilter: "input", frozen: true},
                ],
                downloadConfig: {
                    csv: true, // Enable CSV export
                    excel: true, // Enable Excel export
                    json: true, // Enable JSON export
                    pdf: true, // Enable PDF export
                    columnHeaders:true, //do not include column headers in downloaded table
                    // columnGroups:false, //do not include column groups in column headers for downloaded table
                    rowGroups:false, //do not include row groups in downloaded table W
                    columnCalcs:false, //do not include column calcs in downloaded table
                    dataTree:false, //do not include data tree in downloaded table
                },
            });

            $("#spinner").hide();

            /* 
            list.forEach(function (row) {
                row.MOLD_MODEL = getDisplayMoldModel(row.c);
                row.MOLD_PART_NAME = getDisplayMoldPartName(row.c);
                row.MOLD_TOOL = getDisplayMoldTool(row.c);
                row.MOLD_PART_NO = getDisplayMoldPartNo(row.c);
                row.MOLD_CUSTOMER = getDisplayMoldCustomer(row.c);

            });

            let dateList = [];

            
            table.setData(list);
            table.setGroupStartOpen(function(value){
                var currentDate = new Date();
                let year = currentDate.getFullYear();
                let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
                // let day = currentDate.getDate().toString().padStart(2, '0');
                
                return (`${year}-${month}` == value)? true: false;
            });

            table.setGroupBy(function(data){
            
                var date = new Date(data.d);
                var month = date.getMonth() + 1; // Months are zero-based in JS
                var year = date.getFullYear();
        
                let getDate = year + "-" + (month < 10 ? "0" + month : month)
                let isSame = false;
                for(let index = 0; index < dateList.length; index++){
                    if(dateList[index] == getDate){
                        isSame = true;
                        break;
                    }
                }
                if(isSame != true){
                    dateList.push(getDate);
                }
                // console.log(isSame);
                return year + "-" + (month < 10 ? "0" + month : month); // Format as YYYY-MM
            });

            dateList.sort((a, b) => b.localeCompare(a));

            table.setGroupValues([dateList]);
             */
        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });
}

function displayHistoryStatus(cell, formatterParams, onRendered){
    let id = cell.getValue();
    var rowData = cell.getRow().getData();
    let statusList = JSON.parse(localStorage.getItem(lsStatus2List));
    let resultList = JSON.parse(localStorage.getItem(lsResultList));

    
    var selectedStatus = statusList.find(function(value) {
        return value.b === id;
    });
    var selectedResult = resultList.find(function(value) {
        return value.b === rowData.z;
    });

    let value = selectedStatus.a;
    let result = selectedResult.a;

    if(value == "" || value == null){
        cell.getElement().style.backgroundColor = "#FFFFFF";
        return "";
    } else {

        if(result == "2"){
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
function displayHistoryResult(cell, formatterParams, onRendered){
    let id = cell.getValue();
    var rowData = cell.getRow().getData();
    let resultList = JSON.parse(localStorage.getItem(lsResultList));

    if(id == "" || id == null){
        cell.getElement().style.backgroundColor = "#FFFFFF";
        return "";
    } else {
        var result = resultList.find(function(value) {
            return value.b === id;
        });

        id = result.a;

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




// function formatterAction(cell, formatterParams, onRendered) {
//     var rowData = cell.getRow().getData();
//     var id = rowData.a;

//     let view = '<button class="btn btn-sm btn-info" onclick="viewMoldHistory(\''+id+'\')">View Report</button>';
//     return view;
// }
$("#btnExport").click(function(){
    table.download("xlsx", "Mold History.xlsx", { sheetName: "Sheet1" });
});

