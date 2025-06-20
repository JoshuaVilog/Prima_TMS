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
                        </div>
						<div class="row">
                            <div class="col-xs-12 col-sm-12 pricing-box">
                                <div class="widget-box widget-color-orange">
                                    <div class="widget-header">
                                        <h5 class="widget-title bigger lighter"></h5>
                                    </div>
                                    <div class="widget-body">
                                        <div class="widget-main">
                                        <!-- <div class="row">
                                            <div class="col-sm-12">
                                                <h3 for="">
                                                    As of &nbsp; <span id="displayDate"></span>
                                                </h3>
                                            </div>
                                        </div> -->
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <table class="table table-bordered" id="tableForm">
                                                    <thead>
                                                        <tr>
                                                            <th class="center" style="">TOP</th>
                                                            <th class="center">MOLD CTRL</th>
                                                            <th class="center">ITEM CODE</th>
                                                            <th class="center">ITEM NAME</th>
                                                            <th class="center">TOOL</th>
                                                            <th class="center">MODEL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="tbody-priority">
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <div class="input-group input-group-sm">
                                                                    <select class="form-control selectMoldCtrl" id="selectMoldCtrl1" style="width: 100%; height:20px"></select>
                                                                    <span class="input-group-btn btn-xs">
                                                                        <button class="btn btn-danger btn-xs btnRemovePriority">
                                                                            <i class="ace-icon glyphicon glyphicon-remove"></i> 
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td class="tdItemCode"></td>
                                                            <td class="tdItemName"></td>
                                                            <td class="tdTool"></td>
                                                            <td class="tdModel"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                                <div class="input-group input-group-sm">
                                                                    <select class="form-control selectMoldCtrl" id="selectMoldCtrl2" style="width: 100%; height:20px"></select>
                                                                    <span class="input-group-btn btn-xs">
                                                                        <button class="btn btn-danger btn-xs btnRemovePriority">
                                                                            <i class="ace-icon glyphicon glyphicon-remove"></i> 
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td class="tdItemCode"></td>
                                                            <td class="tdItemName"></td>
                                                            <td class="tdTool"></td>
                                                            <td class="tdModel"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                                <div class="input-group input-group-sm">
                                                                    <select class="form-control selectMoldCtrl" id="selectMoldCtrl3" style="width: 100%; height:20px"></select>
                                                                    <span class="input-group-btn btn-xs">
                                                                        <button class="btn btn-danger btn-xs btnRemovePriority">
                                                                            <i class="ace-icon glyphicon glyphicon-remove"></i> 
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td class="tdItemCode"></td>
                                                            <td class="tdItemName"></td>
                                                            <td class="tdTool"></td>
                                                            <td class="tdModel"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                                <div class="input-group input-group-sm">
                                                                <select class="form-control selectMoldCtrl" id="selectMoldCtrl4" style="width: 100%; height:20px"></select>
                                                                    <span class="input-group-btn btn-xs">
                                                                        <button class="btn btn-danger btn-xs btnRemovePriority">
                                                                            <i class="ace-icon glyphicon glyphicon-remove"></i> 
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td class="tdItemCode"></td>
                                                            <td class="tdItemName"></td>
                                                            <td class="tdTool"></td>
                                                            <td class="tdModel"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>
                                                                <div class="input-group input-group-sm">
                                                                <select class="form-control selectMoldCtrl" id="selectMoldCtrl5" style="width: 100%; height:30px"></select>
                                                                    <span class="input-group-btn btn-xs">
                                                                        <button class="btn btn-danger btn-xs btnRemovePriority">
                                                                            <i class="ace-icon glyphicon glyphicon-remove"></i> 
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td class="tdItemCode"></td>
                                                            <td class="tdItemName"></td>
                                                            <td class="tdTool"></td>
                                                            <td class="tdModel"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <button class="btn btn-success btn-xlg" id="btnSave">Save</button>
                                            </div>
                                        </div>
                                        <hr>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 pricing-box">
                                <div class="widget-box widget-color-orange">
                                    <div class="widget-header">
                                        <h5 class="widget-title bigger lighter">RECENT PRIORITIES</h5>
                                    </div>
                                    <div class="widget-body">
                                        <div class="widget-main">
                                            <div id="containerRecentPriorities">

                                                <!-- <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="5" class="center">AS per</th>
                                                        </tr>
                                                        <tr>
                                                            <th class="center">TOP</th>
                                                            <th class="center">MOLD CTRL</th>
                                                            <th class="center">PART CODE</th>
                                                            <th class="center">PART NAME</th>
                                                            <th class="center">TOOL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table> -->
                                                
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
            ?>
		</div>
        <?php include "../script.php";?>
        <script src="js/functions.js?v=<?php echo $generateRandomNumber; ?>"></script>
        <script src="js/insert.js?v=<?php echo $generateRandomNumber; ?>"></script>
        <!-- <script src="js/table.js?v=<?php echo $generateRandomNumber; ?>"></script> -->
		<!-- <script src="js/update.js?v=<?php echo $generateRandomNumber; ?>"></script> -->
	</body>
</html>
