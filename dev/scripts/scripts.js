// document.addEventListener('DOMContentLoaded', function() {
jQuery(document).ready(function($) {


	// Mailchimp AJAX Submission
	// ----------------------------------------------------------------------------
	function mailchimpAJAX() {

		var emailfilter     = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i,
			$signupArticle  = $('#mc_embed_signup'),
			$mailchimpForm  = $('#mc-embedded-subscribe-form'),
			$mailchimpInput = $('#mce-EMAIL'),
			$responseText   = $('#mce-response-text');

		if ($mailchimpForm.length > 0) {

			$('#mc-embedded-subscribe-form').submit(function(e) {

				var $this   = $(this),
					isValid = true;

				// we may have added an error class... so let's go ahead and remove it
				$('.error').removeClass('error');

				// email ID validation
				if ( emailfilter.test( $mailchimpInput.val() ) == false ) {
					$mailchimpInput.addClass('error');
					isValid = false;
				}

				// if email is valid, submit form through ajax
				if (isValid) {

					$.ajax({

						type: 'GET',
						url:  $this.attr('action'),
						data: $this.serialize(),
						dataType: 'json',
						contentType: 'application/json; charset=utf-8',
						error: function(jqXHR, textStatus, errorThrown) {
							alert('Could not connect to the registration server. Please reload the page and try again.');
						},

						success: function(data) {

							if (data.result != 'success') {

								// something went wrong, parse data.msg string and display message
								alert('ERROR: '+ data.msg);

							} else {

								// it worked, so hide form and display thank-you message.
								// alert("Success: "+ data.msg);
								$responseText.html(data.msg);
								$signupArticle.addClass('success');
								$this[0].reset(); // Reset Form

								// displaySuccess();

							}

						}

					});

				}

				return false;

			});

		}

	}


/*
	// Dispaly Form Success Message
	// ----------------------------------------------------------------------------
	function displaySuccess() {





	}
*/


	// Check if email input has a value
	// ----------------------------------------------------------------------------
	function inputCheckValue() {

		var formEmail  = document.getElementById('mc_embed_signup'),
			inputEmail = document.getElementById('mce-EMAIL');

		inputEmail.addEventListener('change', function() { // 'input'

			console.log('input has been changed');

			if (inputEmail.value) {
				formEmail.className = 'has-value';
			} else {
				formEmail.className = '';
			}

		});

	}


	// Initialize Primary Functions
	// ----------------------------------------------------------------------------
	mailchimpAJAX();
	inputCheckValue();


}); // end jQuery
// }, false);