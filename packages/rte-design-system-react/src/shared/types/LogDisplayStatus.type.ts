/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from '../utils/mappings/common/iconMaps';
import { TailwindColorClass } from './TailwindColorClass.type';

export type LogDisplayStatus = {
  label: string;
  icon: StdIconId;
  color?: TailwindColorClass;
};
