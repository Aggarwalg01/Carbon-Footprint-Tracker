import React from 'react';
import footprintSvg from './footprint.svg';
import './footprint.css'

export default function FootprintDiv({fillPercentage}) {
    // given full height = 200px
    const style = {
        height: `${fillPercentage*2}px`,
        overflow: 'hidden',
    };
    console.log(style.height);
    return (
        <div className='image-prop-container' style={style}>
            <img className='image-prop' src={footprintSvg} alt="footprint"/>
        </div>
    );
};