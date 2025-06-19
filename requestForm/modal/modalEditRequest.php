<div id="modalEditRequest" class="modal fade">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Edit Report</h4>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="">
                    <strong>PR #:</strong>
                </label>
                <input type="text" id="txtEditPR" class="form-control">
            </div>
            <div class="form-group">
                <label for="">
                    <strong>REQUEST BY:</strong>
                </label>
                <input type="text" id="txtEditRequestedBy" class="form-control" oninput="this.value = this.value.toUpperCase()">
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="">
                            <strong>REQUEST DATE:</strong>
                        </label>
                        <input type="date" id="txtEditDateRequest" class="form-control" >
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="">
                            <strong>REQUEST TIME:</strong>
                        </label>
                        <input type="time" id="txtEditTimeRequest" class="form-control" >
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="">
                            <strong>TARGET DATE:</strong>
                        </label>
                        <input type="date" id="txtEditTargetDate" class="form-control" >
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="">
                            <strong>TARGET TIME:</strong>
                        </label>
                        <input type="time" id="txtEditTargetTime" class="form-control" >
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="">
                    <strong>TYPE:</strong>
                </label>
                <select id="selectEditType" class="form-control" ></select>
            </div>
            <div class="form-group">
                <label for="">
                    <strong>CATEGORY:</strong>
                </label>
                <select id="selectEditCategory" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="">
                    <strong>DEFECT:</strong>
                </label>
                <select id="selectEditDefect" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="">
                    <strong>DEFECT/LOCATION:</strong>
                </label>
                <input type="text" id="txtEditDefectLocation" class="form-control">
            </div>
            <div class="form-group">
                <label for="">
                    <strong>LOCATION:</strong>
                </label>
                <select id="selectEditLocation" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="">
                    <strong>PRIORITY:</strong>
                </label>
                <select id="selectEditPriority" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="">
                    <strong>REMARKS:</strong>
                </label>
                <textarea id="txtEditRemarks" rows="5" class="form-control"></textarea>
            </div>
            <input type="hidden" id="hiddenRequestID">
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" id="btnUpdateRequest">Update</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            
        </div>
    </div>

  </div>
</div>