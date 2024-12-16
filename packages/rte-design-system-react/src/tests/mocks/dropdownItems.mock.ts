/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsDropdownOption } from '@/components/layout/rdsDropdown/RdsDropdown.tsx';
import { noop, RdsIconId } from '@/utils/index.ts';

const randomProp = (obj: Record<string, unknown>) => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];

export const generateFakeDropdownList = (size: number, withIcon: boolean = false): RdsDropdownOption[] =>
  Array.from({ length: size }, (_value, index) => ({
    id: `item-${index}`,
    key: `item-${index}`,
    label: `Option ${index}`,
    value: `option-${index}`,
    icon: withIcon ? randomProp(RdsIconId) : undefined,
    onItemClick: noop,
  }));
