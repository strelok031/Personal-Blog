
const button = document.querySelector('[data-modal-button]');



button.addEventListener('click', function(){

   const modal = document.querySelector('[data-modal]');
   modal.classList.remove('hidden');

   const close = document.querySelector('[data-modal-close]');
   close.addEventListener('click', function(){
   modal.classList.add('hidden');
   })
});



