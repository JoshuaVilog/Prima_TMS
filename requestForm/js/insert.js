
$("#btnSubmitRequest").click(function(){
    let moldControl = $("#selectMoldCtrl").val();
    let pr = $("#txtPR").val();
    let targetDate = $("#txtTargetDate").val();
    let targetTime = $("#txtTargetTime").val();
    let dateRequest = $("#txtDateRequest").val();
    let timeRequest = $("#txtTimeRequest").val();
    let requestedBy = $("#txtRequestedBy").val();
    let process = $("#selectProcess").val();
    let type = $("#selectType").val();
    let category = $("#selectCategory").val();
    let defect = $("#selectDefect").val();
    let defectLocation =  $("#txtDefectLocation").val();
    let location =  $("#selectLocation").val();
    let priority = $("#selectPriority").val();
    let remarks = $("#txtRemarks").val();

    let isValid = true;

    if(moldControl == "" || moldControl == null || targetDate == "" || targetTime == "" || dateRequest == "" || timeRequest == "" || pr == ""){
        isValid = false;
    }

    if(isValid == false){
        Swal.fire({
            title: 'Incomplete Form',
            text: 'Please fill up all the information',
            icon: 'warning'
        })
    } else {
        $("#btnSubmitRequest").prop("disabled", true);

        $.ajax({
            url: "ajax/insertRequest.php",
            method: "POST",
            data: {
                moldControl: moldControl,
                pr: pr,
                process: process,
                targetDate: targetDate,
                targetTime: targetTime,
                dateRequest: dateRequest,
                timeRequest: timeRequest,
                requestedBy: requestedBy,
                type:type,
                category: category,
                defect: defect,
                defectLocation: defectLocation,
                location: location,
                priority: priority,
                remarks: remarks,
                userCode: userCode,
            },
            success: function(response) {
                console.log(response);
                
                if(response == "duplicate"){
                    Swal.fire({
                        title: 'Duplicate PR / CONTROL #!',
                        text: 'Please fill up unique PR / CONTROL #.',
                        icon: 'warning'
                    })
                    $("#btnSubmitRequest").prop("disabled", false);
                } else {
                    Swal.fire({
                        title: 'Request Added Successfully!',
                        text: 'Proceed to Form!',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Proceed!',
                        timer: 2000,
                        willClose: () => {
                            resetRequestForm2()
                            fetchDataAndInitializeTable()
                        },
                    })
    
                    $("#btnSubmitRequest").prop("disabled", false);
                }
            }
        });

        /* 
        $.ajax({
            url: "ajax/searchMoldCtrl.php",
            method: "POST",
            data: {
                moldCtrl: moldControl
            },
            success: function(response) {
                console.log(response);
                
                if(response == "YES"){
                    Swal.fire({
                        title: 'Already Requested!',
                        text: 'Mold Control No is already requested',
                        icon: 'warning'
                    })
                    resetRequestForm()
                } else if(response == "NO"){
                    
                    

                } else {
                    alert("Error");
                }
            }
        });

 */
    }

});













/*
$("#btnAddUser").click(function(){
    let lastname = $("#txtLastname").val();
    let firstname = $("#txtFirstname").val();
    let middlename = $("#txtMiddlename").val();
    let email = $("#txtEmail").val();
    let department = $("#selectDepartment").val();
    let position = $("#selectPosition").val();
    let username = $("#txtUsername").val();
    let role = $("#selectRole").val();
    
    if(lastname == "" || firstname == "" || username == "" || department == "" || role == ""){
        Swal.fire({
            title: 'Incomplete Form',
            text: 'Please fill up all the information',
            icon: 'warning'
        })
    } else {
        $.ajax({
            url: "ajax/addUser.php",
            method: "POST",
            data: {
                lastname: lastname,
                firstname: firstname,
                middlename: middlename,
                department: department,
                position: position,
                username: username,
                selectRole: role,
                email: email
    
            },
            success: function(response) {
                console.log(response);
                
                if(response == "duplicate"){
                    Swal.fire({
                        title: 'Duplicate Username!',
                        text: 'Please fill up another username.',
                        icon: 'warning'
                    })
                } else {
                    Swal.fire({
                        title: 'User Added Successfully!',
                        text: 'Proceed to User Page!',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Proceed!'
                        }).then((result) => {
                        if (result.isConfirmed) {
                            // window.location.href = "/"+rootFolder+"/tableUser/";
                            doneInsert()
                        }
                        // window.location.href = "/"+rootFolder+"/tableUser/";
                        doneInsert()
                    })
                }
            }
        });
    }
});

function doneInsert(){
    fetchDataAndInitializeTable();
    $("#txtLastname").val("");
    $("#txtFirstname").val("");
    $("#txtMiddlename").val("");
    $("#txtEmail").val("");
    $("#selectDepartment").val("");
    $("#selectPosition").val("");
    $("#txtUsername").val("");
    $("#selectRole").val("");
    $("#modalAddUser").modal("hide");

}

*/