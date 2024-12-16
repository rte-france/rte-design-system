/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { TabItemType } from './RdsTabItem.tsx';
import { RdsIconIdKey } from '@/utils/index.ts';

export const TAB_COMMON_CONTENT_CONTAINER_CLASSES =
  'rds-h-5 rds-peer rds-inline-flex rds-select-none rds-items-center rds-gap-1 rds-text-button-s';

export const TAB_CONTENT_CONTAINER_CLASSES = {
  primary: 'rds-rounded-t',
  secondary: 'rds-rounded',
};

export const TAB_COMMON_BORDER_CLASSES = 'rds-h-0.25';

export const TAB_BORDER_CLASSES = {
  active: 'rds-bg-primary-600',
  inactive: 'rds-bg-gray-300 peer-hover:rds-bg-primary-600 peer-active:rds-bg-primary-900',
  disabled: 'rds-bg-gray-300',
};

export const TAB_KEYBOARD_BORDER_ACTIVE_CLASSES = 'rds-bg-primary-900';

export const TAB_ENABLED_CLASSES =
  'rds-outline-0 focus-visible:rds-ring-inset focus-visible:rds-ring-gray-900 focus-visible:rds-ring-1 focus:rds-z-10';

export const TAB_ACTIVE_CLASSES = {
  active: 'rds-text-primary-600 rds-border-b-primary-600',
  inactive:
    'hover:rds-bg-primary-50 hover:rds-text-primary-600 active:rds-bg-primary-100 active:rds-text-primary-900 hover:rds-cursor-pointer',
};

export const TAB_KEYBOARD_ACTIVE_CLASSES = 'rds-bg-primary-100 rds-text-primary-900';

export const TAB_DISABLED_CLASSES = '[&]:rds-cursor-not-allowed [&]:rds-text-gray-400';

export const TAB_PADDING_X = {
  paddingWithIcon: 'rds-px-3',
  paddingWithText: 'rds-px-2',
};

export const TAB_PADDING_Y = {
  primary: 'rds-py-1.5',
  secondary: 'rds-py-1',
};

const paddingTab = (tabType: TabItemType, icon?: RdsIconIdKey) => {
  const paddingX = icon ? TAB_PADDING_X.paddingWithIcon : TAB_PADDING_X.paddingWithText;
  const paddingY = TAB_PADDING_Y[tabType];

  return clsx(paddingX, paddingY);
};

export const tabItemClassBuilder = (
  tabType: TabItemType,
  keyboardActive: boolean,
  icon?: RdsIconIdKey,
  active?: boolean,
  disabled?: boolean,
) => {
  const classes = {
    contentContainerClasses: clsx(
      TAB_COMMON_CONTENT_CONTAINER_CLASSES,
      TAB_CONTENT_CONTAINER_CLASSES[tabType],
      paddingTab(tabType, icon),
    ),
    borderClasses: TAB_COMMON_BORDER_CLASSES,
  };

  if (disabled) {
    classes.contentContainerClasses = clsx(classes.contentContainerClasses, TAB_DISABLED_CLASSES);
    classes.borderClasses = clsx(classes.borderClasses, TAB_BORDER_CLASSES.disabled);
    return classes;
  }

  classes.contentContainerClasses = clsx(
    classes.contentContainerClasses,
    disabled ? '' : TAB_ENABLED_CLASSES,
    active ? TAB_ACTIVE_CLASSES.active : TAB_ACTIVE_CLASSES.inactive,
    keyboardActive ? TAB_KEYBOARD_ACTIVE_CLASSES : '',
  );

  classes.borderClasses = clsx(
    classes.borderClasses,
    active ? TAB_BORDER_CLASSES.active : TAB_BORDER_CLASSES.inactive,
    keyboardActive && !active ? TAB_KEYBOARD_BORDER_ACTIVE_CLASSES : '',
  );

  return classes;
};

export const COMMON_LIST_BUTTON_CLASSES =
  'rds-flex rds-items-center rds-px-2 rds-absolute rds-h-full rds-bg-gray-w rds-z-10';

const showButtonTabs = (scrollValue: number, clientWidth?: number, scrollWidth?: number) => {
  if (!(clientWidth && scrollWidth)) {
    return { left: false, right: false };
  }

  return {
    left: scrollWidth > clientWidth && scrollValue > 0,
    right: scrollWidth > clientWidth && scrollValue + clientWidth < scrollWidth,
  };
};

export const PRIMARY_BORDER_BUTTON_CLASSES = 'rds-border-gray-300 rds-border-b-2';

export const tabListClassBuilder = (
  tabType: TabItemType,
  scrollValue: number,
  clientWidth?: number,
  scrollWidth?: number,
) => {
  const commonClasses = clsx(COMMON_LIST_BUTTON_CLASSES, tabType === 'primary' ? PRIMARY_BORDER_BUTTON_CLASSES : '');
  const classes = {
    buttonClasses: {
      left: commonClasses,
      right: commonClasses,
    },
  };
  classes.buttonClasses = {
    left: clsx(
      classes.buttonClasses.left,
      'rds-left-0',
      showButtonTabs(scrollValue, clientWidth, scrollWidth).left ? '' : 'rds-hidden',
    ),
    right: clsx(
      classes.buttonClasses.right,
      'rds-right-0',
      showButtonTabs(scrollValue, clientWidth, scrollWidth).right ? '' : 'rds-hidden',
    ),
  };
  return classes;
};
