/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RotationOptionsType } from '../Tailwind.type.ts';
import { TailwindColorClass } from '../TailwindColorClass.type.ts';

export type ExplicitIconProps = {
  isExplicit?: true;
  alt?: undefined;
};

export type NonExplicitIconProps = {
  isExplicit: false;
  alt: string;
};
export type IconProps = (ExplicitIconProps | NonExplicitIconProps) & {
  width?: number;
  height?: number;
  fill?: TailwindColorClass;
  stroke?: TailwindColorClass;
  strokeSecondary?: TailwindColorClass;
  rotationOptions?: RotationOptionsType;
  rotate?: boolean;
  strokeWidth?: number;
  className?: string;
  description?: string;
};
