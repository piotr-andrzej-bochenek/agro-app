import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import CarouselCabins1 from './CarouselCabins1';
import CarouselCabins2 from './CarouselCabins2';
import ImagesCabins from './ImagesCabins';

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

          <CarouselCabins1 />

          <CarouselCabins2 />

          <div className='Segment__description--container--2'>
            <p>Nasze komfortowe, drewniane domki letniskowe o powierzchni 30 m² znajdują się na terenie dużej ogrodzonej posesji.</p>
            <p>Każdy domek posiada zadaszony taras, komplet drewnianych mebli ogrodowych oraz miejsce parkingowe wewnątrz posesji.</p>
          </div>

          <ImagesCabins />
        </div>
      </div>
    );
  };
};
