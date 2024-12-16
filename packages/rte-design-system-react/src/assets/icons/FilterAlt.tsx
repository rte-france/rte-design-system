/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const FilterAlt = (props: IconProps) => {
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
    alt = 'FilterAlt',
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
        d="M9.50382 16C9.36243 16 9.24312 15.9521 9.1459 15.8562C9.04868 15.7604 9.00007 15.6417 9.00007 15.5V10.7708L4.10424 4.8125C3.97924 4.64583 3.96021 4.46875 4.04715 4.28125C4.13396 4.09375 4.28493 4 4.50007 4H15.5001C15.7152 4 15.8662 4.09375 15.953 4.28125C16.0399 4.46875 16.0209 4.64583 15.8959 4.8125L11.0001 10.7708V15.5C11.0001 15.6417 10.9523 15.7604 10.8567 15.8562C10.761 15.9521 10.6426 16 10.5013 16H9.50382Z"
      />
    </svg>
  );
};
