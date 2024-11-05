/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const ArrowUpward = (props: IconProps) => {
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
        d="M8.84994 6.875L5.17889 10.546C5.02903 10.6959 4.85341 10.7708 4.65202 10.7708C4.45063 10.7708 4.27021 10.6944 4.11077 10.5417C3.96466 10.3889 3.8916 10.2118 3.8916 10.0104C3.8916 9.80903 3.96674 9.63326 4.11702 9.48313L9.07723 4.52917C9.15237 4.45417 9.23375 4.39931 9.32139 4.36458C9.40903 4.32986 9.50299 4.3125 9.60327 4.3125C9.70341 4.3125 9.79737 4.32986 9.88514 4.36458C9.97278 4.39931 10.0513 4.45139 10.1208 4.52083L15.0791 9.47917C15.2319 9.63194 15.3083 9.80556 15.3083 10C15.3083 10.1944 15.2352 10.3681 15.0891 10.5208C14.9297 10.6736 14.7481 10.75 14.5443 10.75C14.3407 10.75 14.1648 10.6736 14.0166 10.5208L10.3499 6.875V15.2504C10.3499 15.4628 10.2785 15.6408 10.1356 15.7846C9.99264 15.9282 9.81556 16 9.60431 16C9.39306 16 9.21452 15.9282 9.06869 15.7846C8.92285 15.6408 8.84994 15.4628 8.84994 15.2504V6.875Z"
      />
    </svg>
  );
};
