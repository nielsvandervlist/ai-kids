import React from 'react';
import Character from './Character';
import InteractionSpot from './InteractionSpot';

const GameArea = ({ characterPosition, isInteractable, interactionSpotPosition }) => {
    return (
        <div className="game-area">
            <Character characterPosition={characterPosition} />
            <InteractionSpot isInteractable={isInteractable} position={interactionSpotPosition} />
        </div>
    );
};

export default GameArea;
