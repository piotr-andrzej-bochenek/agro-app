import * as React from 'react';
import { Image } from 'semantic-ui-react';

import img01 from '../assets/photos/farm/gosp_01.jpg';
import img02 from '../assets/photos/farm/gosp_02.jpg';
import img03 from '../assets/photos/farm/gosp_03.jpg';
import img04 from '../assets/photos/farm/gosp_04.jpg';
import img05 from '../assets/photos/farm/gosp_05.jpg';
import img06 from '../assets/photos/farm/gosp_06.jpg';
import img07 from '../assets/photos/farm/gosp_07.jpg';
import img08 from '../assets/photos/farm/gosp_08.jpg';
import img09 from '../assets/photos/farm/gosp_09.jpg';
import img10 from '../assets/photos/farm/gosp_10.jpg';
import img11 from '../assets/photos/farm/gosp_11.jpg';
import img12 from '../assets/photos/farm/gosp_12.jpg';
import img13 from '../assets/photos/farm/gosp_13.jpg';
import img14 from '../assets/photos/farm/gosp_14.jpg';
import img15 from '../assets/photos/farm/gosp_15.jpg';
import img16 from '../assets/photos/farm/gosp_16.jpg';
import img17 from '../assets/photos/farm/gosp_17.jpg';
import img18 from '../assets/photos/farm/gosp_18.jpg';
import img19 from '../assets/photos/farm/gosp_19.jpg';
import img20 from '../assets/photos/farm/gosp_20.jpg';
import img21 from '../assets/photos/farm/gosp_21.jpg';
import img22 from '../assets/photos/farm/gosp_22.jpg';
import img23 from '../assets/photos/farm/gosp_23.jpg';
import img24 from '../assets/photos/farm/gosp_24.jpg';
import img25 from '../assets/photos/farm/gosp_25.jpg';
import img26 from '../assets/photos/farm/gosp_26.jpg';
import img27 from '../assets/photos/farm/gosp_27.jpg';
import img28 from '../assets/photos/farm/gosp_28.jpg';
import img29 from '../assets/photos/farm/gosp_29.jpg';

export default class ImagesFarm extends React.Component {

    render() {

        return (
            <Image.Group size='small' className='Segment__img--container' >
                <Image src={img01} alt='Dom od frontu' />
                <Image src={img02} alt='Dom od frontu' />
                <Image src={img03} alt='Dom od frontu' />
                <Image src={img04} alt='Dom od frontu' />
                <Image src={img05} alt='Dom od frontu' />
                <Image src={img06} alt='Świetlica' />
                <Image src={img07} alt='Stołówka' />
                <Image src={img08} alt='Wnętrze świetlicy' />
                <Image src={img09} alt='Wnętrze świetlicy - piłkarzyki i automaty' />
                <Image src={img10} alt='Wnętrze świetlicy - komputery' />
                <Image src={img11} alt='Basen ogrodowy' />
                <Image src={img12} alt='Kamienny grill' />
                <Image src={img13} alt='Altana z grillem' />
                <Image src={img14} alt='Altana, ławy i stół' />
                <Image src={img15} alt='Boisko do siatkówki' />
                <Image src={img16} alt='Ławy, stół i huśtawka' />
                <Image src={img17} alt='Oczko wodne' />
                <Image src={img18} alt='Oczko wodne - widok z okna' />
                <Image src={img19} alt='Altana przy domkach' />
                <Image src={img20} alt='Plac zabaw' />
                <Image src={img21} alt='Huśtawka' />
                <Image src={img22} alt='Huśtawki' />
                <Image src={img23} alt='Pomost' />
                <Image src={img24} alt='Pomost' />
                <Image src={img25} alt='Ogródek warzywny' />
                <Image src={img26} alt='Altanka ogrodowa' />
                <Image src={img27} alt='Zjeżdżalnia' />
                <Image src={img28} alt='Sad' />
                <Image src={img29} alt='Kwiaty przed domem' />
            </Image.Group>
        );
    };
};
