/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Reply = (props: IconProps) => {
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
    alt = 'Reply',
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
        d="M5.87484 10.125L7.9165 12.1666C8.06928 12.3194 8.14567 12.4965 8.14567 12.6979C8.14567 12.8993 8.06928 13.0797 7.9165 13.2391C7.76373 13.3852 7.58664 13.4583 7.38525 13.4583C7.18387 13.4583 7.00678 13.3819 6.854 13.2291L3.52067 9.89579C3.36789 9.74801 3.2915 9.57565 3.2915 9.37871C3.2915 9.18176 3.36789 9.0069 3.52067 8.85413L6.854 5.52079C7.00678 5.36801 7.18505 5.29163 7.3888 5.29163C7.59241 5.29163 7.76831 5.36801 7.9165 5.52079C8.06928 5.66899 8.14567 5.84489 8.14567 6.0485C8.14567 6.25225 8.06928 6.43051 7.9165 6.58329L5.87484 8.62496H12.9998C14.1065 8.62496 15.0498 9.01496 15.8298 9.79496C16.6098 10.575 16.9998 11.5183 16.9998 12.625V14.875C16.9998 15.0875 16.9284 15.2656 16.7855 15.4093C16.6425 15.5531 16.4655 15.625 16.2542 15.625C16.043 15.625 15.8644 15.5531 15.7186 15.4093C15.5728 15.2656 15.4998 15.0875 15.4998 14.875V12.625C15.4998 11.9305 15.2568 11.3402 14.7707 10.8541C14.2846 10.368 13.6943 10.125 12.9998 10.125H5.87484Z"
      />
    </svg>
  );
};
