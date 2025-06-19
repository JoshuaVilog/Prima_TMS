

$("#btnAdd").click(function(){
    let desc1 = $("#txtDesc1").val();
    let desc2 = $("#txtDesc2").val();
    let desc3 = $("#txtDesc3").val();
    let desc4 = $("#txtDesc4").val();
    let desc5 = $("#txtDesc5").val();
    let desc6 = $("#txtDesc6").val();
    let desc7 = $("#txtDesc7").val();
    let desc8 = $("#txtDesc8").val();
    let desc9 = $("#txtDesc9").val();
    let desc10 = $("#txtDesc10").val();
    let desc11 = $("#txtDesc11").val();
    let desc12 = $("#txtDesc12").val();
    let desc13 = $("#txtDesc13").val();
    let desc14 = $("#txtDesc14").val();
    let desc15 = $("#txtDesc15").val();
    let desc16 = $("#txtDesc16").val();
    
    if(desc1 == ""){
        Swal.fire({
            title: 'Incomplete Form',
            text: 'Please fill up all the information',
            icon: 'warning'
        })
    } else {
        $.ajax({
            url: "ajax/insert.php",
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
                userCode: userCode,
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
                        title: 'Record Added Successfully!',
                        text: 'Proceed to Record Page!',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Proceed!',
                        timer:2000,
                        willClose: () => {
                            getMoldMasterList();
                            setTimeout(fetchDataAndInitializeTable, 500);
                            $("#modalAdd").modal("hide");
                        },
                        
                    })
                }
            }
        });
    }
});