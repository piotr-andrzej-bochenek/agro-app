import React, { Component } from 'react';

import CarouselGuests from './CarouselGuests';
import ImagesGuests from './ImagesGuests';

export default class Guests extends Component {
  
  render() {
    
    return (
      <div>
        <h3>Goście</h3>
        <div>
          <div className='Segment__description--container'>
            <p>Nasi goście zawsze wyjeżdząją uśmiechnięci i pełni wrażeń!</p>
            <p>
              <i>"Dzieci bawiły się znakomicie, my z żoną odpoczęliśmy od miejskiego zgiełku. Żal było wyjeżdżać!" </i>
              - Tomasz, Kraków.
            </p>
            <p>
              <i>"Dwa tygodnie minęły jak z bicza strzelił, na pewno wrócimy w przyszłym roku!" </i>
              - Iwona, Zabrze.
            </p>
          </div>

          <CarouselGuests />

          <ImagesGuests />
        </div>
      </div>
    );
  };
};
