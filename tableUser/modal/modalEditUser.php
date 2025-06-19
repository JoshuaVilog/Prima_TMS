<div id="modalEditUser" class="modal fade">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">Edit User</h4>
        </div>
        <div class="modal-body" id="modal-body-edit">
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <label>Last Name:</label>
                        <input type="text" class="form-control" id="txtEditLastname" oninput="this.value = this.value.toUpperCase()">
                    </div>
                    <div class="form-group">
                        <label>First Name:</label>
                        <input type="text" class="form-control" id="txtEditFirstname" oninput="this.value = this.value.toUpperCase()">
                    </div>
                    <div class="form-group">
                        <label>Middle Name:</label>
                        <input type="text" class="form-control" id="txtEditMiddlename" oninput="this.value = this.value.toUpperCase()">
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="text" class="form-control" id="txtEditEmail">
                    </div>
                    <!-- <div class="form-group">
                        <label class="">Department:</label>
                        <select class="" id="selectDepartment" style="width:100%;"></select>
                    </div>
                    <div class="form-group">
                        <label>Position:</label>
                        <select class="" id="selectPosition" style="width:100%;"></select>
                    </div> -->
                    <div class="form-group">
                        <label>Username:</label>
                        <input type="text" class="form-control" id="txtEditUsername">
                    </div>
                    <div class="form-group">
                        <label>User Role:</label>
                        <select class="form-control" id="selectEditRole">
                        </select>
                    </div>
                </div>
            </div>
            <input type="hidden" id="hiddenID">
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" id="btnEditUser">Submit</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            
        </div>
    </div>

  </div>
</div>