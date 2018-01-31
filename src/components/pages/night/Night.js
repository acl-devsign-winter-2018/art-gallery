import html from './night.html';
import Picture from '../../picture/Picture';
import Template from '../../Template';

const template = new Template(html);

export default class Night {

  render() {
    const dom = template.clone();

    const pictureNames = ['nightburn_r6lzye.jpg', 'nightcoyote_qjy19c.jpg', 'nightcrowdburn_fjjdld.jpg', 'nightdancer_clxybt.jpg', 'nightflowers_v4il6v', 'nightlegocar_t6bmnx.jpg', 'nightplay_zs31n8.jpg', 'nightsnake_ckw8i3', 'nightsteps_tr1veh.jpg', 'nightsunrise_zj5vye.jpg'];

    const alts = ['Burn night 2013: Cargo Cult', 'Coyote 2013: At 26′ tall, this giant beast is climbable and has a rotating head that can turn into the wind', 'Burn night 2016: Da Vinci\'s workshop', 'Truth is Beauty 2013: The second in the series of three monumental sculptures, The Bliss Project, by Marco Cochrane of a woman, Deja Solis, expressing her humanity', 'Pulse and Bloom 2014: When participants touch the flowers, they light up to the specific rhythms of their heartbeats', 'Billy the LEGO TRUCK 2013: Made by a group from Seattle', 'Burning Man Effigy 2014: Caravansary', 'Medusa Madness 2015: Dare to stare lest you be turned to stone', 'These pads change color as they are jumped on', 'A typical sunrise on the playa'];

    for(let i = 0; i < pictureNames.length; i++) {
      const picture = new Picture({
        // keep aspect ratios and breakpoints in DESCENDING ORDER,
        // and have the same amount of both
        aspectRatios: ['3:2', '3:2', '3:2', '1:1', '1:2'],
        breakpoints: [2000, 1500, 1200, 800, 500],
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