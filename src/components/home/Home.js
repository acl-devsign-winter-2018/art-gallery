import Template from '../Template';
import html from './home.html';
import './home.css';

import Picture from '../picture/Picture';

const template = new Template(html);

export default class Home {

  render() {
    const dom = template.clone();

    const picture = new Picture({
      aspectRatios: ['5:2', '5:2', '2:1', '3:2', '1:1'],
      breakpoints: [1900, 1500, 1200, 900, 600],
      options: 'c_fill,g_auto,q_auto',
      fileName: 'pexels-photo-148291_2_hawek3.jpg',
    });

    const pictureDom = picture.render();
    dom.querySelector('#peacock').appendChild(pictureDom);
    
    return dom;
  }

  unrender() {
    // no-op
  }
}