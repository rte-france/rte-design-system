import React from 'react';

const colorMap = {
    success: '#1e7e34',
    warning: '#c82333',
    hint: '#117a8b',
    basic: '#5a6268'
};

export const Pastille = ({ state, text }) => {
    const pastilleStyle = {
        backgroundColor: colorMap[state] || colorMap.basic,
        color: 'white',
        padding: '5px 10px',
        borderRadius: '25px',
        width: 'fit-content',
        display: 'inline-block',
        fontSize: '12px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    };

    return React.createElement(
        'div',
        { style: pastilleStyle },
        text
    );
}