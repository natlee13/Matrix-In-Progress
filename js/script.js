$(function(){

	//open and close menu

	var menuIsOpen = false;

	$('#hamburger').on('click', function(){

		if(menuIsOpen == false){

			$('.nav-items').addClass('open');
			$('.nav-items').one('transitionend', function(){
				$('#hamburger>i')
					.removeClass('fa fa-bars fa-2x')
						.addClass('fa fa-times');
			});

			menuIsOpen = true;
		
		}else{
			$('.nav-items').removeClass('open');
			$('.nav-items').one('transitionend', function(){
				$('#hamburger>i')
					.removeClass('fa fa-times')
						.addClass('fa fa-bars fa-2x');
			});

			menuIsOpen = false;
			
		};
		
	});

	// ...................smooth scrolling nav...................

	$('[data-to]').on('click', function(e){
		e.preventDefault();
		
		var target = $(this).data('to');
		// var scrollTo = $('.' + target).offset().top - $('.nav-items').height();
		var scrollTo = $('.' + target).offset().top;


		$('html,body').animate({scrollTop: scrollTo}, 1000);
	});



	//Before/after scroller credit to http://zurb.com/playground/twentytwenty...........
	
	$('.after').twentytwenty({default_offset_pct: 0.5});


	//Typed.js...www.mattboldt.com......................................................
	
	$('.typed-animation').typed({
		strings: ["We do Plumbing.", "We do Electrical.", "We do Gardens and Gutters.", "We do Painting.", "We do Carpentry.", 
		"We do Home Improvement.", "We do Removal.", "You name it, we do it."],
		typeSpeed:-10,
		backspeed:-10
	});

	
	//..................back to top arrow.................................................

	// hide #back-to-top first
	$("#back-to-top").hide();
	
	// fade in #back-to-top when >100px has been scrolled down
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	// scroll body to 0px on click
	$('#back-to-top').on('click', function(){
		$('html,body').animate({scrollTop: 0}, 1000);
	});


	//..........services accordion................

	$('.square p').on('click', function(){

		var state = $(this).data('state');

		if(state == 'close'){

			$(this).next().addClass('open');
			$(this).next().one('transitionend', function(){
				$(this).prev().find('i')
					.removeClass('fa-angle-down')
					.addClass('fa-angle-up');
			});

			state = $(this).data('state', 'open');
		}else{

			$(this).next().removeClass('open');
			$(this).next().one('transitionend', function(){ 

				$(this).prev().find('i')
					.removeClass('fa-angle-up')
					.addClass('fa-angle-down');
			});

		state =  $(this).data('state', 'close');

		}
	});

	//.....swiper for testimonials................
	
	//initialize swiper when document ready  
       var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    }); 


});
