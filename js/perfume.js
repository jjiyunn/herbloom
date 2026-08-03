$(function(){

  //hf plugin
  $(function(){
    const swiper = new Swiper('.pf-hf-list', {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });



  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    //bg change
    var bgTargetPos = $('.pf-pm-wrap .sub-title').offset().top - 500;
    var bgTargetEnd = bgTargetPos + $('.pf-pm-wrap').outerHeight();

    if (scrollTop >= bgTargetPos && scrollTop <= bgTargetEnd) {
      $('body').css('background-color', '#f3efe6');
    } else {
      $('body').css('background-color', '#f6f6f6');
    }


    //pm scroll
    $('.pf-pm-card, .pf-pm-Rcard').each(function() {
      var $this = $(this);
      var itemPos = $this.offset().top;
      
      if (scrollTop > itemPos - windowHeight + 200) {
        $this.addClass('active');
      } else {
        $this.removeClass('active');
      }
    });


    //pe scroll
    var peTarget = $('.pf-pe-list');
    if (peTarget.length) {
      var peTargetPos = peTarget.offset().top;

      if (scrollTop + windowHeight > peTargetPos + 200) {
        peTarget.addClass('active');
      } else {
        peTarget.removeClass('active');
      }
    }
  });

});


