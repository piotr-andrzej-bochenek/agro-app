import * as React from 'react'
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
                <Image src={img01} />
                <Image src={img02} />
                <Image src={img03} />
                <Image src={img04} />
                <Image src={img05} />
                <Image src={img06} />
                <Image src={img07} />
                <Image src={img08} />
                <Image src={img09} />
                <Image src={img10} />
                <Image src={img11} />
                <Image src={img12} />
                <Image src={img13} />
                <Image src={img14} />
            </Image.Group>
        );
    };
};
