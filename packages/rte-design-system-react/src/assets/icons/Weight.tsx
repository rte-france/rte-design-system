/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Weight = (props: IconProps) => {
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
    alt = 'Weight',
    isExplicit = true,
  } = props;

  const iconClasses = iconClassBuilder(fill, rotationOptions, rotate, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={isExplicit}
      aria-labelledby="svgTitle svgDesc"
      viewBox="0  0 20 20"
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
        d="M5.4998 15.5H14.4998L13.479 8H6.52063L5.4998 15.5ZM9.9998 6.5C10.2831 6.5 10.5206 6.40417 10.7123 6.2125C10.904 6.02083 10.9998 5.78333 10.9998 5.5C10.9998 5.21667 10.904 4.97917 10.7123 4.7875C10.5206 4.59583 10.2831 4.5 9.9998 4.5C9.71646 4.5 9.47896 4.59583 9.2873 4.7875C9.09563 4.97917 8.9998 5.21667 8.9998 5.5C8.9998 5.78333 9.09563 6.02083 9.2873 6.2125C9.47896 6.40417 9.71646 6.5 9.9998 6.5ZM12.2915 6.5H13.479C13.8562 6.5 14.1831 6.62153 14.4598 6.86458C14.7365 7.10764 14.9026 7.41667 14.9581 7.79167L15.979 15.2917C16.0484 15.7422 15.9346 16.1396 15.6375 16.4837C15.3406 16.8279 14.961 17 14.4988 17H5.50563C5.04341 17 4.66299 16.8279 4.36438 16.4837C4.06577 16.1396 3.95119 15.7422 4.02063 15.2917L5.04146 7.79167C5.09702 7.41667 5.26313 7.10764 5.5398 6.86458C5.81646 6.62153 6.14341 6.5 6.52063 6.5H7.70813C7.63869 6.34722 7.5866 6.1875 7.55188 6.02083C7.51716 5.85417 7.4998 5.68056 7.4998 5.5C7.4998 4.80556 7.74285 4.21528 8.22896 3.72917C8.71508 3.24306 9.30535 3 9.9998 3C10.6942 3 11.2845 3.24306 11.7706 3.72917C12.2567 4.21528 12.4998 4.80556 12.4998 5.5C12.4998 5.68056 12.4824 5.85417 12.4477 6.02083C12.413 6.1875 12.3609 6.34722 12.2915 6.5Z"
      />
    </svg>
  );
};
