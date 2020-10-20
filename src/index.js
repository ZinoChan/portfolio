import '../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss';
import './styles/main.scss';
import { navToggler } from './js/main';
import barba from '@barba/core';

barba.hooks.afterEnter( ( data ) => {
    const selector = (s) => document.querySelector(s);


    selector(".theme-toggler").addEventListener('click', () => {
        selector('body').classList.toggle('light');
    });
    selector('.hamburger').addEventListener('click', navToggler);

    document.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', navToggler)
	})
});