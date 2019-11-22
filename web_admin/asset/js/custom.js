// hover dropdown navbar js here

	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
	
// tooltip js start here
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();   
	});

	 // scroll remove js  start here

    $(window).scroll(function() {
      if ($(document).scrollTop() > 60) {
        $('.header_navbar').addClass('header_navbar_color');
        $('.header_top').addClass('header_top_color');
        $('.navbar_links_set').addClass('navbar_links_set_new');
        $('.navbar_logo_here').addClass('navbar_logo_here_new');
          } else {
        $('.header_navbar').removeClass('header_navbar_color');
        $('.header_top').removeClass('header_top_color');
        $('.navbar_links_set').removeClass('navbar_links_set_new');
        $('.navbar_logo_here').removeClass('navbar_logo_here_new');
          }
		});

	
	
 
 // multiple img slider js start here

	$(document).ready(function() {
	 
	  $(".owl_multiple_img").owlCarousel({
	 
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  navigation : true, // Show next and prev buttons
		  items : 3,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,2]
	 
	  });
	 
	});
	
	
// multiple img slider js start here

	$(document).ready(function() {
	 
	  $(".owl_event_slider").owlCarousel({
	 
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  navigation : true, // Show next and prev buttons
		  items : 3,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,2]
	 
	  });
	 
	});
	
	
// multiple img slider js start here

	$(document).ready(function() {
	 
	  $(".owl_top_rated_slider").owlCarousel({
	 
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  navigation : true, // Show next and prev buttons
		  items : 3,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,2]
	 
	  });
	 
	});
	
	// slider text remove js here	 
	
	   $(window).load(function(){
			$(".owl-prev").text("");
			$(".owl-next").text("");
		})
		
		
  //input box password show js start here
  
  function myFunction() {
    var x = document.getElementById("password");
    var element = document.getElementById("eye");
    console.log()

    if (x.type === "password") {
    	element.classList.remove("fa-eye");
    	element.classList.add("fa-eye-slash");
        x.type = "text";
    } else {
    	element.classList.remove("fa-eye-slash");
    	element.classList.add("fa-eye");
        x.type = "password";
    }
}
	
