/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const COMMON_CARD_CLASSES =
  'rds-w-full rds-h-full rds-rounded-lg rds-bg-gray-w rds-border-b-4 rds-pt-0.5 rds-px-0.5 rds-shadow-4 rds-border-b-gray-w rds-overflow-visible';

export const HOVER_CARD_CLASSES =
  'rds-group no-desc-clickable-hovered:hover:rds-bg-primary-50 no-desc-clickable-hovered:hover:rds-cursor-pointer no-desc-clickable-hovered:hover:rds-border-b-primary-400';
export const FOCUS_CARD_CLASSES =
  'focus-visible:rds-outline-primary-900 focus-visible:rds-outline focus-visible:rds-outline-2';
export const ACTIVE_CARD_CLASSES = 'active:rds-border-b-2 active:rds-pb-0.25';
export const DISABLED_CARD_CLASSES = '[&]:rds-bg-gray-100 [&]:rds-border-b-gray-100 rds-cursor-not-allowed';

export const KEYBOARD_CARD_CLASSES =
  '[&]:rds-bg-primary-50 [&]:rds-border-b-primary-400 [&]:rds-border-b-2 [&]:rds-pb-0.25';

export default function cardClassBuilder(isClickable?: boolean, isKeyboardActive?: boolean, disabled?: boolean) {
  const classes = {
    cardClasses: COMMON_CARD_CLASSES,
  };

  if (disabled) {
    classes.cardClasses = clsx(classes.cardClasses, DISABLED_CARD_CLASSES);
  } else if (isClickable) {
    const clickableClasses = [FOCUS_CARD_CLASSES];
    clickableClasses.push(HOVER_CARD_CLASSES, ACTIVE_CARD_CLASSES);
    if (isKeyboardActive) clickableClasses.push(KEYBOARD_CARD_CLASSES);
    classes.cardClasses = clsx(classes.cardClasses, ...clickableClasses);
  }

  return classes;
}
