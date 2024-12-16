/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { TailwindColorClass } from '@/types/TailwindColorClass.type.ts';
import { buildColorClass } from '@/utils/index.ts';
import { HeaderStyleConfig, ItemStyleConfig } from './navbar.type.tsx';

export const NAVBAR_BASE_CLASSES =
  'flex flex-col border-r text-left gap-2 h-screen transition-all ease-out duration-300';

export const NAVBAR_COLOR_CLASSES = {
  classic: 'bg-gray-50 border-gray-300',
  imagrid: 'bg-primary-950 border-gray-200 text-gray-50',
};

export const NAVBAR_EXPANDED_CLASSES = 'w-28 px-1';
export const NAVBAR_COLLAPSED_CLASSES = 'w-8 items-center';

const NO_PREFIX = '';
export const DEFAULT_BACKGROUND_CONFIG: ItemStyleConfig = {
  [NO_PREFIX]: 'gray-50',
  hover: 'gray-200',
  active: 'gray-300',
  'aria-selected': 'gray-300',
} as const;

export const DEFAULT_CONTENT_CONFIG: ItemStyleConfig = {
  [NO_PREFIX]: 'gray-700',
  hover: 'gray-900',
  active: 'gray-900',
  'aria-selected': 'gray-900',
} as const;

export const DEFAULT_SEPARATOR_COLOR: TailwindColorClass = 'gray-300';

export const DEFAULT_TEXT_COLOR = 'gray-900';

export const navbarClassBuilder = (
  expanded: boolean,
  backgroundColor?: TailwindColorClass,
  separatorColor?: TailwindColorClass,
  textColor?: TailwindColorClass,
) =>
  clsx(
    NAVBAR_BASE_CLASSES,
    buildColorClass('text', { [NO_PREFIX]: textColor || DEFAULT_TEXT_COLOR }),
    buildColorClass('bg', { [NO_PREFIX]: backgroundColor || DEFAULT_CONTENT_CONFIG[NO_PREFIX] }),
    buildColorClass('border', { [NO_PREFIX]: separatorColor || DEFAULT_SEPARATOR_COLOR }),
    expanded ? NAVBAR_EXPANDED_CLASSES : NAVBAR_COLLAPSED_CLASSES,
  );

export const NAVBAR_ITEM_BASE_CLASSES =
  'rds-mx-1 rds-flex rds-items-center rds-gap-1 rds-truncate rds-rounded rds-p-1 rds-text-button-s rds-font-semibold';
export const NAVBAR_ITEM_FOCUS_CLASSES =
  'focus-visible:rds-outline focus-visible:rds-outline-1 focus-visible:rds-outline-offset-0';

export const NAVBAR_ITEM_COMMON_CLASSES = clsx(NAVBAR_ITEM_BASE_CLASSES, NAVBAR_ITEM_FOCUS_CLASSES);
export const NAVBAR_ITEM_COLLAPSED_CLASSES = 'rds-w-fit';

export const navbarItemClassBuilder = (
  selected: boolean,
  expanded: boolean,
  itemBackgroundConfig?: ItemStyleConfig,
  itemContentConfig?: ItemStyleConfig,
) => {
  const navbarItemStatusClasses = clsx(
    buildColorClass('bg', {
      [NO_PREFIX]: itemBackgroundConfig?.[NO_PREFIX] || DEFAULT_BACKGROUND_CONFIG[NO_PREFIX],
      hover: itemBackgroundConfig?.hover || DEFAULT_BACKGROUND_CONFIG.hover,
      active: itemBackgroundConfig?.active || DEFAULT_BACKGROUND_CONFIG.active,
    }),
    buildColorClass('text', {
      hover: itemContentConfig?.hover || DEFAULT_CONTENT_CONFIG.hover,
      active: itemContentConfig?.active || DEFAULT_CONTENT_CONFIG.active,
    }),
  );

  const navbarItemFocusExtraClasses = buildColorClass('outline', {
    'focus-visible': itemContentConfig?.hover || DEFAULT_CONTENT_CONFIG.hover,
  });

  const navbarItemBaseClasses = clsx(NAVBAR_ITEM_COMMON_CLASSES, navbarItemStatusClasses, navbarItemFocusExtraClasses);
  const expandedClasses = !expanded ? NAVBAR_ITEM_COLLAPSED_CLASSES : '';

  if (selected) {
    return clsx(
      navbarItemBaseClasses,
      expandedClasses,
      buildColorClass('bg', {
        '[&]:': itemBackgroundConfig?.['aria-selected'] || DEFAULT_BACKGROUND_CONFIG['aria-selected'],
      }),
      buildColorClass('text', {
        '[&]:': itemContentConfig?.['aria-selected'] || DEFAULT_CONTENT_CONFIG['aria-selected'],
      }),
    );
  }

  return clsx(navbarItemBaseClasses, expandedClasses);
};

export const NAVBAR_CONTROLLER_BASE_CLASSES = 'cursor-pointer mb-2';

export const navbarControllerClassBuilder = (
  expanded: boolean,
  itemBackgroundConfig?: ItemStyleConfig,
  itemContentConfig?: ItemStyleConfig,
) =>
  clsx(
    navbarItemClassBuilder(false, expanded, itemBackgroundConfig, itemContentConfig),
    NAVBAR_CONTROLLER_BASE_CLASSES,
  );

export const TWO_LETTERS_CLASSES = 'rds-rounded rds-px-0.75 rds-py-0.5 rds-text-body-xs rds-font-semibold';
export const VERSIONS_CLASSES = {
  text: 'rds-text-heading-xs',
  logo: 'rds-self-end rds-text-heading-xs',
} as const;

export const DEFAULT_TWO_LETTERS_BACKGROUND = 'primary-600';
export const DEFAULT_TWO_LETTERS_TEXT = 'gray-w';

export const navbarHeaderClassBuilder = (headerConfig: HeaderStyleConfig) => {
  if (headerConfig.variant === 'text') {
    return {
      twoLettersClasses: clsx(
        TWO_LETTERS_CLASSES,
        buildColorClass('bg', { [NO_PREFIX]: headerConfig.twoLettersBackground || DEFAULT_TWO_LETTERS_BACKGROUND }),
        buildColorClass('text', { [NO_PREFIX]: headerConfig.twoLettersColor || DEFAULT_TWO_LETTERS_TEXT }),
      ),
      versionClasses: clsx(
        VERSIONS_CLASSES[headerConfig.variant],
        buildColorClass('text', { [NO_PREFIX]: headerConfig.versionTextColor }),
      ),
    };
  }
  return {
    versionClasses: clsx(
      VERSIONS_CLASSES[headerConfig.variant],
      buildColorClass('text', { [NO_PREFIX]: headerConfig.versionTextColor }),
    ),
  };
};
