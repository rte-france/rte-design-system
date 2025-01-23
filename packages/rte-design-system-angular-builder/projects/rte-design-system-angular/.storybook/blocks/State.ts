/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React from 'react';
import { useOf } from '@storybook/blocks';

interface StateProps {
    of?: any;
    state: string;
    text?: string;
}

export const State = ({ of, state, text }: StateProps) => {

    const resolvedOf = useOf(of || 'story', ['story', 'meta']);

    let message:string = '';
    let boxStyle:React.CSSProperties = {};

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


    const styles:{[key:string]:React.CSSProperties} = {
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