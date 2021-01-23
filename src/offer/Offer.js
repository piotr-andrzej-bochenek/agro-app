import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export default class Offer extends Component {
  
  render() {

    return (
      <div>
        <h3>Oferta</h3>
        <div>
          <List>
            <List.Item>
              <List.Content>
                <List.Header>DOMKI (4-osobowe):</List.Header>
                <List.Description>
                  - do 1 lipca 120 zł/domek,
                </List.Description>
                <List.Description>
                  - od 1 lipca do 6 lipca 150 zł/domek,
                </List.Description>
                <List.Description>
                  - od 6 lipca do 23 sierpnia 180 zł/domek,
                </List.Description>
                <List.Description>
                  - po 23 sierpnia 150 zł/domek.
                </List.Description>
                <List.Description>
                  Każda kolejna osoba w domku to dodatkowe 10 zł/dobę.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Pokoje</List.Header>
                <List.Description>
                  Od 30 do 40 zł/osobę.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Wyżywienie</List.Header>
                <List.Description>
                  30 zł/osobę/dobę (śniadanie + obiadokolacja).
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Ceny poza sezonem:</List.Header>
                <List.Description>
                  Do negocjacji.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>UWAGI:</List.Header>
                <List.Description>
                  1. Doba hotelowa kończy się o godzinie 10.00.
                </List.Description>
                <List.Description>
                  2. Doba hotelowa rozpoczyna się o godzinie 14.00.
                </List.Description>
                <List.Description>
                  3. Zameldowanie i rozliczenie następuje w dniu przyjazdu.
                </List.Description>
                <List.Description>
                  4. W razie skracania pobytu nie ma zwrotu pieniędzy.
                </List.Description>
                <List.Description>
                  5. Zadatek w wysokości 25% całkowitej opłaty należy przysłać przelewem w ciągu tygodnia. Jest on potwierdzeniem rezerwacji. W przypadku zwłoki rezerwacja jest nieaktualna.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </div>
      </div>
    );
  };
};
