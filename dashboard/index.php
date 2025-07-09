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
								<div class="col-sm-4">
									<div class="row">
										<div class="col-sm-12">
											<div id="">
												<table style="width:100%">
													<tbody>
														<tr>
															<td colspan="5">TREND TODAY</td>
														</tr>
														<tr>
															<td>DATE</td>
															<td>-</td>
															<td id="tdCurrentDate-2">0000-00-00</td>
															<td id="tdCurrentDate-1">0000-00-00</td>
															<td id="tdCurrentDate">0000-00-00</td>
														</tr>
														<tr>
															<td rowspan="7" style="background-color: #B666D2">REPAIR</td>
														</tr>
														<tr>
															<td>PLAN</td>
															<td id="tdTrendRepairPlan-2">0</td>
															<td id="tdTrendRepairPlan-1">0</td>
															<td id="tdTrendRepairPlanNow">0</td>
														</tr>
														<tr>
															<td>RESULT</td>
															<td id="tdTrendRepairResult-2">0</td>
															<td id="tdTrendRepairResult-1">0</td>
															<td id="tdTrendRepairResultNow">0</td>
														</tr>
														<tr>
															<td>GAP</td>
															<td id="tdTrendRepairGap-2">0</td>
															<td id="tdTrendRepairGap-1">0</td>
															<td id="tdTrendRepairGapNow">0</td>
														</tr>
														<tr>
															<td>%</td>
															<td id="tdTrendRepairPercent-2">0</td>
															<td id="tdTrendRepairPercent-1">0</td>
															<td id="tdTrendRepairPercentNow">0</td>
														</tr>
														<tr>
															<td>PENDING RESULT</td>
															<td id="tdTrendRepairPendingResult-2">0</td>
															<td id="tdTrendRepairPendingResult-1">0</td>
															<td id="tdTrendRepairPendingResultNow">0</td>
														</tr>
														<tr>
															<td>ADVANCE RESULT</td>
															<td id="tdTrendRepairAdvanceResult-2">0</td>
															<td id="tdTrendRepairAdvanceResult-1">0</td>
															<td id="tdTrendRepairAdvanceResultNow">0</td>
														</tr>

														<tr>
															<td rowspan="7" style="background-color: #1589FF">PM</td>
														</tr>
														<tr>
															<td>PLAN</td>
															<td id="tdTrendPMPlan-2">0</td>
															<td id="tdTrendPMPlan-1">0</td>
															<td id="tdTrendPMPlanNow">0</td>
														</tr>
														<tr>
															<td>RESULT</td>
															<td id="tdTrendPMResult-2">0</td>
															<td id="tdTrendPMResult-1">0</td>
															<td id="tdTrendPMResultNow">0</td>
														</tr>
														<tr>
															<td>GAP</td>
															<td id="tdTrendPMGap-2">0</td>
															<td id="tdTrendPMGap-1">0</td>
															<td id="tdTrendPMGapNow">0</td>
														</tr>
														<tr>
															<td>%</td>
															<td id="tdTrendPMPercent-2">0</td>
															<td id="tdTrendPMPercent-1">0</td>
															<td id="tdTrendPMPercentNow">0</td>
														</tr>
														<tr>
															<td>PENDING RESULT</td>
															<td id="tdTrendPMPendingResult-2">0</td>
															<td id="tdTrendPMPendingResult-1">0</td>
															<td id="tdTrendPMPendingResultNow">0</td>
														</tr>
														<tr>
															<td>ADVANCE RESULT</td>
															<td id="tdTrendPMAdvanceResult-2">0</td>
															<td id="tdTrendPMAdvanceResult-1">0</td>
															<td id="tdTrendPMAdvanceResultNow">0</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<!-- <div class="col-sm-2 ">
									<div id="table2">
										<table style="width:100%">
											<tbody>
												<tr>
													<td colspan="2">LATEST UPDATE <span id="spanAsPer"></span></td>
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
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									<div class="row">
										<div class="col-sm-12">
											<button class="btn btn-success btn-sm" id="btnExport">Download</button>
										</div>
									</div>
								</div>
								<div class="col-sm-2">
									<div class="row">
										<div class="col-sm-12">
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
									</div>
								</div>
								<div class="col-sm-1"></div> -->
								<div class="col-sm-8 col-xs-12">
									<style>
										/* PARA MATANGGAL YUNG SHADOW SA CAROUSEL */
										.carousel-control.left, .carousel-control.right {
											background-image:none !important;
											filter:none !important;
										}
									</style>
									<div id="myCarousel" class="carousel slide" data-ride="carousel">
										<!-- Indicators -->
										<ol class="carousel-indicators">
											<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
											<li data-target="#myCarousel" data-slide-to="1"></li>
											<li data-target="#myCarousel" data-slide-to="2"></li>
										</ol>

										<!-- Wrapper for slides -->
										<div class="carousel-inner">
											<div class="item active">
												<div>
													<div class="table-responsive" id="tablePriorityRepair">
														<table class="table" style="width: 100%">
															<tbody>
																<tr>
																	<td colspan="7">
																		<strong>
																			<span>REPAIR</span> PRIORITY LATEST UPDATE 
																			<span id="spanDisplayPriorityDatetime"></span>
																		</strong>
																	</td>
																</tr>
																<tr>
																	<td style="width: 10px"><strong>PRIORITY</strong></td>
																	<td><strong>CTRL NUMBER</strong></td>
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
											</div>

											<div class="item">
												<div>
													<div class="table-responsive" id="tablePriorityPM">
														<table class="table" style="width: 100%">
															<tbody>
																<tr>
																	<td colspan="7">
																		<strong>
																			<span>PM</span> PRIORITY LATEST UPDATE 
																			<span id="spanDisplayPriorityDatetime"></span>
																		</strong>
																	</td>
																</tr>
																<tr>
																	<td style="width: 10px"><strong>PRIORITY</strong></td>
																	<td><strong>CTRL NUMBER</strong></td>
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
											</div>
											
										</div>

										<!-- Left and right controls -->
										<a class="left carousel-control" href="#myCarousel" data-slide="prev">
											<span class="glyphicon glyphicon-chevron-left"></span>
											<span class="sr-only">Previous</span>
										</a>
										<a class="right carousel-control" href="#myCarousel" data-slide="next">
											<span class="glyphicon glyphicon-chevron-right"></span>
											<span class="sr-only">Next</span>
										</a>
									</div>
									<br>
									<br>
									<br>
									<br>
									<br>
									<br>
									<div class="row">
										<div class="col-sm-12">
											<div class="pull-right">
												<button class="btn btn-success btn-sm" id="btnExport">Download</button>
											</div>
										</div>
									</div>

									
									
									<!-- <div id="table1"></div> -->
									
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
