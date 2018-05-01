var manageCategoriesTable;

$(document).ready(function() {
	// active top navbar categories
	$('#navCategories').addClass('active');	

	manageCategoriesTable = $('#manageCategoriesTable').DataTable({
		'ajax' : 'php_action/fetchCategories.php',
		'order': []
	}); // manage categories Data Table


	$("#createCategoriesBtn").on("click", function(e){ // ketika button save change di add di click, function ini jalan
		e.preventDefault();// mencegah refresh page ketika button di klik
		var _Categoriesname = $("#categoriesname").val();
		var _Description = $("#desc").val();

		/* Validasi */
			if(_Categoriesname == "")
			{
				$("#categoriesname").after('<p class="text-danger">Brand Name field is required</p>');
				$('#categoriesname').closest('.form-group').addClass('has-error');
			}
			else
			{
				//remove error text field
				$("#categoriesname").find('.text-danger').remove();
				// success out for form 
				$("#categoriesname").closest('.form-group').addClass('has-success');	
			}

			if(_Description == "") 
			{
				$("#desc").after('<p class="text-danger">Brand Name field is required</p>');
				$('#desc').closest('.form-group').addClass('has-error');
			} 
			else 
			{
				// remov error text field
				$("#desc").find('.text-danger').remove();
				// success out for form 
				$("#desc").closest('.form-group').addClass('has-success');	  	
			}
		/* End of Validasi */

		//Code di atas Validasi yang merah"

		if(_Categoriesname !== "" && _Description !== "")
		{
			var data = "categoriesname="+_Categoriesname+"&desc="+_Description;
			//kenapa variabel data seperti ini?, soalnya data yang mau di ambil metodenya berupa POST, yang dimana 
			// hanya bisa di ambil dengan url, cth blablabla.com/q=blabla&y=blabla ini kalau get, cuman sama aja bentukny
			$.ajax({
				method: "POST",//ini mengirim datanya dengan method post biar ga tampil di url
				url: "php_action/createCategories.php", // url
				data: data, // data yang mau dikirim apa
				dataType: "JSON", // data yang di kembalikan dari si pengriim itu tipenya JSOn kalau gini
				beforeSend: function(){
					console.log(data);//sebelum dikirim harus ngapain dulu?
				},
				success: function(results){
					console.log(results.success);//ini kalau udah sukses ... kita liat url yang di lempar
					if(results.success)
					{
						//ini ambil data yang dikirim tadi..
						//valid["success"] = blabla, valid["messages"] = blabla
						$('body').removeClass('modal-open');
						$("#addCategoriesModal").removeClass("in");
						$('.modal-backdrop').remove();
						$("#submitCategoriesForm")[0].reset();
						// remove the error text
						$(".text-danger").remove();
						// remove the form error
						$('.form-group').removeClass('has-error').removeClass('has-success');
		  	  			
		  	  			$('#add-categories-messages').html('<div class="alert alert-success">'+
			            	'<button type="button" class="close" data-dismiss="alert">&times;</button>'+
			            '<strong><i class="glyphicon glyphicon-ok-sign"></i></strong> '+ results.messages +
				          '</div>');

		  	  			$(".alert-success").delay(500).show(10, function() {
							$(this).delay(3000).hide(10, function() {
								$(this).remove();
							});
						});

						location.reload();
					}
				},
				error: function(textStatus, xhr)
				{
					console.log(textStatus);
					//ini eror yang terjadi mei..
					//hmm paham kah?nga ko@@
					// yang ga paham dimana?
					//semua ko 
					//ya udah ku telepon bentar jelasin.
					//yauda
				}
			});
		}
	});

	// // on click on submit categories form modal
	// $('#addCategoriesModalBtn').unbind('click').bind('click', function() {

	// 	// reset the form text
	// 	$("#submitCategoriesForm")[0].reset();
	// 	// remove the error text
	// 	$(".text-danger").remove();
	// 	// remove the form error
	// 	$('.form-group').removeClass('has-error').removeClass('has-success');

	// 	// submit categories form function
	// 	$("#submitCategoriesForm").unbind('submit').bind('submit', function() {

	// 		var categoriesName = $("#categoriesname").val();
	// 		var desc = $("#desc").val();

	// 		if(categoriesName == "") {
	// 			$("#categoriesname").after('<p class="text-danger">Brand Name field is required</p>');
	// 			$('#categoriesname').closest('.form-group').addClass('has-error');
	// 		} else {
	// 			// remov error text field
	// 			$("#categoriesname").find('.text-danger').remove();
	// 			// success out for form 
	// 			$("#categoriesname").closest('.form-group').addClass('has-success');	  	
	// 		}

			// if(desc == "") {
			// 	$("#desc").after('<p class="text-danger">Brand Name field is required</p>');
			// 	$('#desc').closest('.form-group').addClass('has-error');
			// } else {
			// 	// remov error text field
			// 	$("#desc").find('.text-danger').remove();
			// 	// success out for form 
			// 	$("#desc").closest('.form-group').addClass('has-success');	  	
			// }

	// 		if(categoriesName && desc) {
	// 			var form = $(this);
	// 			// button loading
	// 			$("#createCategoriesBtn").button('loading');

	// 			$.ajax({
	// 				url : form.attr('action'),
	// 				type: form.attr('method'),
	// 				data: form.serialize(),
	// 				dataType: 'json',
	// 				success:function(response) {
	// 					// button loading
	// 					$("#createCategoriesBtn").button('reset');

	// 					if(response.success == true) {
	// 						// reload the manage member table 
	// 						manageCategoriesTable.ajax.reload(null, false);						

	//   	  			// reset the form text
	// 						$("#submitCategoriesForm")[0].reset();
	// 						// remove the error text
	// 						$(".text-danger").remove();
	// 						// remove the form error
	// 						$('.form-group').removeClass('has-error').removeClass('has-success');
	  	  			
	//   	  			$('#add-categories-messages').html('<div class="alert alert-success">'+
	//             '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
	//             '<strong><i class="glyphicon glyphicon-ok-sign"></i></strong> '+ response.messages +
	// 	          '</div>');

	//   	  			$(".alert-success").delay(500).show(10, function() {
	// 							$(this).delay(3000).hide(10, function() {
	// 								$(this).remove();
	// 							});
	// 						}); // /.alert
	// 					}  // if

	// 				} // /success
	// 			}); // /ajax	
	// 		} // if

	// 		return false;
	// 	}); // submit categories form function
	// }); // /on click on submit categories form modal	

}); // /document

