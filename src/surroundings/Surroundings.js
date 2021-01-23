import React, { Component } from 'react';

import CarouselSurroundings from './CarouselSurroundings';
import ImagesSurroundings from './ImagesSurroundings';

export default class Surroundings extends Component {
  
  render() {
    
    return (
      <div>
        <h3>Okolica</h3>

        <div>
          <div className='Segment__description--container'>
            <p>Zabytkowy kościół w Cisowie jest otoczony pięknym parkiem.</p>
            <p>Wiejski krajobraz pełen jest pól i wiatraków.</p>
            <p>Z wybranych punktów w oddali widać morze.</p>
            <p>Odległość do najbliższej plaży to tylko 2,5 km.</p>
            <p>Oficjalna strona Ziemi Darłowskiej - kliknij!</p>
          </div>

          <CarouselSurroundings />

          <ImagesSurroundings />
        </div>
      </div>
    );
  };
};
