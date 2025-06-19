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
                            <h1>QC</h1>
                        </div>
						<div class="row">
                        <div class="col-xs-12 col-sm-3 pricing-box">
                                <div class="widget-box widget-color-orange">
                                    <div class="widget-header">
                                        <h5 class="widget-title bigger lighter">.</h5>
                                    </div>
                                    <div class="widget-body">
                                        <div class="widget-main">
                                            <div class="form-group">
                                                <label>
                                                    <strong>MOLD CTRL:</strong>
                                                </label>
                                                <input type="text" id="txtSearchMoldCtrl" class="form-control input-lg disabled" placeholder="Select Mold on table">
                                                
                                            </div>
                                            <div id="containerUpdateStatus" style="display:none">
                                                <div class="form-group">
                                                    <label for="">
                                                        <strong>PART NAME:</strong>
                                                    </label>
                                                    <input type="text" name="" id="txtMoldDisplayPartName" class="form-control disabled">
                                                </div>
                                                <div class="form-group">
                                                    <label for="">
                                                        <strong>PART CODE:</strong>
                                                    </label>
                                                    <input type="text" name="" id="txtMoldDisplayPartCode" class="form-control disabled">
                                                </div>
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="">
                                                                <strong>MODEL:</strong>
                                                            </label>
                                                            <input type="text" name="" id="txtMoldDisplayModel" class="form-control disabled">
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6">
                                                        <div class="form-group">
                                                            <label for="">
                                                                <strong>TOOL #:</strong>
                                                            </label>
                                                            <input type="text" name="" id="txtMoldDisplayTool" class="form-control disabled">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="">
                                                        <strong>REQUEST REMARKS:</strong>
                                                    </label>
                                                    <textarea class="form-control disabled" id="txtRequestRemarks" rows="3"></textarea>
                                                </div>
                                                <hr>
                                                <!-- <div class="form-group">
                                                    <label>
                                                        <strong>MACHINE #:</strong>
                                                    </label>
                                                    <select id="txtMachineNo" style="width:100%"></select>
                                                </div> -->
                                                <div class="form-group">
                                                    <label>
                                                        <strong>REMARKS:</strong>
                                                    </label>
                                                    <textarea class="form-control" id="txtRemarks" rows="5"></textarea>
                                                </div>
                                                <input type="hidden" id="hiddenRequestID">
                                                <div class="row center">
                                                    <button id="btnUpdateStatusGood" class="btn btn-success">GOOD</button>
                                                    <button id="btnUpdateStatusNG" class="btn btn-danger">NOT GOOD</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-9 pricing-box">
                                <div class="widget-box widget-color-orange" style="min-height:1000px;">
                                    <div class="widget-header">
                                        <h5 class="widget-title bigger lighter">List</h5>
                                    </div>
                                    <div class="widget-body">
                                        <div class="widget-main">
                                            <div class="tab-table">
                                                <ul class="nav nav-tabs" id="myTab">
                                                    <li class="active">
                                                        <a data-toggle="tab" href="#tab1" aria-expanded="true">
                                                            QC
                                                        </a>
                                                    </li>

                                                    <li class="">
                                                        <a data-toggle="tab" href="#tab2" aria-expanded="false">
                                                            History
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content">
                                                    <div id="tab1" class="tab-pane fade active in">
                                                        <div id="table-records"></div>
                                                    </div>
                                                    <div id="tab2" class="tab-pane fade">
                                                        <h4>History</h4>
                                                        <div id="table-history-records"></div>
                                                    </div>
                                                </div>
                                            </div>
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
            // include "modal/modalAdd.php";
            // include "modal/modalEdit.php";
            include "../getCodes/modal/modalViewMoldHistory.php";
            ?>
		</div>
        <?php include "../script.php";?>
        <script src="js/table.js?v=<?php echo $generateRandomNumber; ?>"></script>
        <script src="js/functions.js?v=<?php echo $generateRandomNumber; ?>"></script>
        <script src="js/insert.js?v=<?php echo $generateRandomNumber; ?>"></script>
		<script src="js/update.js?v=<?php echo $generateRandomNumber; ?>"></script>
		<script src="js/select.js?v=<?php echo $generateRandomNumber; ?>"></script>
	</body>
</html>
