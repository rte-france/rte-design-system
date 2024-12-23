/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Downloading = (props: IconProps) => {
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
    alt = 'Downloading',
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
        d="M161-481q0 113 69 200t176 113q15 4 24 17t9 29q0 16-11 26.5T403-88q-140-28-231-137.5T81-481q0-146 91.5-255.5T404-874q14-3 25 7.5t11 26.5q0 16-9 29t-24 17q-108 26-177 113t-69 200Zm358 46 74-74q12-12 29-12t29 12q12 12 11.5 29T650-451L507-308q-12 12-28 12t-28-12L306-454q-12-12-11.5-28.5T307-511q12-12 28.5-12t28.5 12l75 76v-205q0-17 11.5-28.5T479-680q17 0 28.5 11.5T519-640v205Zm122 230q15-9 32.5-8t30.5 14q12 12 10 28.5T698-145q-32 20-67 34.5T559-88q-16 3-28-7t-12-27q0-17 10.5-30t27.5-18q22-6 43-15t41-20Zm-82-587q-17-5-28-18t-11-30q0-17 11.5-27t27.5-7q38 8 73.5 22.5T700-816q14 9 15 25t-10 28q-12 13-29.5 14t-32.5-8q-20-11-41-20t-43-15Zm230 390q5-17 18.5-28t30.5-11q17 0 27.5 13t6.5 29q-8 38-23 72.5T813-260q-9 14-25 14t-27-11q-12-12-13.5-29t7.5-32q11-20 19.5-40.5T789-402Zm-34-243q-9-15-7.5-31.5T761-705q11-11 27-10.5t25 13.5q22 32 37 67.5t23 73.5q3 16-7.5 28T838-521q-17 0-30.5-11.5T789-561q-6-22-14.5-43T755-645Z"
      />
    </svg>
  );
};
