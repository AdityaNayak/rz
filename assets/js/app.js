// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();


//
// Custom JS
// --------------------------------------------------

$(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    var imageUrl;
    var bgpos;
    if (scrollPosition >= 680) {
        // If the function is only supposed to fire once
        //$(this).off('scroll');
        // imageUrl = '../assets/img/bg2.jpg';
        // imageUrl2 = '../assets/img/team.jpg';
        // Other function stuff here...
        // bgpos = '0% 20%';
        $('.top-bar').removeClass('top');
    }
   
    else{
        // imageUrl = '../assets/img/cover.jpg';
        // imageUrl2 = '../assets/img/team.jpg';
        // bgpos = 'bottom';
        $('.top-bar').addClass('top');
    }
    // $(".parallax-background.home").css({"background-image": "url('" + imageUrl + "')","background-position": bgpos});
    // $(".parallax-background.jobs").css({"background-image": "url('" + imageUrl2 + "')","background-position": bgpos});


});
var pathname = window.location.pathname; // Returns path only

// if(pathname.includes("world")){
// $('top-bar-right '+pathname.split(".")).addClass('active');

// }
// $('top-bar-right')
// class="active"

// var url      = window.location.href;     // Returns full URL
// var origin   = window.location.origin;

var temp1 = pathname.split(".");
// console.log(temp1)
var activetab=temp1[0].split("/")
activetab="."+activetab[1]
$('.top-bar-right '+activetab).addClass('active');
// console.log($('.top-bar-right '+activetab));
// console.log(url)
// console.log(origin)