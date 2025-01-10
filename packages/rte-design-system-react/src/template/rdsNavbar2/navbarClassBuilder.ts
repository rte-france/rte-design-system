/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import clsx from 'clsx';

export const NAVBAR_BASE_CLASSES = 'rds-flex rds-flex-col rds-gap-2  rds-h-screen rds-py-2 text-left';
export const NAVBAR_BASE_COLOR_CLASSES = 'rds-border-r rds-bg-navbar-background-lowest rds-text-navbar-text-default';
export const NAVBAR_BASE_TRANSITION_CLASSES = 'rds-transition-all rds-ease-out rds-duration-300';

export const NAVBAR_DISPLAY_EXPENDED_CLASSES = 'rds-max-w-28 rds-px-1';
export const NAVBAR_DISPLAY_COLLAPSE_CLASSES = 'rds-max-w-8 rds-px-0.5';

export const NAVBAR_BASE_TOP_CLASSES = 'rds-flex rds-flex-col rds-gap-2 rds-flex-grow';
export const navbarClassBuilder = (expended: boolean) => ({
  base: clsx(
    expended ? NAVBAR_DISPLAY_EXPENDED_CLASSES : NAVBAR_DISPLAY_COLLAPSE_CLASSES,
    NAVBAR_BASE_CLASSES,
    NAVBAR_BASE_COLOR_CLASSES,
    NAVBAR_BASE_TRANSITION_CLASSES,
  ),
  top: NAVBAR_BASE_TOP_CLASSES,
});

export const NAVBAR_ITEM_COMMON_CLASSES = 'rds-flex rds-flex-row';
export const NAVBAR_ITEM_EXPENDED_CLASSES = 'rds-gap-2 rds-p-1  rds-font-semibold';
export const NAVBAR_ITEM_COLLAPSE_CLASSES =
  'rds-gap-0 rds-p-0  rds-font-light rds-flex-wrap rds-items-center rds-justify-center';

export const NAVBAR_ITEM_BASE_CLASSES =
  'rds-flex rds-items-center rds-gap-1 rds-truncate rds-rounded rds-text-button-s';
export const NAVBAR_ITEM_FOCUS_CLASSES =
  'rds-outline-navbar-border-secondary focus-visible:rds-outline focus-visible:rds-outline-1 focus-visible:rds-outline-offset-0';
export const NAVBAR_ITEM_PRESSED_CLASSES = 'active:rds-bg-navbar-background-highest';
export const NAVBAR_ITEM_HOVER_CLASSES = 'hover:rds-bg-navbar-background-high';
export const NAVBAR_ITEM_DISABLE_CLASSES = 'rds-text-gray-700 rds-cursor-not-allowed rds-pointer-events-none';
export const NAVBAR_ITEM_ACTIVE_CLASSES = 'rds-border-l-2 rds-border-navbar-border-default';

export const navbarItemClassBuilder = (expended: boolean, active: boolean, disabled: boolean) =>
  clsx(
    NAVBAR_ITEM_COMMON_CLASSES,
    NAVBAR_ITEM_BASE_CLASSES,
    expended ? NAVBAR_ITEM_EXPENDED_CLASSES : NAVBAR_ITEM_COLLAPSE_CLASSES,
    active && NAVBAR_ITEM_ACTIVE_CLASSES,
    disabled
      ? NAVBAR_ITEM_DISABLE_CLASSES
      : [NAVBAR_ITEM_FOCUS_CLASSES, NAVBAR_ITEM_PRESSED_CLASSES, NAVBAR_ITEM_HOVER_CLASSES],
  );

export const NAVBAR_FOOTER_CLASSES = 'rds-flex rds-flex-row rds-gap-1';
export const navbarFooterClassBuilder = (expended: boolean) =>
  clsx(
    NAVBAR_FOOTER_CLASSES,
    NAVBAR_BASE_TRANSITION_CLASSES,
    expended ? NAVBAR_ITEM_EXPENDED_CLASSES : NAVBAR_ITEM_COLLAPSE_CLASSES,
  );
