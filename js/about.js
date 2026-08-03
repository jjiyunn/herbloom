$(function(){

    /* ===== banner & Making Herbs Simple ===== */
    function scrollBannerFade(){
        let mhsTop = $('.ab-mhs-container').offset().top;
        let scroll = $(window).scrollTop();
        
        let blackTop = mhsTop - scroll;

        $('.bn-cts > *').each(function(){
            let itemBottom = $(this).offset().top + $(this).outerHeight();

            if( blackTop + 150 <= itemBottom ){
                $(this).css('opacity',0);
            } else {
                $(this).css('opacity',1);
            }
        });
    }

    $(window).scroll(scrollBannerFade);
    scrollBannerFade();


    /* ===== Why Herbloom ===== */
    function scrollFade(){

        $('.ab-wh-wrap, .ab-wh-bg3, .ab-whb-wrap').each(function(){

            let top = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let winH = $(window).height();

            if(scroll + winH -100 > top){
                $(this).addClass('show');
            }
        });

    }

    $(window).on('scroll', scrollFade);
    scrollFade();


    /* ===== Our Philosophy ===== */
    function cardFade(){

        let top = $('.ab-op-wrap').offset().top;
        let scroll = $(window).scrollTop();
        let winH = $(window).height();

        if(winH + scroll -300 > top){
            $('.ab-op-wrap > div').each(function(index){
                let $card = $(this);

                setTimeout(function(){
                    $card.addClass('show');
                }, index*150);
            });
        }
        
    }

    $(window).on('scroll',cardFade);
    cardFade();
});


    