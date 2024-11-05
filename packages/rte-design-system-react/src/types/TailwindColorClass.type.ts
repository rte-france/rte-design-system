/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import tailwindConfig from '@/../tailwind.config.ts';
// with help from https://stackoverflow.com/a/66661477

type DeepKeyOf<T> = (
  [T] extends [never]
    ? ''
    : T extends object
      ? {
          [K in Exclude<keyof T, symbol>]: `${K}${T[K] extends undefined ? '?' : ''}${DotPrefix<DeepKeyOf<T[K]>>}`;
        }[Exclude<keyof T, symbol>]
      : ''
) extends infer D
  ? Extract<D, string>
  : never;

type DotPrefix<T extends string> = T extends '' ? '' : `-${T}`;

type ColorsObject = typeof tailwindConfig.theme.colors;
export type TailwindColorClass = DeepKeyOf<ColorsObject>;

type SpacingObject = typeof tailwindConfig.theme.spacing;
export type TailwindSpacingClass = DeepKeyOf<SpacingObject>;
