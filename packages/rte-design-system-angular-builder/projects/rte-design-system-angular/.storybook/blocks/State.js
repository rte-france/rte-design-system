import React from 'react';
import { useOf } from '@storybook/blocks';

export const State = ({ of, state, text }) => {

    const resolvedOf = useOf(of || 'story', ['story', 'meta']);

    let message = '';
    let boxStyle = {};

    switch (resolvedOf.type) {
        case 'story':
            message = resolvedOf.story.name;
            break;
        case 'meta':
            message = resolvedOf.preparedMeta.title;
            break;
        default:
            return '';
    }


    const styles = {
    warning: { border: '1px solid red', backgroundColor: '#ffe6e6', color: 'red' },
    hint: { border: '1px solid blue', backgroundColor: '#e6f0ff', color: 'blue' },
    success: { border: '1px solid green', backgroundColor: '#e6ffe6', color: 'green' }
    };

    boxStyle = { ...styles[state], padding: '10px', borderRadius: '5px', marginTop: '10px' };


    if (state === 'hint') message = `Hint: ${message}`;
    if (state === 'success') message = `Success: ${message}`;
    if (state === 'warning') message = `Warning: ${message}`;

    if (text) message = `${message} - ${text}`

    return React.createElement('div', { style: boxStyle }, message);
};