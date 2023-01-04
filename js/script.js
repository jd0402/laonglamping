$(function(){
  var swiper = new Swiper('.one', {
     autoplay: {
         delay: 2500,//슬라이드 넘어가는 시간
         disableOnInteraction: false,
       },
       loop: true,//슬라이드 무한반복
       navigation: {//화살표 버튼
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       pagination: {//블릿 버튼
         el: '.swiper-pagination',
         clickable: true,
       },
     });
 });
 
 
 $(function(){
   var swiper = new Swiper('.two', {
      autoplay: {
          delay: 2500,//슬라이드 넘어가는 시간
          disableOnInteraction: false,
        },
  
        effect :'fade', /*추가*/
  
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {//블릿 버튼
          el: '.swiper-pagination',
          clickable: true,
        },
      });
  });
  

  AOS.init({
    duration: 1200
  })



  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.top-link').fadeIn();
    } else {
        $('.top-link').fadeOut();
    }
});