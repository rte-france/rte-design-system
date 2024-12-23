/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const KeepOff = (props: IconProps) => {
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
    alt = 'KeepOff',
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
        d="M11.6664 4.16667H8.3331V5.97917L6.04143 3.6875C5.97199 3.61806 5.9199 3.54167 5.88518 3.45833C5.85046 3.375 5.8331 3.29167 5.8331 3.20833C5.8331 3.02778 5.8956 2.86458 6.0206 2.71875C6.1456 2.57292 6.31227 2.5 6.5206 2.5H13.3331C13.5692 2.5 13.7671 2.57986 13.9268 2.73958C14.0866 2.89931 14.1664 3.09722 14.1664 3.33333C14.1664 3.55556 14.0657 3.71181 13.8643 3.80208C13.663 3.89236 13.4859 4.01389 13.3331 4.16667V9.16667C13.3331 9.40278 13.2532 9.60069 13.0935 9.76042C12.9338 9.92014 12.7359 10 12.4998 10C12.2637 10 12.0657 9.92014 11.906 9.76042C11.7463 9.60069 11.6664 9.40278 11.6664 9.16667V4.16667ZM9.16643 18.3333V13.3333H6.16643C5.81921 13.3333 5.54143 13.2118 5.3331 12.9687C5.12477 12.7257 5.0206 12.4514 5.0206 12.1458C5.0206 11.9931 5.05185 11.8403 5.11435 11.6875C5.17685 11.5347 5.27754 11.3889 5.41643 11.25L6.66643 10V9.04167L1.74977 4.08333C1.59699 3.93056 1.51713 3.73958 1.51018 3.51042C1.50324 3.28125 1.5831 3.08333 1.74977 2.91667C1.90254 2.76389 2.09699 2.6875 2.3331 2.6875C2.56921 2.6875 2.76365 2.76389 2.91643 2.91667L17.0623 17.0625C17.2289 17.2292 17.3088 17.4271 17.3018 17.6562C17.2949 17.8854 17.2081 18.0833 17.0414 18.25C16.8748 18.4028 16.6803 18.4826 16.4581 18.4896C16.2359 18.4965 16.0414 18.4167 15.8748 18.25L10.9581 13.3333H10.8331V18.3333C10.8331 18.5694 10.7532 18.7674 10.5935 18.9271C10.4338 19.0868 10.2359 19.1667 9.99977 19.1667C9.76365 19.1667 9.56574 19.0868 9.40602 18.9271C9.24629 18.7674 9.16643 18.5694 9.16643 18.3333ZM7.37477 11.6667H9.29143L8.37477 10.75L8.3331 10.7083L7.37477 11.6667Z"
      />
    </svg>
  );
};
