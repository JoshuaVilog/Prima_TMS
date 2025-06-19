
// displayTotalDashboard1()
$("#menuDashboard3").addClass("active");

displayDashboard()

// setInterval(function () {
//     displayDashboard()
    
// }, 120000);


function displayDashboard(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/request_masterlist2.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {
            
            // ANG MGA NASA LIST LANG AY 0 RESULT AND NOT MP STATUS AND NOT CANCEL STATUS AND (REPAIR TYPE OR PM TYPE)
            list = list.filter(item => item.f == "0" && item.c != "5" && item.c != "6" && (item.b == "1" || item.b == "3"));

            console.log(list);

            let totalAllStatusRepair = 0;
            let totalAllStatusPM = 0;
            let totalAll = 0;

            let totalRepair0 = 0;
            let totalRepair1 = 0;
            let totalRepair2 = 0;
            let totalRepair3 = 0;

            let totalPM0 = 0;
            let totalPM1 = 0;
            let totalPM2 = 0;
            let totalPM3 = 0;

            // C1 => EPSON
            // C2 => LSE
            // C3 => MPU
            // C4 => SERCOMM
            // C5 => OTHERS
            let totalStatus0C1 = 0;
            let totalStatus0C2 = 0;
            let totalStatus0C3 = 0;
            let totalStatus0C4 = 0;
            let totalStatus0C5 = 0;

            let totalStatus1C1 = 0;
            let totalStatus1C2 = 0;
            let totalStatus1C3 = 0;
            let totalStatus1C4 = 0;
            let totalStatus1C5 = 0;

            let totalStatus2C1 = 0;
            let totalStatus2C2 = 0;
            let totalStatus2C3 = 0;
            let totalStatus2C4 = 0;
            let totalStatus2C5 = 0;

            let totalStatus3C1 = 0;
            let totalStatus3C2 = 0;
            let totalStatus3C3 = 0;
            let totalStatus3C4 = 0;
            let totalStatus3C5 = 0;
            
            let totalPMStatus0C1 = 0;
            let totalPMStatus0C2 = 0;
            let totalPMStatus0C3 = 0;
            let totalPMStatus0C4 = 0;
            let totalPMStatus0C5 = 0;

            let totalPMStatus1C1 = 0;
            let totalPMStatus1C2 = 0;
            let totalPMStatus1C3 = 0;
            let totalPMStatus1C4 = 0;
            let totalPMStatus1C5 = 0;

            let totalPMStatus2C1 = 0;
            let totalPMStatus2C2 = 0;
            let totalPMStatus2C3 = 0;
            let totalPMStatus2C4 = 0;
            let totalPMStatus2C5 = 0;

            let totalPMStatus3C1 = 0;
            let totalPMStatus3C2 = 0;
            let totalPMStatus3C3 = 0;
            let totalPMStatus3C4 = 0;
            let totalPMStatus3C5 = 0;

            let subTotalRepairC1 = 0;
            let subTotalRepairC2 = 0;
            let subTotalRepairC3 = 0;
            let subTotalRepairC4 = 0;
            let subTotalRepairC5 = 0;

            let subTotalPmC1 = 0;
            let subTotalPmC2 = 0;
            let subTotalPmC3 = 0;
            let subTotalPmC4 = 0;
            let subTotalPmC5 = 0;

            let totalC1 = 0;
            let totalC2 = 0;
            let totalC3 = 0;
            let totalC4 = 0;
            let totalC5 = 0;

            // Location
            let totalLocationRepairP1 = 0;
            let totalLocationRepairP3 = 0;
            let totalLocationRepairNA = 0;

            let totalLocationPMP1 = 0;
            let totalLocationPMP3 = 0;
            let totalLocationPMNA = 0;

            let totalLocationP1 = 0;
            let totalLocationP3 = 0;
            let totalLocationNA = 0;
            let totalLocationAll = 0;

            

            for(let index = 0; index < list.length; index++){
                // let status = "";
                // let 

                if(list[index].f == 0){
                    if(list[index].b == "1"){
                        // IF REPAIR
    
                        if(list[index].c == "1"){
                            // MOLD ASSY
    
                            if(list[index].d == "EPSON"){
                                totalStatus0C1++;
                            } else if(list[index].d == "LSE"){
                                totalStatus0C2++;
                            } else if(list[index].d == "PANASONIC MPU"){
                                totalStatus0C3++;
                            } else if(list[index].d == "SERCOMM"){
                                totalStatus0C4++;
                            } else {
                                totalStatus0C5++;
                            }
    
                            totalRepair0++;
                        } else if(list[index].c == "1"){
                            // ON GOING REPAIR
    
                            // if(list[index].d == "EPSON"){
                            //     totalStatus1C1++;
                            // } else if(list[index].d == "LSE"){
                            //     totalStatus1C2++;
                            // } else if(list[index].d == "PANASONIC MPU"){
                            //     totalStatus1C3++;
                            // } else if(list[index].d == "SERCOMM"){
                            //     totalStatus1C4++;
                            // } else {
                            //     totalStatus1C5++;
                            // }
    
                            // totalRepair1++;
                        } else if(list[index].c == "3"){
                            //TRIAL
    
                            if(list[index].d == "EPSON"){
                                totalStatus2C1++;
                            } else if(list[index].d == "LSE"){
                                totalStatus2C2++;
                            } else if(list[index].d == "PANASONIC MPU"){
                                totalStatus2C3++;
                            } else if(list[index].d == "SERCOMM"){
                                totalStatus2C4++;
                            } else {
                                totalStatus2C5++;
                            }
                            
                            totalRepair2++;
                        } else if(list[index].c == "4"){
                            //QC
    
                            if(list[index].d == "EPSON"){
                                totalStatus3C1++;
                            } else if(list[index].d == "LSE"){
                                totalStatus3C2++;
                            } else if(list[index].d == "PANASONIC MPU"){
                                totalStatus3C3++;
                            } else if(list[index].d == "SERCOMM"){
                                totalStatus3C4++;
                            } else {
                                totalStatus3C5++;
                            }
                            
                            totalRepair3++;
                        }
    
                        // LOCATION
                        //TOTAL ALL REPAIR
                        if(list[index].c != "5"){
                            // IF NOT MP
    
                            totalAllStatusRepair++;
    
                            if(list[index].e == "1"){
                                //P3
                                totalLocationRepairP3++;
                            } else if(list[index].e == "2"){
                                //P1
                                totalLocationRepairP1++;
                            } else {
                                totalLocationRepairNA++;
                            }
                        }
                        
                    } else if(list[index].b == "3"){
                        // IF PM
    
                        if(list[index].c == "2"){
                            // MOLD ASSY
    
                            if(list[index].d == "EPSON"){
                                totalPMStatus0C1++;
                            } else if(list[index].d == "LSE"){
                                totalPMStatus0C2++;
                            } else if(list[index].d == "PANASONIC MPU"){
                                totalPMStatus0C3++;
                            } else if(list[index].d == "SERCOMM"){
                                totalPMStatus0C4++;
                            } else {
                                totalPMStatus0C5++;
                            }
    
                            totalPM0++;
                        } else if(list[index].c == "1"){
                            //ON GOING REPAIR
    
                            // if(list[index].d == "EPSON"){
                            //     totalPMStatus1C1++;
                            // } else if(list[index].d == "LSE"){
                            //     totalPMStatus1C2++;
                            // } else if(list[index].d == "PANASONIC MPU"){
                            //     totalPMStatus1C3++;
                            // } else if(list[index].d == "SERCOMM"){
                            //     totalPMStatus1C4++;
                            // } else {
                            //     totalPMStatus1C5++;
                            // }
    
                            // totalPM1++;
                        } else if(list[index].c == "3"){
                            // TRIAL
    
                            if(list[index].d == "EPSON"){
                                totalPMStatus2C1++;
                            } else if(list[index].d == "LSE"){
                                totalPMStatus2C2++;
                            } else if(list[index].d == "PANASONIC MPU"){
                                totalPMStatus2C3++;
                            } else if(list[index].d == "SERCOMM"){
                                totalPMStatus2C4++;
                            } else {
                                totalPMStatus2C5++;
                            }
                            
                            totalPM2++;
                        } else if(list[index].c == "4"){
                            // QC
    
                            if(list[index].d == "EPSON"){
                                totalPMStatus3C1++;
                            } else if(list[index].d == "LSE"){
                                totalPMStatus3C2++;
                            } else if(list[index].d == "PANASONIC MPU"){
                                totalPMStatus3C3++;
                            } else if(list[index].d == "SERCOMM"){
                                totalPMStatus3C4++;
                            } else {
                                totalPMStatus3C5++;
                            }
                            
                            totalPM3++;
                        }
    

                        //TOTAL ALL PM
                        if(list[index].c != "5"){
                            totalAllStatusPM++
    
                            if(list[index].e == "1"){
                                //P3
                                totalLocationPMP3++;
                            } else if(list[index].e == "2"){
                                //P1
                                totalLocationPMP1++;
                            } else {
                                totalLocationPMNA++;
                            }
                        }
    
                    }
                }
            }
            let totalOverAll = totalAllStatusRepair + totalAllStatusPM;
            $("#tdTotalOverall").text(totalOverAll ? totalOverAll :"");
            $("#tdTotalAllStatusRepair").text(totalAllStatusRepair ? totalAllStatusRepair :"");
            $("#tdTotalAllStatusPM").text(totalAllStatusPM ? totalAllStatusPM :"");

            $("#tdTotalRepair0").text(totalRepair0 ? totalRepair0 :"");
            $("#tdTotalRepair1").text(totalRepair1 ? totalRepair1 :"");
            $("#tdTotalRepair2").text(totalRepair2 ? totalRepair2 :"");
            $("#tdTotalRepair3").text(totalRepair3 ? totalRepair3 :"");

            $("#tdTotalPM0").text(totalPM0 ? totalPM0 :"");
            $("#tdTotalPM1").text(totalPM1 ? totalPM1 :"");
            $("#tdTotalPM2").text(totalPM2 ? totalPM2 :"");
            $("#tdTotalPM3").text(totalPM3 ? totalPM3 :"");

            // REPAIR || CUSTOMER TOTAL
            $("#totalStatus0C1").text(totalStatus0C1 ? totalStatus0C1 :"");
            $("#totalStatus0C2").text(totalStatus0C2 ? totalStatus0C2 :"");
            $("#totalStatus0C3").text(totalStatus0C3 ? totalStatus0C3 :"");
            $("#totalStatus0C4").text(totalStatus0C4 ? totalStatus0C4 :"");
            $("#totalStatus0C5").text(totalStatus0C5 ? totalStatus0C5 :"");

            $("#totalStatus1C1").text(totalStatus1C1 ? totalStatus1C1 :"");
            $("#totalStatus1C2").text(totalStatus1C2 ? totalStatus1C2 :"");
            $("#totalStatus1C3").text(totalStatus1C3 ? totalStatus1C3 :"");
            $("#totalStatus1C4").text(totalStatus1C4 ? totalStatus1C4 :"");
            $("#totalStatus1C5").text(totalStatus1C5 ? totalStatus1C5 :"");

            $("#totalStatus2C1").text(totalStatus2C1 ? totalStatus2C1 :"");
            $("#totalStatus2C2").text(totalStatus2C2 ? totalStatus2C2 :"");
            $("#totalStatus2C3").text(totalStatus2C3 ? totalStatus2C3 :"");
            $("#totalStatus2C4").text(totalStatus2C4 ? totalStatus2C4 :"");
            $("#totalStatus2C5").text(totalStatus2C5 ? totalStatus2C5 :"");

            $("#totalStatus3C1").text(totalStatus3C1 ? totalStatus3C1 :"");
            $("#totalStatus3C2").text(totalStatus3C2 ? totalStatus3C2 :"");
            $("#totalStatus3C3").text(totalStatus3C3 ? totalStatus3C3 :"");
            $("#totalStatus3C4").text(totalStatus3C4 ? totalStatus3C4 :"");
            $("#totalStatus3C5").text(totalStatus3C5 ? totalStatus3C5 :"");


            // PM || CUSTOMER TOTAL

            $("#totalPMStatus0C1").text(totalPMStatus0C1 ? totalPMStatus0C1 :"");
            $("#totalPMStatus0C2").text(totalPMStatus0C2 ? totalPMStatus0C2 :"");
            $("#totalPMStatus0C3").text(totalPMStatus0C3 ? totalPMStatus0C3 :"");
            $("#totalPMStatus0C4").text(totalPMStatus0C4 ? totalPMStatus0C4 :"");
            $("#totalPMStatus0C5").text(totalPMStatus0C5 ? totalPMStatus0C5 :"");

            $("#totalPMStatus1C1").text(totalPMStatus1C1 ? totalPMStatus1C1 :"");
            $("#totalPMStatus1C2").text(totalPMStatus1C2 ? totalPMStatus1C2 :"");
            $("#totalPMStatus1C3").text(totalPMStatus1C3 ? totalPMStatus1C3 :"");
            $("#totalPMStatus1C4").text(totalPMStatus1C4 ? totalPMStatus1C4 :"");
            $("#totalPMStatus1C5").text(totalPMStatus1C5 ? totalPMStatus1C5 :"");

            $("#totalPMStatus2C1").text(totalPMStatus2C1 ? totalPMStatus2C1 :"");
            $("#totalPMStatus2C2").text(totalPMStatus2C2 ? totalPMStatus2C2 :"");
            $("#totalPMStatus2C3").text(totalPMStatus2C3 ? totalPMStatus2C3 :"");
            $("#totalPMStatus2C4").text(totalPMStatus2C4 ? totalPMStatus2C4 :"");
            $("#totalPMStatus2C5").text(totalPMStatus2C5 ? totalPMStatus2C5 :"");

            $("#totalPMStatus3C1").text(totalPMStatus3C1 ? totalPMStatus3C1 :"");
            $("#totalPMStatus3C2").text(totalPMStatus3C2 ? totalPMStatus3C2 :"");
            $("#totalPMStatus3C3").text(totalPMStatus3C3 ? totalPMStatus3C3 :"");
            $("#totalPMStatus3C4").text(totalPMStatus3C4 ? totalPMStatus3C4 :"");
            $("#totalPMStatus3C5").text(totalPMStatus3C5 ? totalPMStatus3C5 :"");

            // SUBTOTALS
            subTotalRepairC1 = totalStatus0C1 + totalStatus1C1 + totalStatus2C1 + totalStatus3C1;
            subTotalRepairC2 = totalStatus0C2 + totalStatus1C2 + totalStatus2C2 + totalStatus3C2;
            subTotalRepairC3 = totalStatus0C3 + totalStatus1C3 + totalStatus2C3 + totalStatus3C3;
            subTotalRepairC4 = totalStatus0C4 + totalStatus1C4 + totalStatus2C4 + totalStatus3C4;
            subTotalRepairC5 = totalStatus0C5 + totalStatus1C5 + totalStatus2C5 + totalStatus3C5;

            subTotalPmC1 = totalPMStatus0C1 + totalPMStatus1C1 + totalPMStatus2C1 + totalPMStatus3C1;
            subTotalPmC2 = totalPMStatus0C2 + totalPMStatus1C2 + totalPMStatus2C2 + totalPMStatus3C2;
            subTotalPmC3 = totalPMStatus0C3 + totalPMStatus1C3 + totalPMStatus2C3 + totalPMStatus3C3;
            subTotalPmC4 = totalPMStatus0C4 + totalPMStatus1C4 + totalPMStatus2C4 + totalPMStatus3C4;
            subTotalPmC5 = totalPMStatus0C5 + totalPMStatus1C5 + totalPMStatus2C5 + totalPMStatus3C5;

            $("#tdSubtotalRepairC1").text(subTotalRepairC1 ? subTotalRepairC1 :"");
            $("#tdSubtotalRepairC2").text(subTotalRepairC2 ? subTotalRepairC2 :"");
            $("#tdSubtotalRepairC3").text(subTotalRepairC3 ? subTotalRepairC3 :"");
            $("#tdSubtotalRepairC4").text(subTotalRepairC4 ? subTotalRepairC4 :"");
            $("#tdSubtotalRepairC5").text(subTotalRepairC5 ? subTotalRepairC5 :"");

            $("#tdSubtotalPmC1").text(subTotalPmC1 ? subTotalPmC1 :"");
            $("#tdSubtotalPmC2").text(subTotalPmC2 ? subTotalPmC2 :"");
            $("#tdSubtotalPmC3").text(subTotalPmC3 ? subTotalPmC3 :"");
            $("#tdSubtotalPmC4").text(subTotalPmC4 ? subTotalPmC4 :"");
            $("#tdSubtotalPmC5").text(subTotalPmC5 ? subTotalPmC5 :"");

            // TOTAL
            totalC1 = subTotalRepairC1 + subTotalPmC1;
            totalC2 = subTotalRepairC2 + subTotalPmC2;
            totalC3 = subTotalRepairC3 + subTotalPmC3;
            totalC4 = subTotalRepairC4 + subTotalPmC4;
            totalC5 = subTotalRepairC5 + subTotalPmC5;

            $("#tdTotalC1").text(totalC1 ? totalC1 :"");
            $("#tdTotalC2").text(totalC2 ? totalC2:"");
            $("#tdTotalC3").text(totalC3 ? totalC3:"");
            $("#tdTotalC4").text(totalC4 ? totalC4:"");
            $("#tdTotalC5").text(totalC5 ? totalC5:""); 

            // Location
            totalLocationP1 = totalLocationRepairP1 + totalLocationPMP1;
            totalLocationP3 = totalLocationRepairP3 + totalLocationPMP3;
            totalLocationNA = totalLocationRepairNA + totalLocationPMNA;
            totalLocationAll = totalLocationP1 + totalLocationP3 + totalLocationNA;

            $("#totalLocationP3").text(totalLocationP3 ? totalLocationP3:"");
            $("#totalLocationP1").text(totalLocationP1 ? totalLocationP1:"");
            $("#totalLocationNA").text(totalLocationNA ? totalLocationNA:"");
            $("#totalLocationAll").text(totalLocationAll ? totalLocationAll:"");


        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });
}
///////////////////

