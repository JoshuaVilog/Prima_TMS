
$("#menuMoldAssy").addClass("active");



$("#btnDone").click(function(){
    let id = $("#hiddenRequestID").val();
    let remarks = $("#txtRemarks").val();
    
    Swal.fire({
        title: 'Are you sure you want to proceed on trial?',
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
                    status:"3",
                    userCode: userCode,
                    remarks: remarks,
                },
                success: function(data) {
                    
                    fetchDataAndInitializeTable();
                    hideFunction();
                }
            });  
            
        }
    })

});

function hideFunction(){
    $('#txtSearchMoldCtrl').val("")
    $("#containerUpdateStatus").hide();
    $("#txtMachineNo").val("");
    $("#txtRemarks").val("");

}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

$("#btnUpdateStatusGood").click(function(){
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
                url: '/'+rootFolder+'/1_QUERY/updateRequestStatus.php',
                type: 'POST',
                data: {
                    requestID: id,
                    status:"3",
                },
                success: function(data) {
                
                }
            });  

            $.ajax({
                url: '/'+rootFolder+'/1_QUERY/insertTrial.php',
                type: 'POST',
                data: {
                    requestID: id,
                    machineNo: machineNo,
                    remarks: remarks,
                    status: "1",
                    userCode: userCode
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
$("#btnUpdateStatusNG").click(function(){
    let id = $("#hiddenRequestID").val();
    let machineNo = $("#txtMachineNo").val();
    let remarks = $("#txtRemarks").val();

    const { value: option } = Swal.fire({
        title: "PROCEED TO:",
        input: "select",
        inputOptions: {
            0: "MOLD ASSY",
            2: "TRIAL",
        },
        inputPlaceholder: "-Select-",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === "") {
                resolve("Please select on option.)");
            } else {
                resolve()
                // alert(value)

                // if(machineNo == ""){
                //     Swal.fire({
                //         title: 'Incomplete Form',
                //         text: 'Please fill up all the information',
                //         icon: 'warning'
                //     })
                // } else {
                    $.ajax({
                        url: '/'+rootFolder+'/1_QUERY/updateRequestStatus.php',
                        type: 'POST',
                        data: {
                            requestID: id,
                            status:value,
                        },
                        success: function(data) {
                            
                        }
                    });  
                    $.ajax({
                        url: '/'+rootFolder+'/1_QUERY/insertTrial.php',
                        type: 'POST',
                        data: {
                            requestID: id,
                            machineNo: machineNo,
                            remarks: remarks,
                            status: "2",
                            userCode: userCode
                        },
                        success: function(data) {
                        
                        }
                    });  

                    setTimeout(() => {
                        fetchDataAndInitializeTable()
                        hideFunction()
                    }, 500);
                // }
                            
                        }
                    });
                    }
                });

    
});




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


