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

window.addEventListener('scroll', () => {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 300) {
    scrollUp.classList.add('scrollup__show');
  } else {
    scrollUp.classList.remove('scrollup__show');
  }
});

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button'),
  darkTheme = 'dark-theme',
  iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme'),
  selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => {
  return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

const getCurrentIcon = () => {
  return themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
};

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
