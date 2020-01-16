import $ from 'jquery';
window.jQuery = $;
window.$ = $;



$('.footer-button').click(function(){
	$('.hidden-footer').slideToggle();
	$('.footer-button-arrow').toggleClass('button-rotate');
	// if ($('.footer-button').text() == "^"){
	// 	$('.footer-button').text("v");
	// } else {
	// 	$('.footer-button').text("^");
	// }
})

$('.footer-button').hover(function(){
	$('.footer-button-arrow').toggleClass('arrow-toggle');
}, function(){
	$('.footer-button-arrow').toggleClass('arrow-toggle');
})

// var footerH = $('.hidden-footer').innerHeight();

// $(".footer-button").hover(function() {
//     $('.hidden-footer').stop(1).show().height(0).animate({
//         height: footerH
//     }, 500);
// }, function() {
//     $('.hidden-footer').stop(1).animate({
//         height: 0
//     }, 500, function() {
//         $(this).hide();
//     });
// })​