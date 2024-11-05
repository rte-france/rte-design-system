/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const ArrowUpwardAlt = (props: IconProps) => {
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
        d="M9.25033 8.87502L7.58366 10.5417C7.43088 10.6945 7.2538 10.7709 7.05241 10.7709C6.85102 10.7709 6.67394 10.6945 6.52116 10.5417C6.36838 10.3889 6.29199 10.2118 6.29199 10.0104C6.29199 9.80905 6.36838 9.63196 6.52116 9.47919L9.47949 6.52085C9.63227 6.36808 9.80588 6.29169 10.0003 6.29169C10.1948 6.29169 10.3684 6.36808 10.5212 6.52085L13.4795 9.47919C13.6323 9.63196 13.7087 9.80558 13.7087 10C13.7087 10.1945 13.6323 10.3681 13.4795 10.5209C13.3267 10.6736 13.1496 10.75 12.9482 10.75C12.7469 10.75 12.5698 10.6736 12.417 10.5209L10.7503 8.87502V14.25C10.7503 14.4584 10.6774 14.6354 10.5316 14.7813C10.3857 14.9271 10.2087 15 10.0003 15C9.79199 15 9.61491 14.9271 9.46908 14.7813C9.32324 14.6354 9.25033 14.4584 9.25033 14.25V8.87502Z"
      />
    </svg>
  );
};
