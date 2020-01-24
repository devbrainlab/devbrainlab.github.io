import $ from 'jquery';
window.jQuery = $;
window.$ = $;

const path = require('path');

// import scrollmagic and gsap for scroll fx
import ScrollMagic from 'scrollmagic';
// import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// // import { TimelineMax, TweenMax, Linear } from 'gsap';
// import 'gsap';
// import '../../vendor/gsap/MorphSVGPlugin';

// var kute = require('kute.js');
// require('kute.js/kute-svg');

// import { interpolate } from 'polymorph-js';
// import { easeInOutCubic } from 'just-curves';

// window.setImageLoaded=function(){
// 	var this_div = $(this);
// 	console.log('imageloaded');
// 	console.log(this_div);
// 	setTimeout(function(){
//         this_div.addClass('loaded');
// 	}, 500+Math.random()*1500);
// };

// import {
//   src,
//   trace
// } from "!!image-trace-loader?color=#DB7093&background=#FFF!../assets/images/people/person_1.jpg";


// import("!!image-trace-loader?color=#DB7093&background=#FFF!../assets/images/people/person_1.jpg")
// .then((imgmodule) => {
// 	var $addDiv = $("<div className=\"image-wrapper\">"+
//             "<img src="+imgmodule.trace+"/>"+
//             "<img src="+imgmodule.src+" class=\"image\" onload=setImageLoaded() />"+
//         "</div>");

// 	$('.portrait-image').append($addDiv);
// });

function trace_portraits(){
	window.controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 300}});


	$(".portrait-image").each(function( index ){

		var this_div = $(this);
		var parentname = this_div[0].id;
		// var name = this_div.id;
		var imgSrc = this_div.attr('imgsrc');

		// import {
		//   src,
		//   trace
		// } from "!!image-trace-loader?color=#DB7093&background=#FFF!"+imgSrc;
		console.log(imgSrc);
		import(path.resolve('jekyll/images/people/', imgSrc))
		import("../jekyll/images/people/"+imgSrc)
		// debugger;
		// import(imgSrc)
		.then((imgmodule) => {
			var parentdiv = $('<div>', {
				class: 'image-wrapper'
			});

			// var trace_overlay = $("<img />", {
			// 	class: "portrait-image portrait-trace",
			// 	src: imgmodule.trace,
			// 	id: parentname+"_trace"
			// 	});
			// console.log(imgmodule.trace);
			var trace_overlay = $("<svg "+decodeURIComponent(imgmodule.trace));
			trace_overlay.addClass("portrait-trace");
			trace_overlay.addClass("portrait-image");
			var width = $(trace_overlay).attr('width');
			var height = $(trace_overlay).attr('height');

			$(trace_overlay).attr('height', "100%");
			$(trace_overlay).attr('width', "100%");
			$(trace_overlay).attr('viewBox', "0 0 "+width+" "+height);
			// add class and id to path itself for morphing
			trace_overlay.children()[0].id = parentname+"_tracepath";
			trace_overlay.children()[0].classList.add('trace-path');
			// scale to fit
			// trace_overlay.

			// make reference that doesn't change
			// var trace_reference = $("<svg "+decodeURIComponent(imgmodule.trace)+"/>");
			// trace_reference.addClass("reference-svg");
			// trace_reference.children()[0].id = parentname+"_traceref";
			// $(trace_reference).attr('height', "100%");
			// $(trace_reference).attr('width', "100%");
			// $(trace_reference).attr('viewBox', "0 0 "+width+" "+height);


			var image_overlay = $("<img />", {
				class: "image-overlay portrait-image",
				src: imgmodule.src,
				id: parentname+"_image"
				});


			parentdiv.append(trace_overlay);
			parentdiv.append(image_overlay);
			this_div.append(parentdiv);

			// append reference to hidden container
			// $("#reference-svg").append(trace_reference);
			// debugger;
			// $("#"+parentname+"_container").hover(function(e) {
   //  		$("#"+parentname+"_image").trigger(e.type);

   			new ScrollMagic.Scene({triggerElement: "#"+parentname+"_container",
				triggerHook: 'onCenter',
			    offset: 200})
   				.on("enter leave", function(){
   					$("#"+parentname+"_image").toggleClass('visible');
   					$("#"+parentname+"_container").toggleClass('inactive-section');
   				})
				// .setClassToggle("#"+parentname+"_image", "visible") // add class toggle
				// .setClassToggle("#"+parentname+"_container", "inactive-section")
				.addTo(controller);
			});
			// debugger;
			// trace_overlay.src = imgmodule.trace;

    	// });
			// parentdiv.appendTo(this_div);

			// parentdiv.append('')
			// var addDiv = $("<div class=\"image-wrapper\">"+
	  //               "<img src="+imgmodule.trace+" class=\"trace-overlay\"/>"+
	  //               "<img src="+imgmodule.src+" class=\"image-overlay\"/>"+
	  //           "</div>");

	  //       console.log(imgmodule.trace)

			// this_div.append(addDiv);
		});

		// var $addDiv = $("<div className=\"image-wrapper\">"+
		// 	                "<img src="+trace+"/>"+
		// 	                "<img src="+src+" class=\"image\" onload=setImageLoaded() />"+
		// 	            "</div>");

		// this_div.append($addDiv);
};
trace_portraits();

// $(function(){
// 	// kute.fromTo('#person-2_tracepath',  {path: "#person-2_traceref"},{path: "#person-3_traceref"}).start();
// 	// kute.fromTo('#person-2_tracepath',  {path: "#person-3_traceref"},{path: "#person-2_traceref"}).start();
// 	var interp1 = interpolate(["#person-2_tracepath", "#person-3_traceref"]);
// 	interp1()
// })


// $(function () { // wait for document ready
// 		// init
// 		var controller = new ScrollMagic.Controller({
// 			globalSceneOptions: {
// 				triggerHook: 'onLeave',
// 				duration: "0%" // this works just fine with duration 0 as well
// 				// However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
// 				// Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
// 			}
// 		});

// 		// get all slides
// 		var slides = document.querySelectorAll(".portrait-trace");

// 		// create scene for every slide
// 		for (var i=0; i<slides.length; i++) {
// 			new ScrollMagic.Scene({
// 					triggerElement: slides[i]
// 				})
// 				.setPin(slides[i], {pushFollowers: false})
// 				.addTo(controller);
// 		}
// 	});

// $(function (){

// 	// build scenes
// 	new ScrollMagic.Scene({triggerElement: "#sec1"})
// 					.setClassToggle("#high1", "active") // add class toggle
// 					.addIndicators() // add indicators (requires plugin)
// 					.addTo(controller);
// 	new ScrollMagic.Scene({triggerElement: "#sec2"})
// 					.setClassToggle("#high2", "active") // add class toggle
// 					.addIndicators() // add indicators (requires plugin)
// 					.addTo(controller);
// 	new ScrollMagic.Scene({triggerElement: "#sec3"})
// 					.setClassToggle("#high3", "active") // add class toggle
// 					.addIndicators() // add indicators (requires plugin)
// 					.addTo(controller);
// 	new ScrollMagic.Scene({triggerElement: "#sec4"})
// 					.setClassToggle("#high4", "active") // add class toggle
// 					.addIndicators() // add indicators (requires plugin)
// 					.addTo(controller);})