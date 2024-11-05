/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const ArrowRight = (props: IconProps) => {
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
        d="M7.96419 13.4791C7.86697 13.4791 7.7819 13.4447 7.70898 13.376C7.63607 13.3072 7.59961 13.2166 7.59961 13.1041V6.89575C7.59961 6.78325 7.63711 6.69263 7.71211 6.62388C7.78711 6.55513 7.87461 6.52075 7.97461 6.52075C7.9885 6.52075 8.07718 6.56159 8.24065 6.64325L11.2038 9.60409C11.2593 9.65964 11.301 9.72214 11.3288 9.79159C11.3566 9.86103 11.3704 9.93047 11.3704 9.99992C11.3704 10.0694 11.3566 10.1388 11.3288 10.2083C11.301 10.2777 11.2593 10.3402 11.2038 10.3958L8.24148 13.3566C8.20051 13.3974 8.15621 13.428 8.10857 13.4485C8.06093 13.4689 8.0128 13.4791 7.96419 13.4791Z"
      />
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M7.96419 13.4791C7.86697 13.4791 7.7819 13.4447 7.70898 13.376C7.63607 13.3072 7.59961 13.2166 7.59961 13.1041V6.89575C7.59961 6.78325 7.63711 6.69263 7.71211 6.62388C7.78711 6.55513 7.87461 6.52075 7.97461 6.52075C7.9885 6.52075 8.07718 6.56159 8.24065 6.64325L11.2038 9.60409C11.2593 9.65964 11.301 9.72214 11.3288 9.79159C11.3566 9.86103 11.3704 9.93047 11.3704 9.99992C11.3704 10.0694 11.3566 10.1388 11.3288 10.2083C11.301 10.2777 11.2593 10.3402 11.2038 10.3958L8.24148 13.3566C8.20051 13.3974 8.15621 13.428 8.10857 13.4485C8.06093 13.4689 8.0128 13.4791 7.96419 13.4791Z"
      />
    </svg>
  );
};
