
$("#txtMachineNo").html(populateMachineNo());


$('#txtMachineNo').select2({
    minimumInputLength: 0, // Set to 0 to always show the search bar
    allowClear: true, 
    placeholder: 'Select an option'
});


function populateMachineNo(){

    let list = JSON.parse(localStorage.getItem(lsMachineNoList));
    var options = '<option value="">-Select-</option>';

    for (var i = 0; i < list.length; i++) {
        options += '<option value="' + list[i].a + '">' + list[i].b + ' - '+'('+ list[i].c +')</option>';
    }
    
    return options;
}