/*--------------------------------------------------------------------
	Theme Name: Twelve
	Theme URI: http://template.twelve.itembridge.com/
	Author: InfoStyle
	Author URI: http://themeforest.net/user/InfoStyle
	Description: Twelve — fully responsive and super original one page template
	Version: 1.0.0
	License: ThemeForest Regular & Extended License
	License URI: http://themeforest.net/licenses/regular_extended
-----------------------------------------------------------------------*/

var $ = jQuery;

/*-----------------------------------------------------*/
/*------- Function check if there is an element -------*/
/*-----------------------------------------------------*/

jQuery.fn.exists = function() {
   return $(this).length;
}

/*------------------------------------------------------*/
/*------ Calculating The Browser Scrollbar Width -------*/
/*------------------------------------------------------*/

var parent, child, scrollWidth;

if (scrollWidth === undefined) {
  parent = $('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo('body');
  child = parent.children();
  scrollWidth = child.innerWidth() - child.height(99).innerWidth();
  parent.remove();
}

jQuery(document).ready(function(){

	/*------------------------------------*/
	/*------ For phones and tablets ------*/
	/*------------------------------------*/

	if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {

		/*------------------------------------*/
		/*--- Class for phones and tablets ---*/
		/*------------------------------------*/

        $('body').addClass('touch');

        /*------------------------------------*/
		/*------ Isotope Block at click ------*/
		/*------------------------------------*/

		$('.works-block, .team-block, .albums-block, .serv-block').on('click', function(){
			if ($(this).hasClass('hover')) {
				$(this).removeClass('hover');
			} else {
				$('.works-block, .team-block, .albums-block, .serv-block').removeClass('hover');
				$(this).addClass('hover');
			}
		});	

		/*-----------------------------------*/
		/*--------- Sub Menu toggle ---------*/
		/*-----------------------------------*/

		$('.sub').on('click', function(){
			$(this).toggleClass('hover');			
		});

		/*-----------------------------------*/
		/*---------- Menu at click ----------*/
		/*-----------------------------------*/

		$('li.search a').on('click', function(){

			if ($(this).parent('.search').hasClass('hover')) {
				$(this).parent('.search').removeClass('hover')
				$('.menu-overlay').css("display","none");
			}
			else {
				$(this).parent('.search').addClass('hover');
				$('.menu-overlay').css("display","block");
			}
			$(this).parent().siblings().removeClass('hover');
		});

		$('.menu>ul>li.menu-item-has-children').on('click', function(){
			if ($(this).hasClass('hover')) {
				$('.menu-overlay').css("display","block");
			}
			else {
				$('.menu-overlay').css("display","none");
			}
		});


		$('li.menu-item-has-children>a').on('click', function(){
			if( $(this).parent().hasClass('hover') ){
				$(this).parent().removeClass('hover');
			} else {
				$(this).parent().addClass('hover');
			}
			$(this).parent().siblings().removeClass('hover');				
		});

		$('.menu-overlay').on('click', function(){			
			if ( !($('body').width() + scrollWidth >= 767) ) {
				$('.navigation').removeClass('open');
			}
			$('li.menu-item-has-children , li.search').removeClass('hover');
			$('.menu-overlay').css("display","none");
		});

		/*-----------------------------------*/
		/*-------- Sub Menu at click --------*/
		/*-----------------------------------*/

		$('.menu-item-has-children>a').on('click', function(e){	
			e.preventDefault();	
		});
    }
    else {
    	
    	/*-------------------------------------*/
		/*---------- Class for other ----------*/
		/*-------------------------------------*/

    	$('body').addClass('no-touch');  

    	/*-------------------------------------*/
		/*------ Sub Menu Isotope Filter ------*/
		/*-------------------------------------*/

    	$('.sub').hover(function(event) {
			event.preventDefault();
			$(this).addClass('hover');
			$('.head-block-visible').css("z-index","1");
		}, function(event) {
			event.preventDefault();
			$(this).removeClass('hover');
			setTimeout(function(){
				$('.head-block-visible').css("z-index","0");
			},80);			
		});

		$('.sub ul li a').click(function(){
			$('.sub').removeClass('hover');
		});		

		/*--------------------------------------*/
		/*-- Adds Blur at hover menu elements --*/
		/*--------------------------------------*/

		$('.menu>ul>li.menu-item-has-children,li.search').hover(function(){
			$('.site-content,.site-blog-wrapper,.site-wrapper,.site-post-wrapper,.site-blog-nav,.social-fix,.head-block').addClass('blur');
		},function() {
		   $('.site-content,.site-blog-wrapper,.site-wrapper,.site-post-wrapper,.site-blog-nav,.social-fix,.head-block').removeClass('blur');
		});

		/*-------------------------------------*/
		/*----------- Search block  -----------*/
		/*-------------------------------------*/

		$("li.search").hover(function(e) {         
			if (e.type == "mouseenter") {
		        $(this).addClass('hover');
		    }
		    else if (!$(this).hasClass('opened')){ // mouseleave
		        $(this).removeClass('hover');
		    }
		});

		/*-------------------------------------*/
		/*------------- More Menu -------------*/
		/*-------------------------------------*/

		$(window).resize(moreMenu);

    }



    /*------------------------------------*/
	/*---------- Isotope Filter ----------*/
	/*------------------------------------*/

   	$(".sub a.active").trigger("click");
	$(".sub a").click(function(e){
		e.preventDefault();

		var selector = $(this).attr("data-sort-value");

		$("#mass-block").isotope({ filter: selector });
		// $('.col-item').removeClass('zoomIn');
		$(this).parents("ul").find("a").removeClass("active");
		$(this).addClass("active");
		$(this).parents('.sub').find('.sub-m span').text($(this ).html())
	});

	/*------------------------------------*/
	/*------------ Safary Css ------------*/
	/*------------------------------------*/

	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){ 
		$('head').append('<link rel="stylesheet" href="css/safary.css">');
	} 	

	/*------------------------------------*/
	/*------------ Login Page ------------*/
	/*------------------------------------*/

	$('.toforgotpass').click(function(e){
		e.preventDefault();
		$('#form-login').addClass('hiddens');
		$('#form-forgotpass').removeClass('hiddens');
	});
	$('.toregister').click(function(e){
		e.preventDefault();
		$('#form-login').addClass('hiddens');
		$('#form-register').removeClass('hiddens');
	});
	$('#form-register .tologin').click(function(e){
		e.preventDefault();
		$('#form-register').addClass('hiddens');
		$('#form-login').removeClass('hiddens');
	});
	$('#form-forgotpass .tologin').click(function(e){
		e.preventDefault();
		$('#form-forgotpass').addClass('hiddens');
		$('#form-login').removeClass('hiddens');
	});


	/*-------------------------------------*/
	/*---------- Menu Open/Close ----------*/
	/*-------------------------------------*/

	$('a.ico').on('click', function(){
		if ($(this).hasClass('button-close')) {
			$('li.menu-item-has-children').removeClass('hover');
			$('.menu-overlay').css("display","none");
		}
	});
	
	/*------------------------------------*/
	
});