var table = new Tabulator("#table-records", {
    layout: "fitDataFill",
    columns: [
        {title: "RID", field: "a", visible: false},
        // {title: "NO", field: "", formatter: "rownum"},
        {title: "PR NO", field: "b", headerFilter: "input"},
        {title: "MOLD CTRL", field: "c", headerFilter: "input"},
        {title: "MODEL", field: "MOLD_MODEL", headerFilter: "input"},
        {title: "PART NAME", field: "MOLD_PART_NAME", headerFilter: "input"},
        {title: "ITEM CODE", field: "MOLD_PART_NO", headerFilter: "input"},
        {title: "TOOL", field: "MOLD_TOOL", headerFilter: "input"},
        {title: "CUSTOMER", field: "MOLD_CUSTOMER", headerFilter: "input"},
    ],
});

$(".hiddenCustomer1").val("EPSON");
$(".hiddenCustomer2").val("LSE");
$(".hiddenCustomer3").val("PANASONIC MPU");
$(".hiddenCustomer4").val("SERCOMM");
$(".hiddenCustomer5").val("OTHER");
$(".hiddenTypeRepair").val("1");
$(".hiddenTypePM").val("3");

$("#tableDashboard1").on("click", "span", function(){
    let value = $(this).text();
    let customer = $(this).closest("td").find(".hiddenCustomer").val();
    let status = $(this).closest("tr").find(".hiddenStatus").val();
    let type = $(this).closest("tr").find(".hiddenType").val();

    
    $("#spanDisplayCustomer").text(customer);

    if(status != "OTHER"){
        if(status == "SUBTOTAL"){
            

            $("#spanDisplayStatus").text("OVERALL");
            $("#spanDisplayType").text(setRequestType(type));
        } else if(status == "OVERALLTOTAL"){
            $("#spanDisplayType").text("OVERALL");
            
        } else {
            $("#spanDisplayStatus").text(setStatus2(status));
            $("#spanDisplayType").text(setRequestType(type));
        }
        // alert(customer +" "+status);
        
        $.ajax({
            url: "/"+rootFolder+'/getRecords/request_masterlist3.php',
            type: 'POST',
            data:{
                customer: customer,
                status: status,
                type: type,
            },
            // dataType: 'json',
            success: function(list) {
                // console.log(list);

                list.forEach(function (row) {
                    row.MOLD_MODEL = getDisplayMoldModel(row.c);
                    row.MOLD_PART_NAME = getDisplayMoldPartName(row.c);
                    row.MOLD_TOOL = getDisplayMoldTool(row.c);
                    row.MOLD_PART_NO = getDisplayMoldPartNo(row.c);
                    row.MOLD_CUSTOMER = getDisplayMoldCustomer(row.c);
    
                });

                table.setData(list);
            },
            error: function(error) {
                alert('Error fetching data from the database.');
            }
        });

    }
    
    

});


















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

            let countAllRM = 0;
            let countAllRepair = 0;

            let countMoldRepair = 0;
            let countTrial = 0;
            let countQC = 0;

            list.forEach(function (row) {
                row.MOLD_MODEL = getDisplayMoldModel(row.c);
                row.MOLD_PART_NAME = getDisplayMoldPartName(row.c);
                row.MOLD_TOOL = getDisplayMoldTool(row.c);
                row.MOLD_PART_NO = getDisplayMoldPartNo(row.c);
                row.MOLD_LOCATION = getDisplayMoldLocation(row.c);
                row.MOLD_CUSTOMER = getDisplayMoldCustomer(row.c);

                //ISININGIT KO LANG YUNG CODE NA TO PARA IWAS SA MARAMING LOOP, LOOP DIN NAMAN KASE TO EH
                if(row.h == "4"){
                    //MP
                    countAllRM++;
                }
                if(row.h == "2"){
                    //TRIAL
                    countTrial++;
                }
                if(row.h == "3"){
                    //QC
                    countQC++;
                }
                if(row.h == "0" || row.h == "1"){
                    //QC
                    countMoldRepair++;
                }
                if(row.e == "1"){
                    countAllRepair++;
                }

            });

            list = list.filter(item => item.h !== "4");

            $("#tdCountAllRM").text(countAllRM);
            $("#tdCountAllRepair").text(countAllRepair);
            $("#tdCountForTrial").text(countTrial);
            $("#tdCountQC").text(countQC);
            $("#tdCountMoldRepair").text(countMoldRepair);
            $("#tdCountMP").text(countAllRM);
            $("#tdTotalOverAll").text(list.length)

            table = new Tabulator("#dashboard2-table1", {
                data: list,
                layout: "fitDataFill", // Adjust table height based on the data
                
                groupBy: function(data){
                    //data - the data object for the row being grouped
                
                    return data.e;
                },
                groupValues:[
                    ["REPAIR", "PM", ""],
                ],
                groupHeader: function(value, count, data, group){
                        
                    return value;
                },
                columns: [
                    {title: "RID", field: "a", visible: false, download: false},
                    {title: "#", field: "", formatter: "rownum", download: false},
                    {title: "TYPE", field: "e", headerFilter: "input", mutator:mutatorDisplayType},
                    {title: "STATUS", field: "h",formatter: displayDashboardStatus, mutator: mutatorDisplayStatus, headerFilter: "input"},
                    {title: "MODEL", field: "MOLD_MODEL", headerFilter: "input"},
                    {title: "PART NAME", field: "MOLD_PART_NAME", headerFilter: "input"},
                    {title: "TOOL", field: "MOLD_TOOL", headerFilter: "input"},
                    {title: "PART#", field: "MOLD_PART_NO", headerFilter: "input"},
                    {title: "LOCATION", field: "MOLD_LOCATION", headerFilter: "input"},
                    {title: "CUSTOMER", field: "MOLD_CUSTOMER", headerFilter: "input"},
                    // {title: "MAKER", field: "c", formatter: displayMoldMaker},
                    {title: "CONTROL #", field: "b", headerFilter: "input", formatter: displayControlNo},
                    {title: "MOLD CODE", field: "c", headerFilter: "input", formatter: displayMoldCode},
                    {title: "DEFECT", field: "g", mutator: mutatorDisplayDefect, headerFilter: "input"},
                    {title: "CAVITY", field: "l", headerFilter: "input"},
                    {title: "REQUEST DATE", field: "k", headerFilter: "input"},
                    {title: "TARGET DATE", field: "d", headerFilter: "input"},
                    {title: "TARGET TIME", field: "n", headerFilter: "input"},
                    {title: "AGING", field: "a", headerFilter: "input", mutator: mutatorDisplayAgingMold},
                    {title: "REMARKS", field: "j", headerFilter: "input"},
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
            alert('Error fetching data from the database.');
        }
    });
}
$("#btnExport").click(function(){
    table.download("xlsx", "Mold Repair Status.xlsx", { sheetName: "Sheet1" });
});

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
            cell.getElement().style.backgroundColor = "#ffffff";
        } else if(value == "1"){
            cell.getElement().style.backgroundColor = "#9bd9ed";
        } else if(value == "2"){
            cell.getElement().style.backgroundColor = "#19b3e8";
        } else if(value == "3"){
            cell.getElement().style.backgroundColor = "#84bc7c";
        }
        
        return rowData;

    }
}
*/

