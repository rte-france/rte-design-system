/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import type { ButtonColor, ButtonSize, ButtonVariant } from './RdsButton.tsx';
import { buildTailwindClasses } from '@/utils/index.ts';

export const COMMON_CLASSES =
  'rds-rounded rds-font-semibold rds-text-center rds-inline-flex rds-flex-row rds-items-center';

export const SIZE_CLASSES = {
  extraSmall: 'rds-px-0.25 rds-text-button-xs',
  small: 'rds-px-0.5 rds-py-0.25 rds-text-button-s',
  medium: 'rds-px-1 rds-py-0.75 rds-text-button-s',
};
export const SINGLE_ICON_CLASSES = {
  extraSmall: '[&]:rds-px-0 [&]:rds-py-0',
  small: '[&]:rds-px-0.25',
  medium: '[&]:rds-px-0.75',
};

export const FOCUS_CLASSES = {
  primary: buildTailwindClasses('outline', { focus: ['', '-1', 'offset-2', 'primary-900'] }),
  secondary: buildTailwindClasses('outline', { focus: ['', '-1', 'offset-2', 'gray-900'] }),
  danger: buildTailwindClasses('outline', { focus: ['', '-1', 'offset-2', 'gray-900'] }),
};
//stand for rds-outline | rds-outline-1 | rds-outline-offset-2 | rds-outline-primary-900 | rds-outline-gray-900

export const VARIANT_CLASSES = {
  primary: {
    contained: [
      buildTailwindClasses('bg', { '': ['primary-600'], hover: ['primary-700'], active: ['primary-800'] }),
      buildTailwindClasses('border', { '': ['', 'primary-600', 'opacity-0'] }),
      buildTailwindClasses('text', { '': ['gray-w'] }),
    ],
    //stand for rds-bg-primary-600 | hover:rds-bg-primary-700 | active:rds-bg-primary-800 | rds-border |
    //rds-border-primary-600 | rds-border-opacity-0 | rds-text-gray-w
    outlined: [
      buildTailwindClasses('bg', { '': ['gray-w'], hover: ['primary-50'], active: ['primary-100'] }),
      buildTailwindClasses('border', { '': ['', 'primary-600'] }),
      buildTailwindClasses('text', { '': ['primary-600'] }),
    ],
    //add rds-bg-gray-w | hover:rds-bg-primary-50 | active:rds-bg-primary-100 | rds-border-primary-600 | rds-text-primary-600
    dashed: [
      buildTailwindClasses('bg', { '': ['transparent'], hover: ['primary-50'], active: ['primary-100'] }),
      buildTailwindClasses('border', { '': ['', 'dashed', 'primary-600'] }),
      buildTailwindClasses('text', { '': ['primary-600'] }),
    ],
    //add rds-bg-transparent |rds-border-dashed
    text: [
      buildTailwindClasses('bg', { '': ['transparent'], hover: ['primary-50'], active: ['primary-100'] }),
      buildTailwindClasses('border', { '': ['', 'opacity-0', 'primary-600'] }),
      buildTailwindClasses('text', { '': ['primary-600'] }),
    ],
    //add rds-border-opacity-0
    transparent: [
      buildTailwindClasses('bg', { '': ['transparent'] }),
      buildTailwindClasses('border', { '': ['', 'transparent'] }),
      buildTailwindClasses('text', { '': ['primary-600'], hover: ['primary-700'], active: ['primary-900'] }),
    ],
    //add rds-border-transparent | hover:rds-text-primary-700 | active:rds-text-primary-900
  },
  secondary: {
    contained: [
      buildTailwindClasses('bg', { '': ['gray-200'], hover: ['gray-300'], active: ['gray-400'] }),
      buildTailwindClasses('border', { '': ['', 'gray-200', 'opacity-0'] }),
    ],
    //add rds-bg-gray-200 | hover:rds-bg-gray-300 | active:rds-bg-gray-400 | rds-border-gray-200
    outlined: [
      buildTailwindClasses('bg', { '': ['gray-w'], hover: ['gray-50'], active: ['gray-100'] }),
      buildTailwindClasses('border', { '': ['', 'gray-600'] }),
      buildTailwindClasses('text', { '': ['gray-600'] }),
    ],
    //add rds-bg-gray-w | hover:rds-bg-gray-50 | active:rds-bg-gray-100 | rds-border-gray-600 | rds-text-gray-600
    dashed: [
      buildTailwindClasses('bg', { '': ['transparent'], hover: ['gray-50'], active: ['gray-100'] }),
      buildTailwindClasses('border', { '': ['', 'dashed', 'gray-600'] }),
      buildTailwindClasses('text', { '': ['gray-600'] }),
    ],
    //add rds-bg-transparent | rds-border-dashed
    text: [
      buildTailwindClasses('bg', { '': ['transparent'], hover: ['gray-50'], active: ['gray-100'] }),
      buildTailwindClasses('border', { '': ['', 'opacity-0', 'gray-200'] }),
      buildTailwindClasses('text', { '': ['gray-600'] }),
    ],
    //add rds-border-opacity-0
    transparent: [
      buildTailwindClasses('bg', { '': ['transparent'] }),
      buildTailwindClasses('border', { '': ['', 'transparent'] }),
      buildTailwindClasses('text', { '': ['gray-900'], hover: ['gray-700'], active: ['gray-600'] }),
    ],
    //add hover:rds-text-gray-700 | active:rds-text-gray-600
  },
  danger: {
    contained: [
      buildTailwindClasses('bg', { '': ['error-700'], hover: ['error-800'], active: ['error-900'] }),
      buildTailwindClasses('border', { '': ['', 'opacity-0', 'gray-200'] }),
    ],
    outlined: [
      buildTailwindClasses('bg', { '': ['gray-w'], hover: ['error-50'], active: ['error-100'] }),
      buildTailwindClasses('border', { '': ['', 'error-700'] }),
    ],
    dashed: [
      buildTailwindClasses('bg', { '': ['gray-w'], hover: ['error-50'], active: ['error-100'] }),
      buildTailwindClasses('border', { '': ['', 'dashed', 'error-700'] }),
      buildTailwindClasses('text', { '': ['error-700'] }),
    ],
    text: [
      buildTailwindClasses('bg', { '': ['transparent'], hover: ['error-50'], active: ['error-100'] }),
      buildTailwindClasses('border', { '': ['', 'opacity-0', 'error-700'] }),
      buildTailwindClasses('text', { '': ['error-700'] }),
    ],
    transparent: [
      buildTailwindClasses('bg', { '': ['transparent'], hover: ['gray-700'], active: ['gray-600'] }),
      buildTailwindClasses('border', { '': ['', 'transparent'] }),
      buildTailwindClasses('text', { '': ['gray-900'] }),
    ],
  },
};

