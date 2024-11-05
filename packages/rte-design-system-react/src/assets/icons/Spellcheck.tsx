/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

<svg xmlns="http://www.w3.org/2000/svg" id="icon" height="24" viewBox="0 -960 960 960" width="24">
  <path d="" />
</svg>;
import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Spellcheck = (props: IconProps) => {
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
      viewBox="0 -960 960 960"
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
        d="m564-192 198-198q11-11 28-11t28 11q11 11 11 28t-11 28L621-137q-12 12-27 18t-30 6q-15 0-30-6t-27-18l-85-85q-11-11-11-28t11-28q11-11 28-11t28 11l86 86ZM254-452l-37 105q-5 12-15 19.5t-23 7.5q-22 0-34-18t-4-38l162-435q5-13 16.5-21t25.5-8h32q14 0 25.5 8t16.5 21l162 434q8 21-4.5 39T541-320q-14 0-25-8t-16-21l-36-103H254Zm28-76h156l-76-216h-4l-76 216Z"
      />
    </svg>
  );
};
