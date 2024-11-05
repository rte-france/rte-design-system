/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const KeyboardDoubleArrowDownward = (props: IconProps) => {
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
        d="M9.25013 11.125V5.75C9.25013 5.54167 9.32304 5.36458 9.46888 5.21875C9.61471 5.07292 9.79179 5 10.0001 5C10.2085 5 10.3855 5.07292 10.5314 5.21875C10.6772 5.36458 10.7501 5.54167 10.7501 5.75V11.125L12.4168 9.45833C12.5696 9.30556 12.7467 9.22917 12.948 9.22917C13.1494 9.22917 13.3265 9.30556 13.4793 9.45833C13.6321 9.61111 13.7085 9.78819 13.7085 9.98958C13.7085 10.191 13.6321 10.3681 13.4793 10.5208L10.521 13.4792C10.3682 13.6319 10.1946 13.7083 10.0001 13.7083C9.80568 13.7083 9.63207 13.6319 9.47929 13.4792L6.52096 10.5208C6.36818 10.3681 6.29527 10.191 6.30221 9.98958C6.30916 9.78819 6.38902 9.61111 6.54179 9.45833C6.69457 9.30556 6.87166 9.22917 7.07304 9.22917C7.27443 9.22917 7.45152 9.30556 7.60429 9.45833L9.25013 11.125Z"
      />
    </svg>
  );
};
