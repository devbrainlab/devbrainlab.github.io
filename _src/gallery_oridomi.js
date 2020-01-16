import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'oridomi';


// import { OriDomi } from 'oridomi';
// debugger;

var folders = {};

$(function() {
	// if (!OriDomi.isSupported) {
 //      document.getElementById('unsupported').style.display = 'block';
 //      return;
 //    }
	$('.gallery-folder').each(function(){
		var this_div = $(this);
		var parentname = this_div[0].id;
		console.log(parentname);
		var images = $("#"+parentname+" > div > a > img");

		$(this_div).css('height', images.length*250+"px");

		// var folded = new OriDomi('#'+parentname, {
		// 	hpanels:4
		// });

		
		// console.log(hidden_row.length);
		var $folded = $(this_div).oriDomi({
			vPanels: 1,
			hPanels: images.length, 
			speed: 500, 
			shading: 'soft',
			perspective: 2000,
			maxAngle: 85,
			ripple: 1,
			oriDomiClass: "gallery-panel",
			shadingIntensity: 0.6,

			anchor: 'top'});
		// $folded.oriDomi('accordion', 20);
		var folded = $folded.oriDomi(true);
		// debugger;
		folded.accordion(85, 'top',{sticky: true});
		folders[parentname] = folded;

		$('.gallery-square-header').click(function(){
			var parent = $(this).parents('.gallery-folder');
			var parentid = parent[0].id;
			var this_folder = folders[parentid];
			$('.gallery-square-header').removeClass('clicked');
			$('.gallery-square-header').children().removeClass('clicked');
			$(this).addClass('clicked');
			$(this).children().addClass('clicked');
			// close other folders
			for (const f in folders){
				console.log(f);
				if (f != parentid){
				folders[f].accordion(85,{sticky: true});
			};
			};
			// debugger;
			// $(folders.values()).accordion(85, 'top',{sticky: true});
			this_folder.accordion(0, 'top',{sticky: true});
			// debugger;

		console.log('did it');
	});

	$("a.gallery-square").fancybox({
		'titleShow'     : false
	});
	})
	.promise()
	.done(function(){


	});

	// $('.gallery-folder').hover(function(){
	// 	var parentname = $(this)[0].id;
	// 	var folded = folders[parentname];
	// 	console.log(parentname);
	// 	// folded.modifyContent(function(el){
	// 	// 	$(el).toggleClass('gallery-square-expanded');
	// 	// })
	// 	$(this).toggleClass('gallery-folder-expanded');
	// 	var images = $("#"+parentname+" > div > img");
	// 	// $(images).toggleClass('gallery-square-expanded');
	// 	// debugger;
	// 	// $(this).css('height', images.length*400+"px");

	// 	$(this).children(".gallery-square-container").toggleClass('gallery-square-expanded');
	// 	// $("."+parentname+"_container").toggleClass('gallery-square-expanded');
	// 	$(this).children().children('.gallery-square').toggleClass('gallery-square-expanded');
	// 	// $(this).children().children().toggleClass('gallery-square-expanded');
	// 	// $('#'+parentname+" > div").toggleClass('gallery-square-expanded');

	// })
})


