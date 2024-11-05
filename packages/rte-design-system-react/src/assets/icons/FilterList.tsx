/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const FilterList = (props: IconProps) => {
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
        d="M9.16667 15C8.93056 15 8.73264 14.9201 8.57292 14.7604C8.41319 14.6007 8.33333 14.4028 8.33333 14.1667C8.33333 13.9306 8.41319 13.7326 8.57292 13.5729C8.73264 13.4132 8.93056 13.3333 9.16667 13.3333H10.8333C11.0694 13.3333 11.2674 13.4132 11.4271 13.5729C11.5868 13.7326 11.6667 13.9306 11.6667 14.1667C11.6667 14.4028 11.5868 14.6007 11.4271 14.7604C11.2674 14.9201 11.0694 15 10.8333 15H9.16667ZM5.83333 10.8333C5.59722 10.8333 5.39931 10.7535 5.23958 10.5938C5.07986 10.434 5 10.2361 5 10C5 9.76389 5.07986 9.56597 5.23958 9.40625C5.39931 9.24653 5.59722 9.16667 5.83333 9.16667H14.1667C14.4028 9.16667 14.6007 9.24653 14.7604 9.40625C14.9201 9.56597 15 9.76389 15 10C15 10.2361 14.9201 10.434 14.7604 10.5938C14.6007 10.7535 14.4028 10.8333 14.1667 10.8333H5.83333ZM3.33333 6.66667C3.09722 6.66667 2.89931 6.58681 2.73958 6.42708C2.57986 6.26736 2.5 6.06944 2.5 5.83333C2.5 5.59722 2.57986 5.39931 2.73958 5.23958C2.89931 5.07986 3.09722 5 3.33333 5H16.6667C16.9028 5 17.1007 5.07986 17.2604 5.23958C17.4201 5.39931 17.5 5.59722 17.5 5.83333C17.5 6.06944 17.4201 6.26736 17.2604 6.42708C17.1007 6.58681 16.9028 6.66667 16.6667 6.66667H3.33333Z"
      />
    </svg>
  );
};
