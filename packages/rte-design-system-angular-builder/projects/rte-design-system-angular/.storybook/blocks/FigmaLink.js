import React from 'react';

export const FigmaLink = ({ url }) => {
    return React.createElement(
        'a',
        { href: url, target: '_blank', style: { display: 'flex', alignItems: 'center', marginTop: '10px', width: 'fit-content' } },
        React.createElement(
            'svg',
            { width: '48', height: '48', viewBox: '0 0 1024 1280', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            React.createElement('rect', { width: '96', height: '320', rx: '80', fill: 'white' }),
            React.createElement('path', { d: 'M312 840C312 784.772 356.772 740 412 740H512V840C512 895.228 467.228 940 412 940C356.772 940 312 895.228 312 840Z', fill: '#24CB71' }),
            React.createElement('path', { d: 'M512 340V540H612C667.228 540 712 495.228 712 440C712 384.772 667.228 340 612 340H512Z', fill: '#FF7237' }),
            React.createElement('path', { d: 'M611.167 740C666.395 740 711.167 695.228 711.167 640C711.167 584.772 666.395 540 611.167 540C555.939 540 511.167 584.772 511.167 640C511.167 695.228 555.939 740 611.167 740Z', fill: '#00B6FF' }),
            React.createElement('path', { d: 'M312 440C312 495.228 356.772 540 412 540H512V340H412C356.772 340 312 384.772 312 440Z', fill: '#FF3737' }),
            React.createElement('path', { d: 'M312 640C312 695.228 356.772 740 412 740H512V540H412C356.772 540 312 584.772 312 640Z', fill: '#874FFF' })
        ),
        'View in Figma'
    );
}