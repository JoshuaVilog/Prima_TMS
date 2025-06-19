
$("#menuMoldList").addClass("active");

$("#btnOpenModalAdd").click(function(){

    $("#txtDesc1").val("");
    $("#txtDesc2").val("");
    $("#txtDesc3").val("");
    $("#txtDesc4").val("");
    $("#txtDesc5").val("");
    $("#txtDesc6").val("");
    $("#txtDesc7").val("");
    $("#txtDesc8").val("");
    $("#txtDesc9").val("");
    $("#txtDesc10").val("");
    $("#txtDesc11").val("");
    $("#txtDesc12").val("");
    $("#txtDesc13").val("");
    $("#txtDesc14").val("");
    $("#txtDesc15").val("");
    $("#txtDesc16").val("");
    $("#modalAdd").modal("show");
});

$("#btnExport").click(function(){
    table.download("csv", "mold_masterList.csv", { sheetName: "Sheet1" });
});

// console.log(userCode);
function getLastUpdate(){

    $.ajax({
        url: 'ajax/getLastUpdate.php', // Replace with your server-side script URL
        type: 'POST',
        success: function(data) {
            // console.log(data);
            // $("#displayLastUpdate").text(response);
            data = JSON.parse(data);


            $("#displayLastUpdate").text(setUserFullName(data.CREATED_BY) +" at "+ data.CREATED_AT);
        },
        error: function(error) {
          alert('Error geting data');
        }
    });
}