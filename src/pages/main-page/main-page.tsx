import React from 'react';
import { Carousel } from 'antd';

import { Image } from 'antd';

import addMeasure from '../../static/images/carousel/add-measure.jpg';

export const MainPage = () => {
    return (
        <Carousel autoplay>
            <div>
                <Image width={768} src={addMeasure} />
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
    );
};
