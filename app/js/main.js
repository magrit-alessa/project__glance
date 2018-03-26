
$(document).ready(function(){
  var $page = $('html, body');

 var projectName = [];
 projectName[0] = "Project Name";
 projectName[1] = "Last Project";
 projectName[2] = "Some Project";



 var links= [];
   links[0] = "https://dribbble.com" ;
   links[1] =  "https://dribbble1.com";
   links[2] = "https://dribbble2.com";


 var description= []
  description[0] = "We work with some of the world's leading creative agencies to develop e-commerce, portfolio and commercial websites that win awards, drive customer sales and generate a solid return on your investment." ;
  description[1] =  "We work with some of the world's leading creative agencies to develop e-commerce, portfolio and commercial websites that win awards.";
  description[2] = "We work with some of the world's leading creative agencies to develop e-commerce.";




  $('a[href*="#"]').click(function() {
      $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
      }, 600);
      return false;
  });


  $(".btn_menu").click(function(){
    $('.nav').slideToggle();
    $('.nav__elem--a , .nav__elem--a-grey ').click(function(event){
      if($(event.target).closest('.btn_menu').length) return;
      $('.nav').fadeOut(300);
      event.stopPropagation();
    })
  });


  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('nav').addClass('nav__fixed');
    }else {
       $('nav').removeClass('nav__fixed');
    }
});


$(window).scroll(function(){
  if($(window).scrollTop() >= 50) {
     $('.btn_menu').addClass('fixed');
     $('nav').addClass('nav__fixed');
  }else {
     $('.btn_menu').removeClass('fixed');
     $('nav').removeClass('nav__fixed');
  }
});



  $(window).scroll(function(){
    var $sections = $('section');
	$sections.each(function(i,el){
    var top  = $(el).offset().top-100;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var name = $(el).attr('name');
    	if( scroll > top && scroll < bottom){
			$('div[name="'+name+'"].circle').addClass('active');
    }else{
        $('div[name="'+name+'"].circle').removeClass('active');
    }
    })
 });

 $('.projects__slider').slick({
   infinite: true,
   prevArrow:'<button class="projects__btn-left"></button>',
   nextArrow: '<button class="projects__btn-right"></button>',
   variableWidth: true
   });




   $("div.projects__slider").on('click', function(){
     $('div.project__container').empty();
     var eq = $("div.projects__slider").slick('slickCurrentSlide');
     $("div.project__container").append('<h2 class="projects__h2">' + projectName[eq] + '</h2>');
     $("div.project__container").append('<a href="#" class="projects__a">' + links[eq] + '</a>');
     $("div.project__container").append('<p class="projects__description">' + description[eq] + '</p>');
   });

 $('img.projects__slider--img').click(function(){
   $('div.projects__slider').toggleClass('projects__activeSlider');
   });


$("#form").submit(function(){
  $.ajax({
    type: "POST",
    url:"mail.php",
    data: $(this).serialize()
  }).done(function(){
    alert("Thank You!");
  });
  return false;
});


});

// });
