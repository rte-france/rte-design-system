/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const KeyboardDoubleArrowUp = (props: IconProps) => {
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
    alt = 'KeyboardDoubleArrowUp',
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
        d="M9.99984 12.0625L6.58317 15.4792C6.43039 15.6319 6.25331 15.7083 6.05192 15.7083C5.85053 15.7083 5.67345 15.6319 5.52067 15.4792C5.36789 15.3264 5.2915 15.1493 5.2915 14.9479C5.2915 14.7465 5.36789 14.569 5.52067 14.4167L9.479 10.4583C9.54845 10.3889 9.62831 10.3368 9.71859 10.3021C9.80887 10.2674 9.90262 10. 5 9.99984 10.25C10.0971 10.25 10.1908 10.2674 10.2811 10.3021C10.3714 10.3368 10.4512 10.3889 10.5 07 10.4583L14.479 14.4167C14.6318 14.5694 14.7082 14.7431 14.7082 14.9375C14.7082 15.1319 14.6318 15.3056 14.479 15.4583C14.3262 15.6111 14.1491 15.6875 13.9478 15.6875C13.7464 15.6875 13.5693 15.6111 13.4165 15.4583L9.99984 12.0625ZM9.99984 6.125L6.58317 9.54167C6.43039 9.69444 6.25331 9.77083 6.05192 9.77083C5.85053 9.77083 5.67345 9.69444 5.52067 9.54167C5.36789 9.38889 5.2915 9.21181 5.2915 9.01042C5.2915 8.80903 5.36789 8.63194 5.52067 8.47917L9.479 4.52083C9.54845 4.45139 9.62831 4.39931 9.71859 4.36458C9.80887 4.32986 9.90262 4.3125 9.99984 4.3125C10.0971 4.3125 10.1908 4.32986 10.2811 4.36458C10.3714 4.39931 10.4512 4.45139 10.5207 4.52083L14.479 8.47917C14.6318 8.63194 14.7082 8.80556 14.7082 9C14.7082 9.19444 14.6318 9.36806 14.479 9.52083C14.3262 9.67361 14.1491 9.75 13.9478 9.75C13.7464 9.75 13.5693 9.67361 13.4165 9.52083L9.99984 6.125Z"
      />
    </svg>
  );
};
