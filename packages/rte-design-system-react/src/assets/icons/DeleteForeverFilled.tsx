/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const DeleteForeverFilled = (props: IconProps) => {
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
        d="M6.5 17C6.08333 17 5.72917 16.8542 5.4375 16.5625C5.14583 16.2708 5 15.9167 5 15.5V5.5H4.75C4.54167 5.5 4.36458 5.42708 4.21875 5.28125C4.07292 5.13542 4 4.95833 4 4.75C4 4.54167 4.07292 4.36458 4.21875 4.21875C4.36458 4.07292 4.54167 4 4.75 4H8V3.75C8 3.54167 8.07292 3.36458 8.21875 3.21875C8.36458 3.07292 8.54167 3 8.75 3H11.25C11.4583 3 11.6354 3.07292 11.7812 3.21875C11.9271 3.36458 12 3.54167 12 3.75V4H15.25C15.4583 4 15.6354 4.07292 15.7812 4.21875C15.9271 4.36458 16 4.54167 16 4.75C16 4.95833 15.9271 5.13542 15.7812 5.28125C15.6354 5.42708 15.4583 5.5 15.25 5.5H15V15.5C15 15.9167 14.8542 16.2708 14.5625 16.5625C14.2708 16.8542 13.9167 17 13.5 17H6.5ZM10 11.5625L11.1458 12.7083C11.2986 12.8611 11.4757 12.934 11.6771 12.9271C11.8785 12.9201 12.0556 12.8403 12.2083 12.6875C12.3611 12.5347 12.4375 12.3576 12.4375 12.1562C12.4375 11.9549 12.3611 11.7778 12.2083 11.625L11.0625 10.5L12.2083 9.35417C12.3611 9.20139 12.4375 9.02431 12.4375 8.82292C12.4375 8.62153 12.3611 8.44444 12.2083 8.29167C12.0556 8.13889 11.8785 8.0625 11.6771 8.0625C11.4757 8.0625 11.2986 8.13889 11.1458 8.29167L10 9.4375L8.85417 8.29167C8.70139 8.13889 8.52778 8.0625 8.33333 8.0625C8.13889 8.0625 7.96528 8.13889 7.8125 8.29167C7.65972 8.44444 7.58333 8.62153 7.58333 8.82292C7.58333 9.02431 7.65972 9.20139 7.8125 9.35417L8.9375 10.5L7.79167 11.6458C7.63889 11.7986 7.56597 11.9722 7.57292 12.1667C7.57986 12.3611 7.65972 12.5347 7.8125 12.6875C7.96528 12.8403 8.14236 12.9167 8.34375 12.9167C8.54514 12.9167 8.72222 12.8403 8.875 12.6875L10 11.5625Z"
      />
    </svg>
  );
};
