jQuery(document).ready(function ($) {
$('#pro').click(function () {
    $('.modal1').fadeIn();
    $('.overlay').fadeIn();
});
$('.close, .overlay').click(function () {
    $('.modal1').fadeOut();
    $('.overlay').fadeOut();
});
$('#mak').click(function () {
    $('.modal2').fadeIn();
    $('.overlay').fadeIn();
});
$('.close, .overlay').click(function () {
    $('.modal2').fadeOut();
    $('.overlay').fadeOut();
});
});
