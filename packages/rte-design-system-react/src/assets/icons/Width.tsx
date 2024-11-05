/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Width = (props: IconProps) => {
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
      viewBox="0 -960 960 960"
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
        d="m273-440 35 37q11 11 11 27.5T308-348q-12 12-28.5 12T252-348L148-451q-6-6-9-13.5t-3-15.5q0-8 3-15t9-13l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T308-555l-35 35h414l-36-36q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l103 104q6 6 9 13t3 15q0 8-3 15.5t-9 13.5L707-347q-11 11-27.5 11T651-348q-11-11-11-27.5t11-27.5l36-37H273Z"
      />
    </svg>
  );
};
