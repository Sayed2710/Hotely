$(document).ready(function () {

    $(window).on("load", function () {
        $('.Load').fadeOut(2000, function () { $('body').css('overflow', 'visible') })
    })


})
function down() {
    $('.NAV-Down').slideDown(350, function () { $('body').css('overflow', 'hidden') })
}
function UP() {
    $('.NAV-Down').slideUp(350, function () { $('body').css('overflow', 'visible') });
}