/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React from 'react';

interface DoDontProps {
    element: any;
    text: string;
    state: string;
}

export const DoDont = ({ element, text, state }: DoDontProps) => {
    let message:string = '';
    let boxStyle:React.CSSProperties = {};
    let textStyle:React.CSSProperties = {};

    const styles: { [key: string]: React.CSSProperties } = {
        Dont: { border: '1px solid red', backgroundColor: '#ffe6e6' },
        Do: { border: '1px solid green', backgroundColor: '#e6ffe6' }
    };

    boxStyle = { ...styles[state], padding: '10px', borderRadius: '10px', marginTop: '4px' };
    textStyle = { backgroundColor: state === 'Do' ? 'green' : 'red', color: 'white', paddingInline: '10px', borderRadius: '25px', width: 'fit-content' };

    if (state === 'Do') message = `Do: ${text}`;
    if (state === 'Dont') message = `Dont: ${text}`;

    return React.createElement(
        'div',
        {style: { marginTop:'10px'}},
        React.createElement(
            'div',
            { style: textStyle },
            state
        ),
        React.createElement(
            'div',
            { style: boxStyle },
            React.createElement('div', null, message),
            React.createElement('div', { style: { marginTop: '5px' } }, element)
        )
    );
};