import * as React from 'react';
import { Divider } from 'semantic-ui-react';
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import CarouselDotGroup from '../components/CarouselDotGroup';
import img01 from '../assets/photos/guests/goscie_01.jpg';
import img02 from '../assets/photos/guests/goscie_02.jpg';
import img03 from '../assets/photos/guests/goscie_03.jpg';
import img04 from '../assets/photos/guests/goscie_04.jpg';
import img05 from '../assets/photos/guests/goscie_05.jpg';
import img06 from '../assets/photos/guests/goscie_06.jpg';
import img07 from '../assets/photos/guests/goscie_07.jpg';
import img08 from '../assets/photos/guests/goscie_08.jpg';
import img09 from '../assets/photos/guests/goscie_09.jpg';
import img10 from '../assets/photos/guests/goscie_10.jpg';
import img11 from '../assets/photos/guests/goscie_11.jpg';
import img12 from '../assets/photos/guests/goscie_12.jpg';
import img13 from '../assets/photos/guests/goscie_13.jpg';
import img14 from '../assets/photos/guests/goscie_14.jpg';
import img15 from '../assets/photos/guests/goscie_15.jpg';
import img16 from '../assets/photos/guests/goscie_16.jpg';

export default class CarouselGuests extends React.Component {

    render() {

        return (
          <div className='Segment__carousel--container'>
            <CarouselProvider
              naturalSlideWidth={1}
              naturalSlideHeight={1}
              totalSlides={16}
            >
              <Slider>
                <Slide index={0}>
                  <Image src={img01} alt='Goście przy grillu' />
                </Slide>
                <Slide index={1}>
                  <Image src={img02} alt='Goście w altanie' />
                </Slide>
                <Slide index={2}>
                  <Image src={img03} alt='Dzieci w altanie' />
                </Slide>
                <Slide index={3}>
                  <Image src={img04} alt='Zabawa z psem' />
                </Slide>
                <Slide index={4}>
                  <Image src={img05} alt='Pojenie psa' />
                </Slide>
                <Slide index={5}>
                  <Image src={img06} alt='Dzieci na zjeżdżalni' />
                </Slide>
                <Slide index={6}>
                  <Image src={img07} alt='Posiłek na świeżym powietrzu' />
                </Slide>
                <Slide index={7}>
                  <Image src={img08} alt='Kąpanie psa' />
                </Slide>
                <Slide index={8}>
                  <Image src={img09} alt='Gra w siatkówkę na boisku' />
                </Slide>
                <Slide index={9}>
                  <Image src={img10} alt='Przejażdżka na przyczepie' />
                </Slide>
                <Slide index={10}>
                  <Image src={img11} alt='Dzieci na przyczepie' />
                </Slide>
                <Slide index={11}>
                  <Image src={img12} alt='Gra w tenisa stołowego' />
                </Slide>
                <Slide index={12}>
                  <Image src={img13} alt='Zabawa na zjeżdżalni' />
                </Slide>
                <Slide index={13}>
                  <Image src={img14} alt='Zabawa na huśtawkach' />
                </Slide>
                <Slide index={14}>
                  <Image src={img15} alt='Zabawa przy oczku wodnym' />
                </Slide>
                <Slide index={15}>
                  <Image src={img16} alt='Zabawa w basenie ogrodowym' />
                </Slide>
              </Slider>

              <Divider />
              <CarouselDotGroup slides={16} />
            </CarouselProvider>
          </div>
        );
    };
};
