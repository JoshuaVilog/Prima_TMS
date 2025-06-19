
// $("#menuTableUser").addClass("active");
// let folderLoc = "listCause";

// populateSelectMoldCtrl()
displayRecent()

function populateSelectMoldCtrl(callback){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/request_masterlist.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            list = list.filter(item => item.z == "0");

            callback(list)

        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });

}


$(".selectMoldCtrl").change(function(){
    let value = $(this).val();

    $(this).closest("tr").find(".tdItemCode").text(getDisplayMoldPartNo(value));
    $(this).closest("tr").find(".tdItemName").text(getDisplayMoldPartName(value));
    $(this).closest("tr").find(".tdTool").text(getDisplayMoldTool(value));
    $(this).closest("tr").find(".tdModel").text(getDisplayMoldModel(value));

})

$("#tbody-priority").on("click", ".btnRemovePriority", function(){
    let select = $(this).closest("tr").find(".selectMoldCtrl");

    setTimeout(() => {
        select.val([]).trigger('change');
    }, 300);

});

function displayRecent(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/priority_masterlist.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

           let element = '';

           for(let index = 0; index < list.length; index++){

                element += '<table class="table table-bordered"> <thead> <tr> <th colspan="5" class="center">AS OF '+list[index].g+'</th> </tr> <tr> <th class="center">TOP</th> <th class="center">MOLD CTRL</th> <th class="center">PART CODE</th> <th class="center">PART NAME</th> <th class="center">TOOL</th> </tr> </thead> <tbody> <tr> <td>1</td> <td>'+list[index].b+'</td> <td>'+getDisplayMoldPartNo(list[index].b)+'</td> <td>'+getDisplayMoldPartName(list[index].b)+'</td> <td>'+getDisplayMoldTool(list[index].b)+'</td> </tr> <tr> <td>2</td> <td>'+list[index].c+'</td> <td>'+getDisplayMoldPartNo(list[index].c)+'</td> <td>'+getDisplayMoldPartName(list[index].c)+'</td> <td>'+getDisplayMoldTool(list[index].c)+'</td> </tr> <tr> <td>3</td> <td>'+list[index].d+'</td> <td>'+getDisplayMoldPartNo(list[index].d)+'</td> <td>'+getDisplayMoldPartName(list[index].d)+'</td> <td>'+getDisplayMoldTool(list[index].d)+'</td> </tr> <tr> <td>4</td> <td>'+list[index].e+'</td> <td>'+getDisplayMoldPartNo(list[index].e)+'</td> <td>'+getDisplayMoldPartName(list[index].e)+'</td> <td>'+getDisplayMoldTool(list[index].e)+'</td> </tr> <tr> <td>5</td> <td>'+list[index].f+'</td> <td>'+getDisplayMoldPartNo(list[index].f)+'</td> <td>'+getDisplayMoldPartName(list[index].f)+'</td> <td>'+getDisplayMoldTool(list[index].f)+'</td> </tr> </tbody> </table>';

           }

           $("#containerRecentPriorities").html(element)

        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });

}

displayPriority()

