
const burger = document.querySelector('.burger')
const burger__menu = document.querySelector('.burger__menu');
const burger__left = document.querySelector('[data-burger');

burger.addEventListener('click', function(){
   burger.classList.toggle('burger__active');
   burger__menu.classList.toggle('burger__menu-hidden');
   burger__left.classList.toggle('left__transition');
   $('body').toggleClass('lock');
});

  