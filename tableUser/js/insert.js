$("#btnAddUser").click(function(){
    let lastname = $("#txtLastname").val();
    let firstname = $("#txtFirstname").val();
    let middlename = $("#txtMiddlename").val();
    let email = $("#txtEmail").val();
    // let department = $("#selectDepartment").val();
    // let position = $("#selectPosition").val();
    let username = $("#txtUsername").val();
    let role = $("#selectRole").val();
    
    if(lastname == "" || firstname == "" || username == "" || role == ""){
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
    // $("#selectDepartment").val("");
    // $("#selectPosition").val("");
    $("#txtUsername").val("");
    $("#selectRole").val("");
    $("#modalAddUser").modal("hide");

}