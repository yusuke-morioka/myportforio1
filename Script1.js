jQuery(document).ready(function ($) {

    //�N���b�N�ŃE�B���h�E���J��
$('#pro').click(function () {
    $('.modal1').fadeIn();
    $('.overlay').fadeIn();
});
$('#mak').click(function () {
    $('.modal2').fadeIn();
    $('.overlay').fadeIn();
});

    //�N���b�N�ŃE�B���h�E�����
    $('.close, .overlay, .clear_bt').click(function () {
    $('.modal1').fadeOut();
    $('.modal2').fadeOut();
    $('.overlay').fadeOut();
    });
    //esc�L�[�ŃE�B���h�E�����
$(document).keydown(function (e) {
    if (e.keyCode === 27) {
        $('.modal1').fadeOut();
        $('.modal2').fadeOut();
        $('.overlay').fadeOut();
    }
});

});
