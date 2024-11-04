/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/shared/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Sort = (props: IconProps) => {
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
      viewBox="0 -960 960 960"
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
        d="M3.75 14.5C3.5375 14.5 3.35938 14.4285 3.21563 14.2856C3.07188 14.1427 3 13.9656 3 13.7544C3 13.5431 3.07188 13.3646 3.21563 13.2188C3.35938 13.0729 3.5375 13 3.75 13H7.25C7.4625 13 7.64062 13.0715 7.78438 13.2144C7.92812 13.3573 8 13.5344 8 13.7456C8 13.9569 7.92812 14.1354 7.78438 14.2812C7.64062 14.4271 7.4625 14.5 7.25 14.5H3.75ZM3.75604 10.75C3.54368 10.75 3.36458 10.6785 3.21875 10.5356C3.07292 10.3927 3 10.2156 3 10.0044C3 9.79313 3.07181 9.61458 3.21542 9.46875C3.35903 9.32292 3.53701 9.25 3.74938 9.25H11.244C11.4563 9.25 11.6354 9.32146 11.7812 9.46438C11.9271 9.60729 12 9.78438 12 9.99563C12 10.2069 11.9282 10.3854 11.7846 10.5312C11.641 10.6771 11.463 10.75 11.2506 10.75H3.75604ZM3.75 7C3.5375 7 3.35938 6.92854 3.21563 6.78563C3.07188 6.64271 3 6.46563 3 6.25438C3 6.04313 3.07188 5.86458 3.21563 5.71875C3.35938 5.57292 3.5375 5.5 3.75 5.5H16.25C16.4625 5.5 16.6406 5.57146 16.7844 5.71437C16.9281 5.85729 17 6.03437 17 6.24562C17 6.45687 16.9281 6.63542 16.7844 6.78125C16.6406 6.92708 16.4625 7 16.25 7H3.75Z"
      />
    </svg>
  );
};
