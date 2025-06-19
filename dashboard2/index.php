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
                        <div class="page-header center">
                            <h1>MOLD REPAIR</h1>
                        </div>
						<div class="row">
                            <div class="col-xs-12 col-sm-12 pricing-box">
                                <div class="widget-box widget-color-orange" style="min-height:1000px;">
                                    <div class="widget-header">
                                        <h5 class="widget-title bigger lighter">List</h5>
                                    </div>
                                    <div class="widget-body">
                                        <div class="widget-main">
                                            <div id="table-records"></div>
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
	</body>
</html>
