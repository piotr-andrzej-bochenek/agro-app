import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import img1 from '../assets/images/img_link_01.jpg';
import img2 from '../assets/images/img_link_02.jpg';
import img3 from '../assets/images/img_link_03.jpg';
import img4 from '../assets/images/img_link_04.jpg';
import img5 from '../assets/images/img_link_05.jpg';
import './Home.css';

export default class Home extends Component {
  
  render() {

    return (
      <div>
        <h3>Wieś blisko morza - spokój, wypoczynek i atrakcje na wyciągnięcie ręki!</h3>
        <p>Zapraszamy do Cisowa, malowniczej osady położonej w sercu polskiego Pomorza, znajdującej się 3 km od Darłowa i 2,5 km od morza Bałtyckiego.</p>
        
        <div className='Home__img--container'>
          <Image as={Link} to={'/pokoje'} className='Home__img' src={img1} alt='Zobacz nasze pokoje' />
          <Image as={Link} to={'/domki'} className='Home__img' src={img2} alt='Obejrzyj nasze domki' />
          <Image as={Link} to={'/cennik'} className='Home__img' src={img3} alt='Zapoznaj się z naszą ofertą' />
        </div>
        
        <p>Jest to doskonałe miejsce dla tych, którzy chcą wypocząć nad polskim morzem, a jednocześnie nie przepadają za tłokiem i hałasem letnich miejscowości. Znajdziecie tu spokój, ciszę i możliwość kontaktu z pomorską przyrodą.</p>
        
        <div className='Home__img--container'>
          <Image as={Link} to={'/gospodarstwo'} className='Home__img' src={img4} alt='Zobacz nasze gospodarstwo' />
          <Image as={Link} to={'/okolica'} className='Home__img' src={img5} alt='Rozejrzyj się po okolicy' />
        </div>
        
        <p> Klimat i urok naszych szerokich, jeszcze dzikich plaż przyniosą chwile radości i zapewnią miły wypoczynek. Czyste powietrze z dużą ilością jodu, lasy i zieleń, a także cisza i spokojna okolica są gwarancją udanego urlopu.</p>
      </div>
    );
  };
};
