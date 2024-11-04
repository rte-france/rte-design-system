/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/shared/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Bolt = (props: IconProps) => {
  const {
    width = 20,
    height = 21,
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
      viewBox="0 0 20 21"
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
        d="M9.10409 15.2665L12.9166 10.454H9.81242L10.3541 5.84979L6.74992 11.454H9.79159L9.10409 15.2665ZM7.99992 12.954H5.37492C5.08326 12.954 4.86798 12.8255 4.72909 12.5685C4.5902 12.3116 4.59714 12.0581 4.74992 11.8081L10.3958 2.99562C10.5069 2.80118 10.6666 2.6727 10.8749 2.6102C11.0833 2.5477 11.2916 2.55118 11.4999 2.62062C11.7083 2.69006 11.8715 2.81854 11.9895 3.00604C12.1076 3.19354 12.1527 3.3984 12.1249 3.62062L11.4999 8.95395H14.4583C14.7777 8.95395 15.0034 9.09284 15.1353 9.37062C15.2673 9.6484 15.236 9.91229 15.0416 10.1623L8.87492 17.9748C8.73603 18.1415 8.56589 18.2526 8.36451 18.3081C8.16312 18.3637 7.9652 18.3428 7.77076 18.2456C7.57631 18.1484 7.42701 18.006 7.32284 17.8185C7.21867 17.631 7.18742 17.4331 7.22909 17.2248L7.99992 12.954Z"
      />
    </svg>
  );
};
