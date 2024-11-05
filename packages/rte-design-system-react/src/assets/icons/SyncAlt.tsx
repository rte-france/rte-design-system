/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const SyncAlt = (props: IconProps) => {
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
        d="m233-280 76 76q12 12 11.5 28T308-148q-12 11-28 11.5T252-148L108-292q-6-6-8.5-13T97-320q0-8 2.5-15t8.5-13l144-144q11-11 27.5-11t28.5 11q12 12 12 28.5T308-435l-75 75h567q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280H233Zm494-320H160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h567l-76-76q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l144 144q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L708-468q-11 11-27.5 11T652-468q-12-12-12-28.5t12-28.5l75-75Z"
      />
    </svg>
  );
};
