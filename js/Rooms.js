$(document).ready(function () {

    $(window).on("load", function () {
        $('.Load').fadeOut(2000, function () { $('body').css('overflow', 'visible') })
    })

    $('body').css('paddingTop', $('.Nav').height() + 15);
    $(window).on('resize', function () {
        $('body').css('paddingTop', $('.Nav').height() + 15);
    })
    $.getJSON('../js/Rooms_Data.json', function (data) {
        for (var i = 0; i < data.length; i++) {
            var ele =
                `<div class="col-lg-6 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s"
                data-wow-offset="120">
                    <div class="im">
                        <img src="${data[i].photo}" width="100%" />
                    </div>
                    <div class="dis">
                        <div class="row">
                            <div class="col-6 f">
                                <h3>${data[i].name}</h3>
                                <p>${data[i].price}/night</p>
                                <a  href="RoomShow.html"onclick='x(${data[i].id})' > SHOW DETAILS</a>
                            </div>
                            <div class="col-6 s">
                                <i class='${data[i].icons.size} first'><span>${data[i].size}</span></i>
                                <span class="fasel"></span>
                                <i class='${data[i].icons.person} second'><span>${data[i].capacity}</span></i>
                            </div>
                        </div>
                    </div>
                </div>`;
            document.querySelectorAll('.Cat .p')[0].innerHTML += ele;
        }
    })
})



function x(y) {
    localStorage.setItem('num', y);
}
function down() {
    $('.NAV-Down').slideDown(350, function () { $('body').css('overflow', 'hidden') })
}
function UP() {
    $('.NAV-Down').slideUp(350, function () { $('body').css('overflow', 'visible') });
}