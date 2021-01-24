import * as React from 'react';
import { Divider } from 'semantic-ui-react';
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import CarouselDotGroup from '../components/CarouselDotGroup';
import img01 from '../assets/photos/farm/gosp_01.jpg';
import img02 from '../assets/photos/farm/gosp_02.jpg';
import img03 from '../assets/photos/farm/gosp_03.jpg';
import img04 from '../assets/photos/farm/gosp_04.jpg';
import img05 from '../assets/photos/farm/gosp_05.jpg';
import img06 from '../assets/photos/farm/gosp_07.jpg';
import img07 from '../assets/photos/farm/gosp_11.jpg';
import img08 from '../assets/photos/farm/gosp_16.jpg';
import img09 from '../assets/photos/farm/gosp_17.jpg';
import img10 from '../assets/photos/farm/gosp_18.jpg';
import img11 from '../assets/photos/farm/gosp_19.jpg';
import img12 from '../assets/photos/farm/gosp_20.jpg';
import img13 from '../assets/photos/farm/gosp_21.jpg';
import img14 from '../assets/photos/farm/gosp_22.jpg';
import img15 from '../assets/photos/farm/gosp_23.jpg';
import img16 from '../assets/photos/farm/gosp_24.jpg';
import img17 from '../assets/photos/farm/gosp_25.jpg';
import img18 from '../assets/photos/farm/gosp_26.jpg';
import img19 from '../assets/photos/farm/gosp_27.jpg';
import img20 from '../assets/photos/farm/gosp_28.jpg';
import img21 from '../assets/photos/farm/gosp_29.jpg';

export default class CarouselFarm2 extends React.Component {

    render() {

        return (
          <div className='Segment__carousel--container--2'>
            <CarouselProvider
              naturalSlideWidth={1}
              naturalSlideHeight={1}
              totalSlides={21}
            >
              <Slider>
                <Slide index={0}>
                  <Image src={img01} alt='Dom od frontu' />
                </Slide>
                <Slide index={1}>
                  <Image src={img02} alt='Dom od frontu' />
                </Slide>
                <Slide index={2}>
                  <Image src={img03} alt='Dom od frontu' />
                </Slide>
                <Slide index={3}>
                  <Image src={img04} alt='Dom od frontu' />
                </Slide>
                <Slide index={4}>
                  <Image src={img05} alt='Dom od frontu' />
                </Slide>
                <Slide index={5}>
                  <Image src={img06} alt='Stołówka' />
                </Slide>
                <Slide index={6}>
                  <Image src={img07} alt='Basen ogrodowy' />
                </Slide>
                <Slide index={7}>
                  <Image src={img08} alt='Ławy, stół i huśtawka' />
                </Slide>
                <Slide index={8}>
                  <Image src={img09} alt='Oczko wodne' />
                </Slide>
                <Slide index={9}>
                  <Image src={img10} alt='Oczko wodne - widok z okna' />
                </Slide>
                <Slide index={10}>
                  <Image src={img11} alt='Altana przy domkach' />
                </Slide>
                <Slide index={11}>
                  <Image src={img12} alt='Plac zabaw' />
                </Slide>
                <Slide index={12}>
                  <Image src={img13} alt='Huśtawka' />
                </Slide>
                <Slide index={13}>
                  <Image src={img14} alt='Huśtawki' />
                </Slide>
                <Slide index={14}>
                  <Image src={img15} alt='Pomost' />
                </Slide>
                <Slide index={15}>
                  <Image src={img16} alt='Pomost' />
                </Slide>
                <Slide index={16}>
                  <Image src={img17} alt='Ogródek warzywny' />
                </Slide>
                <Slide index={17}>
                  <Image src={img18} alt='Altanka ogrodowa' />
                </Slide>
                <Slide index={18}>
                  <Image src={img19} alt='Zjeżdżalnia' />
                </Slide>
                <Slide index={19}>
                  <Image src={img20} alt='Sad' />
                </Slide>
                <Slide index={20}>
                  <Image src={img21} alt='Kwiaty przed domem' />
                </Slide>
              </Slider>

              <Divider />
              <CarouselDotGroup slides={21}/>
            </CarouselProvider>
          </div>
        );
    };
};
