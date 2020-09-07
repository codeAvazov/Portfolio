AOS.init({
  offset: 100,
  duration: 800,
  easing: 'ease-in-out',
  once : true
});

$(function() {

  $('.spinner').fadeOut('slow');

  let navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
      navbar.classList.remove('dsabl');
      navbar.classList.add('actv');
      $('.goTop').fadeIn();
    } else {
      navbar.classList.remove('actv');
      navbar.classList.add('dsabl');
      $('.goTop').fadeOut();
    }
  })

  $('.goTop').click(function() {
    scroll(0, 0)
  })

  $('.navbar-toggler').click(()=>{
    navbar.classList.toggle('actv');
    navbar.classList.toggle('dsabl');
  })
});