/*----------------------------------------------------*/
/*--------------- Isotope vievs filter ---------------*/
/*----------------------------------------------------*/
// 
function subFilter(){

	urlhash = window.location.hash.split('#').join('');

	$('.sub').each(function () {
		if($(this).attr('data-cat') == urlhash ) {
			$(this).addClass('sub-visible');			
		} else {
			$(this).removeClass('sub-visible');
		}
	})

	$(".sub.sub-visible li:first-child a").trigger("click");
	if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
		$(".sub.sub-visible").removeClass("hover");
	}
}
	
/*-------------------------------------------------------*/
/*------ Function determines which menu items hide ------*/
/*-------------------------------------------------------*/

function moreMenuItem() {

	var totalWidth = 0,
		menuWidth  = $('.site-header').width() - 57 - $('.menu > ul > li.search').width() - 80 - $('.site-header a.cal').width();


	$('.menu > ul > li:not(.more-menu):not(.search)').each( function () {
		totalWidth = totalWidth + $(this).width();
		if (menuWidth < totalWidth) {
			$(this).addClass('more-li');
			$('.menu > ul > li.more-menu').addClass('visible');
			$(this).appendTo('.more-menu > ul.sub-menu');
		}		
	});	
}

/*--------------------------------------------------------*/
/*------------ Function that returns all "li" ------------*/
/*-------------  in overall container menu  --------------*/
/*--------------------------------------------------------*/

function clearMenuRes(){
	if($('.menu > ul > li.more-menu ul.sub-menu > li.more-li').exists()) {
	  $('.menu > ul > li.more-menu').removeClass('visible');
	}

	$('.menu > ul > li.more-menu ul.sub-menu > li.more-li').each( function () {
		$(this).removeClass('more-li').appendTo('.menu > ul');
	});

	$('.menu > ul > li.more-menu').appendTo('.menu > ul');

	$('.menu > ul > li.search').appendTo('.menu > ul');
}

/*--------------------------------------------------------*/
/*----------------- Resize Function Menu -----------------*/
/*--------------------------------------------------------*/

function moreMenu(){

		if ($('body').width() + scrollWidth <= 767) {
			clearMenuRes();
			$('.menu > ul > li.more-menu').removeClass('visible');
			$('.menu>ul>li.search').prependTo('.menu>ul');
		}
		else if( $('body').width() + scrollWidth >= 768 && $('body').width() + scrollWidth <= 991 ) {
			clearMenuRes();
			moreMenuItem();
		}
		else if( $('body').width() + scrollWidth >= 992 && $('body').width() + scrollWidth <= 1229 ) {
			clearMenuRes();
			moreMenuItem();
		}
		else if ($('body').width() + scrollWidth >= 1230) {
			clearMenuRes();
			moreMenuItem();
		}
}

jQuery(document).ready(function(){
	// More Menu initialization
	setTimeout(function(){
		moreMenu();
	},0)
});


/*---------------------------------------------------------*/
/*------------- Internet Explorer Placeholder -------------*/
/*---------------------------------------------------------*/

$(function() {
	if(document.all && !window.atob){
	    $('input, textarea').placeholder();
	}
});

/*---------------------------------------------------------*/
/*---------------- Isotop One Page Concept ----------------*/
/*---------------------------------------------------------*/

