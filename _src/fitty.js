import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import fitty from 'fitty';


fitty('.page-heading:not(.heading-home) h1');
// fitty('.page-heading.heading-home h1', 
// 	{
// 		'multiLine':true,
// 		'minSize': 80,
// 		'maxSize': 120
//  });