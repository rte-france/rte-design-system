/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React from 'react';

interface TabsProps {
    tabs: { name: string, content: any }[];
}

export const Tabs = ({ tabs }: TabsProps) => {
    const [selectedTab, setSelectedTab] = React.useState(tabs[0].name);

    const tabStyle = (isSelected: boolean) => ({
        padding: '10px',
        border: 'none',
        backgroundColor: isSelected ? '#dddddd' : 'transparent',
        cursor: 'pointer'
    });

    const containerStyle = {
        display: 'flex',
        marginBottom: '10px'
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { style: containerStyle },
            tabs.map(tab => React.createElement(
                'div',
                {
                    key: tab.name,
                    style: tabStyle(selectedTab === tab.name),
                    onClick: () => setSelectedTab(tab.name)
                },
                tab.name
            ))
        ),
        tabs.find(tab => tab.name === selectedTab)?.content
    );
};