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
function Done() {
    var x = document.getElementById('exampleInputEmail1').value;
    if (x == undefined || x.indexOf('@') == -1) {
        document.getElementById('wrong').textContent = "Please enter your email";
        $(window).scrollTop($('#Email').offset().top - 80);
    }
    else {
        document.getElementById('Book').textContent = "Wait . . .";
        setTimeout(function () {
            $('.Header .enter').hide(1000);
            $('.Header .recev').fadeIn(1000);
            $(window).scrollTop(0);
        }, 3000)
    }
}