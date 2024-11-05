/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { Delay, Duration, Rotate, RotationOptionsType } from '@/types/Tailwind.type.ts';

export const POINTER_CLASS = 'pointer-events-none';

export const TRANSITION_CLASS = 'transition-all';

export const getDelay = (delay: Delay) => `delay-${delay}`;
export const getRotation = (degree: Rotate) => `rotate-${degree}`;
export const getDuration = (duration: Duration) => `duration-${duration}`;

export const iconClassBuilder = (
  colorClass?: string,
  rotationOptions?: RotationOptionsType,
  rotate?: boolean,
  complementaryClass?: string,
) => {
  const iconClasses = colorClass ? clsx(POINTER_CLASS, `text-${colorClass}`) : POINTER_CLASS;

  if (!rotationOptions) {
    return clsx(iconClasses, complementaryClass);
  }

  const { delayMs, rotationDegree, durationMs } = rotationOptions;

  return clsx(
    iconClasses,
    TRANSITION_CLASS,
    getDelay(delayMs),
    getDuration(durationMs),
    rotate ? getRotation(rotationDegree) : '',
    complementaryClass,
  );
};
