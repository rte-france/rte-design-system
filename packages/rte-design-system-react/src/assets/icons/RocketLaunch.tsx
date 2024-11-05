/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const RocketLaunch = (props: IconProps) => {
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
        d="M284-506q14-28 29-54t33-52l-56-11-84 84 78 33Zm482-275q-70 2-149.5 41T472-636q-42 42-75 90t-49 90l114 113q42-16 90-49t90-75q65-65 104-144t41-149q0-4-1.5-8t-4.5-7q-3-3-7-4.5t-8-1.5ZM546-541q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm-34 262 33 79 84-84-11-56q-26 18-52 32.5T512-279Zm351-534q8 110-36 214.5T688-399l20 99q4 20-2 39t-20 33L560-102q-15 15-36 11.5T495-114l-61-143-171-171-143-61q-20-8-24-29t11-36l126-126q14-14 33.5-20t39.5-2l99 20q95-95 199.5-139T819-857q8 1 16 4.5t14 9.5q6 6 9.5 14t4.5 16ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-48 48-113.5 57T82-76q9-66 18-131.5T157-321Zm57 56q-17 17-23.5 41T180-175q25-4 49-10t41-23q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"
      />
    </svg>
  );
};
