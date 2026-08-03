$(function(){

  //hf plugin
  $(function(){
    const swiper = new Swiper('.pf-hf-wrap', {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.pf-hf-next',
        prevEl: '.pf-hf-prev',
      },
      pagination: {
        el: '.pf-hf-pagination',
        clickable: true,
      },
    });
  });


  //bg change
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var targetPos = $('.pf-pm-item .pf-title').offset().top - 500;
    var targetEnd = targetPos + $('.pf-pm-item').outerHeight();

    if (scrollTop >= targetPos && scrollTop <= targetEnd) {
      $('body').css('background-color', '#f3efe6');
    } else {
      $('body').css('background-color', '#f6f6f6');
    }
  });



  //pe bg
  var bgImg = [
    "url('../imgs/perfume/pe-bg-01.png')",
    "url('../imgs/perfume/pe-bg-02.png')",
    "url('../imgs/perfume/pe-bg-03.png')"
  ];

  //미리 로딩
  $('.pf-pe-bg-01').css('background-image', bgImg[0]);
  $('.pf-pe-bg-02').css('background-image', bgImg[1]);
  $('.pf-pe-bg-03').css('background-image', bgImg[2]);

  $('.pf-pe-card').on('mouseenter', function() {
    var idx = $(this).index();
    $('.pf-pe-bg').css('background-image', bgImg[idx]);
  });

  $('.pf-pe-card').on('mouseleave', function() {
    $('.pf-pe-bg-01').css('background-image', bgImg[0]);
    $('.pf-pe-bg-02').css('background-image', bgImg[1]);
    $('.pf-pe-bg-03').css('background-image', bgImg[2]);
  });
  
  
  //pe scroll
  $(window).on('scroll', function() {
    var sct = $(window).scrollTop();
    var winH = $(window).height();
    var targetPos = $('.pf-pe-wrap').offset().top;

    if (sct + winH > targetPos + 200) {
      $('.pf-pe-wrap').addClass('active');
    } else {
      $('.pf-pe-wrap').removeClass('active');
    }
  });

});


