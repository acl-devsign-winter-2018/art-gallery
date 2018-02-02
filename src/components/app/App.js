import Template from '../Template';
import html from './app.html';
import './app.css';
import './header.css';
import '../pages/pages.css';
import { removeChildren } from '../dom';
import Header from './Header';
import Splash from '../splash/Splash';
import Art from '../pages/art/Art';
import Night from '../pages/night/Night';
import People from '../pages/people/People';

const template = new Template(html);

const map = new Map();
map.set('#welcome', Splash);
map.set('#art', Art);
map.set('#people', People);
map.set('#night', Night);

export default class App {

  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }

  setPage() {
    const Component = map.get(window.location.hash) || Splash;
    const component = new Component();
    removeChildren(this.main);
    this.main.appendChild(component.render());
    if(window.location.hash !== '#welcome') {
      this.footer.classList.remove('hidden');
      this.header.classList.remove('hidden');
    }
    if(window.location.hash === '#welcome' || window.location.hash === '') {
      this.footer.classList.add('hidden');
      this.header.classList.add('hidden');
    }
  }

  render() {
    const dom = template.clone();   

    dom.querySelector('header').appendChild(new Header().render());

    this.footer = dom.querySelector('#footer');
    this.header = dom.querySelector('#header');
    this.main = dom.querySelector('main');
    this.setPage();

    return dom;
  }
}
