import React from 'react';
import footprintSvg from './footprint.svg';
import './footprint.css';

export default function FootprintDiv({ fillPercentage }) {
    // Calculate color based on percentage
    let color = 'black'; // Default color
    if (fillPercentage >= 0 && fillPercentage <= 100) {
        // Calculate color based on percentage
        if (fillPercentage <= 50) {
            // Green to Yellow gradient for 0% to 50%
            const green = 255;
            const red = Math.round((255 * fillPercentage) / 50);
            color = `rgb(${red},${green},0)`;
        } else {
            // Yellow to Red gradient for 50% to 100%
            const green = Math.round((255 * (100 - fillPercentage)) / 50);
            const red = 255;
            color = `rgb(${red},${green},0)`;
        }
    }

    const style = {
        fill: color // Apply dynamic color
    };

    return (
        <div className='image-prop-container'>
            <svg className='image-prop' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,5.8c.2,2.2-1.1,4.1-2.7,4.2S14.2,8.4,14,6.2,15.1,2.1,16.7,2,19.8,3.6,20,5.8ZM22.8,4c-1.1.1-1.9,1.5-1.8,3.1s1.1,3,2.2,2.9S25.1,8.5,25,6.9,23.9,3.9,22.8,4Zm4.3,2.3c-.8-.1-1.5.9-1.6,2.1s.6,2.3,1.4,2.3,1.5-.9,1.6-2.1S27.9,6.3,27.1,6.3ZM30.7,8c-.7-.1-1.5.7-1.7,1.8A1.8,1.8,0,0,0,30,12c.7.1,1.4-.7,1.6-1.8A1.9,1.9,0,0,0,30.7,8Zm3,2.5c-.6-.1-1.2.5-1.3,1.3a1.4,1.4,0,0,0,.6,1.7c.6.1,1.1-.5,1.3-1.3A1.4,1.4,0,0,0,33.7,10.5ZM20,12c-2,0-6,1-5,6s8,7,8,11-3,5-5,9,0,7,3,8a6.8,6.8,0,0,0,8-4c1-3-.6-4.2,1-9,1-3,3-4,4-10C35.4,14.9,27,12,20,12Z" style={style} />
            </svg>
        </div>
    );
}
