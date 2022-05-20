$(document).ready(function () {

    $(window).on("load", function () {
        $('.Load').fadeOut(2000, function () { $('body').css('overflow', 'visible') })
    })

    $('body').css('paddingTop', $('.Nav').height() + 15);
    $(window).on('resize', function () {
        $('body').css('paddingTop', $('.Nav').height() + 15);
    })

})

$.getJSON('../js/Rooms_Data.json', function (data) {
    var x = localStorage.getItem('num');

    document.title = `Room | ${data[x].name}`;

    ele1 = `
    <div class="col-12 col-md-6 f">
        <img src="${data[x].photo}" width="100%">
    </div>
<div class="col-12 col-md-6 s">
   <div class="D">
      <h2>${data[x].name}</h2>
        <p >A bedroom with a double bed and a leisure lounge with comfortable double bed-settee. A
        comfortable and functional bathroom with bathtub.</p>
       <div class="icon">
        <i class='fas fa-expand-alt fa-lg'><span>${data[x].size}</span></i>
        <i class='fas fa-user fa-lg'><span>${data[x].capacity}</span></i>
      </div>
       <a href="Book.html"><button>CHECK AVAILABILITY</button></a>
    </div>
</div>
`;
    document.querySelectorAll('.Header .p')[0].innerHTML = ele1;


    for (var i = 0; i < data[x].advantage.length; i++) {
        var q = data[x].advantage[i];
        document.querySelectorAll('.Equipment ul')[0].innerHTML += `<li><i class='${data[x].AD[i]}'></i><span>${q}</span></li> `;
    }

    var fir = -1;
    for (var i = 0; i < 2; i++) {
        var r = Math.floor(Math.random() * 5);
        if (i == 0) {
            fir = r;
        }
        if (i == 1) {
            while (r == x || r == fir) {
                r = Math.floor(Math.random() * 5);
            }
        }
        var ele2 = `<div class="col-lg-6 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s"
               data-wow-offset="120">
    <div class="im">
        <img src="${data[r].photo}" width="100%" />
    </div>
    <div class="dis">
        <div class="row">
            <div class="col-6 f">
                <h3>${data[r].name}</h3>
                <p>${data[r].price}/night</p>
                <a  href="RoomShow.html"onclick='x(${data[r].id})' > SHOW DETAILS</a>
            </div>
            <div class="col-6 s">
                <i class='${data[r].icons.size} first'><span>${data[r].size}</span></i>
                <span class="fasel"></span>
                <i class='${data[r].icons.person} second'><span>${data[r].capacity}</span></i>
            </div>
        </div>
    </div>
</div>`;
        document.querySelectorAll('.Other .p')[0].innerHTML += ele2;
    }
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