// edit categories function
function editCategories(categoriesId = null) {
	if(categoriesId) {
		// remove the added categories id 
		$('#CategoriesId').remove();
		// reset the form text
		$("#editCategoriesForm")[0].reset();
		// reset the form text-error
		$(".text-danger").remove();
		// reset the form group errro		
		$('.form-group').removeClass('has-error').removeClass('has-success');

		// edit categories messages
		$("#edit-categories-messages").html("");
		// modal spinner
		$('.modal-loading').removeClass('div-hide');
		// modal result
		$('.edit-categories-result').addClass('div-hide');
		//modal footer
		$(".editCategoriesFooter").addClass('div-hide');		

		$.ajax({
			url: 'php_action/fetchSelectedCategories.php',
			type: 'post',
			data: {categoriesId: categoriesId},
			dataType: 'json',
			success:function(response) {

				// modal spinner
				$('.modal-loading').addClass('div-hide');
				// modal result
				$('.edit-categories-result').removeClass('div-hide');
				//modal footer
				$(".editCategoriesFooter").removeClass('div-hide');	

				// set the value
				$("#cid").val(response.categories_name);
				$("#editCategoriesName").val(response.categories_name);
				$("#editDesc").val(response.description);
				// add the categories id 
				$(".editCategoriesFooter").after('<input type="hidden" name="categoriesid" id="categoriesid" value="'+response.categories_id+'" />');


				// submit of edit categories form
				$("#editCategoriesForm").unbind('submit').bind('submit', function() {
					var categoriesName = $("#editCategoriesName").val();
					var editDesc = $("#editDesc").val();

					if(categoriesName == "") {
						$("#editCategoriesName").after('<p class="text-danger">Brand Name field is required</p>');
						$('#editCategoriesName').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editCategoriesName").find('.text-danger').remove();
						// success out for form 
						$("#editCategoriesName").closest('.form-group').addClass('has-success');	  	
					}

					if(editDesc == "") {
						$("#editDesc").after('<p class="text-danger">Brand Name field is required</p>');
						$('#editDesc').closest('.form-group').addClass('has-error');
					} else {
						// remov error text field
						$("#editDesc").find('.text-danger').remove();
						// success out for form 
						$("#editDesc").closest('.form-group').addClass('has-success');	  	
					}

					if(categoriesName && editDesc) {
						var form = $(this);
						// button loading
						$("#editCategoriesBtn").button('loading');

						$.ajax({
							url : form.attr('action'),
							type: form.attr('method'),
							data: form.serialize(),
							dataType: 'json',
							success:function(response) {
								// button loading
								$("#editCategoriesBtn").button('reset');

								if(response.success == true) {
									// reload the manage member table 
									manageCategoriesTable.ajax.reload(null, false);									  	  			
									
									// remove the error text
									$(".text-danger").remove();
									// remove the form error
									$('.form-group').removeClass('has-error').removeClass('has-success');
			  	  			
			  	  			$('#edit-categories-messages').html('<div class="alert alert-success">'+
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
				}); // /submit of edit categories form

			} // /success
		}); // /fetch the selected categories data

	} else {
		alert('Oops!! Refresh the page');
	}
} // /edit categories function