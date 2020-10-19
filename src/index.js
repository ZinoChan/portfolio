import '../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss';
import './styles/main.scss';
import { navToggler } from './js/main';

const selector = (s) => document.querySelector(s);


selector(".theme-toggler").addEventListener('click', () => {
    selector('body').classList.toggle('light');
});


 
selector('.hamburger').addEventListener('click', navToggler)
