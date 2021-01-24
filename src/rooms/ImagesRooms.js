import * as React from 'react';
import { Image } from 'semantic-ui-react';

import img01 from '../assets/photos/rooms/pokoje_01.jpg';
import img02 from '../assets/photos/rooms/pokoje_02.jpg';
import img03 from '../assets/photos/rooms/pokoje_03.jpg';
import img04 from '../assets/photos/rooms/pokoje_04.jpg';
import img05 from '../assets/photos/rooms/pokoje_05.jpg';
import img06 from '../assets/photos/rooms/pokoje_06.jpg';
import img07 from '../assets/photos/rooms/pokoje_07.jpg';
import img08 from '../assets/photos/rooms/pokoje_08.jpg';
import img09 from '../assets/photos/rooms/pokoje_09.jpg';
import img10 from '../assets/photos/rooms/pokoje_10.jpg';
import img11 from '../assets/photos/rooms/pokoje_11.jpg';
import img12 from '../assets/photos/rooms/pokoje_12.jpg';
import img13 from '../assets/photos/rooms/pokoje_13.jpg';
import img14 from '../assets/photos/rooms/pokoje_14.jpg';
import img15 from '../assets/photos/rooms/pokoje_15.jpg';
import img16 from '../assets/photos/rooms/pokoje_16.jpg';
import img17 from '../assets/photos/rooms/pokoje_17.jpg';
import img18 from '../assets/photos/rooms/pokoje_18.jpg';

export default class ImagesRooms extends React.Component {

    render() {

        return (
            <Image.Group size='small' className='Segment__img--container' >
                <Image src={img01} alt='Pokój - część sypialna' />
                <Image src={img02} alt='Pokój - część sypialna' />
                <Image src={img03} alt='Pokój - część rekreacyjna' />
                <Image src={img04} alt='Kuchnia' />
                <Image src={img05} alt='Kuchnia' />
                <Image src={img06} alt='Łazienka' />
                <Image src={img07} alt='Łazienka' />
                <Image src={img08} alt='Pokój - część rekreacyjna' />
                <Image src={img09} alt='Łazienka - kabina' />
                <Image src={img10} alt='Pokój - część sypialna' />
                <Image src={img11} alt='Pokój na poddaszu - część sypialna' />
                <Image src={img12} alt='Pokój z balkonem' />
                <Image src={img13} alt='Łazienka - kabina' />
                <Image src={img14} alt='Łazienka - kabina' />
                <Image src={img15} alt='Aneks kuchenny' />
                <Image src={img16} alt='Taras' />
                <Image src={img17} alt='Pokój - część sypialna' />
                <Image src={img18} alt='Jadalnia' />
            </Image.Group>
        );
    };
};