function gallery() {
	var gallery     = $('#mass-block'),
		galleryItem = gallery.find('.col-item'),
		itemShow,
		addedItem   = 17, // Number of blocks are visible
		numInItem   = galleryItem.length,
		loadMore    = $('.load-more button,.load-left,.load-right,.load-center');
	
	galleryItem.addClass('isotop-item ');
	
	/*--------------------------------------------------------*/
	/*------------ Width and height isotope block ------------*/
	/*--------------------------------------------------------*/

	$(window).resize(function(){ columsSize() });

	/*-------------------------------------------------------*/
	/*------------- Function at click to filter -------------*/
	/*-------------------------------------------------------*/
	
	$(".sort-menu li > a[data-sort-value]").click(function(e){

		e.preventDefault();

		// Fixed =((
		// setTimeout(function(){
		// 	$('.menu-overlay').css("display","none");
		// 	$('.sort-menu li.hover').removeClass('hover');
		// },0)

		$('.pages-views').removeClass('zoomIn');
		$('.pages-views').addClass('zoomOut').html('');

		$('#mass-block').removeClass('zoomOut').show();
		
		

		window.location.hash=$(this).html();
		
		itemShow = 17; // Number of blocks are visible

		var selector = $(this).attr("data-sort-value");		

		$(".sort-menu li.active").removeClass("active");
		$(this).parent().addClass("active");

		if (selector == "*") {
			$('.site-blog-nav,.site-blog-nav-f').removeClass('nav-visible');
		}
		else {
			$('.site-blog-nav,.site-blog-nav-f').addClass('nav-visible');
		}

		gallery.isotope({
			filter: selector
		});
		galleryItem.hide();
		if (selector == "*") {
			galleryItem.slice(0, itemShow).show();
		} else {
			$(selector).slice(0, itemShow).show();
		}
		galleryItem.removeClass('zoomIn');
		gallery.isotope('layout').isotope({transitionDuration: 0});
		galleryItem.addClass('zoomIn');

		loadMore.removeClass('hide')
		if ($(selector).length <= itemShow) {
			loadMore.addClass('hide');
		}		

		// Navigation
		panelNav();

		// Isotope vievs filter
   		subFilter();

		// Heager Page Titile
		headBlock();	

		// 

		columsSize();

		if ($(selector).hasClass('hidden')) {
			loadMore.removeClass('hide');
		} else {

		}

		// close menu touch devise 
		if ( $('body').width() + scrollWidth <=767 ) {
			$('.touch .navigation').removeClass('open');
		}


		
		
	});
	
	/*-------------------------------------------------------*/
	/*----------------- Outher Page visible -----------------*/
	/*-------------------------------------------------------*/

	$('.ajax-link').on('click', function(){

		loadMore.addClass('hide')

		$.get(
			$(this).attr('data-page-href'),
			onAjaxSuccess
		);
		function onAjaxSuccess(data){
			$('#mass-block').addClass('zoomOut').hide();

			if ($('.pages-views').hasClass('zoomIn')) {
				$('.pages-views').addClass('zoomOut');
				setTimeout(function(){
					$('.pages-views').html(data).removeClass('zoomOut').addClass('zoomIn');
				}, 100)
				// $('.pages-views').html('').removeClass('zoomIn').html(data).addClass('zoomIn');
			} else {
				$('.pages-views').html(data).removeClass('zoomOut').addClass('zoomIn');
			}
			
		}

		window.location.hash=$(this).html();

		if ($(this).attr('data-page-title') !== undefined) {

			$('.head-block').addClass('head-block-visible');
			$('.block-post-title h5').text( $(this).attr('data-page-title') );

		} else {
			$('.head-block').removeClass('head-block-visible');
		}

		$(".sort-menu li.active").removeClass("active");
		$(this).parent().addClass("active");
		$('.site-blog-nav,.site-blog-nav-f').addClass('nav-visible');

		// Navigation
		panelNav();

		// Isotope vievs filter
   		subFilter();

   		// close menu touch devise 
		if ( $('body').width() + scrollWidth <=767 ) {
			$('.touch .navigation').removeClass('open');
		}
	});	
	
	/*-------------------------------------------------------*/
	/*----------------- Title block visible -----------------*/
	/*-------------------------------------------------------*/

	function headBlock(){
		if ($('.sort-menu li.active a').html() == $('.sort-menu li:not(.search):first>a').html()) {
			$('.head-block').removeClass('head-block-visible');
		}
		else {
			$('.head-block').addClass('head-block-visible');
			$('.head-block h5').html($('.sort-menu li.active a').html())
		}		
	}
	function tableMoreFix(){
		if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
			$('.sort-menu li.more-menu').removeClass("hover");							
		}
	}

	/*--------------------------------------------------------*/
	/*---- Function is responsible for running navigation ----*/
	/*--------------------------------------------------------*/

	function panelNav(){

		var prevarr = $('.sort-menu li.active').prev().find('a').html();		
		var nextarr = $('.sort-menu li.active').next().find('a').html();

		// Checking the next elements is MORE MENU
		if ( $('.sort-menu li.active').next().is('.more-menu') ) {
			var nextarr = $('.sort-menu .sub-menu li').find('a').html();
		}
		else if ( $('.sort-menu li.active').prev().is('.search') ){
			var prevarr = '';
		}
		else if ( $('.sort-menu .sub-menu li.active').is(':first-child') ){
			var prevarr = $('.sort-menu li.more-menu').prev().find('a').html();
		}

		// Checking the last element
		if ($('.sort-menu li.active').is('.last-filter')) {
			$('.rights > a > span').html( $('.sort-menu > li:not(.search):first > a').html() );
		}
		else {
			$('.rights > a > span').html(nextarr);
		}		

		$('.lefts > a > span').html(prevarr);
	}

	/*---------------------*/
	/*---- Left button ----*/
	/*---------------------*/

	$('.lefts>a').on('click', function(e){
		e.preventDefault();
		if ( $('.sort-menu .sub-menu li.active').is(':first-child') ){
			$('.sort-menu li.more-menu').prev().find('a')[0].click();
		} else {
			setTimeout(function(){
				$('.sort-menu li.active').prev().find('a')[0].click();
			},0);			
			tableMoreFix();// Fx for table
		}
	});

	/*----------------------*/
	/*---- Right button ----*/
	/*----------------------*/

	$('.rights>a').on('click', function(e){
		e.preventDefault();
		// Checking the last element
		if ($('.sort-menu li.active').is('.last-filter')) {
			$('.sort-menu > li:not(.search):first > a')[0].click();
		}
		// Checking the next elements is MORE MENU
		else if($('.sort-menu li.active').next().is('.more-menu')){
			$('.sort-menu li.more-menu li:first-child').find('a')[0].click();
			tableMoreFix();// Fx for table
		}
		else {
			$('.sort-menu li.active').next().find('a')[0].click();			
			tableMoreFix();// Fx for table
		}
		
	});

	/*--------------------------*/
	/*---- Load More button ----*/
	/*--------------------------*/

	$('.load-more button').on( 'click', function() {
		var selector = $(".sort-menu > li.active > a").attr("data-sort-value");

		itemShow = itemShow + addedItem;
		if (selector == "*") {
			galleryItem.slice(0, itemShow).show();
			if (galleryItem.length <= itemShow) {
				loadMore.addClass('hide')
			}
		} else {
			$(selector).slice(0, itemShow).show();
			if ($(selector).length <= itemShow) {
				loadMore.addClass('hide');
			}
		}
		setTimeout (function(){
			gallery.isotope('layout');
		}, 0);
	});

}

/*---------------------------------------------------------*/
/*---------------- Function that determines ---------------*/
/*----------- the height and width of the block -----------*/
/*---------------------------------------------------------*/

