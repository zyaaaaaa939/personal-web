import './style.css';
import Typed from 'typed.js';

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#hamburger');
  const mobileMenu = document.querySelector('#mobile-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
      }
    });
  }

  new Typed('#typing-text', {
      strings: ['Frontend Developer', 'UI Designer', 'Karate Enthusiast'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });
});