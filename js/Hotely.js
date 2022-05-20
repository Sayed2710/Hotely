$(document).ready(function () {

    $(window).on('load', function () {
        $('.Load').fadeOut(2000, function () { $('body').css('overflow', 'visible') })
    })
    $(window).on('resize', function () {
        $('.Heade').height($(window).innerHeight());
        $('.SPA-section .overlay').css('height', $('.SPA-section').height());
    })
    $('.Heade').height($(window).innerHeight());
    $('.SPA-section .overlay').css('height', $('.SPA-section').height());
})
function down() {
    $('.NAV-Down').slideDown(350, function () { $('body').css('overflow', 'hidden') })
}
function UP() {
    $('.NAV-Down').slideUp(350, function () { $('body').css('overflow', 'visible') });
}