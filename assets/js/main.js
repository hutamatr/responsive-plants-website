/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

//   Menu Show

/* Validation if Content Exist*/

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

const accordionItem = document.querySelectorAll('.questions__item');

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector('.questions__header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions__content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    // console.log(accordionContent.scrollHeight);
    item.classList.add('accordion-open');
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active--link');
    } else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active--link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
