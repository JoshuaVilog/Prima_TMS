
// displayTotalDashboard1()
$("#menuDashboard").addClass("active");

displayTotalDashboard2();
displayPriority();
getStatusToday();

let numRefresh = 0;

setInterval(function () {
    getDefectList();
    // getMoldMasterList();

    setTimeout(() => {
        displayTotalDashboard2();
        displayPriority();
        getStatusToday();
    }, 500);

    console.log(numRefresh);
    
    if(numRefresh > 100){
        window.location.href = "/"+rootFolder+"/dashboard/index.php";

    }
    numRefresh++;
}, 120000);
// 120000

function displayTotalDashboard2() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // let currentTime = `${hours}:${minutes}:${seconds}`;
    let currentTime = `${hours}:${minutes}`;
    console.log(`Current Time: `+ currentTime);

    $("#spanAsPer").text(currentTime)

    $.ajax({
        url: "/"+rootFolder+'/getRecords/request_masterlist.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {
            let statusList = JSON.parse(localStorage.getItem(lsStatus2List));

            // let countAllRepair = 0;
            
            
            let countMoldRepair = 0;
            let countForPM = 0;
            let countForRepair = 0;
            let countTrial = 0;
            let countQC = 0;
            let countAllRM = 0;
            let countOverAll = 0;

            // ANG MGA NASA LIST LANG AY 0 RESULT AND NOT MP STATUS AND NOT CANCEL STATUS AND (REPAIR TYPE OR PM TYPE)
            list = list.filter(item => item.z == "0" && item.x != "5" && item.x != "6" && (item.i == "1" || item.i == "3"));
            
            // console.log(list);
            list.forEach(function (row) {
                row.MOLD_MODEL = getDisplayMoldModel(row.c);
                row.MOLD_PART_NAME = getDisplayMoldPartName(row.c);
                row.MOLD_TOOL = getDisplayMoldTool(row.c);
                row.MOLD_PART_NO = getDisplayMoldPartNo(row.c);
                row.MOLD_CUSTOMER = getDisplayMoldCustomer(row.c);

                // //ISININGIT KO LANG YUNG CODE NA TO PARA IWAS SA MARAMING LOOP, LOOP DIN NAMAN KASE TO EH
                
                var selectedStatus = statusList.find(function(value) {
                    return value.a === row.x;
                });
                
                let status = selectedStatus.a;
                
                // console.log(status);
                if(row.z == "0"){
                    if(status == "3"){
                        //TRIAL
                        countTrial++;
                    }
                    if(status == "4"){
                        //QC
                        countQC++;
                    }
                    if(status == "1"){
                        countForRepair++;
                    }
                    if(status == "2"){
                        countForPM++;
                    }

                    countOverAll++; // COUNTS OVERALL (MEDYO NATAGALAN PA AKO SA PART NA PAGCOCODE NETO)
                } else {
                    if(status == "5"){
                        //MP
                        // countAllRM++;

                        // countOverAll++; // COUNTS OVERALL (MEDYO NATAGALAN PA AKO SA PART NA PAGCOCODE NETO)
                    }
                }

            });

            

            

            // $("#tdCountAllRM").text(countAllRM);
            // $("#tdCountAllRepair").text(countAllRepair);
            $("#tdCountForTrial").text(countTrial);
            $("#tdCountQC").text(countQC);
            $("#tdCountMoldRepair").text(countMoldRepair);
            $("#tdCountForPM").text(countForPM);
            $("#tdCountForRepair").text(countForRepair);
            $("#tdCountMP").text(countAllRM);
            // $("#tdTotalOverAll").text(countOverAll)
            $("#tdTotalOverAll").text(countOverAll)

            

            table = new Tabulator("#dashboard2-table1", {
                data: list,
                layout: "fitDataFill", // Adjust table height based on the data
                
                groupBy: function(data) {

                    if (data.i == "REPAIR") {
                        return "FOR REPAIR";
                    } else if (data.i == "PM") {
                        return "FOR PM";
                    } 
                    // else {
                    //     return "";
                    // }
                },
                groupHeader: function(value, count, data, group){

                    return value;
                },
                groupValues:[
                    // ["FOR REPAIR","FOR PM",""]
                    ["FOR REPAIR","FOR PM"]
                ],
                columns: [
                    {title: "RID", field: "a", visible: false, download: false},
                    {title: "#", field: "", formatter: "rownum", download: false},
                    {title: "TYPE", field: "i", headerFilter: "input", mutator:mutatorDisplayType},
                    {title: "STATUS", field: "x", mutator: mutatorDisplayStatus, formatter: displayHistoryStatus},
                    {title: "MODEL", field: "MOLD_MODEL", headerFilter: "input"},
                    {title: "PART NAME", field: "MOLD_PART_NAME", headerFilter: "input"},
                    {title: "TOOL", field: "MOLD_TOOL", headerFilter: "input"},
                    {title: "PART#", field: "MOLD_PART_NO", headerFilter: "input"},
                    {title: "LOCATION", field: "m", headerFilter: "input", mutator: mutatorDisplayLocation},
                    {title: "CUSTOMER", field: "MOLD_CUSTOMER", headerFilter: "input"},
                    // {title: "MAKER", field: "c", formatter: displayMoldMaker},
                    {title: "CONTROL #", field: "b", headerFilter: "input", formatter: displayControlNo},
                    {title: "MOLD CODE", field: "c", headerFilter: "input", formatter: displayMoldCode},
                    {title: "DEFECT", field: "k", mutator: mutatorDisplayDefect, headerFilter: "input"},
                    {title: "CAVITY", field: "m", headerFilter: "input"},
                    {title: "REQUEST DATE", field: "d", headerFilter: "input"},
                    {title: "TARGET DATE", field: "g", headerFilter: "input"},
                    {title: "TARGET TIME", field: "h", headerFilter: "input"},
                    // {title: "AGING", field: "a", formatter: displayAgingMold,},
                    // {title: "REMARKS", field: "y", headerFilter: "input"},
                    // {title: "CATEGORY", field: "f", formatter: displayCategory},
                    // {title: "PRIORITY", field: "i", frozen: true, formatter: displayPriority},
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
                    columnHeaders:true, //do not include column headers in downloaded table
                    columnGroups:false, //do not include column groups in column headers for downloaded table
                    rowGroups:false, //do not include row groups in downloaded table W
                    columnCalcs:false, //do not include column calcs in downloaded table
                    dataTree:false, //do not include data tree in downloaded table
                },
            });

        },
        error: function(error) {
            // alert('Error fetching data from the database.');
        }
    });
}
$("#btnExport").click(function(){
    table.download("xlsx", "Mold Repair Status.xlsx", { sheetName: "Sheet1" });
});



