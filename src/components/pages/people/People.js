import html from './people.html';
import Picture from '../../picture/Picture';
import Template from '../../Template';

const template = new Template(html);

export default class People {

  render() {
    const dom = template.clone();

    const pictureNames = ['people1_in4cpz.jpg', 'people2_xkk7y2.jpg', 'people3_umv4y3.jpg', 'people4_od3lio.jpg', 'people5_njvdfl', 'people6_xkgaxe.jpg', 'people7_tnakpm.jpg', 'people8_oiaodo.jpg', 'people9_yu7ixp.jpg'];

    const alts = ['Dirty hippy with mirrored glasses', 'Dirty hippy with googly eyes', 'Scarved dirty hippy', 'Dirty hippy with gold painted feather headdress', 'Mirror man as the sun rises', 'Playing around in striped zero suits', 'Dirty hippy with large headdress', 'Bunnys walk in ceremony', 'A dazzling display from behind'];

    for(let i = 0; i < pictureNames.length; i++) {
      const picture = new Picture({
        // keep aspect ratios and breakpoints in DESCENDING ORDER,
        // and have the same amount of both
        aspectRatios: ['3:2', '1:1', '1:1', '1:1', '1:1'],
        breakpoints: [2000, 1500, 1200, 900, 600],
        /* https://cloudinary.com/documentation/image_transformations 
        crop fill, auto gravity, auto quality are what I used here.
        */
        options: 'c_fill,g_auto,q_auto',
        fileName: pictureNames[i],
        alt: alts[i]
      });
      const pictureDom = picture.render();
  
      dom.querySelector('section').appendChild(pictureDom);
    }

    return dom;
  }
}