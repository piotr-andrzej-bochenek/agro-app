import * as React from 'react';
import { Divider } from 'semantic-ui-react';
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import CarouselDotGroup from '../components/CarouselDotGroup';
import img01 from '../assets/photos/cabins/domki_03.jpg';
import img02 from '../assets/photos/cabins/domki_04.jpg';
import img03 from '../assets/photos/cabins/domki_05.jpg';

export default class CarouselCabins1 extends React.Component {

    render() {

        return (
          <div className='Segment__carousel--container'>
            <CarouselProvider
              naturalSlideWidth={1}
              naturalSlideHeight={1}
              totalSlides={3}
            >
              <Slider>
                <Slide index={0}>
                  <Image src={img01} />
                </Slide>
                <Slide index={1}>
                  <Image src={img02} />
                </Slide>
                <Slide index={2}>
                  <Image src={img03} />
                </Slide>
              </Slider>

              <Divider />
              <CarouselDotGroup slides={3} />
            </CarouselProvider>
          </div>
        );
    };
};