export const VARIANT_CLASSES_COMMON_DISABLED = 'rds-border rds-cursor-not-allowed rds-pointer-events-none';
export const VARIANT_CLASSES_DISABLED = {
  contained: 'rds-bg-gray-200 rds-text-gray-500 rds-border-gray-500 rds-border-opacity-0',
  outlined: 'rds-bg-gray-200 text-gray-500 rds-border-gray-500',
  dashed: 'rds-bg-gray-200 text-gray-500 rds-border-dashed rds-border-gray-500',
  text: 'rds-bg-gray-200 text-gray-500 rds-border-gray-500 rds-border-opacity-0',
  transparent: 'rds-text-gray-500 rds-border-transparent',
};

export const LABEL_CLASSES_COMMON = 'rds-inline-flex rds-capitalize-first rds-line-clamp-1 rds-text-nowrap';
export const LABEL_CLASSES_PADDING_SIZE = {
  extraSmall: 'rds-px-0.25 rds-py-0.25',
  small: 'rds-px-0.5 rds-py-0.25',
  medium: 'rds-px-1 rds-py-0.25',
};

export const buttonClassBuilder = (
  variant: ButtonVariant,
  color: ButtonColor,
  size: ButtonSize,
  disabled: boolean,
  hasLabel: boolean,
): string => {
  const baseClasses = clsx(COMMON_CLASSES, !hasLabel && SINGLE_ICON_CLASSES[size], SIZE_CLASSES[size]);

  if (disabled) {
    return clsx(baseClasses, VARIANT_CLASSES_COMMON_DISABLED, VARIANT_CLASSES_DISABLED[variant]);
  }
  return clsx(baseClasses, VARIANT_CLASSES[color][variant], FOCUS_CLASSES[color]);
};

export function labelClassBuilder(size: ButtonSize) {
  return clsx(LABEL_CLASSES_COMMON, LABEL_CLASSES_PADDING_SIZE[size]);
}
