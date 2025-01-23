/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React from 'react';

interface StoryBoxProps {
    element: any;
    text?: string;
}

export const StoryBox = ({ element, text }:StoryBoxProps) => {

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
