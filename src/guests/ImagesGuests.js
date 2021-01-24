import * as React from 'react';
import { Image } from 'semantic-ui-react';

import img01 from '../assets/photos/guests/goscie_01.jpg';
import img02 from '../assets/photos/guests/goscie_02.jpg';
import img03 from '../assets/photos/guests/goscie_03.jpg';
import img04 from '../assets/photos/guests/goscie_04.jpg';
import img05 from '../assets/photos/guests/goscie_05.jpg';
import img06 from '../assets/photos/guests/goscie_06.jpg';
import img07 from '../assets/photos/guests/goscie_07.jpg';
import img08 from '../assets/photos/guests/goscie_08.jpg';
import img09 from '../assets/photos/guests/goscie_09.jpg';
import img10 from '../assets/photos/guests/goscie_10.jpg';
import img11 from '../assets/photos/guests/goscie_11.jpg';
import img12 from '../assets/photos/guests/goscie_12.jpg';
import img13 from '../assets/photos/guests/goscie_13.jpg';
import img14 from '../assets/photos/guests/goscie_14.jpg';
import img15 from '../assets/photos/guests/goscie_15.jpg';
import img16 from '../assets/photos/guests/goscie_16.jpg';

export default class ImagesGuests extends React.Component {

    render() {

        return (
            <Image.Group size='small' className='Segment__img--container' >
                <Image src={img01} alt='Goście przy grillu' />
                <Image src={img02} alt='Goście w altanie' />
                <Image src={img03} alt='Dzieci w altanie' />
                <Image src={img04} alt='Zabawa z psem' />
                <Image src={img05} alt='Pojenie psa' />
                <Image src={img06} alt='Dzieci na zjeżdżalni' />
                <Image src={img07} alt='Posiłek na świeżym powietrzu' />
                <Image src={img08} alt='Kąpanie psa' />
                <Image src={img09} alt='Gra w siatkówkę na boisku' />
                <Image src={img10} alt='Przejażdżka na przyczepie' />
                <Image src={img11} alt='Dzieci na przyczepie' />
                <Image src={img12} alt='Gra w tenisa stołowego' />
                <Image src={img13} alt='Zabawa na zjeżdżalni' />
                <Image src={img14} alt='Zabawa na huśtawkach' />
                <Image src={img15} alt='Zabawa przy oczku wodnym' />
                <Image src={img16} alt='Zabawa w basenie ogrodowym' />
            </Image.Group>
        );
    };
};
