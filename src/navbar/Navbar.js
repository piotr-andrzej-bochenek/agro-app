import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Icon, Input, Menu } from 'semantic-ui-react';

import './Navbar.css';

export default class MenuSecondary extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu className='Navbar' color='green' compact pointing secondary size='small' >
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
            to={'/oferta'}
            name='oferta'
            active={activeItem === 'oferta'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to={'/kontakt'}
            name='kontakt'
            active={activeItem === 'kontakt'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu className='Navbar__search--container' position='right'>
            <Menu.Item className='Navbar__search--field'>
              <Input icon='search' placeholder='Szukaj...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  };
};
