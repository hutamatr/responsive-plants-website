/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

//   Menu Show

/* Validation if COntent Exist*/

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Menu Hidden

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

let linkAction = () => {
  const navMenu = document.getElementById('nav-menu');

  // When CLick on each nav__link, remove show_menu class

  navMenu.classList.remove('show-menu');
};

navLink.forEach((item) => item.addEventListener('click', linkAction));
/*=============== ADD SCROLL HEADER SHADOW ===============*/

function scrollHeader() {
  const header = document.getElementById('header');

  if (this.scrollY >= 80) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);
/*=============== QUESTIONS ACCORDION ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
