/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PseudoClass, TailwindPrefix } from "@/types/Tailwind.type";
import { TailwindColorClass } from "@/types/TailwindColorClass.type";
import clsx from "clsx";

export const buildColorClass = (prefix: TailwindPrefix, pseudoClassMapper: Partial<Record<PseudoClass,TailwindColorClass>>) =>{
  return clsx((Object.keys(pseudoClassMapper)as PseudoClass[]).map((pseudoClass) => {
    const color = pseudoClassMapper[pseudoClass];
    return `${pseudoClass}${prefix}-${color}`;
  }
  ));
}
