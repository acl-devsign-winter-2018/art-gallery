import html from './art.html';
import Picture from '../../picture/Picture';
import Template from '../../Template';

const template = new Template(html);

export default class Art {

  render() {
    const dom = template.clone();

    const pictureNames = ['artembrace_huecjv.jpg', 'artlove_rxzboa.jpg', 'artman_phoomj.jpg', 'artowl_rp2imf.jpg', 'artpig_el48sz.jpg', 'artsnakes_xgu5az.jpg', 'artstructure_tagkhq.jpg', 'artteapots_cuq1nr.jpg'];

    const alts = ['Embrace 2014: A 7 story tall wooden cathedral-like sculpture of two human figures in an embrace', 'Love 2014 by Laura Kimpton and Jeff Schomberg', 'Burning Man Effigy 2016: Da Vinci\'s workshop', 'Múcaro 2017: A 30′ tall representation of Múcaro, a wise and woody owl', 'Lord Snout 2016: a gargantuan, diabolical-looking wild boar. It’s approximately 20 feet tall and 30 feet wide', 'Medusa Madness 2015: Dare to stare lest you be turned to stone', 'Unknown art installment', 'The Lost Tea Party 2014: A band of Neo-Babylonian Truth Seekers are guiding a camel train of giant teapots towards the Playa sands'];

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