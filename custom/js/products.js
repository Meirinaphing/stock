var manageProductTable;

$(document).ready(function() {
	// top bar active
	$('#navProduct').addClass('active');
	
	// manage Product table
	manageProductTable = $("#manageProductTable").DataTable({
		'ajax': 'php_action/fetchProducts.php',
		'order': []		
	});
	$('#searchC-result').DataTable();

	// submit Product form function
	$("#submitProductForm").unbind('submit').bind('submit', function() {
		// remove the error text
		$(".text-danger").remove();
		// remove the form error
		$('.form-group').removeClass('has-error').removeClass('has-success');			

		var productname = $("#productname").val();
		var qty = $("#qty").val();
		var price = $("#price").val();
		var cid = $("#cid").val();
		var sid = $("#sid").val();
		var status = $("#status").val();

		if(productname == "") {
			$("#productname").after('<p class="text-danger">Product Name field is required</p>');
			$('#productname').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#productname").find('.text-danger').remove();
			// success out for form 
			$("#productname").closest('.form-group').addClass('has-success');	  	
		}

		if(qty == "") {
			$("#qty").after('<p class="text-danger">Qty field is required</p>');
			$('#qty').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#qty").find('.text-danger').remove();
			// success out for form 
			$("#qty").closest('.form-group').addClass('has-success');	  	
		}

		if(price == "") {
			$("#price").after('<p class="text-danger">Price field is required</p>');
			$('#price').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#price").find('.text-danger').remove();
			// success out for form 
			$("#price").closest('.form-group').addClass('has-success');	  	
		}

		if(cid == "") {
			$("#cid").after('<p class="text-danger">Category ID field is required</p>');
			$('#cid').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#cid").find('.text-danger').remove();
			// success out for form 
			$("#cid").closest('.form-group').addClass('has-success');	  	
		}

		if(sid == "") {
			$("#sid").after('<p class="text-danger">Supplier ID field is required</p>');
			$('#sid').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#sid").find('.text-danger').remove();
			// success out for form 
			$("#sid").closest('.form-group').addClass('has-success');	  	
		}

		if(status == "") {
			$("#status").after('<p class="text-danger">Status field is required</p>');
			$('#status').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#status").find('.text-danger').remove();
			// success out for form 
			$("#status").closest('.form-group').addClass('has-success');	  	
		}		

		if(productname && qty && price && cid && sid && status) {
			var form = $(this);
			// button loading
			$("#createProductBtn").button('loading');

			$.ajax({
				url : form.attr('action'),
				type: form.attr('method'),
				data: form.serialize(),
				dataType: 'json',
				success:function(response) {
					// button loading
					$("#createProductBtn").button('reset');

					if(response.success == true) {
						// reload the manage member table 
						manageProductTable.ajax.reload(null, false);						

  	  			// reset the form text
  	  			$("#submitProductForm")[0].reset();
						// remove the error text
						$(".text-danger").remove();
						// remove the form error
						$('.form-group').removeClass('has-error').removeClass('has-success');

						$('#add-Product-messages').html('<div class="alert alert-success">'+
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
	}); // /submit brand form function

});

function editProduct(productId = null) {
	if(productId) {
		// remove hidden brand id text
		$('#supplierId').remove();

		// remove the error 
		$('.text-danger').remove();
		// remove the form-error
		$('.form-group').removeClass('has-error').removeClass('has-success');

		// modal loading
		$('.modal-loading').removeClass('div-hide');
		// modal result
		$('.edit-Product-result').addClass('div-hide');
		// modal footer
		$('.editProductFooter').addClass('div-hide');

		$.ajax({
			url: 'php_action/fetchSelectedProducts.php',
			type: 'post',
			data: {productId : productId},
			dataType: 'json',
			success:function(response) {
				// modal loading
				$('.modal-loading').addClass('div-hide');
				// modal result
				$('.edit-Product-result').removeClass('div-hide');
				// modal footer
				$('.editProductFooter').removeClass('div-hide');

				// setting the value 
				$('#pid').val(response.productid);
				$('#editProductName').val(response.name);
				$('#editQty').val(response.qty);
				$('#editPrice').val(response.harga);
				$('#editCid').val(response.categoryid);
				$('#editSid').val(response.supplierid);
				$('#editStatus').val(response.status);
				// brand id 
				$(".editProductFooter").after('<input type="hidden" name="productid" id="productid" value="'+response.productid+'" />');

				// update brand form 
				$('#editProductForm').unbind('submit').bind('submit', function() {

					// remove the error text
					$(".text-danger").remove();
					// remove the form error
					$('.form-group').removeClass('has-error').removeClass('has-success');			


					var productname = $("#editProductName").val();
					var qty = $("#editQty").val();
					var price = $("#editPrice").val();
					var cid = $("#editCid").val();
					var sid = $("#editSid").val();
					var status = $("#editStatus").val();

					if(productname == "") {
						$("#editProductName").after('<p class="text-danger">Product Name field is required</p>');
						$('#editProductName').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editProductName").find('.text-danger').remove();
						// success out for form 
						$("#editProductName").closest('.form-group').addClass('has-success');	  	
					}

					if(qty == "") {
						$("#editQty").after('<p class="text-danger">Qty field is required</p>');
						$('#editQty').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editQty").find('.text-danger').remove();
						// success out for form 
						$("#editQty").closest('.form-group').addClass('has-success');	  	
					}

					if(price == "") {
						$("#editPrice").after('<p class="text-danger">Price field is required</p>');
						$('#editPrice').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editPrice").find('.text-danger').remove();
						// success out for form 
						$("#editPrice").closest('.form-group').addClass('has-success');	  	
					}

					if(cid == "") {
						$("#editCid").after('<p class="text-danger">Category ID field is required</p>');
						$('#editCid').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editCid").find('.text-danger').remove();
						// success out for form 
						$("#editCid").closest('.form-group').addClass('has-success');	  	
					}

					if(sid == "") {
						$("#editSid").after('<p class="text-danger">Supplier ID field is required</p>');
						$('#editSid').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editSid").find('.text-danger').remove();
						// success out for form 
						$("#editSid").closest('.form-group').addClass('has-success');	  	
					}

					if(status == "") {
						$("#editStatus").after('<p class="text-danger">Status field is required</p>');
						$('#editStatus').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editStatus").find('.text-danger').remove();
						// success out for form 
						$("#editStatus").closest('.form-group').addClass('has-success');	  	
					}

					if(productname && qty && price && cid && sid && status) {
						var form = $(this);

						// submit btn
						$('#editProductBtn').button('loading');

						$.ajax({
							url: form.attr('action'),
							type: form.attr('method'),
							data: form.serialize(),
							dataType: 'json',
							success:function(response) {

								if(response.success == true) {
									console.log(response);
									// submit btn
									$('#editProductBtn').button('reset');

									// reload the manage member table 
									manageProductTable.ajax.reload(null, false);								  	  										
									// remove the error text
									$(".text-danger").remove();
									// remove the form error
									$('.form-group').removeClass('has-error').removeClass('has-success');

									$('#edit-Product-messages').html('<div class="alert alert-success">'+
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
				}); // /update brand form

			} // /success
		}); // ajax function

} else {
	alert('error!! Refresh the page again');
}
} // /edit brands function

function searchCategory(){

}