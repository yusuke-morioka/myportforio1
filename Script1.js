jQuery(document).ready(function ($) {

    //クリックでウィンドウを開く
$('#pro').click(function () {
    $('.modal1').fadeIn();
    $('.overlay').fadeIn();
});
$('#mak').click(function () {
    $('.modal2').fadeIn();
    $('.overlay').fadeIn();
});

    //クリックでウィンドウを閉じる
    $('.close, .overlay, .clear_bt').click(function () {
    $('.modal1').fadeOut();
    $('.modal2').fadeOut();
    $('.overlay').fadeOut();
    });
    //escキーでウィンドウを閉じる
$(document).keydown(function (e) {
    if (e.keyCode === 27) {
        $('.modal1').fadeOut();
        $('.modal2').fadeOut();
        $('.overlay').fadeOut();
    }
});

});
