/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const SyncProblem = (props: IconProps) => {
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
    alt = 'SyncProblem',
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
        d="M480-280q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm0-160q-17 0-28.5-11.5T440-480v-160q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v160q0 17-11.5 28.5T480-440Zm-280-40q0 54 21.5 99.5T280-302v-58q0-17 11.5-28.5T320-400q17 0 28.5 11.5T360-360v160q0 17-11.5 28.5T320-160H160q-17 0-28.5-11.5T120-200q0-17 11.5-28.5T160-240h69q-51-44-80-106t-29-134q0-94 49-170t128-116q14-8 29.5-1t20.5 23q5 16-1.5 31T325-690q-56 31-90.5 86.5T200-480Zm560 0q0-54-21.5-99.5T680-658v58q0 17-11.5 28.5T640-560q-17 0-28.5-11.5T600-600v-160q0-17 11.5-28.5T640-800h160q17 0 28.5 11.5T840-760q0 17-11.5 28.5T800-720h-69q51 44 80 106t29 134q0 94-49 170.5T663-193q-14 8-29.5.5T613-216q-5-16 1.5-31t20.5-23q56-31 90.5-86.5T760-480Z"
      />
    </svg>
  );
};
