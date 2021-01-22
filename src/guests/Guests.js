import React, { Component } from 'react';
import { Divider, Image } from 'semantic-ui-react';
import { CarouselProvider, Image as ImageC, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import CarouselDotGroup from '../components/DotGroup';
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

export default class Guests extends Component {
  
  render() {
    
    return (
      <div>
        <h3>Goście</h3>
        <p>Wybrane opinie gości</p>
        
        <div className='Segment__carousel--container'>
          <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={16}
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
            </Slider>

            <Divider />
            <CarouselDotGroup slides={16} />
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
        </Image.Group>
      </div>
    );
  };
};
