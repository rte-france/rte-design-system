/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { SwitchSize } from './RdsSwitch.tsx';

export const COMMON_BG_CLASSES = 'rds-peer rds-bg-gray-300';

export const ENABLED_BG_CLASSES =
  'peer-checked:rds-bg-primary-600 group-hover:rds-bg-gray-400 group-hover:peer-checked:rds-bg-primary-700 group-active:rds-bg-gray-500 group-active:peer-checked:rds-bg-primary-800';
export const DISABLED_BG_CLASSES = 'rds-cursor-not-allowed peer-checked:rds-bg-primary-100';

export const BG_FOCUS_CLASSES =
  'peer-focus-visible:rds-outline peer-focus-visible:rds-outline-1 peer-focus-visible:rds-outline-offset-2 peer-focus-visible:rds-outline-gray-900 peer-focus-visible:peer-checked:rds-outline-primary-900';

const COMMON_LABEL_CLASSES = 'rds-group rds-relative rds-inline-flex rds-cursor-pointer rds-items-center';
const COMMON_INPUT_CLASSES = 'rds-peer rds-sr-only';

export const COMMON_SLIDE_CLASSES =
  'rds-peer rds-absolute rds-start-[-1px] rds-border-1 rds-box-content rds-border rds-bg-gray-w peer-checked:[&_div]:rds-visible rds-ease-out rds-duration-300 rds-transition-all';
export const ENABLED_SLIDE_UNCHECKED_CLASSES =
  'rds-border-gray-500 group-hover:rds-border-gray-600 group-active:rds-border-gray-700';
export const DISABLED_SLIDE_UNCHECKED_CLASSES = 'rds-border-gray-300 rds-bg-gray-100 rds-cursor-not-allowed';

export const ENABLED_SLIDE_CHECKED_CLASSES =
  'rds-text-primary-700 group-hover:peer-checked:rds-text-primary-800 group-active:peer-checked:rds-text-primary-900 group-hover:peer-checked:rds-border-primary-800 group-active:peer-checked:rds-border-primary-900 peer-checked:rds-border-primary-700';
export const DISABLED_SLIDE_CHECKED_CLASSES =
  'peer-checked:rds-border-primary-200 peer-checked:rds-text-primary-200 peer-checked:rds-bg-gray-w rds-cursor-not-allowed';

export const COMMON_CHECK_CONTAINER_CLASSES = 'rds-invisible rds-flex rds-justify-center rds-items-center';

export const BG_CLASSES = {
  small: 'rds-w-4 rds-h-1.5 rds-rounded',
  medium: 'rds-w-5 rds-h-2 rds-rounded-md',
};

export const SLIDE_CLASSES = {
  small:
    'rds-rounded peer-checked:rds-translate-x-2.5 rds-shadow-switch-unchecked-small peer-checked:rds-shadow-switch-checked-small',
  medium:
    'rds-rounded-md peer-checked:rds-translate-x-3 rds-shadow-switch-unchecked-medium peer-checked:rds-shadow-switch-checked-medium',
};

export const ICON_CONTAINER_CLASSES = {
  small: 'rds-w-1.5 rds-h-1.5',
  medium: 'rds-w-2 rds-h-2',
};

export const ICON_SIZE: Record<string, number> = {
  small: 12,
  medium: 16,
};

export const switchClassBuilder = (switchSize: SwitchSize, disabled?: boolean) => ({
  labelClasses: COMMON_LABEL_CLASSES,
  inputClasses: COMMON_INPUT_CLASSES,
  backgroundClasses: clsx(
    COMMON_BG_CLASSES,
    disabled ? DISABLED_BG_CLASSES : ENABLED_BG_CLASSES,
    disabled ? '' : BG_FOCUS_CLASSES,
    BG_CLASSES[switchSize],
  ),
  slideClasses: clsx(
    COMMON_SLIDE_CLASSES,
    disabled ? DISABLED_SLIDE_UNCHECKED_CLASSES : ENABLED_SLIDE_UNCHECKED_CLASSES,
    disabled ? DISABLED_SLIDE_CHECKED_CLASSES : ENABLED_SLIDE_CHECKED_CLASSES,
    SLIDE_CLASSES[switchSize],
  ),
  iconContainerClasses: clsx(COMMON_CHECK_CONTAINER_CLASSES, ICON_CONTAINER_CLASSES[switchSize]),
  iconSize: ICON_SIZE[switchSize],
});
