import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export default class Footer extends Component {
  
    render() {

        return (
            <List horizontal size='tiny'>
                <List.Item>
                    <List.Icon name='call' verticalAlign='middle' />
                    <List.Content>
                        <List.Header>Stacjonarny</List.Header>
                        +48 88 888 88 88
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='mobile alternate' />
                    <List.Content>
                        <List.Header>Komórka</List.Header>
                        +48 999 999 999
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='envelope open outline' />
                    <List.Content>
                        <List.Header>Pytania, rezerwacje, opinie</List.Header>
                        {<a href='mailto:agro@example.com'>agro@example.com</a>}
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='map marker alternate' />
                    <List.Content>
                        <List.Header>Nawigacja</List.Header>
                        {<a href='https://goo.gl/maps/wq9MU1uiNsdMkHkU6'>Wioska 1, 00-000 Gmina</a>}
                    </List.Content>
                </List.Item>
            </List>
        );
    };
};
