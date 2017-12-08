function isEmailValid(emailAdress) {
	var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
		return EMAIL_REGEXP.test(emailAdress)
}

$(".no__car__list li a").click(function(){
	$(".no__car__list li p").hide();
	$(this).siblings('p').fadeIn(200);
});

$('.vac a').click(function(){
	var vac = $(this).attr('vac');

	$('.vac div').hide();
	
	$('#'+vac).fadeIn(200);
});

$('.politik').click(function(){
	var check = $(this).attr('check');
	
	if(check == 'yes'){
		$(this).attr('check', 'no');
		$(this).addClass('politik__uncheck');
	}else if(check == 'no'){
		$(this).attr('check', 'yes');
		$(this).removeClass('politik__uncheck');		
	}
});

$('[popup-target]').click(function(e) {
	var el = $(this);
	var target = el.attr('popup-target');

	$('.overlay').fadeIn(200, function(){
		$('.popup.'+target).fadeIn(200);
		var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
		var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
		left = left - 38;
		$('.popup.'+target).css('top', top).css('left', left);
	})
	
	
	return false;
});

$('.overlay, .close1').click(function(e) {
	var popup = $('.popup:visible');
	popup.fadeOut(200, function(){
		$('.overlay').fadeOut(200);
	});
	return false;
});

function keyExit(e){
	if(e.keyCode == 27){

		var popup = $('.popup:visible');
		popup.fadeOut(200, function(){
			$('.overlay').fadeOut(200);
		});				
			
	}
}

addEventListener("keydown", keyExit);

$('.float__menu').click(function(){
	$('.left__menu').animate({left: 0}, 300);
});

$('.hide__menu').click(function(){
	$('.left__menu').animate({left: -300}, 300);
});

jQuery(function(){
	jQuery(".phone").mask("+7(999) 999-9999");
});

$('.send_quest').click(function(){
	var quest = $('.quest__form input[name = "quest"]').val();
	var email = $('.quest__form input[name = "email"]').val();
	var check = $('.politik').attr('check');
	var flag = 0;
	
	$('.quest__form input').css({"border":"1px solid #a18c6f"});
	$('.politik').css({"border":"none"});
	
	if(quest == ""){
		$('.quest__form input[name = "quest"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(email == ""){
		$('.quest__form input[name = "email"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(email != "" && !isEmailValid(email)){
		$('.quest__form input[name = "mail"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(check == "no"){
		$('.politik').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(flag == 0){
		
	}
});

$('.send_mess').click(function(){
	var name = $('.popup input[name = "name"]').val();
	var phone = $('.popup input[name = "phone"]').val();
	var flag = 0;
	
	$('.popup input').css({"border":"none"});
	
	if(name == ""){
		$('.popup input[name = "name"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(phone == ""){
		$('.popup input[name = "phone"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(flag == 0){
		
	}
});
/*
var myMap;

ymaps.ready(function(){
    myMap = new ymaps.Map("map", {
        center: [55.778021, 37.570876],
        zoom: 16
    });

	
	var placemark = new ymaps.Placemark([55.778021, 37.570876],
		{
			balloonContent: 'Скаковая улица, 32с2'
		},
		{}
	);


    myMap.geoObjects.add(placemark);
    myMap.events.add('actiontick');
});

$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

$('.fancybox').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	helpers : {
		media : {},
		overlay: { 
			locked: false 
		}
	}
});


$(function () {
	$(window).scroll(function () {
		if($(window).width() > 991){
			if ($(this).scrollTop() > 101) {
				$('.header').addClass("header__float");
			} else {
				$('.header').removeClass("header__float");
			}
		}
	});
});

$(document).ready(function(){
    $("#slider__diplom").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:2
			},			
			600:{
				items:3
			},
			991:{
				items:4
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });
	
    $("#slider__video").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });	
	
    $("#slider__price").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:3
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });	

    $("#slider__news").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });	

    $("#slider__practic").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });		
	
    $("#slider__advokat").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}		
		},
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });	
});*/