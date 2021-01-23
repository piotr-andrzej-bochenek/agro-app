import * as React from 'react';
import { Divider } from 'semantic-ui-react';
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import CarouselDotGroup from '../components/CarouselDotGroup';
import img01 from '../assets/photos/farm/gosp_06.jpg';
import img02 from '../assets/photos/farm/gosp_08.jpg';
import img03 from '../assets/photos/farm/gosp_09.jpg';
import img04 from '../assets/photos/farm/gosp_10.jpg';
import img05 from '../assets/photos/farm/gosp_12.jpg';
import img06 from '../assets/photos/farm/gosp_13.jpg';
import img07 from '../assets/photos/farm/gosp_14.jpg';
import img08 from '../assets/photos/farm/gosp_15.jpg';

export default class CarouselFarm1 extends React.Component {

    render() {

        return (
          <div className='Segment__carousel--container'>
            <CarouselProvider
              naturalSlideWidth={1}
              naturalSlideHeight={1}
              totalSlides={8}
            >
              <Slider>
                <Slide index={0}>
                  <Image src={img07} />
                </Slide>
                <Slide index={1}>
                  <Image src={img05} />
                </Slide>
                <Slide index={2}>
                  <Image src={img06} />
                </Slide>
                <Slide index={3}>
                  <Image src={img08} />
                </Slide>
                <Slide index={4}>
                  <Image src={img01} />
                </Slide>
                <Slide index={5}>
                  <Image src={img02} />
                </Slide>
                <Slide index={6}>
                  <Image src={img03} />
                </Slide>
                <Slide index={7}>
                  <Image src={img04} />
                </Slide>
              </Slider>

              <Divider />
              <CarouselDotGroup slides={8}/>
            </CarouselProvider>
          </div>
        );
    };
};
