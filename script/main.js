jQuery(document).ready(function($){
	var itemInfoWrapper = $('.item');

	itemInfoWrapper.each(function(){
		var container = $(this),
			// create slider pagination
			sliderPagination = createSliderPagination(container);

		//update slider navigation visibility
		updateNavigation(container, container.find('.slider li').eq(0));

		container.find('.slider').on('click', function(event){
			//enlarge slider images
			if( !container.hasClass('slider-active') && $(event.target).is('.slider')) {
				itemInfoWrapper.removeClass('slider-active');
				container.addClass('slider-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					$('body,html').animate({'scrollTop':container.offset().top -30}, 200);
				});
			}
		});

		container.find('.equiz').on('click', function(){
			//shrink slider images
			container.removeClass('slider-active');
		});

		//update visible slide
		container.find('.next').on('click', function(){
			nextSlide(container, sliderPagination);
		});

		container.find('.prev').on('click', function(){
			prevSlide(container, sliderPagination);
		});

		container.find('.slider').on('swipeleft', function(){
			var wrapper = $(this),
				bool = enableSwipe(container);
			if(!wrapper.find('.selected').is(':last-child') && bool) {nextSlide(container, sliderPagination);}
		});

		container.find('.slider').on('swiperight', function(){
			var wrapper = $(this),
				bool = enableSwipe(container);
			if(!wrapper.find('.selected').is(':first-child') && bool) {prevSlide(container, sliderPagination);}
		});

		sliderPagination.on('click', function(){
			var selectedDot = $(this);
			if(!selectedDot.hasClass('selected')) {
				var selectedPosition = selectedDot.index(),
					activePosition = container.find('.slider .selected').index();
				if( activePosition < selectedPosition) {
					nextSlide(container, sliderPagination, selectedPosition);
				} else {
					prevSlide(container, sliderPagination, selectedPosition);
				}
			}
		});
	});

	//keyboard slider navigation
	$(document).keyup(function(event){
		if(event.which=='37' && $('.slider-active').length > 0 && !$('.slider-active .slider .selected').is(':first-child')) {
			prevSlide($('.slider-active'), $('.slider-active').find('.slider-pagination li'));
		} else if( event.which=='39' && $('.slider-active').length && !$('.slider-active .slider .selected').is(':last-child')) {
			nextSlide($('.slider-active'), $('.slider-active').find('.slider-pagination li'));
		} else if(event.which=='27') {
			itemInfoWrapper.removeClass('slider-active');
		}
	});

	function createSliderPagination($container){
		var wrapper = $('<ul class="slider-pagination"></ul>').insertAfter($container.find('.slider-navigation'));
		$container.find('.slider li').each(function(index){
			var dotWrapper = (index == 0) ? $('<li class="selected"></li>') : $('<li></li>'),
				dot = $('<a href="#0"></a>').appendTo(dotWrapper);
			dotWrapper.appendTo(wrapper);
			dot.text(index+1);
		});
		return wrapper.children('li');
	}

	function nextSlide($container, $pagination, $n){
		var visibleSlide = $container.find('.slider .selected'),
			navigationDot = $container.find('.slider-pagination .selected');
		if(typeof $n === 'undefined') $n = visibleSlide.index() + 1;
		visibleSlide.removeClass('selected');
		$container.find('.slider li').eq($n).addClass('selected').prevAll().addClass('move-left');
		navigationDot.removeClass('selected')
		$pagination.eq($n).addClass('selected');
		updateNavigation($container, $container.find('.slider li').eq($n));
	}

	function prevSlide($container, $pagination, $n){
		var visibleSlide = $container.find('.slider .selected'),
			navigationDot = $container.find('.slider-pagination .selected');
		if(typeof $n === 'undefined') $n = visibleSlide.index() - 1;
		visibleSlide.removeClass('selected')
		$container.find('.slider li').eq($n).addClass('selected').removeClass('move-left').nextAll().removeClass('move-left');
		navigationDot.removeClass('selected');
		$pagination.eq($n).addClass('selected');
		updateNavigation($container, $container.find('.slider li').eq($n));
	}

	function updateNavigation($container, $active) {
		$container.find('.prev').toggleClass('inactive', $active.is(':first-child'));
		$container.find('.next').toggleClass('inactive', $active.is(':last-child'));
	}

	function enableSwipe($container) {
		var mq = window.getComputedStyle(document.querySelector('.slider'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
		return ( mq=='mobile' || $container.hasClass('slider-active'));
	}
});
