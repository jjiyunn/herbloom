$(function(){

  // nav scroll animation ======================
  let lastScrollY = 0; 
  const bannerHeight = window.innerHeight;


  $(window).on('scroll', function(){
    if ($('.main-menu').hasClass('open')) return;

    const currentScrollY = window.scrollY;

    if (scrollY > bannerHeight-10){
      if (scrollY > lastScrollY) {
        $('header').stop().addClass('nav-hide');
      } else {
        $('header').stop().removeClass('nav-hide');
      }
    }
    lastScrollY = currentScrollY;
  });

	// footer accordion menu ======================
	$('.ft-title').click(function(){
		$(this).parent().toggleClass('active');
	});


  // FHD, HD sub-menu
  $('.main-menu > li').hover(function(e) {
    if ($(window).width() >= 1149) {
      $(this).find('.sub-menu').stop().slideDown();
    }
  }, function(e) {
    if ($(window).width() >= 1149) {
      $(this).find('.sub-menu').stop().slideUp(300);
    }
  });


  // TB, SM nav-bar
  $('.nav-bar').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('move-bar');
    $('.main-menu, .user-menu').toggleClass('open');
  });


  $(window).resize(function() {
    if (window.innerWidth >= 1149) {
      $('.sub-menu, .main-menu, .user-menu').removeClass('open').removeAttr('style');
      $('.nav-bar').removeClass('move-bar');
    }
  });
});
