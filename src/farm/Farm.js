import React, { Component } from 'react';
import { Divider, Image } from 'semantic-ui-react';
import { CarouselProvider, Image as ImageC, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import CarouselDotGroup from '../components/CarouselDotGroup';
import img01 from '../assets/photos/farm/gosp_01.jpg';
import img02 from '../assets/photos/farm/gosp_02.jpg';
import img03 from '../assets/photos/farm/gosp_03.jpg';
import img04 from '../assets/photos/farm/gosp_04.jpg';
import img05 from '../assets/photos/farm/gosp_05.jpg';
import img06 from '../assets/photos/farm/gosp_06.jpg';
import img07 from '../assets/photos/farm/gosp_07.jpg';
import img08 from '../assets/photos/farm/gosp_08.jpg';
import img09 from '../assets/photos/farm/gosp_09.jpg';
import img10 from '../assets/photos/farm/gosp_10.jpg';
import img11 from '../assets/photos/farm/gosp_11.jpg';
import img12 from '../assets/photos/farm/gosp_12.jpg';
import img13 from '../assets/photos/farm/gosp_13.jpg';
import img14 from '../assets/photos/farm/gosp_14.jpg';
import img15 from '../assets/photos/farm/gosp_15.jpg';
import img16 from '../assets/photos/farm/gosp_16.jpg';
import img17 from '../assets/photos/farm/gosp_17.jpg';
import img18 from '../assets/photos/farm/gosp_18.jpg';
import img19 from '../assets/photos/farm/gosp_19.jpg';
import img20 from '../assets/photos/farm/gosp_20.jpg';
import img21 from '../assets/photos/farm/gosp_21.jpg';
import img22 from '../assets/photos/farm/gosp_22.jpg';
import img23 from '../assets/photos/farm/gosp_23.jpg';
import img24 from '../assets/photos/farm/gosp_24.jpg';
import img25 from '../assets/photos/farm/gosp_25.jpg';
import img26 from '../assets/photos/farm/gosp_26.jpg';
import img27 from '../assets/photos/farm/gosp_27.jpg';
import img28 from '../assets/photos/farm/gosp_28.jpg';
import img29 from '../assets/photos/farm/gosp_29.jpg';

export default class Farm extends Component {
  
  render() {
    
    return (
      <div>
        <h3>Gospodarstwo</h3>
        <p>Opis gospodarstwa</p>
        
        <div className='Segment__carousel--container'>
          <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={29}
          >
            <Slider>
              <Slide index={0}>
                <ImageC src={img01} />
              </Slide>
              <Slide index={1}>
                <ImageC src={img02} />
              </Slide>
              <Slide index={2}>
                <ImageC src={img03} />
              </Slide>
              <Slide index={3}>
                <ImageC src={img04} />
              </Slide>
              <Slide index={4}>
                <ImageC src={img05} />
              </Slide>
              <Slide index={5}>
                <ImageC src={img06} />
              </Slide>
              <Slide index={6}>
                <ImageC src={img07} />
              </Slide>
              <Slide index={7}>
                <ImageC src={img08} />
              </Slide>
              <Slide index={8}>
                <ImageC src={img09} />
              </Slide>
              <Slide index={9}>
                <ImageC src={img10} />
              </Slide>
              <Slide index={10}>
                <ImageC src={img11} />
              </Slide>
              <Slide index={11}>
                <ImageC src={img12} />
              </Slide>
              <Slide index={12}>
                <ImageC src={img13} />
              </Slide>
              <Slide index={13}>
                <ImageC src={img14} />
              </Slide>
              <Slide index={14}>
                <ImageC src={img15} />
              </Slide>
              <Slide index={15}>
                <ImageC src={img16} />
              </Slide>
              <Slide index={16}>
                <ImageC src={img17} />
              </Slide>
              <Slide index={17}>
                <ImageC src={img18} />
              </Slide>
              <Slide index={18}>
                <ImageC src={img19} />
              </Slide>
              <Slide index={19}>
                <ImageC src={img20} />
              </Slide>
              <Slide index={20}>
                <ImageC src={img21} />
              </Slide>
              <Slide index={21}>
                <ImageC src={img22} />
              </Slide>
              <Slide index={22}>
                <ImageC src={img23} />
              </Slide>
              <Slide index={23}>
                <ImageC src={img24} />
              </Slide>
              <Slide index={24}>
                <ImageC src={img25} />
              </Slide>
              <Slide index={25}>
                <ImageC src={img26} />
              </Slide>
              <Slide index={26}>
                <ImageC src={img27} />
              </Slide>
              <Slide index={27}>
                <ImageC src={img28} />
              </Slide>
              <Slide index={28}>
                <ImageC src={img29} />
              </Slide>
            </Slider>

            <Divider />
            <CarouselDotGroup slides={29}/>
          </CarouselProvider>
        </div>
        <br></br>
        <Image.Group size='small' className='Segment__img--container' >
          <Image src={img01} />
          <Image src={img02} />
          <Image src={img03} />
          <Image src={img04} />
          <Image src={img05} />
          <Image src={img06} />
          <Image src={img07} />
          <Image src={img08} />
          <Image src={img09} />
          <Image src={img10} />
          <Image src={img11} />
          <Image src={img12} />
          <Image src={img13} />
          <Image src={img14} />
          <Image src={img15} />
          <Image src={img16} />
          <Image src={img17} />
          <Image src={img18} />
          <Image src={img19} />
          <Image src={img20} />
          <Image src={img21} />
          <Image src={img22} />
          <Image src={img23} />
          <Image src={img24} />
          <Image src={img25} />
          <Image src={img26} />
          <Image src={img27} />
          <Image src={img28} />
          <Image src={img29} />
        </Image.Group>
      </div>
    );
  };
};
