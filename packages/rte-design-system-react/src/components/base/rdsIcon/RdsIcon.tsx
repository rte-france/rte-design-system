/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconComps, RdsIconId } from '@/utils/mappings/iconMaps.ts';
import { RotationOptionsType } from '@/types/Tailwind.type.ts';
import { TailwindColorClass } from '@/types/TailwindColorClass.type.ts';
import { Suspense } from 'react';
import { ExplicitIconProps, NonExplicitIconProps } from '@/types/index.ts';

export type PlainIconProps = {
  name: string;
  url: string;
  color?: TailwindColorClass;
  width?: number;
  height?: number;
  rotationOptions?: RotationOptionsType;
  rotate?: boolean;
  filledColor?: boolean;
};
export type RdsIconProps = (ExplicitIconProps | NonExplicitIconProps) & {
  name: keyof typeof RdsIconId | string;
} & Omit<PlainIconProps, 'url'>;

export const RdsIcon = (props: RdsIconProps) => {
  const { name } = props;
  if (!(name in RdsIconId)) {
    return null;
  }
  const Icon = IconComps[name as keyof typeof RdsIconId];
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Icon {...props} />
      </Suspense>
    </>
  );
};
