/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Output = (props: IconProps) => {
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
    alt = 'Output',
    isExplicit = true,
  } = props;

  const iconClasses = iconClassBuilder(fill, rotationOptions, rotate, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={isExplicit}
      aria-labelledby="svgTitle svgDesc"
      viewBox="0  0 20 20"
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
        d="M4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H15.5C15.9125 3 16.2656 3.14653 16.5594 3.43958C16.8531 3.73264 17 4.08486 17 4.49625V5.24458C17 5.45653 16.9285 5.63542 16.7856 5.78125C16.6427 5.92708 16.4656 6 16.2544 6C16.0431 6 15.8646 5.92813 15.7188 5.78438C15.5729 5.64063 15.5 5.4625 15.5 5.25V4.5H4.5V15.5H15.5V14.7544C15.5 14.5431 15.5715 14.3646 15.7144 14.2188C15.8573 14.0729 16.0344 14 16.2456 14C16.4569 14 16.6354 14.0721 16.7812 14.2163C16.9271 14.3604 17 14.5391 17 14.7523V15.5044C17 15.9181 16.8531 16.2708 16.5594 16.5625C16.2656 16.8542 15.9125 17 15.5 17H4.5ZM15.125 10.75H8.75C8.5375 10.75 8.35938 10.6785 8.21563 10.5356C8.07188 10.3927 8 10.2156 8 10.0044C8 9.79313 8.07188 9.61458 8.21563 9.46875C8.35938 9.32292 8.5375 9.25 8.75 9.25H15.125L13.4583 7.58333C13.3056 7.43056 13.2292 7.25347 13.2292 7.05208C13.2292 6.85069 13.3056 6.67361 13.4583 6.52083C13.6111 6.36806 13.7882 6.29167 13.9896 6.29167C14.191 6.29167 14.3671 6.36708 14.5179 6.51792L17.4792 9.47917C17.5486 9.55417 17.6007 9.63542 17.6354 9.72292C17.6701 9.81042 17.6875 9.90417 17.6875 10.0042C17.6875 10.1042 17.6701 10.1979 17.6354 10.2854C17.6007 10.3729 17.5486 10.4514 17.4792 10.5208L14.5179 13.4821C14.3671 13.6329 14.1944 13.7049 14 13.6979C13.8056 13.691 13.6319 13.6111 13.4792 13.4583C13.3264 13.3056 13.25 13.1285 13.25 12.9271C13.25 12.7257 13.3264 12.5486 13.4792 12.3958L15.125 10.75Z"
      />
    </svg>
  );
};
