// Fancybox
// $ = window.$ = window.jQuery = require('jquery');

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Fancybox
const fancybox = require('@fancyapps/fancybox');
// const fancyboxCSS = require('@fancyapps/fancybox/dist/jquery.fancybox.css');

// Fancybox Stylesheet
// Fancybox Stylesheet

$(document).ready(function() {

	/***************** Fancybox ******************/
	// Open links in a box within the page

	$(".detailicon").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 768) {
			return;
		}
		$.fancybox({
			toolbar: false,
			smallBtn: true,
			src: this.href,
			href: this.href,
			padding: 20,
			animationEffect: "fade",
			animationDuration: 500,
			iframe : {
				preload:true
			}
			// 'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});

	// $('.detailicon').fancybox({
	// 	iframe : {
	// 		preload: true
	// 	},
	// 	toolbar: false,
	// 	smallBtn: true
	// })

});