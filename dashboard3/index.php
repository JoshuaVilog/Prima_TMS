<!DOCTYPE html>
<html lang="en">
	
    <?php include "../header.php";?>
	<style>
		table{
			width: 100%
		}
		table th, td{
			border: 1px solid black;
			text-align: center;
		}
		table tbody td{
			font-size: 12px;
		}
		table tbody .tdStatus{
			width: 300px;
			text-align: left;
			padding: 3px;
		}
	</style>
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
						<div id="">
							<div class="row" id="tableDashboard1">
								<div class="col-sm-8">
									<table>
										<thead>
											<tr>
												<th colspan="2">STATUS</th>
												<th>E</th>
												<th>L</th>
												<th>M</th>
												<th>S</th>
												<th>OTHERS</th>
												<th>TOTAL</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td rowspan="4" style="width: 100px">REPAIR</td>
												<td class="tdStatus">
													MOLD ASSY 
													<input type="hidden" class="hiddenStatus" value="1">
													<input type="hidden" class="hiddenType hiddenTypeRepair" value="">
												</td>
												<td><span id="totalStatus0C1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="totalStatus0C2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="totalStatus0C3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="totalStatus0C4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="totalStatus0C5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td><strong id="tdTotalRepair0"></strong></td>
											</tr>
											<tr>
												<td class="tdStatus">
													ON GOING MOLD REPAIR 
													<input type="hidden" class="hiddenStatus" value="">
													<input type="hidden" class="hiddenType hiddenTypeRepair" value="">
												</td>
												<td><span id="totalStatus1C1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="totalStatus1C2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="totalStatus1C3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="totalStatus1C4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="totalStatus1C5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td><strong id="tdTotalRepair1"></strong></td>
											</tr>
											<tr>
												<td class="tdStatus">
													TRIAL
													<input type="hidden" class="hiddenStatus" value="3">
													<input type="hidden" class="hiddenType hiddenTypeRepair" value="">
												</td>
												<td><span id="totalStatus2C1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="totalStatus2C2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="totalStatus2C3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="totalStatus2C4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="totalStatus2C5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td><strong id="tdTotalRepair2"></strong></td>
											</tr>
											<tr>
												<td class="tdStatus">
													QC INSPECTION
													<input type="hidden" class="hiddenStatus" value="4">
													<input type="hidden" class="hiddenType hiddenTypeRepair" value="">
												</td>
												<td><span id="totalStatus3C1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="totalStatus3C2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="totalStatus3C3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="totalStatus3C4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="totalStatus3C5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td><strong id="tdTotalRepair3"></strong></td>
											</tr>
											<tr style="background-color: #d0d0d0">
												<td colspan="2">
													SUB TOTAL
													<input type="hidden" class="hiddenStatus" value="SUBTOTAL">
													<input type="hidden" class="hiddenType" value="1">
													<input type="hidden" class="hiddenType hiddenTypeRepair" value="">
												</td>
												<td><span id="tdSubtotalRepairC1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="tdSubtotalRepairC2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="tdSubtotalRepairC3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="tdSubtotalRepairC4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="tdSubtotalRepairC5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td><strong id="tdTotalAllStatusRepair"></strong></td>
											</tr>

											<tr>
												<td rowspan="4" style="width: 100px">PM</td>
												<td class="tdStatus">
													MOLD ASSY
													<input type="hidden" class="hiddenStatus" value="2">
													<input type="hidden" class="hiddenType hiddenTypePM" value="">
												</td>
												<td><span id="totalPMStatus0C1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus0C2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus0C3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus0C4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus0C5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td><strong id="tdTotalPM0"></strong></td>
											</tr>
											<tr>
												<td class="tdStatus">
													ON GOING PM
													<input type="hidden" class="hiddenStatus" value="2">
													<input type="hidden" class="hiddenType hiddenTypePM" value="">
												</td>
												<td><span id="totalPMStatus1C1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus1C2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus1C3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus1C4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus1C5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td><strong id="tdTotalPM1"></strong></td>
											</tr>
											<tr>
												<td class="tdStatus">
													TRIAL
													<input type="hidden" class="hiddenStatus" value="3">
													<input type="hidden" class="hiddenType hiddenTypePM" value="">
												</td>
												<td><span id="totalPMStatus2C1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus2C2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus2C3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus2C4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus2C5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td><strong id="tdTotalPM2"></strong></td>
											</tr>
											<tr>
												<td class="tdStatus">
													QC INSPECTION
													<input type="hidden" class="hiddenStatus" value="4">
													<input type="hidden" class="hiddenType hiddenTypePM" value="">
												</td>
												<td><span id="totalPMStatus3C1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus3C2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus3C3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus3C4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="totalPMStatus3C5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td><strong id="tdTotalPM3"></strong></td>
											</tr>
											<tr style="background-color: #d0d0d0">
												<td colspan="2">
													SUB TOTAL
													<input type="hidden" class="hiddenStatus" value="SUBTOTAL">
													<input type="hidden" class="hiddenType hiddenTypePM" value="">
												</td>
												<td><span id="tdSubtotalPmC1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="tdSubtotalPmC2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="tdSubtotalPmC3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="tdSubtotalPmC4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="tdSubtotalPmC5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td><strong id="tdTotalAllStatusPM"></strong></td>
											</tr>
											<tr style="background-color: #c1f0c8">
												<td colspan="2">
													TOTAL
													<input type="hidden" class="hiddenStatus" value="OVERALLTOTAL">
													<input type="hidden" class="hiddenType" value="OVERALLTOTAL">
												</td>
												<td><span id="tdTotalC1"></span><input type="hidden" class="hiddenCustomer1 hiddenCustomer" value=""></td>
												<td><span id="tdTotalC2"></span><input type="hidden" class="hiddenCustomer2 hiddenCustomer" value=""></td>
												<td><span id="tdTotalC3"></span><input type="hidden" class="hiddenCustomer3 hiddenCustomer" value=""></td>
												<td><span id="tdTotalC4"></span><input type="hidden" class="hiddenCustomer4 hiddenCustomer" value=""></td>
												<td><span id="tdTotalC5"></span><input type="hidden" class="hiddenCustomer5 hiddenCustomer" value=""></td>
												<td id="tdTotalOverall"><span></span></td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="col-sm-4">
									<table>
										<thead>
											<tr>
												<th>P3</th>
												<th>P1</th>
												<th>N/A</th>
												<th>TOTAL</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td id="totalLocationP3"></td>
												<td id="totalLocationP1"></td>
												<td id="totalLocationNA"></td>
												<td id="totalLocationAll"></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="row" style="margin-top:15px">
							<div class="col-sm-4">
								<div class="form-group">
									<label>
										<strong>TYPE:</strong>
										<span id="spanDisplayType"></span>
									</label>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label>
										<strong>STATUS:</strong>
										<span id="spanDisplayStatus"></span>
									</label>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label>
										<strong>CUSTOMER:</strong>
										<span id="spanDisplayCustomer"></span>
									</label>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div id="table-records"></div>
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
