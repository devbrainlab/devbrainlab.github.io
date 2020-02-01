export function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
};




import './fancybox.js';
// import './trace_portraits.js';
import './portrait_trace_loader.js';
import 'bootstrap';

import './index.scss';
import './toggle_footer.js';
import './gallery_oridomi.js';
import './post_image.js';

/* When user clicks the Icon */
$(".nav-toggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay-boxify").toggleClass("open");
});

/* When user clicks a link */
$(".overlay ul li a").click(function() {
  $(".nav-toggle").toggleClass("active");
  $(".overlay-boxify").toggleClass("open");
});

/* When user clicks outside */
$(".overlay").click(function() {
  $(".nav-toggle").toggleClass("active");
  $(".overlay-boxify").toggleClass("open");
});

// import { src, trace } from '../_images/people/person_1.jpg';
// console.log(src)
// console.log(trace)


