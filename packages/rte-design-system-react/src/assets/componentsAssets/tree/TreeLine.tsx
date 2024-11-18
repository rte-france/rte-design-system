/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../../iconClassBuilder.ts';

export const TreeLine = (props: IconProps) => {
  const {
    width = 16,
    height = 32,
    fill = 'none',
    stroke = '#DDDFE0',
    rotationOptions,
    rotate,
    strokeWidth = 1,
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
      viewBox="0 0 16 32"
      className={iconClasses}
      width={width}
      height={height}
    >
      <title id="svgTitle">{alt}</title>
      <desc id="svgDesc">{description}</desc>
      <path d="M8 32L8 0" fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
};
