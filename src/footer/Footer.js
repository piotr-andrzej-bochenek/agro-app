import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';

export default class Footer extends Component {
  
    render() {

        return (
            <Container>
                <List horizontal size='mini' verticalAlign='middle' className='Footer'>
                    <List.Item>
                        <List.Icon name='call' />
                        <List.Content>
                            <List.Header>Zadzwoń do nas</List.Header>
                            +48 88 888 88 88
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mobile alternate' />
                        <List.Content>
                            <List.Header>Zarezerwuj pobyt</List.Header>
                            +48 999 999 999
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='envelope open outline' />
                        <List.Content>
                            <List.Header>Napisz do nas</List.Header>
                            {<a href='mailto:agro@example.com'>agro@example.com</a>}
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='map marker alternate' />
                        <List.Content>
                            <List.Header>Przyjedź do nas</List.Header>
                            {<a href='https://goo.gl/maps/HHSVQLE7LpMqvAvP8'>Cisowo 32a, 76-150 Darłowo</a>}
                        </List.Content>
                    </List.Item>
                </List>
            </Container>
        );
    };
};
