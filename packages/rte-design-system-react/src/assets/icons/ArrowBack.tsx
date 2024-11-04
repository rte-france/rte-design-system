/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/shared/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const ArrowBack = (props: IconProps) => {
  const {
    width = 24,
    height = 24,
    fill = 'currentColor',
    stroke = 'none',
    strokeWidth = 1,
    rotationOptions,
    rotate,
    className = '',
    description = '',
    alt,
    isExplicit = true,
  } = props;

  const iconClasses = iconClassBuilder(fill, rotationOptions, rotate, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={isExplicit}
      aria-labelledby="svgTitle svgDesc"
      viewBox="0 0 20 20"
      className={iconClasses}
      width={width}
      height={height}
    >
      <title id="svgTitle">{alt}</title>
      <desc id="svgDesc">{description}</desc>
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M6.47461 10.7501L10.1457 14.4211C10.2955 14.571 10.3704 14.7466 10.3704 14.948C10.3704 15.1494 10.2941 15.3298 10.1413 15.4892C9.9885 15.6354 9.81142 15.7084 9.61003 15.7084C9.40864 15.7084 9.23287 15.6333 9.08273 15.483L4.12878 10.5228C4.05378 10.4477 3.99891 10.3663 3.96419 10.2786C3.92947 10.191 3.91211 10.097 3.91211 9.99675C3.91211 9.89661 3.92947 9.80265 3.96419 9.71487C3.99891 9.62723 4.051 9.54869 4.12044 9.47925L9.07878 4.52091C9.23155 4.36814 9.40982 4.29175 9.61357 4.29175C9.81718 4.29175 9.99308 4.36814 10.1413 4.52091C10.2941 4.66911 10.3704 4.84501 10.3704 5.04862C10.3704 5.25237 10.2952 5.42953 10.1446 5.58008L6.47461 9.25008H14.85C15.0624 9.25008 15.2404 9.32154 15.3842 9.46446C15.5278 9.60737 15.5996 9.78446 15.5996 9.99571C15.5996 10.207 15.5278 10.3855 15.3842 10.5313C15.2404 10.6772 15.0624 10.7501 14.85 10.7501H6.47461Z"
      />
    </svg>
  );
};
