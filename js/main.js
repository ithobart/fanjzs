$(document).ready(function () {
  'use strict';
  
/*========================================================================
	Header carousel
==========================================================================*/
  $('.carousel').carousel({
    interval: 5000,
	 pause: 'none'
  });


  
/*========================================================================
	Header Menu 
==========================================================================*/   
	$('.toggle-menu').jPushMenu();
		
/*========================================================================
	Owl cCarousel
==========================================================================*/		
	$("#hireme_slide").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  autoPlay: true
   });

	$("#sponsor_slide").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
	  itemsTablet : [768,3],
	  itemsMobile :	[480,1],
	  navigation : true,
	  navigationText : false,
	  pagination : false
	  
 
    });
	 $("#testmonial_slide").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      autoPlay: 3000,
      paginationSpeed : 400,
      singleItem:true,
	  items : 1, 
   });
		
/*========================================================================
	Wow Animation
==========================================================================*/
	$(".fancybox").fancybox();

    $(".fancybox1").fancybox();
    $(".fancybox2").fancybox();
    $(".fancybox3").fancybox();
    $(".fancybox4").fancybox();
    $(".fancybox5").fancybox();
    $(".fancybox6").fancybox();
			
/*========================================================================
	Wow Animation
==========================================================================*/
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
/*========================================================================
	Wow Animation
==========================================================================*/
  var wow = new WOW({
    mobile: false
  });
  wow.init();


  

});