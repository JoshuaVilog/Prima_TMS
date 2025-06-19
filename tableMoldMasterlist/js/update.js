

$("#btnUpdate").click(function(){
    let desc1 = $("#txtEditDesc1").val();
    let desc2 = $("#txtEditDesc2").val();
    let desc3 = $("#txtEditDesc3").val();
    let desc4 = $("#txtEditDesc4").val();
    let desc5 = $("#txtEditDesc5").val();
    let desc6 = $("#txtEditDesc6").val();
    let desc7 = $("#txtEditDesc7").val();
    let desc8 = $("#txtEditDesc8").val();
    let desc9 = $("#txtEditDesc9").val();
    let desc10 = $("#txtEditDesc10").val();
    let desc11 = $("#txtEditDesc11").val();
    let desc12 = $("#txtEditDesc12").val();
    let desc13 = $("#txtEditDesc13").val();
    let desc14 = $("#txtEditDesc14").val();
    let desc15 = $("#txtEditDesc15").val();
    let desc16 = $("#txtEditDesc16").val();
    let id = $("#hiddenID").val();
    
    if(desc1 == ""){
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
                desc1:desc1,
                desc2:desc2,
                desc3:desc3,
                desc4:desc4,
                desc5:desc5,
                desc6:desc6,
                desc7:desc7,
                desc8:desc8,
                desc9:desc9,
                desc10:desc10,
                desc11:desc11,
                desc12:desc12,
                desc13:desc13,
                desc14:desc14,
                desc15:desc15,
                desc16:desc16,
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
                        confirmButtonText: 'Proceed!',
                        timer:2000,
                        willClose: () => {
                            getMoldMasterList();
                            setTimeout(fetchDataAndInitializeTable, 500);
                            $("#modalEdit").modal("hide");
                        },
                    })
                }
            }
        });
    }
});