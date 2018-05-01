var manageBrandTable;

$(document).ready(function() {
	// top bar active
	$('#navBrand').addClass('active');
	
	// manage brand table
	manageBrandTable = $("#manageBrandTable").DataTable({
		'ajax': 'php_action/fetchSupplier.php',
		'order': []		
	});

	// submit brand form function
	$("#submitBrandForm").unbind('submit').bind('submit', function() {
		// remove the error text
		$(".text-danger").remove();
		// remove the form error
		$('.form-group').removeClass('has-error').removeClass('has-success');			

		var suppliername = $("#suppliername").val();
		var contact = $("#contact").val();
		var address = $("#address").val();
		var npwp = $("#npwp").val();
		var pic = $("#pic").val();

		if(suppliername == "") {
			$("#suppliername").after('<p class="text-danger">Supplier Name field is required</p>');
			$('#suppliername').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#suppliername").find('.text-danger').remove();
			// success out for form 
			$("#suppliername").closest('.form-group').addClass('has-success');	  	
		}

		if(contact == "") {
			$("#contact").after('<p class="text-danger">Contact field is required</p>');
			$('#contact').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#contact").find('.text-danger').remove();
			// success out for form 
			$("#contact").closest('.form-group').addClass('has-success');	  	
		}

		if(address == "") {
			$("#address").after('<p class="text-danger">Address field is required</p>');
			$('#address').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#address").find('.text-danger').remove();
			// success out for form 
			$("#address").closest('.form-group').addClass('has-success');	  	
		}

		if(npwp == "") {
			$("#npwp").after('<p class="text-danger">NPWP field is required</p>');
			$('#npwp').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#npwp").find('.text-danger').remove();
			// success out for form 
			$("#npwp").closest('.form-group').addClass('has-success');	  	
		}

		if(pic == "") {
			$("#pic").after('<p class="text-danger">PIC field is required</p>');
			$('#pic').closest('.form-group').addClass('has-error');
		} else {
			// remov error text field
			$("#pic").find('.text-danger').remove();
			// success out for form 
			$("#pic").closest('.form-group').addClass('has-success');	  	
		}		

		if(suppliername && contact && Address && npwp && pic) {
			var form = $(this);
			// button loading
			$("#createBrandBtn").button('loading');

			$.ajax({
				url : form.attr('action'),
				type: form.attr('method'),
				data: form.serialize(),
				dataType: 'json',
				success:function(response) {
					// button loading
					$("#createBrandBtn").button('reset');

					if(response.success == true) {
						// reload the manage member table 
						manageBrandTable.ajax.reload(null, false);						

  	  			// reset the form text
  	  			$("#submitBrandForm")[0].reset();
						// remove the error text
						$(".text-danger").remove();
						// remove the form error
						$('.form-group').removeClass('has-error').removeClass('has-success');

						$('#add-brand-messages').html('<div class="alert alert-success">'+
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

function editSupplier(supplierId = null) {
	if(supplierId) {
		// remove hidden brand id text
		$('#supplierId').remove();

		// remove the error 
		$('.text-danger').remove();
		// remove the form-error
		$('.form-group').removeClass('has-error').removeClass('has-success');

		// modal loading
		$('.modal-loading').removeClass('div-hide');
		// modal result
		$('.edit-brand-result').addClass('div-hide');
		// modal footer
		$('.editBrandFooter').addClass('div-hide');

		$.ajax({
			url: 'php_action/fetchSelectedSupplier.php',
			type: 'post',
			data: {supplierId : supplierId},
			dataType: 'json',
			success:function(response) {
				// modal loading
				$('.modal-loading').addClass('div-hide');
				// modal result
				$('.edit-brand-result').removeClass('div-hide');
				// modal footer
				$('.editBrandFooter').removeClass('div-hide');

				// setting the value 
				$('#sid').val(response.supplierid);
				$('#editSupplierName').val(response.suppliername);
				$('#editContact').val(response.suppliercontact);
				$('#editAddress').val(response.supplieraddress);
				$('#editNpwp').val(response.suppliernpwp);
				$('#editPic').val(response.pic);
				// brand id 
				$(".editBrandFooter").after('<input type="hidden" name="supplierid" id="supplierid" value="'+response.supplierid+'" />');

				// update brand form 
				$('#editBrandForm').unbind('submit').bind('submit', function() {

					// remove the error text
					$(".text-danger").remove();
					// remove the form error
					$('.form-group').removeClass('has-error').removeClass('has-success');			

					var suppliername = $("#editSupplierName").val();
					var contact = $("#editContact").val();
					var address = $("#editAddress").val();
					var npwp = $("#editNpwp").val();
					var pic = $("#editPic").val();

					if(suppliername == "") {
						$("#editSupplierName").after('<p class="text-danger">Supplier Name field is required</p>');
						$('#editSupplierName').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editSupplierName").find('.text-danger').remove();
						// success out for form 
						$("#editSupplierName").closest('.form-group').addClass('has-success');	  	
					}

					if(contact == "") {
						$("#editContact").after('<p class="text-danger">Contact field is required</p>');
						$('#editContact').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editContact").find('.text-danger').remove();
						// success out for form 
						$("#editContact").closest('.form-group').addClass('has-success');	  	
					}

					if(address == "") {
						$("#editAddress").after('<p class="text-danger">Address field is required</p>');
						$('#editAddress').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editAddress").find('.text-danger').remove();
						// success out for form 
						$("#editAddress").closest('.form-group').addClass('has-success');	  	
					}

					if(npwp == "") {
						$("#editNpwp").after('<p class="text-danger">NPWP field is required</p>');
						$('#editNpwp').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editNpwp").find('.text-danger').remove();
						// success out for form 
						$("#editNpwp").closest('.form-group').addClass('has-success');	  	
					}

					if(pic == "") {
						$("#editPic").after('<p class="text-danger">PIC field is required</p>');
						$('#editPic').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editPic").find('.text-danger').remove();
						// success out for form 
						$("#editPic").closest('.form-group').addClass('has-success');	  	
					}

					if(suppliername && contact && Address && npwp && pic) {
						var form = $(this);

						// submit btn
						$('#editBrandBtn').button('loading');

						$.ajax({
							url: form.attr('action'),
							type: form.attr('method'),
							data: form.serialize(),
							dataType: 'json',
							success:function(response) {

								if(response.success == true) {
									console.log(response);
									// submit btn
									$('#editBrandBtn').button('reset');

									// reload the manage member table 
									manageBrandTable.ajax.reload(null, false);								  	  										
									// remove the error text
									$(".text-danger").remove();
									// remove the form error
									$('.form-group').removeClass('has-error').removeClass('has-success');

									$('#edit-brand-messages').html('<div class="alert alert-success">'+
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

// function removeBrands(brandId = null) {
// 	if(brandId) {
// 		$('#removeBrandId').remove();
// 		$.ajax({
// 			url: 'php_action/fetchSelectedBrand.php',
// 			type: 'post',
// 			data: {brandId : brandId},
// 			dataType: 'json',
// 			success:function(response) {
// 				$('.removeBrandFooter').after('<input type="hidden" name="removeBrandId" id="removeBrandId" value="'+response.brand_id+'" /> ');

// 				// click on remove button to remove the brand
// 				$("#removeBrandBtn").unbind('click').bind('click', function() {
// 					// button loading
// 					$("#removeBrandBtn").button('loading');

// 					$.ajax({
// 						url: 'php_action/removeBrand.php',
// 						type: 'post',
// 						data: {brandId : brandId},
// 						dataType: 'json',
// 						success:function(response) {
// 							console.log(response);
// 							// button loading
// 							$("#removeBrandBtn").button('reset');
// 							if(response.success == true) {

// 								// hide the remove modal 
// 								$('#removeMemberModal').modal('hide');

// 								// reload the brand table 
// 								manageBrandTable.ajax.reload(null, false);

// 								$('.remove-messages').html('<div class="alert alert-success">'+
// 			            '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
// 			            '<strong><i class="glyphicon glyphicon-ok-sign"></i></strong> '+ response.messages +
// 			          '</div>');

// 			  	  			$(".alert-success").delay(500).show(10, function() {
// 										$(this).delay(3000).hide(10, function() {
// 											$(this).remove();
// 										});
// 									}); // /.alert
// 							} else {

// 							} // /else
// 						} // /response messages
// 					}); // /ajax function to remove the brand

// 				}); // /click on remove button to remove the brand

// 			} // /success
// 		}); // /ajax

// 		$('.removeBrandFooter').after();
// 	} else {
// 		alert('error!! Refresh the page again');
// 	}
// } // /remove brands function