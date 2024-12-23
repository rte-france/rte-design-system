/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

<svg width="20" height="20" id="icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="" fill="black" />
  <path d="" fill="black" />
</svg>;
import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const Sell2 = (props: IconProps) => {
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
    alt = 'Sell2',
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
        d="M7.67448 15.6992C7.47396 15.8997 7.23047 16 6.94401 16C6.65755 16 6.41406 15.8997 6.21354 15.6992L1.30078 10.7865C1.20888 10.6917 1.13577 10.5796 1.08147 10.4504C1.02716 10.3211 1 10.1897 1 10.056V6.03125C1 5.74766 1.10098 5.50488 1.30293 5.30293C1.50488 5.10098 1.74766 5 2.03125 5H6.05599C6.19414 5 6.32416 5.02387 6.44606 5.07161C6.56796 5.11936 6.68012 5.1943 6.78255 5.29646L11.6992 10.2135C11.8997 10.4141 12 10.6552 12 10.9368C12 11.2185 11.8997 11.4596 11.6992 11.6602L7.67448 15.6992ZM6.94401 14.9688L10.9688 10.944L6.05599 6.03125H2.03125V10.056L6.94401 14.9688ZM3.40625 8.26562C3.64497 8.26562 3.84787 8.18207 4.01497 8.01497C4.18207 7.84787 4.26562 7.64497 4.26562 7.40625C4.26562 7.16753 4.18207 6.96463 4.01497 6.79753C3.84787 6.63043 3.64497 6.54688 3.40625 6.54688C3.16753 6.54688 2.96463 6.63043 2.79753 6.79753C2.63043 6.96463 2.54688 7.16753 2.54688 7.40625C2.54688 7.64497 2.63043 7.84787 2.79753 8.01497C2.96463 8.18207 3.16753 8.26562 3.40625 8.26562Z"
      />
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M14.6745 15.6992C14.474 15.8997 14.2305 16 13.944 16C13.6576 16 13.4141 15.8997 13.2135 15.6992L8.30078 10.7865C8.20888 10.6917 8.13577 10.5796 8.08147 10.4504C8.02716 10.3211 8 10.1897 8 10.056V6.03125C8 5.74766 8.10098 5.50488 8.30293 5.30293C8.50488 5.10098 8.74766 5 9.03125 5H13.056C13.1941 5 13.3242 5.02387 13.4461 5.07161C13.568 5.11936 13.6801 5.1943 13.7825 5.29646L18.6992 10.2135C18.8997 10.4141 19 10.6552 19 10.9368C19 11.2185 18.8997 11.4596 18.6992 11.6602L14.6745 15.6992ZM13.944 14.9688L17.9688 10.944L13.056 6.03125H9.03125V10.056L13.944 14.9688ZM10.4062 8.26562C10.645 8.26562 10.8479 8.18207 11.015 8.01497C11.1821 7.84787 11.2656 7.64497 11.2656 7.40625C11.2656 7.16753 11.1821 6.96463 11.015 6.79753C10.8479 6.63043 10.645 6.54688 10.4062 6.54688C10.1675 6.54688 9.96463 6.63043 9.79753 6.79753C9.63043 6.96463 9.54688 7.16753 9.54688 7.40625C9.54688 7.64497 9.63043 7.84787 9.79753 8.01497C9.96463 8.18207 10.1675 8.26562 10.4062 8.26562Z"
      />
    </svg>
  );
};
