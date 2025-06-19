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
                            <h1>Mold</h1>
                        </div>
						<div class="row">
                            <div class="col-xs-6 col-sm-12 pricing-box">
                                <div class="widget-box widget-color-orange">
                                    <div class="widget-header">
                                        <h5 class="widget-title bigger lighter">Mold List</h5>
                                    </div>
                                    <div class="widget-body">
                                        <div class="widget-main">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <button type="button" class="btn btn-primary" id="btnOpenModalAdd">Add</button>
                                                    <button type="button" class="btn btn-info" id="btnExport">Export</button>
                                                    <!-- <button type="button" class="btn btn-primary" id="">Generate QR Code</button> -->
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="pull-right">
                                                        <p>
                                                            <strong>LATEST UPDATE BY: </strong>
                                                            <span id="displayLastUpdate"></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div id="table-record"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
                        <!-- <div class="row">
                            <div class="col-xs-6 col-sm-12 pricing-box">
                                <div class="widget-box widget-color-orange" style="min-height:1000px">
                                    <div class="widget-header">
                                        <h5 class="widget-title bigger lighter">Mold List</h5>
                                    </div>
                                    <div class="widget-body">
                                        <div class="widget-main">
                                            <div id="containerQrCode" class="row">

                                                

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div> -->
					</div>
				</div>
			</div>

			<?php include "../footer.php";?>

			<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
				<i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
			</a>

            <!-- MODAL  -->
            <?php
            include "modal/modalAdd.php";
            include "modal/modalEdit.php";
            include "modal/modalQR.php";
            ?>
		</div>
        <?php include "../script.php";?>
        <script src="js/table.js?v=<?php echo $generateRandomNumber; ?>"></script>
        <script src="js/functions.js?v=<?php echo $generateRandomNumber; ?>"></script>
        <!-- <script src="js/select.js?v=<?php echo $generateRandomNumber; ?>"></script> -->
        <script src="js/insert.js?v=<?php echo $generateRandomNumber; ?>"></script>
		<script src="js/update.js?v=<?php echo $generateRandomNumber; ?>"></script>
	</body>
</html>
