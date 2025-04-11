$(()=>{
    $(window).scroll(()=>{
        if($(window).scrollTop() > 100) {
            $('.fav_txt').css('animation','move-backward 2s ease-in-out forwards');
            $('.fav_txt_2').css('animation','move-backward 2.5s ease-in-out forwards');
        } else {
            $('.fav_txt').css('animation','move-forward 2s ease-in-out');
            $('.fav_txt_2').css('animation','move-forward 2.5s ease-in-out');
        }
    });
});