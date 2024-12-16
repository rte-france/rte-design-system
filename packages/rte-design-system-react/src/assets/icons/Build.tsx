/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Build = (props: IconProps) => {
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
    alt = 'Build',
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
        d="M360-360q-100 0-170-70t-70-170q0-20 3-40t11-38q5-10 12.5-15t16.5-7q9-2 18.5.5T199-689l105 105 72-72-105-105q-8-8-10.5-17.5T260-797q2-9 7-16.5t15-12.5q18-8 38-11t40-3q100 0 170 70t70 170q0 23-4 43.5T584-516l202 200q29 29 29 71t-29 71q-29 29-71 29t-71-30L444-376q-20 8-40.5 12t-43.5 4Zm0-80q26 0 52-8t47-25l243 243q5 5 13.5 4.5T729-231q5-5 5-13.5t-5-13.5L486-500q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440Zm109-51Z"
      />
    </svg>
  );
};
