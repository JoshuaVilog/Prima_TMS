<div id="modalEdit" class="modal fade">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Edit Description</h4>
        </div>
        <div class="modal-body" id="modal-body-edit">
            <div class="form-group">
                <label>Description:</label>
                <input type="text" class="form-control" id="txtEditDesc" oninput="this.value = this.value.toUpperCase()">
            </div>
            <input type="hidden" id="hiddenID">

        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" id="btnUpdate">Submit</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            
        </div>
    </div>

  </div>
</div>