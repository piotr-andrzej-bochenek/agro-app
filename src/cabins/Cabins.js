import React, { Component } from 'react';
import { Divider, Image, List } from 'semantic-ui-react';
import { CarouselProvider, Image as ImageC, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import CarouselDotGroup from '../components/CarouselDotGroup';
import img01 from '../assets/photos/cabins/domki_01.jpg';
import img02 from '../assets/photos/cabins/domki_02.jpg';
import img03 from '../assets/photos/cabins/domki_03.jpg';
import img04 from '../assets/photos/cabins/domki_04.jpg';
import img05 from '../assets/photos/cabins/domki_05.jpg';
import img06 from '../assets/photos/cabins/domki_06.jpg';
import img07 from '../assets/photos/cabins/domki_07.jpg';
import img08 from '../assets/photos/cabins/domki_08.jpg';
import img09 from '../assets/photos/cabins/domki_09.jpg';
import img10 from '../assets/photos/cabins/domki_10.jpg';
import img11 from '../assets/photos/cabins/domki_11.jpg';
import img12 from '../assets/photos/cabins/domki_12.jpg';
import img13 from '../assets/photos/cabins/domki_13.jpg';
import img14 from '../assets/photos/cabins/domki_14.jpg';
import img15 from '../assets/photos/cabins/domki_15.jpg';
import img16 from '../assets/photos/cabins/domki_16.jpg';
import img17 from '../assets/photos/cabins/domki_17.jpg';

export default class Cabins extends Component {

  render() {

    return (
      <div>
        <h3>Domki</h3>

        <div>
          <div className='Segment__description--container'>
            <p>Do dyspozycji naszych gości oddajemy: 12 drewnianych domków letniskowych.</p>
            <p>Każdy domek przeznaczony jest dla 4 - 5 osób i składa się z 3 pomieszczeń:</p>
            <List>
              <List.Item>
                <List.Content>
                  <List.Header>Pokój gościnny z aneksem kuchennym</List.Header>
                  <List.Description>
                    Wyposażenie: wersalka, ława, dwa fotele, dwie pufy, szafa, lustro, telewizor.
                  </List.Description>
                  <List.Description>
                    Aneks kuchenny: lodówka, kuchenka gazowa, dzbanek elektryczny, podstawowe naczynia, garnki i sztućce.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header >Sypialnia</List.Header>
                  <List.Description>
                    Wyposażenie: łóżko piętrowe, pojedynczy tapczanik, szafka nocna.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>Łazienka</List.Header>
                  <List.Description>
                    Wyposażenie: natrysk, umywalka, toaleta.
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </div>
          
          <div className='Segment__carousel--container'>
            <CarouselProvider
              naturalSlideWidth={1}
              naturalSlideHeight={1}
              totalSlides={3}
            >
              <Slider>
                <Slide index={0}>
                  <ImageC src={img03} />
                </Slide>
                <Slide index={1}>
                  <ImageC src={img04} />
                </Slide>
                <Slide index={2}>
                  <ImageC src={img05} />
                </Slide>
              </Slider>

              <Divider />
              <CarouselDotGroup slides={3} />
            </CarouselProvider>
          </div>
          
          <div className='Segment__carousel--container--2'>
            <CarouselProvider
              naturalSlideWidth={1}
              naturalSlideHeight={1}
              totalSlides={14}
            >
              <Slider>
                <Slide index={0}>
                  <ImageC src={img01} />
                </Slide>
                <Slide index={1}>
                  <ImageC src={img02} />
                </Slide>
                <Slide index={2}>
                  <ImageC src={img06} />
                </Slide>
                <Slide index={3}>
                  <ImageC src={img07} />
                </Slide>
                <Slide index={4}>
                  <ImageC src={img08} />
                </Slide>
                <Slide index={5}>
                  <ImageC src={img09} />
                </Slide>
                <Slide index={6}>
                  <ImageC src={img10} />
                </Slide>
                <Slide index={7}>
                  <ImageC src={img11} />
                </Slide>
                <Slide index={8}>
                  <ImageC src={img12} />
                </Slide>
                <Slide index={9}>
                  <ImageC src={img13} />
                </Slide>
                <Slide index={10}>
                  <ImageC src={img14} />
                </Slide>
                <Slide index={11}>
                  <ImageC src={img15} />
                </Slide>
                <Slide index={12}>
                  <ImageC src={img16} />
                </Slide>
                <Slide index={13}>
                  <ImageC src={img17} />
                </Slide>
              </Slider>

              <Divider />
              <CarouselDotGroup slides={14} />
            </CarouselProvider>
          </div>
          
          <div className='Segment__description--container--2'>
            <p>Nasze komfortowe, drewniane domki letniskowe o powierzchni 30 m² znajdują się na terenie dużej ogrodzonej posesji.</p>
            <p>Każdy domek posiada zadaszony taras, komplet drewnianych mebli ogrodowych oraz miejsce parkingowe wewnątrz posesji.</p>
          </div>
          
          <Image.Group size='small' className='Segment__img--container' >
            <Image src={img01} />
            <Image src={img02} />
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
          </Image.Group>
        </div>
      </div>
    );
  };
};
