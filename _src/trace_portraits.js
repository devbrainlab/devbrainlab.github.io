import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import { Potrace } from './potrace.js';

import { addLoadEvent } from './index.js';

// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

import { TimelineMax, TweenMax, Linear } from 'gsap';

// var potrace = require('potrace'),
//     Jimp = require('jimp');
//     // fs = require('fs');

// var trace = new potrace.Potrace();


function handleFiles(files) {
  Potrace.loadImageFromFile(files[0]);
  Potrace.process(function(){
    displayImg();
    displaySVG(1);
  });
}



function displaySVG(parentdiv, size ){

  // var svgdiv = parentdiv.add('svg');
  // svgdiv.css({display:'inline-block'});
  var svgdiv = parentdiv.append(Potrace.getSVG(size));
  var svgdiv = parentdiv.children()[0]

  debugger;

  var height = svgdiv.getAttribute('height');
  var width  = svgdiv.getAttribute('width');
  svgdiv.setAttribute('viewBox', '0 0 '+height+' '+width);
  svgdiv.setAttribute('preserveAspectRatio', 'meet');
  // debugger;
}

function traceImages(){
	$(".portrait-image").each(function( index ){

	var this_div = $(this);
	// var name = this_div.id;
	var imgSrc = this_div.attr('imgsrc');

	console.log(name);
	console.log(imgSrc);
	 // debugger;

	Potrace.loadImageFromUrl(imgSrc);
	Potrace.process(function(){
	    // displayImg();
	    displaySVG(this_div, 1);
	    
	  });

	// var jimpInstance = null;
	// Jimp.read(imgSrc, function(err, img) {
 //      if (err) {
 //        throw err;
 //      }

 //      jimpInstance = img;
 //    });
	// debugger;
	// trace.loadImage(jimpInstance, function(err, svg){
	// 	if (err) throw err;
	// 	var personDiv = $("#" + name);
	// 	var svgdiv = personDiv.add('svg');
	// 	svgdiv.style.display = 'inline-block';
 //  		svgdiv.innerHTML = "<p>Result:</p>" + svg;
	// });

	// new potrace.Potrace()
	//   .loadImage(imgSrc, function() {
	//     if (err) throw err;
	//     this.getSymbol('foo');
	//   });
	// potrace.process(function(){
	// 	var svgdiv = $(this).add('svg');
	// 	svgdiv.style.display = 'inline-block';
 //  		svgdiv.innerHTML = "<p>Result:</p>" + potrace.getSVG(1);

	// })
})
};
traceImages();
// addLoadEvent(traceImages);