function columsSize(){
	var $fm = 4,$fl = 4,$rod = $('#mass-block').width();

	if ($('body').width() + scrollWidth >= 1230){
		var $col = Math.floor($rod/8),$fl = $fl+2;
		$('.ib-4, .ib-5').height($col*2);
	}
	else if ($('body').width() + scrollWidth >= 992){
		var $col = Math.floor($rod/6),$fl = $fl+2;
		$('.ib-4, .ib-5').height($col*2);
	}
	else if ($('body').width() + scrollWidth >= 767){
		var $col = Math.floor($rod/4);
		$('.ib-4, .ib-5').height(300);
	}
	else if ($('body').width() + scrollWidth > 500){
		var $col = $rod/4;
		$('.ib-4, .ib-5').height(300);
	}
	else {
		var $col = Math.floor($rod/1*2)/4,$fm = $fm/2,$fl = $fl/2;
		$('.ib-4').height(400);
		$('.ib-5').height(450);
	}

	$('.ib-1, .ib-2-1').width($col);

	$('.ib-2, .ib-3').width($col*2);
	$('.ib-4').css("width", $col*$fm);
	$('.ib-5').width($col*$fl);

	$('.ib-1, .ib-2').height($col);
	$('.ib-2-1, .ib-3').height(Math.floor($col*2));

	$('#mass-block').isotope({
		itemSelector : '.isotop-item',
		masonry: {
			columnWidth: $col
		}
	});
	
}


$(document).ready(function(){	   
	gallery();
});

/*-------------------------------------------------------*/
/*-------------- Locaton hash for One page --------------*/
/*-------------------------------------------------------*/

jQuery(document).ready(function(){

	if (window.location.hash.length == 0 ) { 
		setTimeout(function(){
			$('.sort-menu >li:not(.search):first>a').trigger("click");
		},0);
	}

	if (window.location.hash.length > 0 ) { 
		setTimeout(function(){
			$('.sort-menu li:not(.search) > a[href=' + window.location.hash + ']').trigger("click");
		},0);
	}

	if (window.location.hash.length !== 0){
		$('.sort-menu li>a').each(function(){
			if ($(this).html() == window.location.hash.split('#').join('') && window.location.hash !== "#"+$('.sort-menu >li:not(.search):first>a').html()) {			
				// Navigation visible
				$('.site-blog-nav,.site-blog-nav-f').addClass('nav-visible');
				// Header Title visible
				if ($(this).attr('data-page-title') == undefined) {
					$('.head-block').removeClass('head-block-visible');		
				} else {
					$('.head-block').addClass('head-block-visible');	
				}


			}
		});	
	}
});


/*--------------------------------------------------------*/
/*------------ Isotope Hidden block add class ------------*/
/*--------------------------------------------------------*/

var itemReveal = Isotope.Item.prototype.reveal;
Isotope.Item.prototype.reveal = function() {
  itemReveal.apply( this, arguments );
  $( this.element ).removeClass('isotope-hidden');
};

var itemHide = Isotope.Item.prototype.hide;
Isotope.Item.prototype.hide = function() {
  itemHide.apply( this, arguments );
  $( this.element ).addClass('isotope-hidden');
};

/*-------------------------------------------------------*/
/*---------------- Magnific Popup plugin ----------------*/
/*-------------------------------------------------------*/

var magnificPopup = $.magnificPopup.instance;

// Close modal.
$(document).on('click','.ajax-modal button.close', function(e){
   	e.preventDefault();

	//Animation
	$('.ajax-modal').removeClass('open');
	$('.mfp-bg').removeClass('openedd');
	$('.mfp-bg').removeClass('openedd-gall');
   	$('.mfp-bg').addClass('closedd');

   	setTimeout(function() {
		magnificPopup.close();
	}, 350);
});

// Prev arrow
$(document).on('click','.ajax-modal:not(.calendar) button.left', function(e){
	e.preventDefault();
	setTimeout(function() { $('.ajax-modal .modal-head').addClass('righting'); }, 0);
	setTimeout(function() {	$('.ajax-modal .button-group').addClass('righting');}, 100);
	setTimeout(function() {	$('.ajax-modal .modal-wrap, .ajax-modal .container').addClass('righting');}, 150);
	setTimeout(function() {
		magnificPopup.prev();
	}, 500);

});

// Next arrow
$(document).on('click','.ajax-modal:not(.calendar) button.right', function(e){
    e.preventDefault();
    setTimeout(function() {	$('.ajax-modal .modal-head').addClass('lefting');}, 0);
	setTimeout(function() {	$('.ajax-modal .button-group').addClass('lefting');}, 100);
	setTimeout(function() {	$('.ajax-modal .modal-wrap, .ajax-modal .container').addClass('lefting');}, 150);
    setTimeout(function() {
		magnificPopup.next();
	}, 500);
});

/*-------------------------------------------------------*/
/*----------------- Magnific Popup Ajax -----------------*/
/*-------------------------------------------------------*/

// Works Modal
$('.works-block').click(function(){
	$('.lb-block').magnificPopup({
		delegate: '.works-block:not(.isotope-hidden) .ajax-mod',
		type: 'ajax',
		closeOnBgClick: false,
		callbacks: {
			ajaxContentAdded: function() {
				setTimeout(function() {
					$('.ajax-modal').addClass('open');
			  	}, 200);
			},
			open: function(){
				setTimeout(function() {
					$('.mfp-bg').addClass('openedd');
			  	}, 1);
			}
		},
		tLoading: '',
		showCloseBtn: false
	});
})


// Albums Modal
$('.albums-block').click(function(){
	$('.gallery-ajax').magnificPopup({
		delegate: '.albums-block:not(.isotope-hidden) .ajax-mod',
		type: 'ajax',
		closeOnBgClick: false,
		callbacks: {
			ajaxContentAdded: function() {
				setTimeout(function() {
					$('.ajax-modal').addClass('open');
			  	}, 200);
			},
			open: function(){
				setTimeout(function() {
					$('.mfp-bg').addClass('openedd-gall');
			  	}, 1);
				
			}
		},
		tLoading: '',
		showCloseBtn: false
	});
});

// Calendar Modal
$('.cal-ajax').magnificPopup({
	type: 'ajax',
	tLoading: '',
	closeOnBgClick: false,
	callbacks: {
		ajaxContentAdded: function() {
			setTimeout(function() {
				$('.ajax-modal').addClass('open');
				$('#calendar').calendar({
					prev        : $('.ajax-modal .prev'),
					next        : $('.ajax-modal .next'),
					year_wrapper: $('#year'),
					date_wrapper: $('#date'),
					selet_type  : $('#select-type'),
					year_month  : $('#year_month'),
					year_number : $('#year_number')
				});
		  	}, 200);
		},
		open: function(){
			
			setTimeout(function() {
				$('.mfp-bg').addClass('openedd');
		  	}, 1);
		}
	},
	showCloseBtn: false
});

