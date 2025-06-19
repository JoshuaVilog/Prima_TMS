
function viewReport(id){
    let list = JSON.parse(localStorage.getItem(lsMoldList));
    var result = list.find(function(value) {
        return value.b === id;
    });

    $("#txtViewMoldControlNo").val(result.b);
    $("#txtViewMoldItemCode").val(result.c);
    $("#txtViewMoldItemName").val(result.d);
    $("#txtViewMoldCustomer").val(result.e);
    $("#txtViewMoldModel").val(result.f);


    /*
    $.ajax({
        url: "/"+rootFolder+'/getRecords/getJobOrderList.php', // Replace with your server-side script URL
        type: 'POST',
        data:{
            requestID: id,
        },
        dataType: 'json',
        success: function(list) {

            table = new Tabulator("#table-joborder", {
                data: list,
                layout: "fitDataFill", // Adjust table height based on the data
                columns: [
                    {title: "JOB ORDER #", field: "b"},
                    {title: "TARGET DATE", field: "c"},
                    {title: "COUNTER MEASURE", field: "d"},
                    {title: "STATUS", field: "e"},
                    {title: "IN", field: "f"},
                    {title: "IN BY", field: "g"},
                    {title: "OUT", field: "h"},
                    {title: "OUT BY", field: "i"},
                    {title: "REMARKS", field: "j"},
                ],
            });

        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });
    */
    
    $("#modalViewReport").modal("show")

}

function viewMoldHistory(id){

    $.ajax({
        url: "/"+rootFolder+'/getRecords/getRequest.php', // Replace with your server-side script URL
        type: 'POST',
        data:{
            id: id,
        },
        dataType: 'json',
        success: function(data) {

            let list = JSON.parse(localStorage.getItem(lsMoldList));
            var result = list.find(function(value) {
                return value.b === data.c;
            });
            
            $("#txtViewMoldControlNo2").val(result.b);
            $("#txtViewMoldItemCode2").val(result.c);
            $("#txtViewMoldItemName2").val(result.d);
            $("#txtViewMoldCustomer2").val(result.e);
            $("#txtViewMoldModel2").val(result.f);


            $.ajax({
                url: "/"+rootFolder+'/getRecords/getJobOrderList.php', // Replace with your server-side script URL
                type: 'POST',
                data:{
                    requestID: id,
                },
                dataType: 'json',
                success: function(list) {

                    table = new Tabulator("#table-joborder", {
                        data: list,
                        layout: "fitDataFill", // Adjust table height based on the data
                        columns: [
                            // {title: "JOB ORDER #", field: "b"},
                            {title: "TARGET DATE", field: "c", resizable:false},
                            // {title: "AGING", field: "", formatter: displayAging},
                            {title: "COUNTER MEASURE", field: "d", formatter: displayCounterMeasure, resizable:false},
                            {title: "STATUS", field: "e", formatter: displayStatus3, resizable:false},
                            {title: "IN", field: "f", resizable:false},
                            {title: "IN BY", field: "g", formatter: displayUserFullName, resizable:false},
                            {title: "OUT", field: "h", resizable:false},
                            {title: "OUT BY", field: "i", formatter: displayUserFullName, resizable:false},
                            {title: "REMARKS", field: "j", resizable:false},
                        ],
                    });

                },
                error: function(error) {
                    alert('Error fetching data from the database.');
                }
            });

            $.ajax({
                url: "/"+rootFolder+'/getRecords/getTrialList.php', // Replace with your server-side script URL
                type: 'POST',
                data:{
                    requestID: id,
                },
                dataType: 'json',
                success: function(list) {

                    table = new Tabulator("#table-trial", {
                        data: list,
                        layout: "fitDataFill", // Adjust table height based on the data
                        columns: [
                            {title: "MACHINE", field: "b", formatter: displayMachineNo, resizable:false},
                            {title: "PIC", field: "c" , formatter: displayUserFullName, resizable:false},
                            {title: "DATE OF TRIAL", field: "d", resizable:false},
                            {title: "REMARKS", field: "e", resizable:false},
                            {title: "RESULT", field: "f", formatter: displayStatus4, resizable:false},
                            {title: "CREATED", field: "g", resizable:false},
                        ],
                    });

                },
                error: function(error) {
                    alert('Error fetching data from the database.');
                }
            });

            $.ajax({
                url: "/"+rootFolder+'/getRecords/getQCList.php', // Replace with your server-side script URL
                type: 'POST',
                data:{
                    requestID: id,
                },
                dataType: 'json',
                success: function(list) {

                    table = new Tabulator("#table-qc", {
                        data: list,
                        layout: "fitDataFill", // Adjust table height based on the data
                        columns: [
                            {title: "DATE", field: "c", resizable:false},
                            {title: "PIC", field: "b", formatter: displayUserFullName, resizable:false},
                            {title: "REMARKS", field: "d", resizable:false},
                            {title: "RESULT", field: "e", formatter: displayStatus4, resizable:false},
                            {title: "CREATED", field: "f", resizable:false},
                        ],
                    });

                },
                error: function(error) {
                    alert('Error fetching data from the databasee.');
                }
            });
            
            
            $("#modalViewMoldHistory").modal("show")
            
            
        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });

    

}