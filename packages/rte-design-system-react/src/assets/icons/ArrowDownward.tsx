/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const ArrowDownward = (props: IconProps) => {
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
        d="M8.84974 13.125V4.74958C8.84974 4.53722 8.9212 4.35917 9.06411 4.21542C9.20703 4.07181 9.38411 4 9.59536 4C9.80661 4 9.98515 4.07181 10.131 4.21542C10.2768 4.35917 10.3497 4.53722 10.3497 4.74958V13.125L14.0208 9.45396C14.1706 9.3041 14.3463 9.22917 14.5477 9.22917C14.749 9.22917 14.9295 9.30556 15.0889 9.45833C15.235 9.61111 15.3081 9.78819 15.3081 9.98958C15.3081 10.191 15.2329 10.3667 15.0827 10.5169L10.1224 15.4708C10.0473 15.5458 9.96592 15.6007 9.87828 15.6354C9.79064 15.6701 9.69668 15.6875 9.5964 15.6875C9.49626 15.6875 9.40231 15.6701 9.31453 15.6354C9.22689 15.6007 9.14835 15.5486 9.0789 15.4792L4.12057 10.5208C3.96779 10.3681 3.89488 10.191 3.90182 9.98958C3.90876 9.78819 3.98529 9.61111 4.1314 9.45833C4.29085 9.30556 4.47245 9.22917 4.6762 9.22917C4.87981 9.22917 5.05571 9.30556 5.2039 9.45833L8.84974 13.125Z"
      />
    </svg>
  );
};
