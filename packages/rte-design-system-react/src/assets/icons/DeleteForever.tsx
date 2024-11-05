/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const DeleteForever = (props: IconProps) => {
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
        d="M6.09961 17C5.68711 17 5.33398 16.8531 5.04023 16.5594C4.74648 16.2656 4.59961 15.9125 4.59961 15.5V5.5H4.34961C4.13711 5.5 3.95898 5.42854 3.81523 5.28563C3.67148 5.14271 3.59961 4.96563 3.59961 4.75438C3.59961 4.54313 3.67148 4.36458 3.81523 4.21875C3.95898 4.07292 4.13711 4 4.34961 4H7.59961V3.75C7.59961 3.5375 7.67148 3.35937 7.81523 3.21562C7.95898 3.07187 8.13711 3 8.34961 3H10.8496C11.0621 3 11.2402 3.07187 11.384 3.21562C11.5277 3.35937 11.5996 3.5375 11.5996 3.75V4H14.8496C15.0621 4 15.2402 4.07146 15.384 4.21437C15.5277 4.35729 15.5996 4.53437 15.5996 4.74562C15.5996 4.95687 15.5277 5.13542 15.384 5.28125C15.2402 5.42708 15.0621 5.5 14.8496 5.5H14.5996V15.491C14.5996 15.9137 14.4527 16.2708 14.159 16.5625C13.8652 16.8542 13.5121 17 13.0996 17H6.09961ZM13.0996 5.5H6.09961V15.5H13.0996V5.5ZM9.59961 11.5625L10.7454 12.7083C10.8982 12.8611 11.0753 12.934 11.2767 12.9271C11.4781 12.9201 11.6552 12.8403 11.8079 12.6875C11.9607 12.5347 12.0371 12.3576 12.0371 12.1562C12.0371 11.9549 11.9607 11.7778 11.8079 11.625L10.6621 10.5L11.8079 9.35417C11.9607 9.20139 12.0371 9.02431 12.0371 8.82292C12.0371 8.62153 11.9607 8.44444 11.8079 8.29167C11.6552 8.13889 11.4781 8.0625 11.2767 8.0625C11.0753 8.0625 10.8982 8.13889 10.7454 8.29167L9.59961 9.4375L8.45378 8.29167C8.301 8.13889 8.12739 8.0625 7.93294 8.0625C7.7385 8.0625 7.56489 8.13889 7.41211 8.29167C7.25933 8.44444 7.18294 8.62153 7.18294 8.82292C7.18294 9.02431 7.25933 9.20139 7.41211 9.35417L8.53711 10.5L7.39128 11.6458C7.2385 11.7986 7.16558 11.9722 7.17253 12.1667C7.17947 12.3611 7.25933 12.5347 7.41211 12.6875C7.56489 12.8403 7.74197 12.9167 7.94336 12.9167C8.14475 12.9167 8.32183 12.8403 8.47461 12.6875L9.59961 11.5625Z"
      />
    </svg>
  );
};
