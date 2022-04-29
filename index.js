let btnMenu=document.getElementById('btn-menu');
let menu=document.getElementById('menu');

btnMenu.addEventListener('click',()=>{
menu.classList.toggle('mostar');
});
ScrollReveal().reveal('.welcome');
ScrollReveal().reveal('.container-design',{delay:500});
ScrollReveal().reveal('.container-creadora',{delay:500});
ScrollReveal().reveal('.container-tips',{delay:500});
ScrollReveal().reveal('.newsletter',{delay:500});
