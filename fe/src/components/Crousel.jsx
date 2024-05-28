import React from 'react';
import { Carousel } from 'antd';
// Import Ant Design styles

import Gambar1 from '../assets/Gambar1.jpg';
import Gambar2 from '../assets/Gambar2.jpg';
import Gambar3 from '../assets/Gambar3.jpg';
import Gambar4 from '../assets/Gambar4.jpg';

const contentStyle = {
    height: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.5)', // Ubah nilai alpha menjadi 0.5 (nilai alpha berkisar dari 0 hingga 1, di mana 0 adalah transparan dan 1 adalah opak)
};


const imageStyle = {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain', // Ensures the image fits within the container without distortion
};

const CarouselComponent = () => (
    <div>
        <Carousel autoplay className='carousel'>
            <div>
                <div style={contentStyle}>
                    <img src={Gambar1} alt="Gambar 1" style={imageStyle} />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src={Gambar2} alt="Gambar 2" style={imageStyle} />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src={Gambar3} alt="Gambar 3" style={imageStyle} />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src={Gambar4} alt="Gambar 4" style={imageStyle} />
                </div>
            </div>
        </Carousel>
    </div>
);

export default CarouselComponent;
