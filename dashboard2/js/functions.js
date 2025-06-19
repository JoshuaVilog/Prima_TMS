
/* $("#menuMoldAssy").addClass("active");
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

function hideFunction(){
    $('#txtSearchMoldCtrl').val("")
    $("#containerUpdateStatus").hide();

} */