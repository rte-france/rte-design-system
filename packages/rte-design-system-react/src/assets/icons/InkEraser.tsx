/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

<svg xmlns="http://www.w3.org/2000/svg" id="icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
  <path d="" />
</svg>;
import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const InkEraser = (props: IconProps) => {
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
    alt = 'Ink Eraser',
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
        d="M14.3751 15H17.5001C17.7362 15 17.9341 15.0799 18.0938 15.2396C18.2535 15.3993 18.3334 15.5972 18.3334 15.8333C18.3334 16.0694 18.2535 16.2674 18.0938 16.4271C17.9341 16.5868 17.7362 16.6667 17.5001 16.6667H12.7084L14.3751 15ZM4.31256 16.6667C4.20145 16.6667 4.09381 16.6458 3.98964 16.6042C3.88548 16.5625 3.79173 16.5 3.70839 16.4167L2.18756 14.8958C1.86811 14.5764 1.70492 14.1806 1.69798 13.7083C1.69103 13.2361 1.84728 12.8333 2.16673 12.5L11.3334 3C11.6528 2.66667 12.0452 2.5 12.5105 2.5C12.9758 2.5 13.3681 2.65972 13.6876 2.97917L17.8334 7.125C18.1528 7.44444 18.3126 7.84028 18.3126 8.3125C18.3126 8.78472 18.1528 9.18056 17.8334 9.5L11.0834 16.4167C11.0001 16.5 10.9063 16.5625 10.8021 16.6042C10.698 16.6458 10.5903 16.6667 10.4792 16.6667H4.31256ZM10.1251 15L16.6667 8.29167L12.5417 4.16667L3.33339 13.6667L4.66673 15H10.1251Z"
      />
    </svg>
  );
};