function getStatusToday(){

    $.ajax({
        url: 'ajax/getForRepairToday.php', // Replace with your server-side script URL
        type: 'POST',
        success: function(data) {
            
            // console.log(data);
            $("#tdCountForRepairToday").text(data)
        },
        error: function(error) {
            //alert('Error fetching data from the database.');
        }
    });
    $.ajax({
        url: 'ajax/getForPMToday.php', // Replace with your server-side script URL
        type: 'POST',
        success: function(data) {
            
            // console.log(data);
            $("#tdCountForPMToday").text(data)
            
        },
        error: function(error) {
            //alert('Error fetching data from the database.');
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
    // var selectedResult = resultList.find(function(value) {
    //     return value.a === rowData.z;
    // });

    let value = selectedStatus.a;
    // let result = "";
    // console.log(selectedResult);

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

// DISPLAY PRIORITY

function displayPriority(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/getLastPriority.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            // console.log(data);
           
            $("#tdTop1").text(data.b);
            $("#tdTop2").text(data.c);
            $("#tdTop3").text(data.d);
            $("#tdTop4").text(data.e);
            $("#tdTop5").text(data.f);
            $("#spanDisplayPriorityDatetime").text(data.g);

            $("#tdTop1").closest("tr").find(".tdPartCode").text(getDisplayMoldPartNo(data.b));
            $("#tdTop1").closest("tr").find(".tdPartName").text(getDisplayMoldPartName(data.b));
            $("#tdTop1").closest("tr").find(".tdTool").text(getDisplayMoldTool(data.b));

            $("#tdTop2").closest("tr").find(".tdPartCode").text(getDisplayMoldPartNo(data.c));
            $("#tdTop2").closest("tr").find(".tdPartName").text(getDisplayMoldPartName(data.c));
            $("#tdTop2").closest("tr").find(".tdTool").text(getDisplayMoldTool(data.c));

            $("#tdTop3").closest("tr").find(".tdPartCode").text(getDisplayMoldPartNo(data.d));
            $("#tdTop3").closest("tr").find(".tdPartName").text(getDisplayMoldPartName(data.d));
            $("#tdTop3").closest("tr").find(".tdTool").text(getDisplayMoldTool(data.d));

            $("#tdTop4").closest("tr").find(".tdPartCode").text(getDisplayMoldPartNo(data.e));
            $("#tdTop4").closest("tr").find(".tdPartName").text(getDisplayMoldPartName(data.e));
            $("#tdTop4").closest("tr").find(".tdTool").text(getDisplayMoldTool(data.e));

            $("#tdTop5").closest("tr").find(".tdPartCode").text(getDisplayMoldPartNo(data.f));
            $("#tdTop5").closest("tr").find(".tdPartName").text(getDisplayMoldPartName(data.f));
            $("#tdTop5").closest("tr").find(".tdTool").text(getDisplayMoldTool(data.f));

            /* setTimeout(() => {
                
                $(".tdPartCode").css("word-wrap", "break-word");
                $(".tdPartCode").css("word-break", "break-all");

                $(".tdPartName").css("word-wrap", "break-word");
                $(".tdPartName").css("word-break", "break-all");

                $(".tdTool").css("word-wrap", "break-word");
                $(".tdTool").css("word-break", "break-all");
                
            }, 1000); */
            

            
        },
        error: function(error) {
            // alert('Error fetching data from the database.');
        }
    });
}



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

function displayControlNo(cell, formatterParams){
    let value = cell.getValue();
   
    return  "<span class='blue'>"+value+"</span>";

}
function displayMoldCode(cell, formatterParams){
    let value = cell.getValue();
   
    return  "<span class='blue'>"+value+"</span>";

}
function displayDashboardStatus(cell, formatterParams){
    let rowData = cell.getValue();
    var list = JSON.parse(localStorage.getItem(lsStatus2List));
    let value = "";

    var result = list.find(function(value) {
        return value.b === rowData;
    });

    value = result.a;


    if(value == "" || value == null){
        return "";
    } else {

        if(value == "0"){
            cell.getElement().style.backgroundColor = "#1589FF";
        } else if(value == "1"){
            cell.getElement().style.backgroundColor = "#B666D2";
        } else if(value == "2"){
            cell.getElement().style.backgroundColor = "#FFA600";
        } else if(value == "3"){
            cell.getElement().style.backgroundColor = "#FFE87C";
        }
        
        return rowData;

    }
}











/* 

function displayTotalDashboard1(){
    

    $.ajax({
        url: "/"+rootFolder+'/getRecords/request_masterlist.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {
    
            console.log(list);

            let count0 = 0;
            let count1 = 0;
            let count2 = 0;
            let count3 = 0;
            let count4 = 0;
            let count5 = 0;

            const datePhils = new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' });
            const year = new Date(datePhils).getFullYear();
            const month = String(new Date(datePhils).getMonth() + 1).padStart(2, '0'); // Adding 1 to month as it is zero-based
            const day = String(new Date(datePhils).getDate()).padStart(2, '0');
            const currentDate = `${year}-${month}-${day}`;

            for(let index = 0; index < list.length; index++){
                if(list[index].h == "0"){
                    
                    count0++;
                }
                if(list[index].h == "1"){
                    //MOLD
                    count1++;
                }
                if(list[index].h == "2"){
                    //TRIAL
                    count2++;
                }
                if(list[index].h == "3"){
                    //QC INSPECTION
                    count3++;
                }
                if(list[index].h == "4"){
                    //MP
                    count4++;
                }

                let targetDate = list[index].d;

                if (targetDate < currentDate && list[index].h !== "4") {
                    count5++;
                }



            }

            $("#dashboard1Count1").text(list.length); // TOTAL
            $("#dashboard1Count2").text(count1); // MOLD ASSY
            $("#dashboard1Count3").text(count2); // TRIAL
            $("#dashboard1Count4").text(count3); // QC
            $("#dashboard1Count5").text(count4); // MP
            $("#dashboard1Count6").text(count5); // Pending
            $("#dashboard1Count7").text(count0); // QUEUE
    
        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });
}
 */


