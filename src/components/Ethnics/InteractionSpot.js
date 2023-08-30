// InteractionSpot.js
import React from 'react';
import Image from 'next/image'

const InteractionSpot = ({ isInteractable, position }) => {

    const interactionSpotStyle = {
        left: `${position}px`, // Set the left position based on the prop
    };

    return (
        <div
            className={`interaction-spot absolute ${isInteractable ? 'active' : ''}`}
            style={interactionSpotStyle}
        >
            <Image width={'300'} height={'260'} src={'/images/broke-robot.png'} alt={'hello'}/>
            {isInteractable && <p className={'label label--orange relative bottom-4'}>Press Enter/Space to interact</p>}
        </div>
    );
};

export default InteractionSpot;
