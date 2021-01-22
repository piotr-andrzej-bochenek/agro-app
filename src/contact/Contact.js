import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import './Contact.css';

export default class Contact extends Component {
  
    render() {

      return (
        <div>
          <h3>Zapraszamy do kontaktu!</h3>
          <List horizontal verticalAlign='middle' className='Contact__list'>
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
          <iframe className='Contact__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37116.85055112168!2d16.398235576432384!3d54.44876119926578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe2be37b4a2dbd%3A0x971a960f1050e3b7!2sAgro-Wczasy%20Barbara%20i%20Czes%C5%82aw%20Chaber!5e0!3m2!1spl!2spl!4v1611218986500!5m2!1spl!2spl" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
      );
    };
  };