// VIDEO Modal
$('.popup-youtube, .popup-vimeo').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	callbacks: {
		open: function(){
			setTimeout(function() {
				$('.mfp-bg').addClass('openedd-video');
		  	}, 1);
		}
	},
	tLoading: '',
	fixedContentPos: false
});

// Modal Ajax Royal Slider
function modalSlider(a,b,c){
	$(a).royalSlider({
		loop: true,
		controlNavigation: b,
		autoScaleSlider: true, 
		autoScaleSliderWidth: 760,     
		autoScaleSliderHeight: c
	});

	// Royal Slider Resize for Rotate Android Device FIX
	if(navigator.userAgent.match(/Android/i)) {	$(window).on('orientationchange', function() { 
		setTimeout(function() { 
			// Resize Slider
			$(a).royalSlider('updateSliderSize', true); 			
		}, 1500); });		
	}
}

/*------------------------------------------------------*/
/*------------------- Social Buttons -------------------*/
/*------------------------------------------------------*/

function socialLink(a){

	var urlsoc = location.href.replace("index.html","");

	// TWITTER SHARE
	new GetShare({
		root: $(a + '.gt-tw'),
		network: "twitter",
		button: {text: ""},
		share: {
			url: urlsoc,
			message: 'Link to '+urlsoc+' '
		}
	});
	// LINKEDIN SHARE
	new GetShare({
    	root: $(a + '.gt-in'),
		network: "linkedin",
		button: {text: ""},
		share: {
			url: urlsoc,
			message: 'Link to '+urlsoc+' '
		}
	});
	// VK SHARE
	new GetShare({
    	root: $(a + '.gt-vk'),
		network: "vk",
		button: {text: ""},
		share: {
			url: urlsoc
		}
	});
	// STUMBLEUPON SHARE
	new GetShare({
    	root: $(a + '.gt-st'),
		network: "stumbleupon",
		button: {text: ""},
		share: {
			url: urlsoc,
			message: 'Link to '+urlsoc+''
		}
	});
	// FACEBOOK SHARE
	new GetShare({
		root: $(a + '.gt-fb'),
		network: "facebook",
		button: {text: ""},
		share: {
			url: urlsoc,
			message: 'Link to '+urlsoc+' '
		}
	 });
	// GOOGLE+ SHARE
	new GetShare({
		root: $(a + '.gt-gp'),
		network: "googleplus",
		button: {text: ""},
		share: {
			url: urlsoc,
			message: 'Link to '+urlsoc+' '
		}
	 });
	// PINTEREST SHARE
	new GetShare({
		root: $(a + '.gt-pt'),
		network: "pinterest",
		button: {text: ""},
		share: {
			url: urlsoc,
			message: 'Link to '+urlsoc+' '
		}
	 });
}

/*-------------------------------------------------------*/
/*-------------- Count the number of share --------------*/
/*-------------------------------------------------------*/

function shareCount() {
	var numb = $('.getshare-counter'),
		allCount = 0;
	numb.each(function () {
		allCount = allCount + Number($(this).html());
	})
	$('#all').html(allCount)
}
setTimeout(function() {
	shareCount();
	setTimeout(function() {
		shareCount();
	}, 2000)
}, 1000);

/*------------------------------------------------------*/
/*--------------- Bootstrap tab collapse ---------------*/
/*------------------------------------------------------*/

if($(".nav-tabs").exists()) {
	$('.nav-tabs').tabCollapse();
}

/*------------------------------------------------------*/
/*--------------------- Pie Charts ---------------------*/
/*------------------------------------------------------*/

function pieCharts() {
	var data = [
	    ['One', 25],['Two', 15], ['Three', 16], 
	    ['Four', 17],['Five', 12], ['Six', 15]
	];
	var plot1 = jQuery.jqplot ('chart1', [data], { 
		seriesDefaults: {
			shadow: false,
			renderer:$.jqplot.DonutRenderer,
		    rendererOptions: {
				startAngle: -90,
				diameter: 140,
				dataLabelPositionFactor: 0.6,
				innerDiameter: 28,
				showDataLabels: true
			}
		},
		grid:{
			background:'transparent',
			borderColor:'transparent',
			shadow:false,
			drawBorder:false,
			shadowColor:'transparent'
		},
		seriesColors: [
			"#3f4bb8",
			"#e13c4c",
			"#ff8137",
			"#ffbb42",
			"#20bdd0",
			"#2b70bf",
			"#f25463",
			"#f1a114",
			"#f5707d",
			"#ffd07d",
			"#4c7737"],
		legend: { 
			show:true, 
			location: 'e'
		}
	});
	$(window).resize(function() {
		plot1.replot( { resetAxes: true } );
	});
}
function pieCharts2() {
	var data = [
	    ['', 33],['', 33], ['', 34]
	];
	var plot2 = jQuery.jqplot ('chart2', [data], { 
		seriesDefaults: {
			shadow: false,
			renderer:$.jqplot.DonutRenderer,
		    rendererOptions: {
				startAngle: -125,
				diameter: 140,
				dataLabelPositionFactor: 0.6,
				innerDiameter: 28,
				showDataLabels: true
			}
		},
		grid:{
			background:'transparent',
			borderColor:'transparent',
			shadow:false,
			drawBorder:false,
			shadowColor:'transparent'
		},
		seriesColors: [
			"#ffbb42",
			"#f1a114",
			"#ffd07d"
		]
	});
	$(window).resize(function() {
		plot2.replot( { resetAxes: true } );
	});
}
function pieCharts3() {
	var data = [
	    ['', 33],['', 33], ['', 34]
	];
	var plot3 = jQuery.jqplot ('chart3', [data], { 
		seriesDefaults: {
			shadow: false,
			renderer:$.jqplot.DonutRenderer,
		    rendererOptions: {
				startAngle: -125,
				diameter: 140,
				dataLabelPositionFactor: 0.6,
				innerDiameter: 28,
				showDataLabels: true
			}
		},
		grid:{
			background:'transparent',
			borderColor:'transparent',
			shadow:false,
			drawBorder:false,
			shadowColor:'transparent'
		},
		seriesColors: [
			"#e13c4c",
			"#f25463",
			"#f5707d "
		]
	});
	$(window).resize(function() {
		plot3.replot( { resetAxes: true } );
	});
}
function pieCharts4() {
	var data = [
	    ['', 33],['', 33], ['', 34]
	];
	var plot4 = jQuery.jqplot ('chart4', [data], { 
		seriesDefaults: {
			shadow: false,
			renderer:$.jqplot.DonutRenderer,
		    rendererOptions: {
				startAngle: -125,
				diameter: 140,
				dataLabelPositionFactor: 0.6,
				innerDiameter: 28,
				showDataLabels: true
			}
		},
		grid:{
			background:'transparent',
			borderColor:'transparent',
			shadow:false,
			drawBorder:false,
			shadowColor:'transparent'
		},
		seriesColors: [
			"#3f4bb8",
			"#2b70bf",
			"#20bdd0"
		]
	});
	$(window).resize(function() {
		plot4.replot( { resetAxes: true } );
	});
}
if($("#chart1").exists()) {
	pieCharts()
}
if($("#chart2").exists()) {
	pieCharts2()
}
if($("#chart3").exists()) {
	pieCharts3()
}
if($("#chart4").exists()) {
	pieCharts4()
}

