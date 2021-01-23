import React, { Component } from 'react';

import CarouselRooms from './CarouselRooms';
import ImagesRooms from './ImagesRooms';

export default class Rooms extends Component {
  
  render() {
    
    return (
      <div>
        <h3>Pokoje</h3>

        <div>
          <div className='Segment__description--container'>
            <p>Do dyspozycji gości jest samodzielna kuchnia. Przylega do niej stołówka na której można zjeść smaczny domowy posiłek</p>
            <p>Łazienki o podwyższonym standardzie pozwolą poczuć się, jak u siebie w domu </p>
          </div>

          <CarouselRooms />

          <ImagesRooms />
        </div>
      </div>
    );
  };
};
