/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { buttonClassBuilder } from './rds-button-classbuilder';

export type ButtonVariant = 'contained' | 'outlined' | 'dashed' | 'text' | 'transparent';
export type ButtonSize = 'extraSmall' | 'small' | 'medium';
export type ButtonColor = 'primary' | 'secondary' | 'danger';
export type IconPosition = 'left' | 'right';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'lib-rds-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rds-button.component.html',
  styleUrls: ['../../../../style.css'] // #bricolage (à régler plus tard) todo : find better route
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
  @Input() icon?: string;
  @Input() position: IconPosition = 'left';

  preventDefault(e: MouseEvent): void {
    e.preventDefault();
  }

  get buttonClasses(): string {
    return buttonClassBuilder(this.variant, this.color, this.size, this.disabled, !!this.label);
  }

}
