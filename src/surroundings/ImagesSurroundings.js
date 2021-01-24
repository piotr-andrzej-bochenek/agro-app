import * as React from 'react';
import { Image } from 'semantic-ui-react';

import img01 from '../assets/photos/surroundings/okol_01.jpg';
import img02 from '../assets/photos/surroundings/okol_02.jpg';
import img03 from '../assets/photos/surroundings/okol_03.jpg';
import img04 from '../assets/photos/surroundings/okol_04.jpg';
import img05 from '../assets/photos/surroundings/okol_05.jpg';
import img06 from '../assets/photos/surroundings/okol_06.jpg';
import img07 from '../assets/photos/surroundings/okol_07.jpg';
import img08 from '../assets/photos/surroundings/okol_08.jpg';
import img09 from '../assets/photos/surroundings/okol_09.jpg';
import img10 from '../assets/photos/surroundings/okol_10.jpg';
import img11 from '../assets/photos/surroundings/okol_11.jpg';
import img12 from '../assets/photos/surroundings/okol_12.jpg';
import img13 from '../assets/photos/surroundings/okol_13.jpg';
import img14 from '../assets/photos/surroundings/okol_14.jpg';
import img15 from '../assets/photos/surroundings/okol_15.jpg';
import img16 from '../assets/photos/surroundings/okol_16.jpg';

export default class ImagesSurroundings extends React.Component {

    render() {

        return (
            <Image.Group size='small' className='Segment__img--container' >
                <Image src={img01} alt='Pole i wiatrak' />
                <Image src={img02} alt='Pole i wiatraki' />
                <Image src={img03} alt='Pola i morze w oddali' />
                <Image src={img04} alt='Pola' />
                <Image src={img05} alt='Wiatraki' />
                <Image src={img06} alt='Wiatraki' />
                <Image src={img07} alt='Pola i drzewo' />
                <Image src={img08} alt='Pola' />
                <Image src={img09} alt='Wiatraki i wieża kościoła w Cisowie' />
                <Image src={img10} alt='Kościół w Cisowie' />
                <Image src={img11} alt='Ściana kościoła' />
                <Image src={img12} alt='Wejście do parku' />
                <Image src={img13} alt='Pomnik' />
                <Image src={img14} alt='Pomnik i kościół w Cisowie' />
                <Image src={img15} alt='Polny krajobraz' />
                <Image src={img16} alt='Polny krajobraz i głazy' />
            </Image.Group>
        );
    };
};
