import * as React from 'react';
import { Divider } from 'semantic-ui-react';
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import CarouselDotGroup from '../components/CarouselDotGroup';
import img01 from '../assets/photos/cabins/domki_01.jpg';
import img02 from '../assets/photos/cabins/domki_02.jpg';
import img03 from '../assets/photos/cabins/domki_06.jpg';
import img04 from '../assets/photos/cabins/domki_07.jpg';
import img05 from '../assets/photos/cabins/domki_08.jpg';
import img06 from '../assets/photos/cabins/domki_09.jpg';
import img07 from '../assets/photos/cabins/domki_10.jpg';
import img08 from '../assets/photos/cabins/domki_11.jpg';
import img09 from '../assets/photos/cabins/domki_12.jpg';
import img10 from '../assets/photos/cabins/domki_13.jpg';
import img11 from '../assets/photos/cabins/domki_14.jpg';
import img12 from '../assets/photos/cabins/domki_15.jpg';
import img13 from '../assets/photos/cabins/domki_16.jpg';
import img14 from '../assets/photos/cabins/domki_17.jpg';

export default class CarouselCabins2 extends React.Component {

    render() {

        return (
          <div className='Segment__carousel--container--2'>
            <CarouselProvider
              naturalSlideWidth={1}
              naturalSlideHeight={1}
              totalSlides={14}
            >
              <Slider>
                <Slide index={0}>
                  <Image src={img01} alt='Domek' />
                </Slide>
                <Slide index={1}>
                  <Image src={img02} alt='Panorama przy domkach' />
                </Slide>
                <Slide index={2}>
                  <Image src={img03} alt='Dwa domki' />
                </Slide>
                <Slide index={3}>
                  <Image src={img04} alt='Dwa domki z huśtawką' />
                </Slide>
                <Slide index={4}>
                  <Image src={img05} alt='Dwa domk i wiatrak' />
                </Slide>
                <Slide index={5}>
                  <Image src={img06} alt='Ścieżka do domków' />
                </Slide>
                <Slide index={6}>
                  <Image src={img07} alt='Trawnik przed domkami' />
                </Slide>
                <Slide index={7}>
                  <Image src={img08} alt='Pomost' />
                </Slide>
                <Slide index={8}>
                  <Image src={img09} alt='Ścieżka do domków' />
                </Slide>
                <Slide index={9}>
                  <Image src={img10} alt='Cztery domki' />
                </Slide>
                <Slide index={10}>
                  <Image src={img11} alt='Domek zimą' />
                </Slide>
                <Slide index={11}>
                  <Image src={img12} alt='Dwa domki zimą' />
                </Slide>
                <Slide index={12}>
                  <Image src={img13} alt='Trzy domki zimą' />
                </Slide>
                <Slide index={13}>
                  <Image src={img14} alt='Otoczenie domków zimą' />
                </Slide>
              </Slider>

              <Divider />
              <CarouselDotGroup slides={14} />
            </CarouselProvider>
          </div>
        );
    };
};
