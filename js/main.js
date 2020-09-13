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
    if(window.pageYOffset > 50) {
      navbar.classList.remove('dsabl');
      navbar.classList.add('actv');
      $('.goTop').fadeIn();
    } else {
      navbar.classList.remove('actv');
      navbar.classList.add('dsabl');
      $('.goTop').fadeOut();
    }
  });

  $('.goTop').click(function() {
    scroll(0, 0)
  });

  $('.navbar-toggler').click(()=>{
    if(window.pageYOffset < 50) {
      navbar.classList.toggle('actv');
      navbar.classList.toggle('dsabl');
    }
  });

  let navLink = $('.nav-link');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0 && window.pageYOffset <= 580) {
      clearLink();
      navLink[0].classList.add('actives');
    }
    if(window.pageYOffset > 580 && window.pageYOffset <= 1750) {
      clearLink();
      navLink[1].classList.add('actives');
    }
    if(window.pageYOffset > 2200 && window.pageYOffset <= 2500) {
      clearLink();
      navLink[2].classList.add('actives');
    }
    if(window.pageYOffset > 3100) {
      clearLink();
      navLink[3].classList.add('actives');
    }
  })

  function clearLink() {
    for(let i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove('actives');
    }
  }

});