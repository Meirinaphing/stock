<?php require_once 'includes/header.php'; ?>


<div class="row">
	<div class="col-md-12">

		<ol class="breadcrumb">
			<li><a href="dashboard.php">Home</a></li>		  
			<li class="active">Category</li>
		</ol>

		<div class="panel panel-default">
			<div class="panel-heading">
				<div class="page-heading"> <i class="glyphicon glyphicon-edit"></i> Manage Categories</div>
			</div> <!-- /panel-heading -->
			<div class="panel-body">

				<div class="remove-messages"></div>

				<div class="div-action pull pull-right" style="padding-bottom:20px;">
					<button class="btn btn-default button1" data-toggle="modal" id="addCategoriesModalBtn" data-target="#addCategoriesModal"> <i class="glyphicon glyphicon-plus-sign"></i> Add Categories </button>
				</div> <!-- /div-action -->				
				
				<table class="table" id="manageCategoriesTable">
					<thead>
						<tr>							
							<th>Categories <div class="glyphicon glyphicon-sort"></div></th>
							<th>Name <div class="glyphicon glyphicon-sort"></div></th>
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


<!-- add categories -->
<div class="modal fade" id="addCategoriesModal" tabindex="-1" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">

			<form class="form-horizontal" id="submitCategoriesForm">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title"><i class="fa fa-plus"></i> Add Categories</h4>
				</div>
				<div class="modal-body">

					<!-- localhost/php_action/createCategories?categoriesname=bababa&desc=blablabal -->

					<div id="add-categories-messages"></div>

					<div class="form-group">
						<label for="categoriesName" class="col-sm-3 control-label">Categories Name </label>
						<label class="col-sm-1 control-label">: </label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="categoriesname" placeholder="Categories Name" name="categoriesname" autocomplete="off">
						</div>
					</div> <!-- /form-group-->	         	        
					<div class="form-group">
						<label class="col-sm-3 control-label">Description </label>
						<label class="col-sm-1 control-label">: </label>
						<div class="col-sm-8">
							<textarea class="form-control" id="desc" placeholder="Description" name="desc"></textarea>
						</div>
					</div> <!-- /form-group-->      	        
				</div> <!-- /modal-body -->

				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal"> <i class="glyphicon glyphicon-remove-sign"></i> Close</button>
					
					<button type="submit" class="btn btn-primary" id="createCategoriesBtn" data-loading-text="Loading..." autocomplete="off"> <i class="glyphicon glyphicon-ok-sign"></i> Save Changes</button>
				</div> <!-- /modal-footer -->	      
			</form> <!-- /.form -->	     
		</div> <!-- /modal-content -->    
	</div> <!-- /modal-dailog -->
</div> 
<!-- /add categories -->


<!-- edit categories brand -->
<div class="modal fade" id="editCategoriesModal" tabindex="-1" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">

			<form class="form-horizontal" id="editCategoriesForm" action="php_action/editCategories.php" method="POST">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title"><i class="fa fa-edit"></i> Edit Brand</h4>
				</div>
				<div class="modal-body">

					<div id="edit-categories-messages"></div>

					<div class="modal-loading div-hide" style="width:50px; margin:auto;padding-top:50px; padding-bottom:50px;">
						<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
						<span class="sr-only">Loading...</span>
					</div>

					<div class="edit-categories-result">
						<div class="form-group">
							<label for="editCatId" class="col-sm-3 control-label">Category ID: </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="cid" placeholder="Category id" name="cid" disabled>
							</div>
						</div> <!-- /form-group-->
						<div class="form-group">
							<label for="editCategoriesName" class="col-sm-3 control-label">Categories Name </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="editCategoriesName" placeholder="Categories Name" name="editCategoriesName" autocomplete="off">
							</div>
						</div> <!-- /form-group-->
						<div class="form-group">
							<label for="brandName" class="col-sm-3 control-label">Description </label>
							<label class="col-sm-1 control-label">: </label>
							<div class="col-sm-8">
								<textarea class="form-control" id="editDesc" placeholder="Description" name="editDesc"></textarea>
							</div>
						</div> <!-- /form-group-->
					</div>         	        
					<!-- /edit brand result -->

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
<!-- /categories brand -->

<script src="custom/js/categories.js"></script>

<?php require_once 'includes/footer.php'; ?>