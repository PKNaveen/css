import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.html',
  styleUrls: ['./your-component.css'],
})
export class YourComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    // Initialization code here

    // ===================== SHOW MENU ====================
    const showMenu = (toggleId: string, navId: string) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show-menu');
        });
      }
    }

    showMenu('nav-toggle', 'nav-menu');

    // ===================== REMOVE MENU MOBILE ====================
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.remove('show-menu');
      }
    }

    navLink.forEach((n: Element) => n.addEventListener('click', linkAction));

    // ===================== SCROLL SECTIONS ACTIVE LINK ====================
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current: HTMLElement) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (sectionId) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
            if (link) {
              link.classList.add('active-link');
            }
          } else {
            const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
            if (link) {
              link.classList.remove('active-link');
            }
          }
        }
      });
    }

    window.addEventListener('scroll', scrollActive);

    // ===================== CHANGE BACKGROUND HEADER ====================
    function scrollHeader() {
      const nav = document.getElementById('header');
      if (nav) {
        if (this.scrollY >= 200) {
          nav.classList.add('scroll-header');
        } else {
          nav.classList remove('scroll-header');
        }
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // ===================== SHOW SCROLL TOP ====================
    function scrollTop() {
      const scrollTop = document.getElementById('scroll-top');
      if (scrollTop) {
        if (this.scrollY >= 560) {
          scrollTop.classList.add('show-scroll');
        } else {
          scrollTop.classList.remove('show-scroll');
        }
      }
    }

    window.addEventListener('scroll', scrollTop);

    // ===================== DARK LIGHT THEME ====================
    const darkTheme = 'dark-theme';
    const iconTheme = 'bx-toggle-right';

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton?.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      // You should add themeButton to your component's template in the HTML file
      // themeButton?.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
    }

    // You can add an event listener to the theme button in your component's template in the HTML file
    // themeButton?.addEventListener('click', () => {
    //   document.body.classList.toggle(darkTheme);
    //   themeButton?.classList.toggle(iconTheme);
    //   localStorage.setItem('selected-theme', getCurrentTheme());
    //   localStorage.setItem('selected-icon', getCurrentIcon());
    // });
  }

  ngOnDestroy(): void {
    // Cleanup code here
  }
}
