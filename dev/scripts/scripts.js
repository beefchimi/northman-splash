// document.addEventListener('DOMContentLoaded', function() {
jQuery(document).ready(function($) {


	// Global Variables
	// ----------------------------------------------------------------------------
	var $html     = $('html'),
		$body     = $('body'),
		$document = $(document),
		$window   = $(window);


	// Initialize Primary Functions
	// ----------------------------------------------------------------------------
	$('mc-embedded-subscribe-form').ajaxChimp({
		url: 'http://northman.us9.list-manage.com/subscribe/post?u=83bb440596cc17fe903cfdb39&amp;id=b02e7c813a' // 'http://northman.us9.list-manage.com/subscribe/post-json?u=83bb440596cc17fe903cfdb39&amp;id=b02e7c813a&c=?'
	});


});
// }, false);