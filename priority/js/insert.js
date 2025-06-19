

$("#btnSave").click(function(){
    
    let mold1 = $("#selectMoldCtrl1").val();
    let mold2 = $("#selectMoldCtrl2").val();
    let mold3 = $("#selectMoldCtrl3").val();
    let mold4 = $("#selectMoldCtrl4").val();
    let mold5 = $("#selectMoldCtrl5").val();
    
    if(mold1 == "" || mold2 == "" || mold3 == "" || mold4 == "" || mold5 == ""){
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
                mold1: mold1,
                mold2: mold2,
                mold3: mold3,
                mold4: mold4,
                mold5: mold5,
                userCode: userCode,
            },
            success: function(response) {
                console.log(response);
                
                Swal.fire({
                    title: 'Record Saved Successfully!',
                    text: 'Proceed to Record Page!',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Proceed!',
                    timer: 2000,
                    willClose: () => {
                        window.location.href = "/"+rootFolder+"/priority/index.php";
                    },
                })
            }
        });
    }
    
});