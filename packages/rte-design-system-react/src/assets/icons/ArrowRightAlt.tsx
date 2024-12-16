/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const ArrowRightAlt = (props: IconProps) => {
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
    alt = 'ArrowRightAlt',
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
        d="M12.7246 10.7501H4.35065C4.13787 10.7501 3.95947 10.6786 3.81544 10.5357C3.67155 10.3928 3.59961 10.2157 3.59961 10.0045C3.59961 9.79321 3.67155 9.61466 3.81544 9.46883C3.95947 9.323 4.13787 9.25008 4.35065 9.25008H12.7246L11.0579 7.58341C10.9052 7.43064 10.8288 7.25355 10.8288 7.05216C10.8288 6.85078 10.9018 6.67369 11.0479 6.52091C11.2074 6.36814 11.3878 6.29175 11.5892 6.29175C11.7906 6.29175 11.9677 6.36814 12.1204 6.52091L15.0857 9.48612C15.1505 9.55098 15.2003 9.62716 15.235 9.71466C15.2697 9.80216 15.2871 9.89591 15.2871 9.99591C15.2871 10.0959 15.2697 10.1897 15.235 10.2772C15.2003 10.3647 15.1482 10.4459 15.0788 10.5209L12.1204 13.4792C11.9677 13.632 11.7941 13.7049 11.5996 13.698C11.4052 13.6911 11.2282 13.6112 11.0688 13.4584C10.9227 13.3056 10.8496 13.1286 10.8496 12.9272C10.8496 12.7258 10.926 12.5487 11.0788 12.3959L12.7246 10.7501Z"
      />
    </svg>
  );
};