/*-------------------------------------------------------*/
/*------------------ Moris Line Charts ------------------*/
/*-------------------------------------------------------*/

function morisLineCharts() {
	Morris.Line({
	  
	element: 'saleschart',

	data: [
	    {month: "2012-01", "rents": 1000, "sales": 2000},
	    {month: "2012-02", "rents": 1800, "sales": 2500},
	    {month: "2012-03", "rents": 3700, "sales": 2200},
	    {month: "2012-04", "rents": 4700, "sales": 2200},
	    {month: "2012-05", "rents": 4400, "sales": 3000},
	    {month: "2012-06", "rents": 4700, "sales": 3300},
	   	{month: "2012-07", "rents": 5000, "sales": 3300},
	    {month: "2012-08", "rents": 5000, "sales": 3700},
	    {month: "2012-09", "rents": 5200, "sales": 4300},
	    {month: "2012-10", "rents": 5000, "sales": 4300}
	],
		xkey: 'month',
		ykeys: ['rents', 'sales'],
		labels: ['rents', 'sales'],
		lineColors: ['#e45160','#ffbb42'],
		hideHover: 'auto',
		smooth: false,
		resize: true
	});
}
function morisBarCharts() {
	Morris.Bar({
    	element: 'hero-bar',
    	data: [
	        {month: 'Jan.', sales: 2000, rents:2400},
	        {month: 'Feb.', sales: 3000, rents:3100},
	        {month: 'Mar.', sales: 3600, rents:3000},
	        {month: 'Apr.', sales: 4300, rents:4100},
	        {month: 'May.', sales: 3300, rents:3500},
	        {month: 'Jun.', sales: 3000, rents:3800},
	        {month: 'Jul.', sales: 3400, rents:2900},
	        {month: 'Aug.', sales: 2900, rents:3500},
	        {month: 'Sep.', sales: 4000, rents:3500},
	        {month: 'Oct.', sales: 3900, rents:3400}
    	],
	    xkey: 'month',
	    ykeys: ['sales', 'rents'],
	    labels: ['sales', 'rents'],
	    barColors: ['#e45160','#ffbb42'],
		hideHover: 'auto',
		resize: true
    });
}
if($("#saleschart").exists()) {
	morisLineCharts()
}
if($("#hero-bar").exists()) {
	morisBarCharts()
}

/*------------------------------------------------------*/
/*------------------- Imonial Slider -------------------*/
/*------------------------------------------------------*/

function imonialSlider() {
	$(".imonial").royalSlider({
		autoHeight: true,
	    arrowsNav: false,
	    imageAlignCenter:false,
	    loop: false,
	    loopRewind: true,
	    numImagesToPreload: 6,
	    keyboardNavEnabled: true,
	    usePreloader: false
	})
}
if($('.imonial').exists()){
	imonialSlider()
}

/*-------------------------------------------------------*/
/*------------------ Ease Circle Skill ------------------*/
/*-------------------------------------------------------*/

if($('#firs').exists()){
	$("#firs").easyCircleSkill({
		percent:   	85,
		linesize:  	1,
		skillName: 	'Design'
	})
}
if($('#twos').exists()){
	$("#twos").easyCircleSkill({
		percent: 90,
		skillName: 	'Photoshop',
		colorline: '#ffbb42'
	})
}
if($('#thees').exists()){
	$("#thees").easyCircleSkill({
		percent:   	90,
		linesize:  	1,
		skillName: 	'HTML 5',
		colorline: '#e13c4c'
	})
}
if($('#fores').exists()){
	$("#fores").easyCircleSkill({
		percent: 80,
		skillName: 	'CSS 3',
		colorline: '#3f4bb8'
	})
}

/*-------------------------------------------------------*/
/*-------- Single post slider block image height --------*/
/*-------------------------------------------------------*/

function postSliderAvtoHeightBlock() {
	if( $('body').width() + scrollWidth >= 767 ) {
		$('.post-slider .image').each(function(){
			$(this).css("height", $(this).parent().height() );
		});
	} else {
		$('.post-slider .image').css("height",$(this).width() );
		$('.post-slider').royalSlider('updateSliderSize', true);
	}
}

/*------------------------------------------------------*/
/*----------------- Single post slider -----------------*/
/*------------------------------------------------------*/

function postSlider() {
	$(".post-slider").royalSlider({
		autoHeight: true,
	    loop: true,
	    arrowsNavAutoHide: false,
	    imageAlignCenter:false,
	    sliderDrag: false,
	    sliderTouch: false,
	    loopRewind: true,
	    navigateByClick: false,
	    transitionType: 'fade'
	}).removeClass('load');
}

if($('.post-slider').exists()){
	$(window).load(postSlider())
	postSliderAvtoHeightBlock()
	$(window).resize(postSliderAvtoHeightBlock);
}

/*------------------------------------*/
/*-- Carousel button vertical align --*/
/*------------------------------------*/

