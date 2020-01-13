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

// import { src, trace } from '../_images/people/person_1.jpg';
// console.log(src)
// console.log(trace)


