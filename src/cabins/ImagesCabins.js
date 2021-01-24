import * as React from 'react';
import { Image } from 'semantic-ui-react';

import img01 from '../assets/photos/cabins/domki_01.jpg';
import img02 from '../assets/photos/cabins/domki_02.jpg';
import img03 from '../assets/photos/cabins/domki_06.jpg';
import img04 from '../assets/photos/cabins/domki_07.jpg';
import img05 from '../assets/photos/cabins/domki_08.jpg';
import img06 from '../assets/photos/cabins/domki_09.jpg';
import img07 from '../assets/photos/cabins/domki_10.jpg';
import img08 from '../assets/photos/cabins/domki_11.jpg';
import img09 from '../assets/photos/cabins/domki_12.jpg';
import img10 from '../assets/photos/cabins/domki_13.jpg';
import img11 from '../assets/photos/cabins/domki_14.jpg';
import img12 from '../assets/photos/cabins/domki_15.jpg';
import img13 from '../assets/photos/cabins/domki_16.jpg';
import img14 from '../assets/photos/cabins/domki_17.jpg';

export default class ImagesCabins extends React.Component {

    render() {

        return (
            <Image.Group size='small' className='Segment__img--container' >
                <Image src={img01} alt='Domek' />
                <Image src={img02} alt='Panorama przy domkach' />
                <Image src={img03} alt='Dwa domki' />
                <Image src={img04} alt='Dwa domki z huśtawką' />
                <Image src={img05} alt='Dwa domk i wiatrak' />
                <Image src={img06} alt='Ścieżka do domków' />
                <Image src={img07} alt='Trawnik przed domkami' />
                <Image src={img08} alt='Pomost' />
                <Image src={img09} alt='Ścieżka do domków' />
                <Image src={img10} alt='Cztery domki' />
                <Image src={img11} alt='Domek zimą' />
                <Image src={img12} alt='Dwa domki zimą' />
                <Image src={img13} alt='Trzy domki zimą' />
                <Image src={img14} alt='Otoczenie domków zimą' />
            </Image.Group>
        );
    };
};
