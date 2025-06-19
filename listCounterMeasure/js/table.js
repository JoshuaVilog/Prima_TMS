$(document).ready(function() {
    
    setTimeout(fetchDataAndInitializeTable, 1000)
});

var table;

function fetchDataAndInitializeTable() {

    let recordList = JSON.parse(localStorage.getItem(lsCounterMeasureList));
    
    table = new Tabulator("#table-records", {
        // pagination: "local", // Enable local pagination
        // paginationSize: 10, // Number of rows per page
        // paginationSizeSelector: [10, 25, 50, 100], // Page size options
        // page: 1, // Initial page number
        // ajaxURL: "your_data_endpoint_here.json",
        data: recordList,
        layout: "fitDataFill", // Adjust table height based on the data
        columns: [
            {title: "ID", field: "a", headerFilter: "input"},
            {title: "DESCRIPTION", field: "b", headerFilter: "input"},
            {title: "Action", formatter: buttonFormatter, hozAlign: "left", frozen:true},
        ],
    });
}

function buttonFormatter(cell, formatterParams, onRendered) {
    let rowData = cell.getRow().getData();

    let edit= '<button class="btn btn-success btn-sm mx-1" onclick="modifyRecord(\''+ rowData.a +'\',\''+ rowData.b +'\')">Modify</button>';

    cell.getElement().style.backgroundColor == "#ffffff";

    return edit;
    // return '';
}

function modifyRecord(id, desc) {

    $("#txtEditDesc").val(desc);
    $("#hiddenID").val(id);
    $('#modalEdit').modal('show');
    
    
}