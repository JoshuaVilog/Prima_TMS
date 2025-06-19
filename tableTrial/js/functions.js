
$("#menuTrialList").addClass("active");




$("#btnUpdateStatusGood").click(function(){
    let id = $("#hiddenRequestID").val();
    let machineNo = $("#txtMachineNo").val();
    let remarks = $("#txtRemarks").val();

    Swal.fire({
        title: 'Are you sure you want to proceed to QC Inspection',
        icon: 'question',
        confirmButtonText: 'Yes',
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            
            $.ajax({
                url: 'ajax/updateRequestStatus.php',
                type: 'POST',
                data: {
                    requestID: id,
                    machineNo: machineNo,
                    status: '4',
                    status1: "GOOD",
                    remarks: remarks,
                    userCode: userCode,
                },
                success: function(data) {
                    console.log(data);
                }
            });  

            setTimeout(() => {
                fetchDataAndInitializeTable()
                hideFunction()
            }, 500);
            
        }
    })

    /* const { value: option } = Swal.fire({
        title: "PROCEED TO:",
        input: "select",
        inputOptions: {
            4: "QC INSPECTION",
            5: "MP",
        },
        inputPlaceholder: "-Select-",
        showCancelButton: true,
        inputValidator: (value) => {
            return new Promise((resolve) => {
                if (value === "") {
                    resolve("Please select on option.)");
                } else {
                    resolve()

                    $.ajax({
                        url: 'ajax/updateRequestStatus.php',
                        type: 'POST',
                        data: {
                            requestID: id,
                            machineNo: machineNo,
                            status: value,
                            status1: "GOOD",
                            remarks: remarks,
                            userCode: userCode,
                        },
                        success: function(data) {
                            console.log(data);
                        }
                    });  
        
                    setTimeout(() => {
                        fetchDataAndInitializeTable()
                        hideFunction()
                    }, 500);
                                
                }
            });
        }
    }); */
    
    

});
$("#btnUpdateStatusNG").click(function(){
    let id = $("#hiddenRequestID").val();
    let machineNo = $("#txtMachineNo").val();
    let remarks = $("#txtRemarks").val();

    Swal.fire({
        title: 'Are you sure you want to change the status?',
        icon: 'question',
        confirmButtonText: 'Yes',
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            
            $.ajax({
                url: 'ajax/updateRequestStatus.php',
                type: 'POST',
                data: {
                    requestID: id,
                    machineNo: machineNo,
                    status:"3",
                    status1: "NG",
                    remarks: remarks,
                    userCode: userCode, 
                },
                success: function(data) {
                    console.log(data);
                }
            });  

            setTimeout(() => {
                fetchDataAndInitializeTable()
                hideFunction()
            }, 500);
            
        }
    })
});

$("#btnUpdateStatusCancel").click(function(){
    let id = $("#hiddenRequestID").val();
    let machineNo = $("#txtMachineNo").val();
    let remarks = $("#txtRemarks").val();

    Swal.fire({
        title: 'Are you sure you want to cancel the request?',
        icon: 'question',
        confirmButtonText: 'Yes',
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            
            $.ajax({
                url: 'ajax/updateRequestStatus.php',
                type: 'POST',
                data: {
                    requestID: id,
                    machineNo: machineNo,
                    status:"6",
                    status1: "CANCEL",
                    remarks: remarks,
                    userCode: userCode, 
                },
                success: function(data) {
                    
                }
            });  

            setTimeout(() => {
                fetchDataAndInitializeTable()
                hideFunction()
            }, 500);
            
        }
    })

    
});

function hideFunction(){
    $('#txtSearchMoldCtrl').val("")
    $("#containerUpdateStatus").hide();
    $("#txtMachineNo").val("");
    $("#txtRemarks").val("");

}



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?////////////////////////

$('#txtSearchMoldCtrl').keydown(function(event) {
    if (event.which == 13) {

        var scannedData = $('#txtSearchMoldCtrl').val().trim();

        let moldList = JSON.parse(localStorage.getItem(lsMoldList));
        let isValid = false;

        for(let index = 0; index < moldList.length; index++){
            if(moldList[index].b == scannedData){

                isValid = true;
                break;
            }
        }

        if(isValid == true){
            
            $.ajax({
                url: "/"+rootFolder+'/1_QUERY/scanIn.php',
                method: "POST",
                data: {
                    moldCtrl: scannedData,
                },
                success: function(data) {
                    
                    if(data.i == "2"){
                        $("#hiddenRequestID").val(data.a)
                        $("#containerUpdateStatus").show()
                    } else {
                        alert("Not Yet on Trial Status")
                        hideFunction()
                    }
                    
                }
            });

        } else {
            alert("Invalid Code")
            hideFunction()
        }

    }
});


