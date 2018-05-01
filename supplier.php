<?php require_once 'includes/header.php'; ?>


<div class="row">
	<div class="col-md-12">

		<ol class="breadcrumb">
			<li><a href="dashboard.php">Home</a></li>		  
			<li class="active">Supplier</li>
		</ol>

		<div class="panel panel-default">
			<div class="panel-heading">
				<div class="page-heading"> <i class="glyphicon glyphicon-edit"></i> Manage Supplier</div>
			</div> <!-- /panel-heading -->
			<div class="panel-body">

				<div class="remove-messages"></div>

				<div class="div-action pull pull-right" style="padding-bottom:20px;">
					<button class="btn btn-default button1" data-toggle="modal" data-target="#addBrandModel"> <i class="glyphicon glyphicon-plus-sign"></i> Add Supplier </button>
				</div> <!-- /div-action -->				
				
				<table class="table" id="manageBrandTable">
					<thead>
						<tr>
							<th>Supplier ID <div class="glyphicon glyphicon-sort"></div></th>							
							<th>Supplier Name <div class="glyphicon glyphicon-sort"></div></th>
							<th>Contact <div class="glyphicon glyphicon-sort"></div></th>
							<th>Address <div class="glyphicon glyphicon-sort"></div></th>
							<th>NPWP <div class="glyphicon glyphicon-sort"></div></th>
							<th>PIC <div class="glyphicon glyphicon-sort"></div></th>
							<th style="width:15%;">Options</th>
						</tr>
					</thead>
				</table>
				<!-- /table -->

			</div> <!-- /panel-body -->
		</div> <!-- /panel -->		
	</div> <!-- /col-md-12 -->
</div> <!-- /row -->

<div class="modal fade" id="addBrandModel" tabindex="-1" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">

			<form class="form-horizontal" id="submitBrandForm" action="php_action/createSupplier.php" method="POST">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title"><i class="fa fa-plus"></i> Add Supplier</h4>
				</div>
				<div class="modal-body">

					<div id="add-brand-messages"></div>

					<div class="form-group">
						<label for="brandName" class="col-sm-3 control-label">Supplier Name </label>
						<label class="col-sm-1 control-label">: </label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="suppliername" placeholder="Supplier Name" name="suppliername" autocomplete="off">
						</div>
					</div> <!-- /form-group-->
					<div class="form-group">
						<label for="brandName" class="col-sm-3 control-label">Contact </label>
						<label class="col-sm-1 control-label">: </label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="contact" placeholder="Supplier Contact" name="contact" autocomplete="off">
						</div>
					</div> <!-- /form-group-->
					<div class="form-group">
						<label for="brandName" class="col-sm-3 control-label">Address </label>
						<label class="col-sm-1 control-label">: </label>
						<div class="col-sm-8">
							<textarea class="form-control" id="address" placeholder="Supplier Address" name="address"></textarea>
							<!-- <input type="text" class="form-control" id="brandName" placeholder="Supplier Address" name="address" autocomplete="off"> -->
						</div>
					</div> <!-- /form-group-->
					<div class="form-group">
						<label for="brandName" class="col-sm-3 control-label">NPWP </label>
						<label class="col-sm-1 control-label">: </label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="npwp" placeholder="Supplier NPWP" name="npwp" autocomplete="off">
						</div>
					</div> <!-- /form-group-->
					<div class="form-group">
						<label for="brandName" class="col-sm-3 control-label">Person In Charge </label>
						<label class="col-sm-1 control-label">: </label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="pic" placeholder="Person In Charge Name" name="pic" autocomplete="off">
						</div>
					</div> <!-- /form-group-->         	        

				</div> <!-- /modal-body -->

				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

					<button type="submit" class="btn btn-primary" id="createBrandBtn" data-loading-text="Loading..." autocomplete="off">Save Changes</button>
				</div>
				<!-- /modal-footer -->
			</form>
			<!-- /.form -->
		</div>
		<!-- /modal-content -->
	</div>
	<!-- /modal-dailog -->
</div>
<!-- / add modal -->

<!-- edit brand -->
<div class="modal fade" id="editBrandModel" tabindex="-1" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">

			<form class="form-horizontal" id="editBrandForm" action="php_action/editSupplier.php" method="POST">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title"><i class="fa fa-edit"></i> Edit Supplier</h4>
				</div>
				<div class="modal-body">

					<div id="edit-brand-messages"></div>

					<div class="modal-loading div-hide" style="width:50px; margin:auto;padding-top:50px; padding-bottom:50px;">
						<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
						<span class="sr-only">Loading...</span>
					</div>

					<div class="edit-brand-result">
						<div class="form-group">
							<label for="editBrandName" class="col-sm-3 control-label">Supplier ID: </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="sid" placeholder="Supplier id" name="sid" disabled>
							</div>
						</div> <!-- /form-group-->
						<div class="form-group">
							<label for="editBrandName" class="col-sm-3 control-label">Supplier Name: </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="editSupplierName" placeholder="Supplier Name" name="editSupplierName" autocomplete="off">
							</div>
						</div> <!-- /form-group-->
						<div class="form-group">
							<label for="brandName" class="col-sm-3 control-label">Contact </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="editContact" placeholder="Supplier Contact" name="editContact" autocomplete="off">
							</div>
						</div> <!-- /form-group-->
						<div class="form-group">
							<label for="brandName" class="col-sm-3 control-label">Address </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<textarea class="form-control" id="editAddress" placeholder="Supplier Address" name="editAddress"></textarea>
							</div>
						</div> <!-- /form-group-->
						<div class="form-group">
							<label for="brandName" class="col-sm-3 control-label">NPWP </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="editNpwp" placeholder="Supplier NPWP" name="editNpwp" autocomplete="off">
							</div>
						</div> <!-- /form-group-->
						<div class="form-group">
							<label for="brandName" class="col-sm-3 control-label">Person In Charge </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="editPic" placeholder="Person In Charge Name" name="editPic" autocomplete="off">
							</div>
						</div> <!-- /form-group-->

					</div>         	        
					<!-- /edit brand result -->

				</div> <!-- /modal-body -->

				<div class="modal-footer editBrandFooter">
					<button type="button" class="btn btn-default" data-dismiss="modal"> <i class="glyphicon glyphicon-remove-sign"></i> Close</button>

					<button type="submit" class="btn btn-success" id="editBrandBtn" data-loading-text="Loading..." autocomplete="off"> <i class="glyphicon glyphicon-ok-sign"></i> Save Changes</button>
				</div>
				<!-- /modal-footer -->
			</form>
			<!-- /.form -->
		</div>
		<!-- /modal-content -->
	</div>
	<!-- /modal-dailog -->
</div>
<!-- / add modal -->
<!-- /edit brand -->

<script src="custom/js/supplier.js"></script>

<?php require_once 'includes/footer.php'; ?>