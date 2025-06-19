
/* $("#btnUpdateStatus").click(function(){
    let id = $("#hiddenRequestID").val();
    
    Swal.fire({
        title: 'Are you sure you want to proceed the report on QC?',
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
                    fetchDataAndInitializeTable()
                    
                }
            });   
            
        }
    })

}); */

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