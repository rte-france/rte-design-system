import React from 'react';

export const StoryBox = ({ element, text }) => {

    const boxStyle = {
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
        padding: '10px',
        borderRadius: '5px',
        marginTop: '10px'
    };

    return React.createElement(
        'div',
        { style: boxStyle },
        text && React.createElement('div', { style: { marginBottom: '10px' } }, text),
        React.createElement('div', null, element)
    );
};
