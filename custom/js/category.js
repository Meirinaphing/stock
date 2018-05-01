var manageCategoriesTable;

$(document).ready(function() {
	// top bar active
	$('#navCategories').addClass('active');
	
	// manage Categories table
	manageCategoriesTable = $("#manageCategoriesTable").DataTable({
		'ajax': 'php_action/fetchCategory.php',
		'order': []		
	});

	// submit Categories form function
	$("#submitCategoriesForm").unbind('submit').bind('submit', function() {
		// remove the error text
		$(".text-danger").remove();
		// remove the form error
		$('.form-group').removeClass('has-error').removeClass('has-success');			

		var categoryname = $("#categoryname").val();
		var description = $("#description").val();

		if(categoryname == "") {
			$("#categoryname").after('<p class="text-danger">Category Name field is required</p>');
			$('#categoryname').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#categoryname").find('.text-danger').remove();
			// success out for form 
			$("#categoryname").closest('.form-group').addClass('has-success');	  	
		}

		if(description == "") {
			$("#description").after('<p class="text-danger">Description field is required</p>');
			$('#description').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#description").find('.text-danger').remove();
			// success out for form 
			$("#description").closest('.form-group').addClass('has-success');	  	
		}

		if(categoryname && description) {
			var form = $(this);
			// button loading
			$("#createCategoriesBtn").button('loading');

			$.ajax({
				url : form.attr('action'),
				type: form.attr('method'),
				data: form.serialize(),
				dataType: 'json',
				success:function(response) {
					// button loading
					$("#createCategoriesBtn").button('reset');

					if(response.success == true) {
						// reload the manage member table 
						manageCategoriesTable.ajax.reload(null, false);						

  	  			// reset the form text
  	  			$("#submitCategoriesForm")[0].reset();
						// remove the error text
						$(".text-danger").remove();
						// remove the form error
						$('.form-group').removeClass('has-error').removeClass('has-success');

						$('#add-Categories-messages').html('<div class="alert alert-success">'+
							'<button type="button" class="close" data-dismiss="alert">&times;</button>'+
							'<strong><i class="glyphicon glyphicon-ok-sign"></i></strong> '+ response.messages +
							'</div>');

						$(".alert-success").delay(500).show(10, function() {
							$(this).delay(3000).hide(10, function() {
								$(this).remove();
							});
						}); // /.alert
					}  // if

				} // /success
			}); // /ajax	
		} // if

		return false;
	}); // /submit Categories form function

});

function editCategory(categoryId = null) {
	if(categoryId) {
		// remove hidden Categories id text
		$('#categoryId').remove();

		// remove the error 
		$('.text-danger').remove();
		// remove the form-error
		$('.form-group').removeClass('has-error').removeClass('has-success');

		// modal loading
		$('.modal-loading').removeClass('div-hide');
		// modal result
		$('.edit-Categories-result').addClass('div-hide');
		// modal footer
		$('.editCategoriesFooter').addClass('div-hide');

		$.ajax({
			url: 'php_action/fetchSelectedCategory.php',
			type: 'post',
			data: {categoryId : categoryId},
			dataType: 'json',
			success:function(response) {
				// modal loading
				$('.modal-loading').addClass('div-hide');
				// modal result
				$('.edit-Categories-result').removeClass('div-hide');
				// modal footer
				$('.editCategoriesFooter').removeClass('div-hide');

				// setting the value 
				$('#cid').val(response.categories_id);
				$('#editCategoryName').val(response.categories_name);
				$('#editDescription').val(response.description);
				// Categories id 
				$(".editCategoriesFooter").after('<input type="hidden" name="categoryid" id="categoryid" value="'+response.categories_id+'" />');

				// update Categories form 
				$('#editCategoriesForm').unbind('submit').bind('submit', function() {

					// remove the error text
					$(".text-danger").remove();
					// remove the form error
					$('.form-group').removeClass('has-error').removeClass('has-success');			

					var categoryname = $("#editCategoryName").val();
					var description = $("#editDescription").val();

					if(categoryname == "") {
						$("#editCategoryName").after('<p class="text-danger">Category Name field is required</p>');
						$('#editCategoryName').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editCategoryName").find('.text-danger').remove();
						// success out for form 
						$("#editCategoryName").closest('.form-group').addClass('has-success');	  	
					}

					if(description == "") {
						$("#editDescription").after('<p class="text-danger">Description field is required</p>');
						$('#editDescription').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editDescription").find('.text-danger').remove();
						// success out for form 
						$("#editDescription").closest('.form-group').addClass('has-success');	  	
					}
					
					if(categoryname && description) {
						var form = $(this);

						// submit btn
						$('#editCategoriesBtn').button('loading');

						$.ajax({
							url: form.attr('action'),
							type: form.attr('method'),
							data: form.serialize(),
							dataType: 'json',
							success:function(response) {

								if(response.success == true) {
									console.log(response);
									// submit btn
									$('#editCategoriesBtn').button('reset');

									// reload the manage member table 
									manageCategoriesTable.ajax.reload(null, false);								  	  										
									// remove the error text
									$(".text-danger").remove();
									// remove the form error
									$('.form-group').removeClass('has-error').removeClass('has-success');

									$('#edit-Categories-messages').html('<div class="alert alert-success">'+
										'<button type="button" class="close" data-dismiss="alert">&times;</button>'+
										'<strong><i class="glyphicon glyphicon-ok-sign"></i></strong> '+ response.messages +
										'</div>');

									$(".alert-success").delay(500).show(10, function() {
										$(this).delay(3000).hide(10, function() {
											$(this).remove();
										});
									}); // /.alert
								} // /if

							}// /success
						});	 // /ajax												
					} // /if

					return false;
				}); // /update Categories form

			} // /success
		}); // ajax function

} else {
	alert('error!! Refresh the page again');
}
} // /edit Categoriess function