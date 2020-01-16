import { noise } from './perlin.js';
// debugger;

// "borrowed" from https://josephg.com/perlin/3/

function gaussianRand() {
  var rand = 0;

  for (var i = 0; i < 4; i += 1) {
    rand += Math.random();
  }

  return rand / 4;
}

// https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
    function resize(canvas) {
      // // Lookup the size the browser is displaying the canvas.
      var displayWidth  = canvas.clientWidth;
      var displayHeight = canvas.clientHeight;
     
      // Check if the canvas is not the same size.
      if (canvas.width  != displayWidth ||
          canvas.height != displayHeight) {
     
        // Make the canvas the same size
        canvas.width  = displayWidth;
        canvas.height = displayHeight;
      }

      // cgl. viewport(0, 0, gl.canvas.width, gl.canvas.height);
    }

function generateThumb(canvas_id, time){
	var TAU, button, canvas, ctx, draw, f, fpselem, h, p1, particles, period, raf, w, _i;
	// var ncalls = 0;
	// var total_calls = 10;


	canvas = document.getElementById(canvas_id);
	// debugger;
	fpselem = document.getElementById('fps');

	w = canvas.width = $(canvas).parent().width();

	h = canvas.height = $(canvas).parent().height();

	TAU = 2 * Math.PI;

	ctx = canvas.getContext('2d');

	period = 1 / 200;

	ctx.fillStyle = "#0B0B0B";

	ctx.fillRect(0, 0, w, h);

	ctx.fillStyle = 'rgba(1,1,1,0.3)';
	// debugger;
	var seed = noise.seed(Math.random());

	particles = [];

	var seed_x = (Math.random()*w*0.5)+(Math.random()*w*0.25);
	var spread_x = (Math.random()*0.2)+0.8;
	var seed_y = (Math.random()*h*0.5)+(Math.random()*h*0.25);
	var spread_y = (Math.random()*0.2)+0.8;

	for (_i = 1; _i <= 200; _i++) {
	  p1 = {
	    x: seed_x + ((gaussianRand()-0.5)*spread_x*w),
	    // y: h / 2 + Math.random() * 50,
	    y: seed_y + ((gaussianRand()-0.5)*spread_y*h),
	    // x: Math.random()*w,
	    // y: Math.random()*h,
	    a: 0
	  };
	  particles.push(p1);
	  particles.push({
	    x: p1.x,
	    y: p1.y,
	    a: TAU / 2
	  });
	}

	draw = function() {
	  var a, p, v, _j, _len, _results;
	  _results = [];
	  resize(canvas);
	  for (_j = 0, _len = particles.length; _j < _len; _j++) {
	    p = particles[_j];
	    v = noise.perlin2(p.x * period, p.y * period, seed.perm, seed.gradP);
	    ctx.fillStyle = "hsla(" + (Math.floor(v * 360)) + ", 100%, 70%, 0.10)";
	    ctx.fillRect(p.x, p.y, 2, 2);
	    p.h++;
	    a = v * 2 * Math.PI + p.a;
	    p.x += Math.cos(a);
	    _results.push(p.y += Math.sin(a));
	  }
	  return _results;
	};

	raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
	  // if (ncalls < total_calls){
	  return window.setTimeout(callback, 1000 / 30);
	// }
	// ncalls += 1;
	};

	// button = document.getElementsByTagName('input')[0];

	// button.onclick = function() {
	//   return window.open(canvas.toDataURL('image/png'));
	// };

	f = function() {
	// if (ncalls < total_calls){
	  raf(f);
	  
	  return draw();
	// } 
	// ncalls += 1
	};

	setTimeout(function(){raf(f)}, time);
	// console.log(time);
}



$(function(){
	var time = 0;
	const time_delta = 200;
	$('.generative-thumbnail').each(function(){
		// var this_div = $(this)[0].id;
		// var parentname = this_div[0].id;
		// debugger;
		generateThumb($(this)[0].id, time);
		time += time_delta;
		// $(this).resize(function(){
		// 	$(this).width($(this).parent().width());
		// 	$(this).height($(this).parent().height());
		// })

	})

	$(window).resize(function(){
		$('.generative-thumbnail').width($('.generative-thumbnail').parent().width());
		$('.generative-thumbnail').height($('.generative-thumbnail').parent().height());
	})

});
