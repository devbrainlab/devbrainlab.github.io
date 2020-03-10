// use masonry-js from npm & webpack
// https://masonry.desandro.com/extras.html#webpack

import { addLoadEvent } from "./index.js";

var jQueryBridget = require('jquery-bridget');
var Masonry = require('masonry-layout');
// make Masonry a jQuery plugin
jQueryBridget( 'masonry', Masonry, $ );

console.log($(document).width()/5)

var $gallery = $('.gallery-container').masonry({
	itemSelector: '.gallery-square-container',
	columnWidth: $(window).width()/5
	});

// $('.gallery-square-container').css('width', $(document).width()/5);
// $('.gallery-square-container').children().css('width', $(document).width()/5);
// $('.gallery-square-container').css('height', $(document).width()/5);
// $('.gallery-square-container').children().css('height', $(document).width()/5);
$('.gallery-square-header').click(function(){
	var parent = $(this).parents('.gallery-folder-header');
	var parentid = parent[0].id;
	$(this).toggleClass('clicked');
	$(this).children().toggleClass('clicked');
	// $images.each(function(){
	// 	$(this).toggleClass('.gallery-image-hidden');
	// });
	// $gallery.append($images).masonry('appended', $images);
	if ($(this).hasClass('clicked')){
		var $images = $('.gallery-container-hidden .'+parentid+'_container').clone();
		$(parent).after($images)
		$gallery.masonry('appended', $images);
	} else {
		var $images = $('.gallery-container .'+parentid+'_container');
		// $('.gallery-container-hidden').append($images);
		$gallery.masonry('remove', $images).masonry('layout');
	}

	// $gallery.masonry('layout');
});

addLoadEvent(function(){
	var $gallery_headers = $('.gallery-folder-header');


	$gallery.append($gallery_headers).masonry(
		'appended', $gallery_headers);

	});