/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { buttonClassBuilder, labelClassBuilder } from './rds-button-classbuilder';
import { IconLoaderComponent } from '../../../../assets/iconLoader';
import { IconIdKey } from '../../../../mappings/iconMap.service';

export type ButtonVariant = 'contained' | 'outlined' | 'dashed' | 'text' | 'transparent';
export type ButtonSize = 'extraSmall' | 'small' | 'medium';
export type ButtonColor = 'primary' | 'secondary' | 'danger';
export type IconPosition = 'left' | 'right';
export type ButtonType = 'button' | 'submit' | 'reset';



const ICON_SIZE: Record<ButtonSize, number> = {
  extraSmall: 16,
  small: 20,
  medium: 20,
};



@Component({
  selector: 'rds-button',
  standalone: true,
  imports: [CommonModule, IconLoaderComponent],
  templateUrl: './rds-button.component.html',
})


export class RdsButtonComponent{
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() variant: ButtonVariant = 'contained';
  @Input() color: ButtonColor = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() type: ButtonType = 'button';
  @Input() onClick: (e: MouseEvent) => void = () => {};
  @Input() onKeydown: (e: KeyboardEvent) => void = () => {};
  @Input() id?: string;
  @Input() icon?: IconIdKey;
  @Input() position: IconPosition = 'left';

  iconSize = ICON_SIZE

  preventDefault(e: MouseEvent): void {
    e.preventDefault();
  }

  get buttonClasses(): string {
    return buttonClassBuilder(this.variant, this.color, this.size, this.disabled, !!this.label);
  }

  get labelClasses(): string {
    return labelClassBuilder(this.size);
  }



}

