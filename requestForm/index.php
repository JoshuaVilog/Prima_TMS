<!DOCTYPE html>
<html lang="en">
	
    <?php include "../header.php";?>

	<body class="no-skin">
		<?php include "../navbar.php";?>

		<div class="main-container ace-save-state" id="main-container">
			<script type="text/javascript">
				try{ace.settings.loadState('main-container')}catch(e){}
			</script>

			<?php include "../sidebar.php";?>
			<div class="main-content">
				<div class="main-content-inner">
					<div class="page-content">
                        <div class="page-header">
                            <!-- <h1>Mold</h1> -->
                        </div>
						<div class="row">
                            <div class="col-xs-12 col-sm-4 pricing-box">
                                <div class="widget-box widget-color-orange">
                                    <div class="widget-header">
                                        <h5 class="widget-title bigger lighter">REQUEST FORM</h5>
                                    </div>
                                    <div class="widget-body">
                                        <div class="widget-main">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label>
                                                            <strong>MOLD CTRL:</strong>
                                                        </label>
                                                        <!-- <input type="text" id="txtMoldCtrl" class="form-control" placeholder="Enter Mold Control"> -->
                                                        <!-- <div class="input-group input-group-lg">
                                                            <input type="text" class="form-control" id="txtSearchMoldCtrl" placeholder="Enter Mold Control">
                                                            <span class="input-group-btn">
                                                                <button class="btn btn-lg btn-primary" id="btnSearchMoldCtrl">
                                                                    Search
                                                                </button>
                                                            </span>
                                                        </div> -->
                                                        <select id="selectMoldCtrl" style="width:100%; height: 50px"></select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="containerMoldInfo">
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-12">
                                                        <div class="form-group">
                                                            <label>
                                                                <strong>ITEM NAME:</strong>
                                                            </label>
                                                            <input type="text" class="form-control disabled" id="txtMoldItemName">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label>
                                                                <strong>CUSTOMER:</strong>
                                                            </label>
                                                            <input type="text" class="form-control disabled" id="txtMoldCustomer">
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label>
                                                                <strong>MODEL:</strong>
                                                            </label>
                                                            <input type="text" class="form-control disabled" id="txtMoldModel">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="form-group">
                                                <label for="">
                                                    <strong>TYPE:</strong>
                                                </label>
                                                <select id="selectType" class="form-control" ></select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">
                                                    <strong>SELECT STATUS:</strong>
                                                </label>
                                                <select id="selectProcess" class="form-control">
                                                    <option value="">-Select-</option>
                                                    <option value="1">FOR REPAIR</option>
                                                    <option value="2">FOR PM</option>
                                                    <option value="3">FOR TRIAL / NEW MOLD</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">
                                                    <strong>PR #:</strong>
                                                </label>
                                                <input type="text" id="txtPR" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label for="">
                                                    <strong>REQUEST BY:</strong>
                                                </label>
                                                <input type="text" id="txtRequestedBy" class="form-control" oninput="this.value = this.value.toUpperCase()">
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="">
                                                            <strong>REQUEST DATE:</strong>
                                                        </label>
                                                        <input type="date" id="txtDateRequest" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="">
                                                            <strong>REQUEST TIME:</strong>
                                                        </label>
                                                        <input type="time" id="txtTimeRequest" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="">
                                                            <strong>TARGET DATE:</strong>
                                                        </label>
                                                        <input type="date" id="txtTargetDate" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="">
                                                            <strong>TARGET TIME:</strong>
                                                        </label>
                                                        <input type="time" id="txtTargetTime" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="">
                                                    <strong>CATEGORY:</strong>
                                                </label>
                                                <select id="selectCategory" class="form-control" ></select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">
                                                    <strong>DEFECT:</strong>
                                                </label>
                                                <!-- <select id="selectDefect" class="form-control" disabled></select> -->
                                                <div class="input-group input-group-lg" id="inputGroupDefect">
                                                    <select id="selectDefect" class="form-control" ></select>
                                                    <input type="text" id="txtAddNewDefect" class="form-control" style="display:none">

                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-primary" id="btnAddNewDefect" >New</button>
                                                        <button type="button" class="btn btn-success" style="display:none" id="btnSaveNewDefect">
                                                            <i class="ace-icon glyphicon glyphicon-ok"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-danger" style="display:none" id="btnCancelAddDefect">
                                                            <i class="ace-icon glyphicon glyphicon-remove"></i> 
                                                        </button>
                                                    </span>
                                                </div>
                                                <!-- <div class="input-group input-group-lg" id="inputGroupDefect">
                                                    <select id="selectDefect" class="form-control"></select>
                                                    <input type="text" id="txtAddNewDefect" class="form-control" style="display:none">

                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-primary" id="btnAddNewDefect">New</button>
                                                        <button type="button" class="btn btn-success" style="display:none" id="btnSaveNewDefect">
                                                            <i class="ace-icon glyphicon glyphicon-ok"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-danger" style="display:none" id="btnCancelAddDefect">
                                                            <i class="ace-icon glyphicon glyphicon-remove"></i> 
                                                        </button>
                                                    </span>
                                                </div> -->
                                            </div>
                                            <div class="form-group">
                                                <label for="">
                                                    <strong>DEFECT/LOCATION:</strong>
                                                </label>
                                                <input type="text" id="txtDefectLocation" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label for="">
                                                    <strong>LOCATION:</strong>
                                                </label>
                                                <select id="selectLocation" class="form-control" ></select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">
                                                    <strong>PRIORITY:</strong>
                                                </label>
                                                <select id="selectPriority" class="form-control" ></select>
                                            </div>
                                            <div class="form-group">
                                                <label for="">
                                                    <strong>REMARKS:</strong>
                                                </label>
                                                <textarea id="txtRemarks" rows="5" class="form-control"></textarea>
                                            </div>
                                            <hr>
                                            <button id="btnSubmitRequest" class="btn btn-success btn-lg">SUBMIT</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 pricing-box">
                                <div class="widget-box widget-color-orange" style="min-height:1000px;">
                                    <div class="widget-header">
                                        <h5 class="widget-title bigger lighter">REQUEST LIST</h5>
                                    </div>
                                    <div class="widget-body">
                                        <div class="widget-main">
                                            <div class="col">
                                                <!-- <button type="button" class="btn btn-primary" id="btnOpenModalAddUser">Add User</button> -->
                                            </div>
                                            <div id="table-record"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
                        
					</div>
				</div>
			</div>

			<?php include "../footer.php";?>

			<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
				<i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
			</a>

            <!-- MODAL  -->
            <?php
            // include "modal/modalEditReport.php";
            include "modal/modalEditRequest.php";
            include "../getCodes/modal/modalViewReport.php";
            include "../getCodes/modal/modalViewMoldHistory.php";
            ?>
		</div>
        <?php include "../script.php";?>
        <script src="js/display.js?v=<?php echo $generateRandomNumber; ?>"></script>
        <script src="js/functions.js?v=<?php echo $generateRandomNumber; ?>"></script>
        <script src="js/select.js?v=<?php echo $generateRandomNumber; ?>"></script>
        <script src="js/insert.js?v=<?php echo $generateRandomNumber; ?>"></script>
		<script src="js/update.js?v=<?php echo $generateRandomNumber; ?>"></script>
	</body>
</html>
