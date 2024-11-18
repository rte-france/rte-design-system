/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const FolderShared = (props: IconProps) => {
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
    alt = 'FolderShared',
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
        d="M3.5 16C3.09722 16 2.74653 15.8507 2.44792 15.5521C2.14931 15.2535 2 14.9028 2 14.5V5.5C2 5.0875 2.14931 4.73438 2.44792 4.44063C2.74653 4.14688 3.09722 4 3.5 4H7.3675C7.56681 4 7.75681 4.03472 7.9375 4.10417C8.11806 4.17361 8.28472 4.28472 8.4375 4.4375L10 6H16.5C16.9125 6 17.2656 6.14688 17.5594 6.44063C17.8531 6.73438 18 7.0875 18 7.5V14.5C18 14.9028 17.8531 15.2535 17.5594 15.5521C17.2656 15.8507 16.9125 16 16.5 16H3.5ZM10 14H16V13.5625C16 13.1597 15.6944 12.7986 15.0833 12.4792C14.4722 12.1597 13.7743 12 12.9896 12C12.2049 12 11.5104 12.1562 10.9062 12.4688C10.3021 12.7812 10 13.1458 10 13.5625V14ZM13.0044 11C13.4181 11 13.7708 10.8527 14.0625 10.5581C14.3542 10.2635 14.5 9.90938 14.5 9.49563C14.5 9.08188 14.3527 8.72917 14.0581 8.4375C13.7635 8.14583 13.4094 8 12.9956 8C12.5819 8 12.2292 8.14729 11.9375 8.44188C11.6458 8.73646 11.5 9.09062 11.5 9.50437C11.5 9.91813 11.6473 10.2708 11.9419 10.5625C12.2365 10.8542 12.5906 11 13.0044 11Z"
      />
    </svg>
  );
};
