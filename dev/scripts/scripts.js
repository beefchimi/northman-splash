document.addEventListener('DOMContentLoaded', function() {
// jQuery(document).ready(function($) {


	// Global Variables
	// ----------------------------------------------------------------------------
/*
	var $html     = $('html'),
		$body     = $('body'),
		$document = $(document),
		$window   = $(window);
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
	inputCheckValue();

/*
	$('mc-embedded-subscribe-form').ajaxChimp({
		url: 'http://northman.us9.list-manage.com/subscribe/post?u=83bb440596cc17fe903cfdb39&amp;id=b02e7c813a' // 'http://northman.us9.list-manage.com/subscribe/post-json?u=83bb440596cc17fe903cfdb39&amp;id=b02e7c813a&c=?'
	});
*/


// }); // end jQuery
}, false);