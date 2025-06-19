
// $("#menuTableUser").addClass("active");
let folderLoc = "listStatus";

// $("#btnOpenModalAdd").click(function(){

//     $("#modalAdd").modal("show");
// });

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
                    
                    if(data.i == "0"){
                        $("#hiddenRequestID").val(data.a)
                        $("#containerUpdateStatus").show()
                        $("#txtPRNo").val(data.b);
                        $("#txtMoldCode").val(data.d);
                    } else {
                        alert("Not requested")
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

