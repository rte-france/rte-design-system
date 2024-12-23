/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

<svg id="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="" fill="black" />
</svg>;
import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const StarOff = (props: IconProps) => {
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
    alt = 'StarOff',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.37485 14.1029L9.99985 12.5196L12.6249 14.1238L12.4975 13.5679L7.84589 8.91631L5.74985 9.10295L8.06235 11.1238L7.37485 14.1029ZM6.31741 7.38783L4.3349 5.40533C4.04201 5.11244 4.04201 4.63756 4.3349 4.34467C4.6278 4.05178 5.10267 4.05178 5.39556 4.34467L16.7093 15.6584C17.0022 15.9513 17.0022 16.4261 16.7093 16.719C16.4164 17.0119 15.9415 17.0119 15.6486 16.719L14.7292 15.7996C14.7392 15.9277 14.7183 16.0462 14.6665 16.155C14.5971 16.3009 14.4999 16.4224 14.3749 16.5196C14.2499 16.6168 14.104 16.6724 13.9374 16.6863C13.7707 16.7002 13.611 16.6585 13.4582 16.5613L9.99985 14.4779L6.54152 16.5613C6.38874 16.6585 6.22902 16.7002 6.06235 16.6863C5.89568 16.6724 5.74985 16.6168 5.62485 16.5196C5.49985 16.4224 5.40263 16.3009 5.33318 16.155C5.26374 16.0092 5.24985 15.846 5.29152 15.6654L6.20818 11.7279L3.14568 9.08211C3.00679 8.95711 2.91999 8.81475 2.88527 8.65503C2.85054 8.49531 2.86096 8.33906 2.91652 8.18628C2.97207 8.0335 3.05541 7.9085 3.16652 7.81128C3.27763 7.71406 3.43041 7.65156 3.62485 7.62378L6.31741 7.38783ZM14.4911 11.1235L13.3069 9.93928L14.2499 9.12378L12.3195 8.9519L10.4554 7.08773L9.99985 6.01961L9.81575 6.44811L8.54717 5.17953L9.22902 3.56128C9.29846 3.39461 9.4061 3.26961 9.55193 3.18628C9.69777 3.10295 9.84707 3.06128 9.99985 3.06128C10.1526 3.06128 10.3019 3.10295 10.4478 3.18628C10.5936 3.26961 10.7012 3.39461 10.7707 3.56128L12.3332 7.26961L16.3748 7.62378C16.5693 7.65156 16.7221 7.71406 16.8332 7.81128C16.9443 7.9085 17.0276 8.0335 17.0832 8.18628C17.1387 8.33906 17.1492 8.49531 17.1144 8.65503C17.0797 8.81475 16.9929 8.95711 16.854 9.08211L14.4911 11.1235Z"
      />
    </svg>
  );
};
