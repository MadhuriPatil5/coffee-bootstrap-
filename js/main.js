$(document).ready(function(){
    $('.owl1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
    $('.owl2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    $(".go-to-the-top").click(function(){
        $("body,html").animate({
            scrollTop:"0",
        },2000);
    })
    
    var top=$(".go-to-the-top");
    console.log(top);
    var mybody=$("body");
    $(window).scroll(function(){
    var myvar=$(this).scrollTop();
    console.log(myvar);
    if(myvar>150){
        top.fadeIn(700);
    }else{
        top.fadeOut(700);
    }
    });
  });
  