function displayPriority(){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/getLastPriority.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            let selected1 = data.b;
            let selected2 = data.c;
            let selected3 = data.d;
            let selected4 = data.e;
            let selected5 = data.f;

            let container1 = $("#selectMoldCtrl1");
            let container2 = $("#selectMoldCtrl2");
            let container3 = $("#selectMoldCtrl3");
            let container4 = $("#selectMoldCtrl4");
            let container5 = $("#selectMoldCtrl5");

            container1.closest("tr").find(".tdItemCode").text(getDisplayMoldPartNo(data.b));
            container1.closest("tr").find(".tdItemName").text(getDisplayMoldPartName(data.b));
            container1.closest("tr").find(".tdTool").text(getDisplayMoldTool(data.b));
            container1.closest("tr").find(".tdModel").text(getDisplayMoldModel(data.b));

            container2.closest("tr").find(".tdItemCode").text(getDisplayMoldPartNo(data.c));
            container2.closest("tr").find(".tdItemName").text(getDisplayMoldPartName(data.c));
            container2.closest("tr").find(".tdTool").text(getDisplayMoldTool(data.c));
            container2.closest("tr").find(".tdModel").text(getDisplayMoldModel(data.c));

            container3.closest("tr").find(".tdItemCode").text(getDisplayMoldPartNo(data.d));
            container3.closest("tr").find(".tdItemName").text(getDisplayMoldPartName(data.d));
            container3.closest("tr").find(".tdTool").text(getDisplayMoldTool(data.d));
            container3.closest("tr").find(".tdModel").text(getDisplayMoldModel(data.d));

            container4.closest("tr").find(".tdItemCode").text(getDisplayMoldPartNo(data.e));
            container4.closest("tr").find(".tdItemName").text(getDisplayMoldPartName(data.e));
            container4.closest("tr").find(".tdTool").text(getDisplayMoldTool(data.e));
            container4.closest("tr").find(".tdModel").text(getDisplayMoldModel(data.e));

            container5.closest("tr").find(".tdItemCode").text(getDisplayMoldPartNo(data.f));
            container5.closest("tr").find(".tdItemName").text(getDisplayMoldPartName(data.f));
            container5.closest("tr").find(".tdTool").text(getDisplayMoldTool(data.f));
            container5.closest("tr").find(".tdModel").text(getDisplayMoldModel(data.f));


            populateSelectMoldCtrl(function(list){
                
                let options1 = '<option value="">-Select-</option>';
                for(let index = 0; index < list.length; index++){
                    let moldCtrl = list[index].c;
                    let moldPartCode = getDisplayMoldPartNo(moldCtrl);
                    let moldPartName = getDisplayMoldPartName(moldCtrl);

                    let selected = (selected1 == moldCtrl)? "selected":"";

                    options1 += '<option value="'+ moldCtrl +'" '+selected+'>'+ moldCtrl +' | '+ moldPartCode+' | '+ moldPartName+'</option>';
                }
                container1.html(options1);

                let options2 = '<option value="">-Select-</option>';
                for(let index = 0; index < list.length; index++){
                    let moldCtrl = list[index].c;
                    let moldPartCode = getDisplayMoldPartNo(moldCtrl);
                    let moldPartName = getDisplayMoldPartName(moldCtrl);

                    let selected = (selected2 == moldCtrl)? "selected":"";

                    options2 += '<option value="'+ moldCtrl +'" '+selected+'>'+ moldCtrl +' | '+ moldPartCode+' | '+ moldPartName+'</option>';
                }
                container2.html(options2);

                let options3 = '<option value="">-Select-</option>';
                for(let index = 0; index < list.length; index++){
                    let moldCtrl = list[index].c;
                    let moldPartCode = getDisplayMoldPartNo(moldCtrl);
                    let moldPartName = getDisplayMoldPartName(moldCtrl);

                    let selected = (selected3 == moldCtrl)? "selected":"";

                    options3 += '<option value="'+ moldCtrl +'" '+selected+'>'+ moldCtrl +' | '+ moldPartCode+' | '+ moldPartName+'</option>';
                }
                container3.html(options3);

                let options4 = '<option value="">-Select-</option>';
                for(let index = 0; index < list.length; index++){
                    let moldCtrl = list[index].c;
                    let moldPartCode = getDisplayMoldPartNo(moldCtrl);
                    let moldPartName = getDisplayMoldPartName(moldCtrl);

                    let selected = (selected4 == moldCtrl)? "selected":"";

                    options4 += '<option value="'+ moldCtrl +'" '+selected+'>'+ moldCtrl +' | '+ moldPartCode+' | '+ moldPartName+'</option>';
                }
                container4.html(options4);

                let options5 = '<option value="">-Select-</option>';
                for(let index = 0; index < list.length; index++){
                    let moldCtrl = list[index].c;
                    let moldPartCode = getDisplayMoldPartNo(moldCtrl);
                    let moldPartName = getDisplayMoldPartName(moldCtrl);

                    let selected = (selected5 == moldCtrl)? "selected":"";

                    options5 += '<option value="'+ moldCtrl +'" '+selected+'>'+ moldCtrl +' | '+ moldPartCode+' | '+ moldPartName+'</option>';
                }
                container5.html(options5);
                
                $('#selectMoldCtrl1, #selectMoldCtrl2, #selectMoldCtrl3, #selectMoldCtrl4, #selectMoldCtrl5').select2({
                    minimumInputLength: 0, // Set to 0 to always show the search bar
                    allowClear: true, 
                    placeholder: 'Select Mold'
                });
                

            });
           
        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });

}

