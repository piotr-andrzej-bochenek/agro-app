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
                  <Image src={img01} />
                </Slide>
                <Slide index={1}>
                  <Image src={img02} />
                </Slide>
                <Slide index={2}>
                  <Image src={img03} />
                </Slide>
                <Slide index={3}>
                  <Image src={img04} />
                </Slide>
                <Slide index={4}>
                  <Image src={img05} />
                </Slide>
                <Slide index={5}>
                  <Image src={img06} />
                </Slide>
                <Slide index={6}>
                  <Image src={img07} />
                </Slide>
                <Slide index={7}>
                  <Image src={img08} />
                </Slide>
                <Slide index={8}>
                  <Image src={img09} />
                </Slide>
                <Slide index={9}>
                  <Image src={img10} />
                </Slide>
                <Slide index={10}>
                  <Image src={img11} />
                </Slide>
                <Slide index={11}>
                  <Image src={img12} />
                </Slide>
                <Slide index={12}>
                  <Image src={img13} />
                </Slide>
                <Slide index={13}>
                  <Image src={img14} />
                </Slide>
                <Slide index={14}>
                  <Image src={img15} />
                </Slide>
                <Slide index={15}>
                  <Image src={img16} />
                </Slide>
                <Slide index={16}>
                  <Image src={img17} />
                </Slide>
                <Slide index={17}>
                  <Image src={img18} />
                </Slide>
                <Slide index={18}>
                  <Image src={img19} />
                </Slide>
                <Slide index={19}>
                  <Image src={img20} />
                </Slide>
                <Slide index={20}>
                  <Image src={img21} />
                </Slide>
              </Slider>

              <Divider />
              <CarouselDotGroup slides={21}/>
            </CarouselProvider>
          </div>
        );
    };
};