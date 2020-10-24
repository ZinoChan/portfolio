import '../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss';
import './styles/main.scss';
import { navToggler } from './js/main';
import barba from '@barba/core';

barba.hooks.afterEnter( (data) => {
    document.querySelectorAll('.header .nav-link').forEach(link => {
      link.addEventListener('click', navToggler)
    });
});