import * as React from 'react';
import { Divider } from 'semantic-ui-react';
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import CarouselDotGroup from '../components/CarouselDotGroup';
import img01 from '../assets/photos/rooms/pokoje_01.jpg';
import img02 from '../assets/photos/rooms/pokoje_02.jpg';
import img03 from '../assets/photos/rooms/pokoje_03.jpg';
import img04 from '../assets/photos/rooms/pokoje_04.jpg';
import img05 from '../assets/photos/rooms/pokoje_05.jpg';
import img06 from '../assets/photos/rooms/pokoje_06.jpg';
import img07 from '../assets/photos/rooms/pokoje_07.jpg';
import img08 from '../assets/photos/rooms/pokoje_08.jpg';
import img09 from '../assets/photos/rooms/pokoje_09.jpg';
import img10 from '../assets/photos/rooms/pokoje_10.jpg';
import img11 from '../assets/photos/rooms/pokoje_11.jpg';
import img12 from '../assets/photos/rooms/pokoje_12.jpg';
import img13 from '../assets/photos/rooms/pokoje_13.jpg';
import img14 from '../assets/photos/rooms/pokoje_14.jpg';
import img15 from '../assets/photos/rooms/pokoje_15.jpg';
import img16 from '../assets/photos/rooms/pokoje_16.jpg';
import img17 from '../assets/photos/rooms/pokoje_17.jpg';
import img18 from '../assets/photos/rooms/pokoje_18.jpg';

export default class CarouselRooms extends React.Component {

    render() {

        return (
          <div className='Segment__carousel--container'>
            <CarouselProvider
              naturalSlideWidth={1}
              naturalSlideHeight={1}
              totalSlides={18}
            >
              <Slider>
                <Slide index={0}>
                  <Image src={img01} alt='Pokój - część sypialna' />
                </Slide>
                <Slide index={1}>
                  <Image src={img02} alt='Pokój - część sypialna' />
                </Slide>
                <Slide index={2}>
                  <Image src={img03} alt='Pokój - część rekreacyjna' />
                </Slide>
                <Slide index={3}>
                  <Image src={img04} alt='Kuchnia' />
                </Slide>
                <Slide index={4}>
                  <Image src={img05} alt='Kuchnia' />
                </Slide>
                <Slide index={5}>
                  <Image src={img06} alt='Łazienka' />
                </Slide>
                <Slide index={6}>
                  <Image src={img07} alt='Łazienka' />
                </Slide>
                <Slide index={7}>
                  <Image src={img08} alt='Pokój - część rekreacyjna' />
                </Slide>
                <Slide index={8}>
                  <Image src={img09} alt='Łazienka - kabina' />
                </Slide>
                <Slide index={9}>
                  <Image src={img10} alt='Pokój - część sypialna' />
                </Slide>
                <Slide index={10}>
                  <Image src={img11} alt='Pokój na poddaszu - część sypialna' />
                </Slide>
                <Slide index={11}>
                  <Image src={img12} alt='Pokój z balkonem' />
                </Slide>
                <Slide index={12}>
                  <Image src={img13} alt='Łazienka - kabina' />
                </Slide>
                <Slide index={13}>
                  <Image src={img14} alt='Łazienka - kabina' />
                </Slide>
                <Slide index={14}>
                  <Image src={img15} alt='Aneks kuchenny' />
                </Slide>
                <Slide index={15}>
                  <Image src={img16} alt='Taras' />
                </Slide>
                <Slide index={16}>
                  <Image src={img17} alt='Pokój - część sypialna' />
                </Slide>
                <Slide index={17}>
                  <Image src={img18} alt='Jadalnia' />
                </Slide>
              </Slider>

              <Divider />
              <CarouselDotGroup slides={18} />
            </CarouselProvider>
          </div>
        );
    };
};
