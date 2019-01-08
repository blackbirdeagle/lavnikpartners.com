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
	var quest = $('#quest2').val();
	var email = $('#email2').val();
	var check = $('.politik').attr('check');
	var flag = 0;
	
	$('.quest__form input').css({"border":"1px solid #a18c6f"});
	$('.politik').css({"border":"none"});
	
	if(quest == ""){
		$('#quest2').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(email == ""){
		$('#email2').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(email != "" && !isEmailValid(email)){
		$('#email2').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(check == "no"){
		$('.politik').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(flag == 0){
		
	}
});

$('.send_quest2').click(function(){
	var quest = $('#quest1').val();
	var email = $('#email1').val();
	var phone = $('#phone1').val();
	var check = $('.politik2').attr('check');
	var flag = 0;
	
	$('.quest__form input').css({"border":"1px solid #a18c6f"});
	$('.politik2').css({"border":"none"});
	
	if(quest == ""){
		$('#quest1').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(email == ""){
		$('#email1').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(email != "" && !isEmailValid(email)){
		$('#email1').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(phone == ""){
		$('#phone1').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(check == "no"){
		$('.politik2').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(flag == 0){
		
	}
});

$('.send_mess').click(function(){
	var name = $('.usagr-pp input[name = "name"]').val();
	var phone = $('.usagr-pp input[name = "phone"]').val();
	var check = $('.politik3').attr('check');
	var flag = 0;
	
	$('.usagr-pp input').css({"border":"none"});
	$('.politik3').css({"border":"none"});
	if(name == ""){
		$('.usagr-pp input[name = "name"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(phone == ""){
		$('.usagr-pp input[name = "phone"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(check == "no"){
		$('.politik3').css({"border":"1px solid red"});
		flag = 1;
	}	
	
	if(flag == 0){
		
	}
});

$('.send_order').click(function(){
	var name = $('.order-pp input[name = "name"]').val();
	var phone = $('.order-pp input[name = "phone"]').val();
	var email = $('.order-pp input[name = "email"]').val();
	var check = $('.politik4').attr('check');
	var flag = 0;
	
	$('.order-pp input').css({"border":"none"});
	$('.politik4').css({"border":"none"});
	if(name == ""){
		$('.order-pp input[name = "name"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(phone == ""){
		$('.order-pp input[name = "phone"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(email == ""){
		$('.order-pp input[name = "email"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(email == "" && !isEmailValid(email)){
		$('.order-pp input[name = "email"]').css({"border":"1px solid red"});
		flag = 1;
	}
	
	if(check == "no"){
		$('.politik4').css({"border":"1px solid red"});
		flag = 1;
	}	
	
	if(flag == 0){
		
	}
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

$('.questions ul li a').click(function(){
	$('.questions ul li p').hide();
	$(this).siblings('p').fadeIn(200);
});

$('.get__answer').click(function(){
	var id = $(this).attr('field');
	var email = $('#' + id).val();
	var flag = 0;
	
	$('#' + id).css({"border":"1px solid #a18c6f"});
	
	if(email == ""){
		$('#' + id).css({"border":"1px solid red"});
		flag = 1;
	}	
	
	if(email != "" && !isEmailValid(email)){
		$('#' + id).css({"border":"1px solid red"});
		flag = 1;
	}	
});

var leftP = $('.pagi__wrap').width() / 2 - $('.paginavi').width() / 2;
$('.paginavi').css('left', leftP);

var leftD = $('.owl-carousel').width() / 2 - $('.owl-dots').width() / 2;
$('.owl-dots').css('left', leftD);

$(window).resize(function(){
	var leftP = $('.pagi__wrap').width() / 2 - $('.paginavi').width() / 2;
	$('.paginavi').css('left', leftP);	
	
	var leftD = $('.owl-carousel').width() / 2 - $('.owl-dots').width() / 2;
	$('.owl-dots').css('left', leftD);	
});

$(document).ready(function(){
    $("#slider__staff").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:2
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
		dots: true,
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
	
    $("#slider__sert").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:2
			},			
			600:{
				items:2
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
	
    $("#slider__partners1").owlCarousel({
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
		dots: true,
		nav: false,
		navText: ['', ''],
		
    });	

    $("#slider__awards").owlCarousel({
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
		dots: true,
		nav: false,
		navText: ['', ''],
		
    });	

    $("#index__slider").owlCarousel({
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
		dots: true,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
		
    });	
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