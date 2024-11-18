/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const COMMON_FIELDSET_CLASSES =
  'rds-group rds-flex rds-rounded-sm rds-bg-gray-300 [&_label:first-of-type>.btn]:rds-rounded-l-sm [&_label:last-of-type>.btn]:rds-rounded-r-sm [&_label:last-of-type>div:last-of-type]:rds-hidden';

export const FOCUS_FIELDSET_CLASSES = 'rds-outline-1 rds-outline-offset-2 rds-outline-gray-900 rds-outline';

export const INPUT_CLASSES = 'rds-peer rds-sr-only';

export const COMMON_BUTTON_CLASSES =
  'rds-h-2 rds-btn rds-box-content rds-flex rds-items-center rds-gap-0.5 rds-px-1 rds-py-0.5 rds-outline-1';

export const ENABLED_BUTTON_CLASSES = 'rds-cursor-pointer rds-text-gray-600';
export const DISABLED_BUTTON_CLASSES = '[&]:rds-cursor-not-allowed rds-bg-gray-200 rds-text-gray-500';

export const HOVER_BUTTON_CLASSSES =
  'hover:rds-bg-gray-400 hover:rds-text-gray-700 hover:peer-checked:rds-text-gray-900';

export const ACTIVE_BUTTON_CLASSSES =
  'active:rds-bg-gray-500 active:rds-text-gray-800 active:peer-checked:rds-text-gray-900';

export const COMMON_CHECKED_BUTTON_CLASSES =
  'peer-checked:rds-rounded-sm peer-checked:rds-outline peer-checked:rds-font-semibold peer-checked:rds-z-10';

export const ENABLED_CHECKED_BUTTON_CLASSES =
  'peer-checked:rds-cursor-default peer-checked:rds-bg-gray-w peer-checked:rds-text-gray-900 peer-checked:rds-outline peer-checked:rds-outline-gray-400';

export const DISABLED_CHECKED_BUTTON_CLASSES =
  'peer-checked:rds-cursor-not-allowed peer-checked:rds-bg-gray-100 peer-checked:rds-outline-gray-300';

export const COMMON_DIVIDER_CLASSES = 'rds-h-2.5 rds-w-0.125 rds-self-center rds-rounded-full rds-bg-gray-400';

export const ENABLED_DIVIDER_CLASSES = '[&]:rds-cursor-pointer';
export const DISABLED_DIVIDER_CLASSES = '[&]:rds-cursor-not-allowed';

export const TEXT_CLASSES =
  'rds-text-center before:rds-invisible before:rds-block before:rds-h-0 before:rds-text-center before:rds-font-semibold before:rds-content-[attr(title)]';

export const toggleClassBuilder = (focus: boolean, disabled?: boolean) => {
  const classes = {
    fieldsetClasses: clsx(COMMON_FIELDSET_CLASSES, focus ? FOCUS_FIELDSET_CLASSES : ''),
    inputClasses: INPUT_CLASSES,
    buttonClasses: clsx(COMMON_BUTTON_CLASSES, COMMON_CHECKED_BUTTON_CLASSES),
    dividerClasses: COMMON_DIVIDER_CLASSES,
    textClasses: TEXT_CLASSES,
  };
  if (disabled) {
    classes.buttonClasses = clsx(classes.buttonClasses, DISABLED_BUTTON_CLASSES, DISABLED_CHECKED_BUTTON_CLASSES);
    classes.dividerClasses = clsx(classes.dividerClasses, DISABLED_DIVIDER_CLASSES);
    return classes;
  }

  classes.buttonClasses = clsx(
    classes.buttonClasses,
    ENABLED_BUTTON_CLASSES,
    HOVER_BUTTON_CLASSSES,
    ACTIVE_BUTTON_CLASSSES,
    ENABLED_CHECKED_BUTTON_CLASSES,
  );
  classes.dividerClasses = clsx(classes.dividerClasses, ENABLED_DIVIDER_CLASSES);
  return classes;
};
