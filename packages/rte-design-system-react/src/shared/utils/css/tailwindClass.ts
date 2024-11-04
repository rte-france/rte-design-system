/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PseudoClass, TailwindPrefix } from '@/shared/types/Tailwind.type.ts';
import { TailwindColorClass } from '@/shared/types/TailwindColorClass.type.ts';
import clsx from 'clsx';

const addPseudoClass = (pseudoClass: PseudoClass) => (pseudoClass ? `${pseudoClass}:` : '');
const addSuffix = (suffix: string) => (suffix ? `-${suffix}` : '');
export const buildColorClass = (
  prefix: TailwindPrefix,
  pseudoClassMapper: Partial<Record<PseudoClass, TailwindColorClass>>,
) => {
  return clsx(
    (Object.keys(pseudoClassMapper) as PseudoClass[]).map((pseudoClass) => {
      const color = pseudoClassMapper[pseudoClass];
      return `${addPseudoClass(pseudoClass)}${prefix}-${color}`;
    }),
  );
};
export const buildTailwindClass = (prefix: TailwindPrefix, pseudoClasses: PseudoClass[], suffixList: string[]) => {
  return pseudoClasses.flatMap((pseudoClass) => {
    return suffixList.flatMap((suffix) => {
      return `${addPseudoClass(pseudoClass)}rds-${prefix}${addSuffix(suffix)}`;
    });
  });
};
