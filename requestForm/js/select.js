
$("#selectType").html(populateType()) 
$("#selectCategory").html(populateCategory()) 
$("#selectDefect").html(populateDefect()) 
$("#selectPriority").html(populatePriority()) 
$("#selectLocation").html(populateLocation()) 
$("#selectMoldCtrl").html(populateSelectMoldCtrl()) 

setTimeout(() => {
    $('#selectMoldCtrl, #selectDefect').select2({
        minimumInputLength: 0, // Set to 0 to always show the search bar
        allowClear: true, 
        placeholder: 'Select Mold',
        
    });
}, 500);



function populateType(id){

    let list = JSON.parse(localStorage.getItem(lsRequestTypeList));
    var options = '<option value="">-Select-</option>';

    for (var i = 0; i < list.length; i++) {
        let selected = ""
        if(id != undefined){
            selected = (list[i].a == id)? "selected":"";
        }
        options += '<option value="' + list[i].a + '" '+selected+'>' + list[i].b +'</option>';
    }
    
    return options;
}
function populateCategory(id){

    let list = JSON.parse(localStorage.getItem(lsCategoryList));
    var options = '<option value="">-Select-</option>';

    for (var i = 0; i < list.length; i++) {
        let selected = ""
        if(id != undefined){
            selected = (list[i].a == id)? "selected":"";
        }
        options += '<option value="' + list[i].a + '" '+selected+'>' + list[i].b + '</option>';
    }
    
    return options;
}
function populateDefect(id){

    let list = JSON.parse(localStorage.getItem(lsDefectList));
    var options = '<option value="">-Select-</option>';

    for (var i = 0; i < list.length; i++) {
        let selected = ""
        if(id != undefined){
            selected = (list[i].a == id)? "selected":"";
        }

        options += '<option value="' + list[i].a + '" '+selected+'>' + list[i].b + '</option>';
    }
    
    return options;
}
function populatePriority(id){

    let list = JSON.parse(localStorage.getItem(lsPriorityList));
    var options = '<option value="">-Select-</option>';

    for (var i = 0; i < list.length; i++) {
        let selected = ""
        if(id != undefined){
            selected = (list[i].a == id)? "selected":"";
        }
        options += '<option value="' + list[i].a + '" '+selected+'>' + list[i].b + '</option>';
    }
    
    return options;
}
function populateLocation(id){

    let list = JSON.parse(localStorage.getItem(lsLocationList));
    var options = '<option value="">-Select-</option>';

    for (var i = 0; i < list.length; i++) {
        let selected = ""
        if(id != undefined){
            selected = (list[i].a == id)? "selected":"";
        }
        options += '<option value="' + list[i].a + '" '+selected+'>' + list[i].b + '</option>';
    }
    
    return options;
}

function populateSelectMoldCtrl(){

    let list = JSON.parse(localStorage.getItem(lsMoldList));
    var options = '<option value="">-Select-</option>';

    for (var i = 0; i < list.length; i++) {
        
        options += '<option value="' + list[i].b + '">' + list[i].b + ' | ' + list[i].d + ' | ' + list[i].c + '</option>';
    }
    
    
    return options;

}






/////////////////////////////////////////////////////////////


$("#btnAddNewDefect").click(function(){
    
    $("#btnAddNewDefect").hide();
    $("#btnSaveNewDefect").show();
    $("#btnCancelAddDefect").show();

    $("#txtAddNewDefect").show();
    $("#selectDefectContainer").hide();
    $("#selectDefect").val("");
    $("#txtAddNewDefect").val("");

})


$("#btnCancelAddDefect").click(function(){
    
    $("#btnAddNewDefect").show();
    $("#btnSaveNewDefect").hide();
    $("#btnCancelAddDefect").hide();

    $("#txtAddNewDefect").hide();
    $("#selectDefectContainer").show();

})
$("#inputGroupDefect").on("input", "#txtAddNewDefect", function(){
    let value = $(this).val();

    $(this).val(value.toUpperCase())
});

$("#btnSaveNewDefect").click(function(){
    let desc = $("#txtAddNewDefect").val();

    $("#btnSaveNewDefect").prop("disabled", true);

    if(desc != ""){
        $.ajax({
            url: "/"+rootFolder+"/getCodes/php/insertDefect.php",
            method: "POST",
            data: {
                desc:desc,
            },
            success: function(response) {
                
                getDefectList();
                
    
                setTimeout(() => {
                    $("#selectDefect").html(populateDefect(response));

                    setTimeout(() => {
                        $('#selectDefect').select2({
                            minimumInputLength: 0, // Set to 0 to always show the search bar
                            allowClear: true, 
                            placeholder: 'Select Mold',
                            
                        });
                    }, 500);
    
                    $("#btnAddNewDefect").show();
                    $("#btnSaveNewDefect").hide();
                    $("#btnCancelAddDefect").hide();
    
                    $("#txtAddNewDefect").hide();
                    $("#selectDefectContainer").show();
                    $("#btnSaveNewDefect").prop("disabled", false);
                }, 500);
    
            }
        });
    }
})

