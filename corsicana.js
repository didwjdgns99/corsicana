$(document).ready(function(){
    var swiper = new Swiper(".firstSwiper", {
        slidesPerView: 1,
        loop:true,
        speed:2000
    });

    var swiper = new Swiper(".secondSwiper", {
      loop:true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".thirdSwiper", {
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      
      $('.sec3-1 .show-box').mouseenter(function(){
        let ww = $(window).width();
        if(ww >= 921)
        $('.sec3-1 .hide-box img').addClass('active')
      })
        
      
        
      
      $('.sec3-1 .show-box').mouseleave(function(){
        $('.sec3-1 .hide-box img').removeClass('active')
      });
      $('.sec3-2 .show-box').mouseenter(function(){
        let ww = $(window).width();
        if(ww >= 921)
        $('.sec3-2 .hide-box img').addClass('active')
      });
      $('.sec3-2 .show-box').mouseleave(function(){
        $('.sec3-2 .hide-box img').removeClass('active')
      });
      $('.sec3-3 .show-box').mouseenter(function(){
        let ww = $(window).width();
        if(ww >= 921)
        $('.sec3-3 .hide-box img').addClass('active')
      });
      $('.sec3-3 .show-box').mouseleave(function(){
        $('.sec3-3 .hide-box img').removeClass('active')
      });
      $('.sec3-4 .show-box').mouseenter(function(){
        let ww = $(window).width();
        if(ww >= 921)
        $('.sec3-4 .hide-box img').addClass('active')
      });
      $('.sec3-4 .show-box').mouseleave(function(){
        $('.sec3-4 .hide-box img').removeClass('active')
      });

      //서브메뉴 호버 이벤트
      $('.menu').mouseenter(function(){
        $(this).siblings('.sub-menu-detail').addClass('active')
      });
      $('.menu').mouseleave(function(){
        $(this).siblings('.sub-menu-detail').removeClass('active')
      });
      //햄버거 서브메뉴
      $('label[for=trigger] span').click(function(){
        $('.hamburger-list').toggleClass('active')
      });
      $('.h1-h b').click(function(){
        $('.h1-b').toggleClass('active');
      });
      $('.h2-h b').click(function(){
        $('.h2-b').toggleClass('active');
      });
      $('.h3-h b').click(function(){
        $('.h3-b').toggleClass('active');
      });
      $('.h4-h b').click(function(){
        $('.h4-b').toggleClass('active');
      });
      $('.h5-h b').click(function(){
        $('.h5-b').toggleClass('active');
      });
      $('.h6-h b').click(function(){
        $('.h6-b').toggleClass('active');
      });
      
      
      
});