function buttonAlign(){
	$('.post-carousel a.prevs,.post-carousel a.nexts').css("top",  Math.floor($('.recent-post img').height()/2))
	setTimeout(function() {
		$('.post-carousel a.prevs,.post-carousel a.nexts').css("top",  Math.floor($('.recent-post img').height()/2))
	}, 1000);
}
$(window).resize(buttonAlign);

/*--------------------------------------*/
/*-------- Recent post carousel --------*/
/*--------------------------------------*/

jQuery(document).ready(function(){

	if($(".recent-post-carousel").exists()) {
		function postCarousel() {
			// var carousel = ".recent-post-carousel";
			$(".recent-post-carousel").carouFredSel({
			    responsive: true,
			    height : 'auto',
			    width: '100%',
			    prev: '.post-carousel .prevs',
			    next: '.post-carousel .nexts',
			    scroll: {
			        items: 1,
			        speed: 500,
			        timeoutDuration:300000
			    },    
			    items: {
				    width: 280,
				    visible: {
				        min: 1,
				        max: 4
				    }
			    },
			    onCreate: function(){ 
			    	$(this).addClass('init');
			    	$(this).parent().add($(this)).css('height', $(this).children().first().height() + 'px');
			    	setTimeout(function() {
			    		$(this).parent().add($(this)).css('height', $(this).children().first().height() + 'px');
			    	}, 500);
			    	buttonAlign()
			    }
			});
		}
		var resizeTimer;

		
		postCarousel();
		setTimeout(postCarousel, 200);

		$(window).resize(function() {
		    clearTimeout(resizeTimer);
		    resizeTimer = setTimeout(postCarousel, 0);
		}).resize();
		
	}

	/*--------------------------------------*/
	/*----------- Image carousel -----------*/
	/*--------------------------------------*/

	if($(".image-carousel").exists()) {
		setTimeout(function(){
			$('.image-carousel').carouFredSel({
				responsive: true,
			    width: 'auto',
			    prev: '.carousel .prevs',
			    next: '.carousel .nexts',
			    scroll: {
			        items: 1,
			        speed: 500,
			        timeoutDuration:300000
			    },    
			    items: {
				    width: 280,
				    height: 'auto',
				    visible: {
				        min: 1,
				        max: 4
				    }
			    }
			});
		},0)
	}

	/*----------------------------------------------------*/
	/*----------------- Video Background -----------------*/
	/*----------------------------------------------------*/

	if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {} else {
		if($('.youtube-play').exists()){
			$(function(){
		      $(".youtube-play").mb_YTPlayer();
		    });
		}
	}

});



/*-----------------------------------------------------*/
/*----------- Mobile Rotation Load Function -----------*/
/*-----------------------------------------------------*/

if(navigator.userAgent.match(/iPad|iPhone|Android/i)) {
	$(window).on('orientationchange', function() {
		columsSize();
		moreMenu();
		setTimeout(function() {
    		moreMenu();	
		}, 200);
	});
}

window.onload = orientationchange;
window.onorientationchange = orientationchange;
function orientationchange() {
	if(window.orientation == 90 || window.orientation == -90) {
    	columsSize();// Isotope block resize
    	postSliderAvtoHeightBlock();// Single Slider resize
    	setTimeout(function() {
    		postSliderAvtoHeightBlock();// Single Slider resize
			moreMenu();
		}, 150);
	}
}

/*------------------------------------------------------*/
/*------------ ChessBoard element function -------------*/
/*------------------------------------------------------*/

function squares() {
	function squar() { $("#squares").width( Math.floor( $("#squares").parent().width() / $('.square').width() ) * $('.square').width() ) }
	setTimeout(function(){squar()},200);
	setTimeout(function(){squar()},500);
	$(window).resize(function(){squar();setTimeout(function(){squar();},200);setTimeout(function(){squar();},500);});
}

function squaresGallery() {
	$('#squares').magnificPopup({
		delegate: '.square.square-img',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		type: 'image',
		callbacks: {
			open: function(){
				setTimeout(function() {
					$('.mfp-bg').addClass('openedd-gall');
			  	}, 1);
			}
		},
		tLoading: ''
	});
}


/*------------------------------------------------------*/
/*------------- Other Navigation One Page --------------*/
/*------------------------------------------------------*/

var wlh;

jQuery(document).ready(function(){
	// Navigation 
	$('.tohome').on('click', function(e){
		e.preventDefault();
		$('.sort-menu >li:not(.menu-item-has-children):not(.search):first>a').trigger("click");
	});
	// Add Data Attr for hash
	$('a.ajax-mod').each(function(){
		$(this).attr('data-hash', $(this).parent().find('.name').html().replace(/\s/g, '_'));
	});
	// Load modal page through hash
	if (window.location.hash.length > 0 ) { 
		if(window.location.hash == '#' && window.location.hash.length == 1 ) {
			$('.sort-menu>li:not(.menu-item-has-children):not(.search):first>a').trigger("click");
		} else {
			$('a[data-hash="' + window.location.hash.split('#').join('') + '"].ajax-mod').trigger("click");
		}
		
	}
	// Add hash to modal window
	$('.ajax-mod').on('click', function(){
		wlh = window.location.hash;
		window.location.hash = $(this).attr('data-hash');
	});
	// Click To Page 
	$('.topage').on('click', function(e){
		e.preventDefault();
		$('.sort-menu li>a[href="'+$(this).attr('href')+'"]').trigger("click");
	});
});

/*-------------------------------------------------------*/
/*----------------- Function Clear Hash -----------------*/
/*-------------------------------------------------------*/

function ajaxClearHash(){
	window.location.hash = $('.ajax-modal .modal-head h1').html().replace(/\s/g, '_');
	$('.ajax-modal button.close').on('click', function(){
		if (wlh == undefined) {
			$('.sort-menu >li:not(.search):first>a').trigger("click");
		} else {
			$('.sort-menu >li:not(.search)>a[href="'+ wlh +'"]').trigger("click");
		}
	});
}

/*-------------------------------------------------------*/
/*---------- Function definition retina device ----------*/
/*-------------------------------------------------------*/

