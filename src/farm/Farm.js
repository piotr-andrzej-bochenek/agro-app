import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import CarouselFarm1 from './CarouselFarm1';
import CarouselFarm2 from './CarouselFarm2';
import ImagesFarm from './ImagesFarm';

export default class Farm extends Component {
  
  render() {
    
    return (
      <div>
        <h3>Gospodarstwo</h3>
        
        <div>
          <div className='Segment__description--container'>
            <p>W naszej nowej altance, wieczorem, możesz skorzystać z grila i ogrzać się przy ognisku.</p>
            <p>Nowe pomieszczenie - świetlica, wyposażona w automaty do gier komputerowych, piłkarzyki i komputery z dostępem do internetu.</p>
          </div>

          <CarouselFarm1 />

          <CarouselFarm2 />

          <div className='Segment__description--container--2'>
            <List>
              <List.Item>
                <List.Content>  
                  <List.Header>
                    W naszym gospodarstwie do Państwa użytku są między innymi:
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>  
                  <List.Description>
                    Dom z pokojami gościnnymi.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description>
                    Basen.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description>
                    Bungalow.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description>
                    Plac zabaw dla dzieci; zjeżdżalnie, huśtawki.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description>
                    Boisko do siatkówki.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description>
                    Ogród z baldachimem.
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </div>

          <ImagesFarm />
        </div>
      </div>
    );
  };
};
