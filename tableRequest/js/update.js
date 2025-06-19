
$("#btnUpdateRequest").click(function(){
    let pr = $("#txtPRNo").val();
    let id = $("#hiddenRequestID").val();

    $.ajax({
        url: "/"+rootFolder+'/1_QUERY/updateRequest.php', // Replace with your server-side script URL
        type: 'POST',
        data:{
            pr:pr,
            id:id
        },
        success: function(data) {

            // $("#modalViewReport").modal("hide")
            Swal.fire({
                title: 'Request Updated Successfully!',
                text: 'Proceed to User Page!',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Proceed!'
                }).then((result) => {
                if (result.isConfirmed) {
                    hideFunction()
                    fetchDataAndInitializeTable()
                }
                
                fetchDataAndInitializeTable()
                hideFunction()
            })

        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });

});

function hideFunction(){
    $('#txtSearchMoldCtrl').val("")
    $("#containerUpdateStatus").hide();
    $("#txtPRNo").val("");

}

/*
$("#btnUpdate").click(function(){
    let desc = $("#txtEditDesc").val();
    let id = $("#hiddenID").val();
    
    if(desc == ""){
        Swal.fire({
            title: 'Incomplete Form',
            text: 'Please fill up all the information',
            icon: 'warning'
        })
    } else {
        $.ajax({
            url: "ajax/update.php",
            method: "POST",
            data: {
                desc:desc,
                id: id,
            },
            success: function(response) {
                console.log(response);
                
                if(response == "duplicate"){
                    Swal.fire({
                        title: 'Duplicate Description!',
                        text: 'Please fill up another description.',
                        icon: 'warning'
                    })
                } else {
                    Swal.fire({
                        title: 'Record Updated Successfully!',
                        text: 'Proceed to Record Page!',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Proceed!'
                        }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "/"+rootFolder+"/"+folderLoc+"/index.php";
                        }
                        window.location.href = "/"+rootFolder+"/"+folderLoc+"/index.php";
                    })
                }
            }
        });
    }
});

*/