$(document).ready(function () {

    $(window).on("load", function () {
        $('.Load').fadeOut(2000, function () { $('body').css('overflow', 'visible') })

    })
})

$.getJSON('../js/menu.json', function (data) {
    var ad = "";
    for (let o in data[0]) {
        ad += `<li><span>${o}</span><span>${data[0][o]}</span></li>`
    }
    document.querySelectorAll('.menu .men')[0].innerHTML = ad;
})

$('.menu .or li').on("click", function () {
    $(this).css('borderBottom', '2px solid #455d58');
    $(this).siblings().css('borderBottom', '2px solid #faf7f2');
    var x = $(this).attr('id');
    $.getJSON('../js/menu.json', function (data) {
        var ad = "";
        for (let o in data[x]) {
            ad += `<li><span>${o}</span><span>${data[x][o]}</span></li>`
        }
        document.querySelectorAll('.menu .men')[0].innerHTML = ad;
    })
})

function down() {
    $('.NAV-Down').slideDown(350, function () { $('body').css('overflow', 'hidden') })
}
function UP() {
    $('.NAV-Down').slideUp(350, function () { $('body').css('overflow', 'visible') });
}