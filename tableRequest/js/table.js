$(document).ready(function() {
    
    fetchDataAndInitializeTable()
});

var table;

function fetchDataAndInitializeTable() {

    $.ajax({
        url: "/"+rootFolder+'/getRecords/request_request_list.php', // Replace with your server-side script URL
        type: 'POST',
        dataType: 'json',
        success: function(list) {

            table = new Tabulator("#table-records", {
                data: list,
                layout: "fitDataFill", // Adjust table height based on the data
                columns: [
                    {title: "RID", field: "a", visible: false},
                    {title: "PR NO", field: "b", headerFilter: "input"},
                    {title: "MOLD CTRL", field: "c", headerFilter: "input"},
                    {title: "DATE", field: "d"},
                    {title: "TYPE", field: "e", formatter: displayType},
                    {title: "CATEGORY", field: "f", formatter: displayCategory},
                    {title: "DEFECT", field: "g", formatter: displayDefect},
                    {title: "PRIORITY", field: "i", formatter: displayPriority},
                    {title: "REMARKS", field: "j"},
                    // {title: "STATUS", field: "i", formatter: displayStatus2, frozen: true},
                    {title: "ACTION", field: "", formatter: formatterAction, frozen: true},
                ],
            });
            table.on("rowClick", function(e, row) {
                // Get the row data for the clicked row
                var rowData = row.getData();

                $("#hiddenRequestID").val(rowData.a)
                $("#txtPRNo").val(rowData.b);
                $("#txtSearchMoldCtrl").val(rowData.c)
                $("#containerUpdateStatus").show()
                
            });


        },
        error: function(error) {
            alert('Error fetching data from the database.');
        }
    });
}
function formatterAction(cell, formatterParams, onRendered) {
    var rowData = cell.getRow().getData();
    var id = rowData.a;

    let view = '<button class="btn btn-sm btn-info" onclick="viewMoldHistory(\''+id+'\')">View Report</button>';
    return view;
}
