import ScrollReveal from 'scrollreveal';

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId: string, navId: string) => {
    const toggle: HTMLElement | null = document.getElementById(toggleId);
    const nav: HTMLElement | null = document.getElementById(navId);
  
    // Validate that variables exist
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        // We add the show-menu class to the div tag with the nav__menu class
        nav.classList.toggle('show-menu');
      });
    }
  };
  
  showMenu('nav-toggle', 'nav-menu');
  
  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink: NodeListOf<Element> = document.querySelectorAll('.nav__link');
  
  function linkAction() {
    const navMenu: HTMLElement | null = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    if (navMenu) {
      navMenu.classList.remove('show-menu');
    }
  }
  
  navLink.forEach((n: Element) => n.addEventListener('click', linkAction));
  
  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY: number = window.pageYOffset;
  
    sections.forEach((current: HTMLElement) => {
      const sectionHeight: number = current.offsetHeight;
      const sectionTop: number = current.offsetTop - 50;
      const sectionId: string | null = current.getAttribute('id');
  
      if (sectionId) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          const link: HTMLElement | null = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
          if (link) {
            link.classList.add('active-link');
          }
        } else {
          const link: HTMLElement | null = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
          if (link) {
            link.classList.remove('active-link');
          }
        }
      }
    });
  }
  
  window.addEventListener('scroll', scrollActive);
  
  /*==================== CHANGE BACKGROUND HEADER ====================*/
  function scrollHeader() {
    const nav: HTMLElement | null = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (nav) {
      if (this.scrollY >= 200) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }
  }
  
  window.addEventListener('scroll', scrollHeader);
  
  /*==================== SHOW SCROLL TOP ====================*/
  function scrollTop() {
    const scrollTop: HTMLElement | null = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (scrollTop) {
      if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll');
      } else {
        scrollTop.classList.remove('show-scroll');
      }
    }
  }
  
  window.addEventListener('scroll', scrollTop);
  
 /*==================== DARK LIGHT THEME ====================*/
const themeButton: HTMLElement | null = document.getElementById('theme-button');
const darkTheme: string = 'dark-theme';
const iconTheme: string = 'bx-toggle-right';

// Previously selected topic (if user selected)
const selectedTheme: string | null = localStorage.getItem('selected-theme');
const selectedIcon: string | null = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = (): string => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = (): string => themeButton?.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton?.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton?.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton?.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

  
  /*==================== SCROLL REVEAL ANIMATION ====================*/
  const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
  });
  
  sr.reveal(`.home__data, .home__img,
           .decoration__data,
           .accessory__content,
           .footer__content`, {
    origin: 'top',
    interval: 200,
  });
  
  sr.reveal(`.share__img, .send__content`, {
    origin: 'left',
  });
  
  sr.reveal(`.share__data, .send__img`, {
    origin: 'right',
  });
  