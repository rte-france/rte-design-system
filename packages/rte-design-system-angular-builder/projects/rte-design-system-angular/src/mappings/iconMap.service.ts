/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Injectable, Type } from '@angular/core';
import { AccountCircleComponent } from '../assets/icons/AccountCircle';
import { AccountCircleFilledComponent } from '../assets/icons/AccountCircleFilled';
import { AccountTreeComponent } from '../assets/icons/AccountTree';
// Import other icon components as needed

export const iconMap: { [key: string]: Type<any> } = {
  'AccountCircle': AccountCircleComponent,
  'AccountCircleFilled': AccountCircleFilledComponent,
  'AccountTree': AccountTreeComponent,
};

export const iconMapKeys = Object.keys(iconMap);
export type IconIdKey = typeof iconMapKeys[number];

@Injectable({
  providedIn: 'root'
})
export class IconMapsService {
  async getIconComponent(iconId: string): Promise<Type<any>> {
    return iconMap[iconId];
  }
}
