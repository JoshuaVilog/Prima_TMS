

function editReport(id){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/getRequest.php', // Replace with your server-side script URL
        type: 'POST',
        data:{
            id:id
        },
        dataType: 'json',
        success: function(data) {

            $("#txtEditPR").val(data.b);
            $("#txtEditTargetDate").val(data.g);
            $("#txtEditTargetTime").val(data.h);
            $("#txtEditDateRequest").val(data.d);
            $("#txtEditTimeRequest").val(data.e);
            $("#txtEditRequestedBy").val(data.f);
            $("#selectEditType").html(populateType(data.i));
            $("#selectEditCategory").html(populateCategory(data.j));
            $("#selectEditDefect").html(populateDefect(data.k));
            $("#txtEditDefectLocation").val(data.l);
            $("#selectEditPriority").html(populatePriority(data.n));
            $("#selectEditLocation").html(populateLocation(data.m));
            $("#txtEditRemarks").val(data.y);
            $("#hiddenRequestID").val(data.a);

            $("#modalEditRequest").modal("show")

        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });

}


$("#btnUpdateRequest").click(function(){
    let pr = $("#txtEditPR").val();
    let targetDate = $("#txtEditTargetDate").val();
    let targetTime = $("#txtEditTargetTime").val();
    let dateRequest = $("#txtEditDateRequest").val();
    let timeRequest = $("#txtEditTimeRequest").val();
    let requestedBy = $("#txtEditRequestedBy").val();
    let type = $("#selectEditType").val();
    let category = $("#selectEditCategory").val();
    let defect = $("#selectEditDefect").val();
    let defectLocation =  $("#txtEditDefectLocation").val();
    let location =  $("#selectEditLocation").val();
    let priority = $("#selectEditPriority").val();
    let remarks = $("#txtEditRemarks").val();
    let id = $("#hiddenRequestID").val();

    $.ajax({
        url: "ajax/updateRequest.php", // Replace with your server-side script URL
        type: 'POST',
        data:{
            pr: pr,
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
            id:id,
        },
        success: function(data) {
            console.log(data);
            $("#modalEditRequest").modal("hide")

            Swal.fire({
                title: 'Request Updated Successfully!',
                text: 'Proceed!',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Proceed!',
                timer: 2000,
                willClose: () => {
                    fetchDataAndInitializeTable()
                },
            })

        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });

});






































/*
$("#btnEditUser").click(function(){
    let lastname = $("#txtEditLastname").val();
    let firstname = $("#txtEditFirstname").val();
    let middlename = $("#txtEditMiddlename").val();
    let email = $("#txtEditEmail").val();
    let username = $("#txtEditUsername").val();
    let department = $("#selectEditDepartment").val();
    let position = $("#selectEditPosition").val();
    let role = $("#selectEditRole").val();
    let status = $("#selectEditStatus").val();
    let id = $("#hiddenId").val();

    if(lastname == "" || username == "" || role == "" || department == "" || position == ""){
        Swal.fire({
            title: 'Incomplete Form',
            text: 'Please fill up all the information',
            icon: 'warning'
        })
     } else {
        $.ajax({
            url: "ajax/editUser.php",
            method: "POST",
            data: { 

                lastname: lastname,
                firstname: firstname,
                middlename: middlename,
                username: username,
                department: department,
                position: position,
                role: role,
                status: status,
                userId: id,
                email: email
            },
            success: function(response) {
                console.log(response);
                
                
                Swal.fire({
                    title: 'User Updated Successfully!',
                    text: 'Proceed to User Page!',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Proceed!'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        // window.location.href = "/"+rootFolder+"/tableUser/";
                        doneUpdate()
                    }
                    // window.location.href = "/"+rootFolder+"/tableUser/";
                    doneUpdate()
                })
                
            }
        });
     }
});

function doneUpdate(){

    $("#txtEditLastname").val("");
    $("#txtEditFirstname").val("");
    $("#txtEditMiddlename").val("");
    $("#txtEditEmail").val("");
    $("#txtEditUsername").val("");
    $("#selectEditDepartment").val("");
    $("#selectEditPosition").val("");
    $("#selectEditRole").val("");
    $("#selectEditStatus").val("");
    fetchDataAndInitializeTable("");
    $("#modalEditUser").modal("hide");

}
*/
