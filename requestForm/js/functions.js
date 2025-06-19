
$("#menuRequestForm").addClass("active");

$("#selectMoldCtrl").change(function(){
    
    let value = $(this).val();

    $("#txtMoldItemName").val(getDisplayMoldPartName(value));
    $("#txtMoldCustomer").val(getDisplayMoldCustomer(value));
    $("#txtMoldModel").val(getDisplayMoldModel(value));
                    
})
$("#selectType").change(function(){
    let value = $(this).val();

    //HARD CODE MUNA FOR NOW YUNG SA TYPE

    if(value == "1"){
        // IF REPAIR
        $("#selectProcess").val("1") // FOR REPAIR

    } else if(value == "3"){
        // IF PM
        $("#selectProcess").val("2") // FOR PM
    } else if(value == "5"){
        // IF NEW
        $("#selectProcess").val("3") // FOR TRIAL

    } else {
        $("#selectProcess").val("")
    }
         
})



$("#txtDateRequest").val(getCurrentDate()); // SET CURRENT DATE
$("#txtTimeRequest").val(getCurrentTime()); // SET CURRENT DATE
$("#txtTargetDate").val(getCurrentDate()); // SET CURRENT DATE
$("#txtTargetTime").val(getCurrentTime()); // SET CURRENT DATE


function resetRequestForm2(){

    $("#selectMoldCtrl").val("")
    $("#txtMoldItemName").val("");
    $("#txtMoldCustomer").val("");
    $("#txtMoldModel").val("");
    $("#txtPR").val("");
    // $("#txtTargetDate").val("");
    // $("#txtTargetTime").val("");
    $("#txtRequestedBy").val("");
    $("#txtDateRequest").val("");
    $("#selectProcess").val("0");
    $("#selectType").val("");
    $("#selectCategory").val("");
    $("#selectDefect").val("");
    $("#txtDefectLocation").val("");
    $("#selectLocation").val("");
    $("#selectPriority").val("");
    $("#txtRemarks").val("");

    //////////
    $("#btnAddNewDefect").show();
    $("#btnSaveNewDefect").hide();
    $("#btnCancelAddDefect").hide();
    $("#txtAddNewDefect").hide();
    $("#selectDefect").show();

    $("#txtDateRequest").val(getCurrentDate()); // SET CURRENT DATE
    $("#txtTimeRequest").val(getCurrentTime()); // SET CURRENT DATE
    $("#txtTargetDate").val(getCurrentDate()); // SET CURRENT DATE
    $("#txtTargetTime").val(getCurrentTime()); // SET CURRENT DATE

    $('#selectMoldCtrl').val([]).trigger('change');
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //


function searchMoldCtrl(code){

    let list = JSON.parse(localStorage.getItem(lsMoldList));

    var result = list.find(function(value) {
        return value.b === code;
    });

    if(result){
        $.ajax({
            url: "ajax/searchMoldCtrl.php",
            method: "POST",
            data: {
                moldCtrl: code
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
                    $("#txtSearchMoldCtrl").val("")
                } else if(response == "NO"){
                    $("#txtMoldItemName").val(result.d);
                    $("#txtMoldCustomer").val(result.e);
                    $("#txtMoldModel").val(result.f);
                    $("#txtDateRequest").val(getCurrentDate());

                    $("#txtPR").prop("disabled", false);
                    $("#txtDate").prop("disabled", false);
                    $("#txtTargetTime").prop("disabled", false);
                    $("#txtRequestedBy").prop("disabled", false);
                    $("#txtDateRequest").prop("disabled", false);
                    $("#selectProcess").prop("disabled", false);
                    $("#selectType").prop("disabled", false);
                    $("#selectCategory").prop("disabled", false);
                    $("#selectDefect").prop("disabled", false);
                    $("#btnAddNewDefect").prop("disabled", false);
                    $("#txtDefectLocation").prop("disabled", false);
                    $("#selectLocation").prop("disabled", false);
                    $("#selectPriority").prop("disabled", false);
                    $("#txtRemarks").prop("disabled", false);
                    $("#btnSubmitRequest").prop("disabled", false);

                } else {
                    alert("Error");
                }
            }
        });

        
    } else {
        Swal.fire({
            title: 'Invalid Code!',
            text: 'Mold Control No is Invalid',
            icon: 'warning'
        })
        resetRequestForm()
        $("#txtSearchMoldCtrl").val("")

    }
}

$("#btnSearchMoldCtrl").click(function(){
    let code = $("#txtSearchMoldCtrl").val()
    
    searchMoldCtrl(code);

})
$('#txtSearchMoldCtrl').keydown(function(event) {
    if (event.which == 13) {

        var scannedData = $('#txtSearchMoldCtrl').val().trim();

        searchMoldCtrl(scannedData);

    }
});

function resetRequestForm(){

    $("#txtSearchMoldCtrl").val("")
    $("#txtMoldItemName").val("");
    $("#txtMoldCustomer").val("");
    $("#txtMoldModel").val("");
    $("#txtPR").val("");
    $("#txtDate").val("");
    $("#txtTargetTime").val("");
    $("#txtRequestedBy").val("");
    $("#txtDateRequest").val("");
    $("#selectProcess").val("0");
    $("#selectType").val("");
    $("#selectCategory").val("");
    $("#selectDefect").val("");
    $("#txtDefectLocation").val("");
    $("#selectPriority").val("");
    $("#txtRemarks").val("");

    $("#txtPR").prop("disabled", true);
    $("#txtDate").prop("disabled", true);
    $("#txtTargetTime").prop("disabled", true);
    $("#txtRequestedBy").prop("disabled", true);
    $("#txtDateRequest").prop("disabled", true);
    $("#selectType").prop("disabled", true);
    $("#selectProcess").prop("disabled", true);
    $("#selectCategory").prop("disabled", true);
    $("#selectDefect").prop("disabled", true);
    $("#btnAddNewDefect").prop("disabled", true);
    $("#txtDefectLocation").prop("disabled", true);
    $("#selectLocation").prop("disabled", true);
    $("#selectPriority").prop("disabled", true);
    $("#txtRemarks").prop("disabled", true);
    $("#btnSubmitRequest").prop("disabled", true);


    //////////
    $("#btnAddNewDefect").show();
    $("#btnSaveNewDefect").hide();
    $("#btnCancelAddDefect").hide();
    $("#txtAddNewDefect").hide();
    $("#selectDefect").show();
}



// 0000-00-00 00:00:00