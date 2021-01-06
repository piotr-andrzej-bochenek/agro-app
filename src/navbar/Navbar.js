import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Icon, Input, Menu, Segment } from 'semantic-ui-react';
import Links from './Links';

export default class MenuSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Menu secondary color='green'>
            <Menu.Item
              as={Link}
              to={'/'}
              name={'home'}
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              <Icon name='home'/>
            </Menu.Item>
          
            <Menu.Item
              as={Link}
              to={'/pokoje'}
              name='pokoje'
              active={activeItem === 'pokoje'}
              onClick={this.handleItemClick}
            />
          
            <Menu.Item
              as={Link}
              to={'/domki'}
              name='domki'
              active={activeItem === 'domki'}
              onClick={this.handleItemClick}
            />
            
            <Menu.Item
              as={Link}
              to={'/gospodarstwo'}
              name='gospodarstwo'
              active={activeItem === 'gospodarstwo'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={Link}
              to={'/okolica'}
              name='okolica'
              active={activeItem === 'okolica'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={Link}
              to={'/goscie'}
              name='goście'
              active={activeItem === 'goście'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={Link}
              to={'/cennik'}
              name='cennik'
              active={activeItem === 'cennik'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={Link}
              to={'/kontakt'}
              name='kontakt'
              active={activeItem === 'kontakt'}
              onClick={this.handleItemClick}
            />

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Szukaj...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          <Links />
        </Segment>
      </Container>
    )
  }
}
