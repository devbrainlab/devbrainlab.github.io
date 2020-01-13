import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import ScrollMagic from 'scrollmagic';


window.setImageLoaded=function(){
	var this_div = $(this);
	console.log('imageloaded');
	console.log(this_div);
	setTimeout(function(){
        this_div.addClass('loaded');
	}, 500+Math.random()*1500);
};

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
		import("../_images/people/"+imgSrc)
		.then((imgmodule) => {
			var parentdiv = $('<div>', {
				class: 'image-wrapper'
			});
			var trace_overlay = $("<img />", {
				class: "portrait-image portrait-trace",
				src: imgmodule.trace
				
				});
			var image_overlay = $("<img />", {
				class: "image-overlay portrait-image",
				src: imgmodule.src,
				id: parentname+"_image"
			});
			// debugger;
			// trace_overlay.src = imgmodule.trace;
			parentdiv.append(trace_overlay);
			parentdiv.append(image_overlay);
			this_div.append(parentdiv);
			// debugger;
			// $("#"+parentname+"_container").hover(function(e) {
   //  		$("#"+parentname+"_image").trigger(e.type);

			new ScrollMagic.Scene({triggerElement: "#"+parentname+"_container",
				triggerHook: 'onCenter',
			    offset: 200})
				.setClassToggle("#"+parentname+"_image", "visible") // add class toggle
				.addTo(controller);
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
	});
};
trace_portraits();

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