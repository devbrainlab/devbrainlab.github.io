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

let consecutive_resizes = 0;
const max_consecutive_resizes = 5;
// https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
    function resize(canvas) {
      // // Lookup the size the browser is displaying the canvas.
      if (consecutive_resizes <= max_consecutive_resizes){
      let displayWidth  =  Math.floor(canvas.clientWidth);
      let displayHeight = Math.floor(canvas.clientHeight);
      // console.log('client dim: ' + displayWidth +" "+ displayHeight + "canvas dims " + canvas.height + " " + canvas.width);
      // Check if the canvas is not the same size.
      if (canvas.width  != displayWidth ||
          canvas.height != displayHeight) {
        
        // Make the canvas the same size
        canvas.width  = displayWidth;
        canvas.height = displayHeight;
        consecutive_resizes += 1;
      } else {
        consecutive_resizes = 0;
      }
  }

      // cgl. viewport(0, 0, gl.canvas.width, gl.canvas.height);
    }

function generateThumb(canvas_id, time){
	let TAU, button, canvas, ctx, draw, f, fpselem, h, p1, particles, period, raf, w, _i;
	// var ncalls = 0;
	// var total_calls = 10;


	canvas = document.getElementById(canvas_id);
	let class_list = $(canvas)[0].classList;
	// debugger;
	fpselem = document.getElementById('fps');
    // canvas.width
     // = canvas.height
	w = canvas.width = $(canvas).parent().width();

	h = canvas.height= $(canvas).parent().height();
	// console.log(h);

	TAU = 2 * Math.PI;

	ctx = canvas.getContext('2d');

	period = 1 / 200;

	ctx.fillStyle = "#0B0B0B";

	ctx.fillRect(0, 0, w, h);

	ctx.fillStyle = 'rgba(1,1,1,0.3)';
	// debugger;
	var seed = noise.seed(Math.random());

	let x_generator, y_generator;
	let n_points;

	let randomness;
    if (class_list.contains('random-gaussian')) {
        randomness = gaussianRand;
    } else if (class_list.contains('random-simplex')) {
        // https://www.w3schools.com/js/js_function_closures.asp
        randomness = (function() {
            var seed = noise.seed(Math.random());
            return function() {
                var rand = (noise.simplex2(Math.random() * w, Math.random() * h, seed.perm, seed.gradP) + 1) / 2;
                return rand
            };
        })();
    } else {
        randomness = Math.random;
    };

    let period_movement = $(canvas).attr('movementPeriod');
    let tau_movement = $(canvas).attr('movementTau');

	if (typeof period_movement === 'undefined'){
		period_movement = 0;
	}
		if (typeof tau_movement === 'undefined'){
		tau_movement = 0;
	}




    if (class_list.contains('initialization-full')) {
        x_generator = function() {
            return (randomness() * w);
        };
        y_generator = function() {
            return (randomness() * h);
        };
    } else if (class_list.contains('initialization-home')){
    	x_generator = (function() {
            const seed_x = w * 0.75;
            const spread_x = (Math.random() * 0.5) + 0.5;
            return function() {
                return ((seed_x + ((gaussianRand() - 0.5) * spread_x * w)));
            };
        })();

        y_generator = (function() {
            const seed_y = h * 0.5;
            const spread_y = (Math.random() * 0.5) + 0.5;
            return function() {
                return ((seed_y + ((gaussianRand() - 0.5) * spread_y * h)));
            };
        })();

} else if (class_list.contains('initialization-page')){
        x_generator = (function() {
            const seed_x = (w * 0.9);
            const spread_x = (Math.random() * 0.5);
            return function() {
                return ((seed_x + ((gaussianRand() - 0.5) * spread_x * w)));
            };
        })();

        y_generator = (function() {
            const seed_y = h * 0.5;
            const spread_y = (Math.random() * 0.5) + 0.5;
            return function() {
                return ((seed_y + ((gaussianRand() - 0.5) * spread_y * h)));
            };
        })();

} else if (class_list.contains('initialization-clumped') || true) {
        x_generator = (function() {
            const seed_x = (gaussianRand() * w * 0.5) + (Math.random() * w * 0.25);
            const spread_x = (Math.random() * 0.2) + 0.8;
            return function() {
                return ((seed_x + ((gaussianRand() - 0.5) * spread_x * w)));
            };
        })();

        y_generator = (function() {
            const seed_y = (gaussianRand() * h * 0.5) + (Math.random() * h * 0.25);
            const spread_y = (Math.random() * 0.2) + 0.8;
            return function() {
                return ((seed_y + ((gaussianRand() - 0.5) * spread_y * h)));
            };
        })();
    }

    n_points = $(canvas).attr('nPoints');
	if (typeof n_points === 'undefined'){
		n_points = 100;
	}


    let gen_mode = "all";
    let generated_points = 0;
    if (class_list.contains('generation-sequential')) {
        gen_mode = "seq";
        
    };

    let seq_n = $(canvas).attr('nSeq');
	if (typeof seq_n === "undefined"){
		seq_n = 1;
	}

	    if (gen_mode === "seq") {
        particles = generate_points(x_generator, y_generator, seq_n);
    } else if (gen_mode === "all" || true) {
        particles = generate_points(x_generator, y_generator, n_points);
    }




	function generate_points(x_generator, y_generator, n_points, particles = []) {
	    for (let _i = 1; _i <= n_points; _i++) {

	        let p1 = {
	            x: x_generator(),
	            // y: h / 2 + Math.random() * 50,
	            y: y_generator(),
	            xv: 0, // x velocity
	            yv: 0, // y velocity
	            // x: Math.random()*w,
	            // y: Math.random()*h,
	            a: 0,
                size: 0,
                intspeed: (Math.random()+1)**1.5
	        };
	        particles.push(p1);
	        particles.push({
	            x: p1.x,
	            y: p1.y, // x velocity
                xv: 0,
	            yv: 0, // y velocity
	            a: TAU / 2,
                size: 0,
                intspeed: (Math.random()+1)**2
	        });
	    }
	    return (particles);
	}

	draw = function() {
	  let a, p, v, _j, _len, _results;
	  _results = [];
	  // resize(canvas);

	  // TAU += (Math.random()-0.5)*tau_movement;
	  TAU += (Math.random()-0.5)*0.5;

	  if (gen_mode === "seq") {
            if (generated_points < n_points) {
                particles = generate_points(x_generator, y_generator, seq_n, particles);
            }
            generated_points += 1;
        }


      var iter_until = particles.length;
	  for (_j = 0;  _j < iter_until; _j++) {
	    p = particles[_j];
        if (p == null){
            continue;
        }
	    v = noise.perlin2(p.x * period, p.y * period, seed.perm, seed.gradP);
	    ctx.fillStyle = "hsla(" + (Math.floor(v * 360)) + ", 90%, 60%, 0.05)";
	    ctx.fillRect(p.x, p.y, 2, 2);
	    p.h++;
	    a = v * 2 * Math.PI + p.a;
	    p.x += Math.cos(a);
	    

	    if (gen_mode == "seq"){
            	if (p.x < 0 || p.x > w || p.y < 0 || p.y > h){
            		particles.splice(_j, 1);
            		iter_until -= 1;
            	} else {

        			_results.push(p.y += Math.sin(a));
            	}
            } else {
            // if (p.x < 0){
            // 	p.x = w;
            // } else if (p.x > w){
            // 	p.x = 0;
            // };
            
            // if (p.y < 0){
            // 	p.y = h;
            // } else if (p.y > h){
            // 	p.y = 0;
            // }
            if (p.x < 0 || p.x > w || p.y < 0 || p.y > h){
                    particles.splice(_j, 1);
                }


        	_results.push(p.y += Math.sin(a));
        }
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


$(function() {
    let time = 0;
    const time_delta = 200;
    $('.generative').each(function() {
        // var this_div = $(this)[0].id;
        // var parentname = this_div[0].id;
        // debugger;
        generateThumb($(this)[0].id, time);
        time += time_delta;
        // $(this).resize(function(){
        // 	$(this).width($(this).parent().width());
        // 	$(this).height($(this).parent().height());
        // })

    });

    // $('.generative').width($('.generative').parent().width());
    // $('.generative').height($('.generative').parent().height());

    $(window).resize(function() {
        $('.generative').width($('.generative').clientWidth);
        $('.generative').height($('.generative').clientHeight);
    });

});