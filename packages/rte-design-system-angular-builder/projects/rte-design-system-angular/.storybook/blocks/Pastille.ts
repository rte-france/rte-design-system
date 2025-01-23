/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React from 'react';

const colorMap: { [key: string]: string } = {
    success: '#1e7e34',
    warning: '#c82333',
    hint: '#117a8b',
    basic: '#5a6268'
};

export const Pastille = ({ state, text } : {state:string, text:string}) => {
    const pastilleStyle = {
        backgroundColor: colorMap[state] || colorMap['basic'],
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