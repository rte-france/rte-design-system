/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/shared/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const RestoreFromTrash = (props: IconProps) => {
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
        d="M6.09961 17C5.68711 17 5.33398 16.8531 5.04023 16.5594C4.74648 16.2656 4.59961 15.9125 4.59961 15.5V5.5H4.34961C4.13711 5.5 3.95898 5.42854 3.81523 5.28563C3.67148 5.14271 3.59961 4.96563 3.59961 4.75438C3.59961 4.54313 3.67148 4.36458 3.81523 4.21875C3.95898 4.07292 4.13711 4 4.34961 4H7.59961V3.75C7.59961 3.5375 7.67148 3.35937 7.81523 3.21562C7.95898 3.07187 8.13711 3 8.34961 3H10.8496C11.0621 3 11.2402 3.07187 11.384 3.21562C11.5277 3.35937 11.5996 3.5375 11.5996 3.75V4H14.8496C15.0621 4 15.2402 4.07146 15.384 4.21437C15.5277 4.35729 15.5996 4.53437 15.5996 4.74562C15.5996 4.95687 15.5277 5.13542 15.384 5.28125C15.2402 5.42708 15.0621 5.5 14.8496 5.5H14.5996V15.491C14.5996 15.9137 14.4527 16.2708 14.159 16.5625C13.8652 16.8542 13.5121 17 13.0996 17H6.09961ZM13.0996 5.5H6.09961V15.5H13.0996V5.5ZM8.84961 10.375V12.7471C8.84961 12.9604 8.92107 13.1392 9.06398 13.2835C9.2069 13.4278 9.38398 13.5 9.59523 13.5C9.80648 13.5 9.98503 13.4278 10.1309 13.2835C10.2767 13.1392 10.3496 12.9604 10.3496 12.7471V10.375L11.0163 11.0417C11.1691 11.1944 11.3473 11.2708 11.5511 11.2708C11.7547 11.2708 11.9306 11.1944 12.0788 11.0417C12.2316 10.8889 12.3079 10.7118 12.3079 10.5104C12.3079 10.309 12.2316 10.1319 12.0788 9.97917L10.1175 8.01792C9.96669 7.86708 9.7928 7.79167 9.59586 7.79167C9.39892 7.79167 9.22655 7.86806 9.07878 8.02083L7.12044 9.97917C6.96766 10.1319 6.89475 10.3056 6.90169 10.5C6.90864 10.6944 6.9885 10.8681 7.14128 11.0208C7.29405 11.1736 7.47114 11.25 7.67253 11.25C7.87392 11.25 8.051 11.1736 8.20378 11.0208L8.84961 10.375Z"
      />
    </svg>
  );
};
