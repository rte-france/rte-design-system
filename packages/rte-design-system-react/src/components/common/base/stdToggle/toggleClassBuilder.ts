/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const COMMON_FIELDSET_CLASSES =
  'group flex rounded-sm bg-gray-300 [&_label:first-of-type>.btn]:rounded-l-sm [&_label:last-of-type>.btn]:rounded-r-sm [&_label:last-of-type>div:last-of-type]:hidden';

export const FOCUS_FIELDSET_CLASSES = 'outline-1 outline-offset-2 outline-gray-900 outline';

export const INPUT_CLASSES = 'peer sr-only';

export const COMMON_BUTTON_CLASSES = 'h-2 btn box-content flex items-center gap-0.5 px-1 py-0.5 outline-1';

export const ENABLED_BUTTON_CLASSES = 'cursor-pointer text-gray-600';
export const DISABLED_BUTTON_CLASSES = '[&]:cursor-not-allowed bg-gray-200 text-gray-500';

export const HOVER_BUTTON_CLASSSES = 'hover:bg-gray-400 hover:text-gray-700 hover:peer-checked:text-gray-900';

export const ACTIVE_BUTTON_CLASSSES = 'active:bg-gray-500 active:text-gray-800 active:peer-checked:text-gray-900';

export const COMMON_CHECKED_BUTTON_CLASSES =
  'peer-checked:rounded-sm peer-checked:outline peer-checked:font-semibold peer-checked:z-10';

export const ENABLED_CHECKED_BUTTON_CLASSES =
  'peer-checked:cursor-default peer-checked:bg-gray-w peer-checked:text-gray-900 peer-checked:outline peer-checked:outline-gray-400';

export const DISABLED_CHECKED_BUTTON_CLASSES =
  'peer-checked:cursor-not-allowed peer-checked:bg-gray-100 peer-checked:outline-gray-300';

export const COMMON_DIVIDER_CLASSES = 'h-2.5 w-0.125 self-center rounded-full bg-gray-400';

export const ENABLED_DIVIDER_CLASSES = '[&]:cursor-pointer';
export const DISABLED_DIVIDER_CLASSES = '[&]:cursor-not-allowed';

export const TEXT_CLASSES =
  'text-center before:invisible before:block before:h-0 before:text-center before:font-semibold before:content-[attr(title)]';

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
