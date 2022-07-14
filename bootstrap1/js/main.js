$(document).ready(function(){
    // $(".fadeOutSlider").owlCarousel({
    //   autoplay: true,
    //   loop: true,
    //   nav: true,
    //   items: 1,
    //   navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    //   animateIn: 'ease-in',
    //   animateOut: 'ease-out'
    // });
    $(".owl-carousel").owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
      animateIn: 'ease-in',
      animateOut: 'ease-out',
      responsiveClass: true,
      responsive : {
        769 : {
          items: 2
        },
        400 : {
          items: 1
        }
      }
    });
    if (window.matchMedia('(min-width: 400px) and (max-width: 768px)').matches) { nav.style.top="85px" }
  });
  
window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 400px) and (max-width: 768px)').matches && window.pageYOffset < 100) { nav.style.top="85px" }
  else if (window.pageYOffset > 100) nav.style.top = 0
  else nav.style.top='50px'
})

var nav = document.querySelector('nav');
var arr = document.querySelector('.arr');
window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100){
    nav.style.top="0px"
    arr.style.display="block"
    nav.style.position = "fixed"
    nav.classList.add('bg-dark','shadow');
  }
  else{
    nav.style.position = "absolute"
    arr.style.display="none"
    if (window.matchMedia('(min-width: 400px) and (max-width: 768px)').matches) { nav.style.top="85px" }
    else nav.style.top="50px"
    nav.classList.remove('bg-dark','shadow')
  }
});


$('.search').click(function(){
  $(this).toggleClass('active')
})

$('.icons.nav-item.mx-1').click(function(){
  $('.cart').addClass('active')
})

$('.close').click(function(){
  $('.cart').removeClass('active')
})