<?php require_once 'includes/header.php'; ?>


<div class="row">
	<div class="col-md-12">

		<ol class="breadcrumb">
			<li><a href="dashboard.php">Home</a></li>		  
			<li class="active">Category</li>
		</ol>

		<div class="panel panel-default">
			<div class="panel-heading">
				<div class="page-heading"> <i class="glyphicon glyphicon-edit"></i> Manage Category</div>
			</div> <!-- /panel-heading -->
			<div class="panel-body">

				<div class="remove-messages"></div>

				<div class="div-action pull pull-right" style="padding-bottom:20px;">
					<button class="btn btn-default button1" data-toggle="modal" data-target="#addCategoriesModel"> <i class="glyphicon glyphicon-plus-sign"></i> Add Category </button>
				</div> <!-- /div-action -->				
				
				<table class="table" id="manageCategoriesTable">
					<thead>
						<tr>
							<th>Category ID <div class="glyphicon glyphicon-sort"></div></th>							
							<th>Category Name <div class="glyphicon glyphicon-sort"></div></th>
							<th>Description <div class="glyphicon glyphicon-sort"></div></th>
							<th style="width:15%;">Options</th>
						</tr>
					</thead>
				</table>
				<!-- /table -->

			</div> <!-- /panel-body -->
		</div> <!-- /panel -->		
	</div> <!-- /col-md-12 -->
</div> <!-- /row -->

<div class="modal fade" id="addCategoriesModel" tabindex="-1" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">

			<form class="form-horizontal" id="submitCategoriesForm" action="php_action/createCategory.php" method="POST">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title"><i class="fa fa-plus"></i> Add Category</h4>
				</div>
				<div class="modal-body">

					<div id="add-Categories-messages"></div>

					<div class="form-group">
						<label class="col-sm-3 control-label">Category Name </label>
						<label class="col-sm-1 control-label">: </label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="categoryname" placeholder="Category Name" name="categoryname" autocomplete="off">
						</div>
					</div> <!-- /form-group-->
					<div class="form-group">
						<label class="col-sm-3 control-label">Description </label>
						<label class="col-sm-1 control-label">: </label>
						<div class="col-sm-8">
							<textarea class="form-control" id="description" placeholder="Description" name="description"></textarea>
						</div>
					</div> <!-- /form-group-->	        

				</div> <!-- /modal-body -->

				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

					<button type="submit" class="btn btn-primary" id="createCategoriesBtn" data-loading-text="Loading..." autocomplete="off">Save Changes</button>
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

<!-- edit Categories -->
<div class="modal fade" id="editCategoriesModal" tabindex="-1" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">

			<form class="form-horizontal" id="editCategoriesForm" action="php_action/editCategory.php" method="POST">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title"><i class="fa fa-edit"></i> Edit Categoryr</h4>
				</div>
				<div class="modal-body">

					<div id="edit-Categories-messages"></div>

					<div class="modal-loading div-hide" style="width:50px; margin:auto;padding-top:50px; padding-bottom:50px;">
						<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
						<span class="sr-only">Loading...</span>
					</div>

					<div class="edit-Catgories-result">
						<div class="form-group">
							<label class="col-sm-3 control-label">Category ID: </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="cid" placeholder="Category id" name="cid" disabled>
							</div>
						</div> <!-- /form-group-->
						<div class="form-group">
							<label class="col-sm-3 control-label">Category Name: </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="editCategoryName" placeholder="Category Name" name="editCategoryName" autocomplete="off">
							</div>
						</div> <!-- /form-group-->
						<div class="form-group">
							<label class="col-sm-3 control-label">Description </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<textarea class="form-control" id="editDescription" placeholder="Description" name="editDescription"></textarea>
							</div>
						</div> <!-- /form-group-->

					</div>         	        
					<!-- /edit categories result -->

				</div> <!-- /modal-body -->

				<div class="modal-footer editCategoriesFooter">
					<button type="button" class="btn btn-default" data-dismiss="modal"> <i class="glyphicon glyphicon-remove-sign"></i> Close</button>

					<button type="submit" class="btn btn-success" id="editCategoriesBtn" data-loading-text="Loading..." autocomplete="off"> <i class="glyphicon glyphicon-ok-sign"></i> Save Changes</button>
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
<!-- /edit categories -->

<script src="custom/js/category.js"></script>

<?php require_once 'includes/footer.php'; ?>