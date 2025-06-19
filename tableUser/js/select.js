
// populateDepartment();
// populatePosition();


$('#selectDepartment, #selectPosition').select2({
    minimumInputLength: 0, // Set to 0 to always show the search bar
    allowClear: true, 
    placeholder: 'Select an option'
});

function populateDepartment(){

    let list = JSON.parse(localStorage.getItem(lsDepartmentList));
    var options = '<option value="">-Select-</option>';

    for (var i = 0; i < list.length; i++) {
        options += '<option value="' + list[i].a + '">' + list[i].c + ' - ('+list[i].b+')' +'</option>';
    }
    
    return options;
}
function populatePosition(){

    let list = JSON.parse(localStorage.getItem(lsPositionList));
    var options = '<option value="">-Select-</option>';

    for (var i = 0; i < list.length; i++) {
        options += '<option value="' + list[i].a + '">' + list[i].b + '</option>';
    }
    
    return options;
}

function populateRole(id){
    let list = JSON.parse(localStorage.getItem(lsUserRoleList));
    var options = '';

    for (var i = 0; i < list.length; i++) {
        let selected = ""
        if(id != undefined){
            selected = (list[i].a == id)? "selected":"";
        }
        if(list[i].a != "0"){
            options += '<option value="' + list[i].a + '" '+selected+'>' + list[i].b + '</option>';
        }
    }
    
    return options;
}