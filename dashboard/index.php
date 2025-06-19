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
						<div id="dashboard2">
							<div class="row">
								<div class="col-sm-2 ">
									<div id="table2">
										<table style="width:100%">
											<tbody>
												<tr>
													<td colspan="2">AS OF <span id="spanAsPer"></span></td>
												</tr>
												<tr>
													<td style="background-color: #B666D2">FOR REPAIR</td>
													<td id="tdCountForRepair">0</td>
												</tr>
												<tr>
													<td style="background-color: #1589FF">FOR PM</td>
													<td id="tdCountForPM">0</td>
												</tr>
												<tr>
													<td style="background-color: #FFA600">FOR TRIAL</td>
													<td id="tdCountForTrial">0</td>
												</tr>
												<tr>
													<td style="background-color: #FFE87C">QC INSPECTION</td>
													<td id="tdCountQC">0</td>
												</tr>
												<tr>
													<td>TOTAL</td>
													<td id="tdTotalOverAll">0</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="col-sm-2">
									<div id="table3">
										<table style="width:100%">
											<tbody>
												<tr>
													<td colspan="2">STATUS TODAY</td>
												</tr>
												<tr>
													<td style="background-color: #B666D2">FOR REPAIR</td>
													<td id="tdCountForRepairToday">0</td>
												</tr>
												<tr>
													<td style="background-color: #1589FF">FOR PM</td>
													<td id="tdCountForPMToday">0</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="col-sm-1"></div>
								<div class="col-sm-8 col-xs-12">
									<div>
										<div class="table-responsive" id="tableDashboard">
											<table class="table" style="width: 100%">
												<tbody>
													<tr>
														<td colspan="7">
															<strong>
																LATEST UPDATE 
																<span id="spanDisplayPriorityDatetime"></span>
															</strong>
														</td>
													</tr>
													<tr>
														<td style="width: 10px"><strong>PRIORITY</strong></td>
														<td><strong>MOLD CTRL</strong></td>
														<td><strong>PART CODE</strong></td>
														<td><strong>PART NAME</strong></td>
														<td><strong>TOOL</strong></td>
														<td><strong>DATE REQUEST</strong></td>
														<td><strong>LOCATION</strong></td>
													</tr>
													<tr>
														<td style="width: 10px">1</td>
														<td id="tdTop1"></td>
														<td class="tdPartCode"></td>
														<td class="tdPartName"></td>
														<td class="tdTool"></td>
														<td class="tdDateRequest"></td>
														<td class="tdLocation"></td>
													</tr>
													<tr>
														<td style="width: 10px">2</td>
														<td id="tdTop2"></td>
														<td class="tdPartCode"></td>
														<td class="tdPartName"></td>
														<td class="tdTool"></td>
														<td class="tdDateRequest"></td>
														<td class="tdLocation"></td>
													</tr>
													<tr>
														<td style="width: 10px">3</td>
														<td id="tdTop3"></td>
														<td class="tdPartCode"></td>
														<td class="tdPartName"></td>
														<td class="tdTool"></td>
														<td class="tdDateRequest"></td>
														<td class="tdLocation"></td>
													</tr>
													<tr>
														<td style="width: 10px">4</td>
														<td id="tdTop4"></td>
														<td class="tdPartCode"></td>
														<td class="tdPartName"></td>
														<td class="tdTool"></td>
														<td class="tdDateRequest"></td>
														<td class="tdLocation"></td>
													</tr>
													<tr>
														<td style="width: 10px">5</td>
														<td id="tdTop5"></td>
														<td class="tdPartCode"></td>
														<td class="tdPartName"></td>
														<td class="tdTool"></td>
														<td class="tdDateRequest"></td>
														<td class="tdLocation"></td>
													</tr>
												</tbody>
											</table>
											
										</div>
									</div>
									<div id="table1"></div>
									
								</div>
								<!-- <div class="col-sm-1">
									<p>
										<div class="pull-right">
											<button type="button" class="btn btn-success" id="btnExport">Export</button>
										</div>
									</p>
								</div> -->
							</div>
							<div id="dashboard2-table1">
							</div>
						</div>
					</div>
				</div>
			</div>

			<?php include "../footer.php";?>

			<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
				<i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
			</a>
		</div><!-- /.main-container -->
        <?php include "../script.php";?>
		<script src="js/functions.js?v=<?php echo $generateRandomNumber; ?>"></script>
		<!-- <script src="js/table.js?v=<?php echo $generateRandomNumber; ?>"></script>
		<script src="js/select.js?v=<?php echo $generateRandomNumber; ?>"></script> -->
	</body>
</html>
