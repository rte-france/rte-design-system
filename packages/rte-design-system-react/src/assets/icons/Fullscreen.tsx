/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Fullscreen = (props: IconProps) => {
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
    alt = 'Fullscreen',
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
        d="M280-280h80q17 0 28.5 11.5T400-240q0 17-11.5 28.5T360-200H240q-17 0-28.5-11.5T200-240v-120q0-17 11.5-28.5T240-400q17 0 28.5 11.5T280-360v80Zm0-400v80q0 17-11.5 28.5T240-560q-17 0-28.5-11.5T200-600v-120q0-17 11.5-28.5T240-760h120q17 0 28.5 11.5T400-720q0 17-11.5 28.5T360-680h-80Zm400 400v-80q0-17 11.5-28.5T720-400q17 0 28.5 11.5T760-360v120q0 17-11.5 28.5T720-200H600q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h80Zm0-400h-80q-17 0-28.5-11.5T560-720q0-17 11.5-28.5T600-760h120q17 0 28.5 11.5T760-720v120q0 17-11.5 28.5T720-560q-17 0-28.5-11.5T680-600v-80Z"
      />
    </svg>
  );
};
