
//MASONRY//////////////////////////////////////////////////


			$(document).ready(function(){
			var
			  speed = 1000,  // animation speed
			  $wall = $('#demo').find('.wrap')
			;
			
			$wall.masonry({
			  columnWidth: 100, 
			  // only apply masonry layout to visible elements
			  itemSelector: '.box:not(.invis)',
			  animate: true,
			  animationOptions: {
				duration: speed,
				queue: false
			  }
			});
			
			$('#filtering-nav a').click(function(){
			  var colorClass = '.' + $(this).attr('class');
			
			  if(colorClass=='.all') {
				// show all hidden boxes
				$wall.children('.invis')
				  .toggleClass('invis').fadeIn(speed);
			  } else {  
				// hide visible boxes 
				$wall.children().not(colorClass).not('.invis')
				  .toggleClass('invis').fadeOut(speed);
				// show hidden boxes
				$wall.children(colorClass+'.invis')
				  .toggleClass('invis').fadeIn(speed);
			  }
			  $wall.masonry();
			
			  return false;
				});
			});
	
//MASONRY//////////////////////////////////////////////////

//Piro Box IMAGE LIGHTBOX /////////////////////////////////////

$(document).ready(function() {
	$().piroBox({
			my_speed: 400, //animation speed
			bg_alpha: 0.6, //background opacity
			slideShow : true, // true == slideshow on, false == slideshow off
			slideSpeed : 6, //slideshow duration in seconds(3 to 6 Recommended)
			close_all : '.piro_close,.piro_overlay'// add class .piro_overlay(with comma)if you want overlay click close piroBox

	});
});


//STYLE SWITCHER//////////////////////////////////////////////////  

        <!-- Style Switcher Trigger and Panel -->
		
        $(document).ready(function(){
            $(".trigger").click(function(){
                $(".panel").toggle("slow");		
				$(this).toggleClass("active");
                return false;
            });
        });
		
 		<!-- /Style Switcher Trigger and Panel -->
		
		// initialize the jquery code
		 $(document).ready(function(){
			// any of the links removes all classes
			// return false keeps the browser from following the link's '#' target
			$("#switchStyles a").click(function(){
			$("body").removeClass();
			   return false;
			});
			// clicking one link adds its own class
			$("#switchDark").click(function(){
			$("body").addClass("dark");
			Cufon.refresh() //Cufon Fix to refresh the styles
			});
			$("#switchDarkStripe").click(function(){
			$("body").addClass("dark stripe");
			Cufon.refresh() //Cufon Fix to refresh the styles
			});
			$("#switchDarkGrunge").click(function(){
			$("body").addClass("dark grunge");
			Cufon.refresh() //Cufon Fix to refresh the styles
			});
			$("#switchDarkBlue").click(function(){
			$("body").addClass("dark blue");
			Cufon.refresh() //Cufon Fix to refresh the styles
			});
			$("#switchLight").click(function(){
			$("body").addClass("light");
			Cufon.refresh() //Cufon Fix to refresh the styles
			});
			$("#switchLightClouds").click(function(){
			$("body").addClass("light clouds");
			Cufon.refresh() //Cufon Fix to refresh the styles
			});
			$("#switchLightGrunge").click(function(){
			$("body").addClass("light grunge");
			Cufon.refresh() //Cufon Fix to refresh the styles
			});
			$("#switchLightFlowers").click(function(){
			$("body").addClass("light flowers");
			Cufon.refresh() //Cufon Fix to refresh the styles
			});
		});
//STYLE SWITCHER////////////////////////////////////////////////// 








//Description and magnify Overlays////////////////////////////////
		$(document).ready(function(){
				//Add Magnify span
				$(".zoom").append("<span>Embiggen</span>");
				//Full Caption Sliding (Hidden to Visible)
				$("div.box").hover(function(){
					//Fadein Magnify
					$(".zoom span", this).fadeIn();
					//Animate description box
					$(".description", this).stop().animate({left:'0px'},{queue:false,duration:400});
				}, function() {
					//Fadeout Magnify
					$(".zoom span", this).fadeOut();
					//Animate description box
					$(".description", this).stop().animate({left:'-100%'},{queue:false,duration:260});
				});
			});
//Description and magnify Overlays///////////////////////////////


     