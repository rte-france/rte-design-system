/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/shared/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const RestoreFromTrashFilled = (props: IconProps) => {
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
        d="M6.5 18C6.0875 18 5.73437 17.8531 5.44062 17.5594C5.14687 17.2656 5 16.9125 5 16.5V6.5H4.75C4.5375 6.5 4.35938 6.42854 4.21563 6.28563C4.07188 6.14271 4 5.96563 4 5.75438C4 5.54313 4.07188 5.36458 4.21563 5.21875C4.35938 5.07292 4.5375 5 4.75 5H8V4.75C8 4.5375 8.07188 4.35937 8.21563 4.21562C8.35938 4.07187 8.5375 4 8.75 4H11.25C11.4625 4 11.6406 4.07187 11.7844 4.21562C11.9281 4.35937 12 4.5375 12 4.75V5H15.25C15.4625 5 15.6406 5.07146 15.7844 5.21437C15.9281 5.35729 16 5.53437 16 5.74562C16 5.95687 15.9281 6.13542 15.7844 6.28125C15.6406 6.42708 15.4625 6.5 15.25 6.5H15V16.491C15 16.9137 14.8531 17.2708 14.5594 17.5625C14.2656 17.8542 13.9125 18 13.5 18H6.5ZM9.25 11.375V13.7471C9.25 13.9604 9.32146 14.1392 9.46438 14.2835C9.60729 14.4278 9.78438 14.5 9.99563 14.5C10.2069 14.5 10.3854 14.4278 10.5312 14.2835C10.6771 14.1392 10.75 13.9604 10.75 13.7471V11.375L11.4167 12.0417C11.5694 12.1944 11.7477 12.2708 11.9515 12.2708C12.1551 12.2708 12.331 12.1944 12.4792 12.0417C12.6319 11.8889 12.7083 11.7118 12.7083 11.5104C12.7083 11.309 12.6319 11.1319 12.4792 10.9792L10.5179 9.01792C10.3671 8.86708 10.1932 8.79167 9.99625 8.79167C9.79931 8.79167 9.62694 8.86806 9.47917 9.02083L7.52083 10.9792C7.36806 11.1319 7.29514 11.3056 7.30208 11.5C7.30903 11.6944 7.38889 11.8681 7.54167 12.0208C7.69444 12.1736 7.87153 12.25 8.07292 12.25C8.27431 12.25 8.45139 12.1736 8.60417 12.0208L9.25 11.375Z"
      />
    </svg>
  );
};