function retina(a){
	if( 'devicePixelRatio' in window && window.devicePixelRatio == 2 ){
		var imgToReplace = $(a+' img.replace-2x').get();	
	    for (var i=0,l=imgToReplace.length; i<l; i++) {
    		var src = imgToReplace[i].src;
	      	src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.$1');
	      	imgToReplace[i].src = src;
	      	$(imgToReplace[i]).load(function(){
				$(this).addClass('loaded');
			});	      	
	    };
	    var imgToReplaceM = $(a+' a.replace-2x').get();
	    for (var i=0,l=imgToReplaceM.length; i<l; i++) {
	      	var src = imgToReplaceM[i].href;
	      	src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.$1');
	      	imgToReplaceM[i].href = src;
	      	$(imgToReplaceM[i]).addClass('loaded');
	    }; 

	    $('img').each(function(){
			var item = $(this);
	 		var retinaSrc = $(this).attr('data-retina-src');

	 		if(retinaSrc !== undefined) {
				item.attr('src', retinaSrc );
			}
	 	});
	 	
	}
}

retina('');  // Retina Display

function vimeoApi() {
	$('.vimeo-block').each(function(){
		var videoId = $(this).find('a.hide-link-play').attr('data-vimeo-id');
		var item = $(this);

		if(videoId !== undefined) {
			$.getJSON('http://vimeo.com/api/v2/video/'+videoId+'.json', function(data) {
				item.find('.video-pre img').css('display', 'none');
				item.find('.image').css('background', 'url('+data[0].thumbnail_medium+') 50% 100% / cover').addClass('load');
				item.find('.video-desc').html((Math.floor(data[0].duration / 60) + ':' + data[0].duration % 60)).addClass('load');
				item.find('a.hide-link-play').attr('href','https://vimeo.com/'+data[0].id);
			});
		}
	});
}

function youtubeApi() {
	$('.youtube-block').each(function(){
		var videoId = $(this).find('a.hide-link-play').attr('data-youtube-id');
		var item = $(this);

		if(videoId !== undefined) {
			$.getJSON('http://gdata.youtube.com/feeds/api/videos/'+videoId+'?v=2&alt=jsonc', function(data) {
				item.find('.video-pre img').css('display', 'none');
				item.find('.image').css('background' , 'url(http://img.youtube.com/vi/'+data.data.id+'/mqdefault.jpg) 50% 100% / cover').addClass('load');
				item.find('.video-desc').html((Math.floor(data.data.duration / 60) + ':' + data.data.duration % 60)).addClass('load');
				item.find('a.hide-link-play').attr('href','https://www.youtube.com/watch?v='+data.data.id);
			});
		}
	});
}

function pinterestApi() {
	$('.pint-block').each(function(){
		var pintId = $(this).find('a.hide-link').attr('data-pinterest-id');
		var item = $(this);

		if(pintId !== undefined) {
			$.ajax({
			    url: 'http://api.pinterest.com/v3/pidgets/pins/info/?pin_ids='+pintId,
			    jsonp: "callback",
			    dataType: "jsonp",
			    success: function(data) {
			        item.find('.pint-img img').css('display', 'none');
					item.find('.image').css('background' , 'url('+data.data[0]['images']['237x']['url']+') 50% 100% / cover').addClass('load');				
					item.find('a.hide-link').attr('href','http://www.pinterest.com/pin/'+data.data[0]['id']);
			    }
			});
		}
	});
}

function twitterApi() {
	$('.twitt-block').each(function(){
		var twittId = $(this).find('a.hide-link').attr('data-twitt-id');
		var item = $(this);

		if(twittId !== undefined) {			
			$.getJSON('twitteroauth/tw.php?tweet_id='+twittId, function(data) {
				item.find('.twitt').html(data.text);
				item.find('.twitt-desc').html('@'+data.user.screen_name+' <span title="'+data.created_at+'"></span>');
				item.find('a.hide-link').attr('href', 'https://twitter.com/'+data.user.screen_name+'/status/'+data.id_str);
			});
		}
	});
}
function flickrApi() {
	$('.flickr-block').each(function(){
		var flickrId = $(this).find('a.hide-link').attr('data-flickr-id');
		var item = $(this);	

		if(flickrId !== undefined) {	
			$.ajax({
				type: "GET",
			    url: 'twitteroauth/flickr.php?flickr_id='+flickrId,
			    success: function(data) {
			    	var data = JSON.parse(data);
			        item.find('.flickr-img img').css('display', 'none');
					item.find('.image').css('background' , 'url('+data['sizes']['size']['7']['source']+') 50% 100% / cover').addClass('load');				
					item.find('a.hide-link').attr('href',data['sizes']['size']['0']['url'].split('/sizes/sq').join(''));
			    }
			});
		}
	});
}

function facebookApi() {
	$('.facebook-block').each(function(){
		var facebookId = $(this).find('a.hide-link').attr('data-facebook-id');
		var item = $(this);	

		if(facebookId !== undefined) {	
			$.ajax({
				type: "GET",
			    url: 'twitteroauth/facebook.php?facebook_id='+facebookId,
			    success: function(data) {
			    	var data = JSON.parse(data);
			    	item.find('.fb-post').html(data['message']);
			    	item.find('.fb-post-desc').html('@'+data['from']['name']+' <span title=""></span>');
			    	item.find('a.hide-link').attr('href','https://www.facebook.com/'+data['id']);
			    }
			});
		}
	});
}

function lastComment() {
	
}

jQuery(document).ready(function(){

	vimeoApi();
	youtubeApi();
	twitterApi();
	pinterestApi();
	flickrApi();
	facebookApi();

	$('.menu a.ico').on('click', function(){
		$('.navigation').toggleClass('open');
		$(this).addClass('button-close');
		$('li.menu-item-has-children,li.search').removeClass('hover');
	});

	if (document.body.style.msTouchAction !== undefined) {
		setTimeout(function(){moreMenu()},200);
		setTimeout(function(){moreMenu()},400);
	}

	lastComment();
})

$(window).load(function(){
	setTimeout(function(){
		socialLink('');  // Social Link
	},0)	
})


/*------------------------------------*/
/*------------ Form block ------------*/
/*------------------------------------*/

function contactForm() {
	
	$('#submit-form').on('click', function(){
	
		$.post('form.php', $('#contactform').serialize(),  function(data) {

			$('#success').html(data).animate({opacity: 1}, 500, function(){
				if ($(data).is('.send-true')) {
					$('#contactform').trigger( 'reset' );
				}
			});
		});
		return false;
	});
}



