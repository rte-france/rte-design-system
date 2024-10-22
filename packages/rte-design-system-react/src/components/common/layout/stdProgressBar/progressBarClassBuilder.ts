/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { ProgressBarCounterPlacement, ProgressBarState } from './StdProgressBar';

export const CONTAINER_CLASSES =
  'items-center w-20 h-7 p-0.5 grid grid-rows-progress-bar-rows grid-cols-progress-bar-columns';
export const LABEL_CLASSES = 'h-2.5 text-body-s text-left';
export const CONTAINER_PROGRESS_BAR_CLASSES = 'h-1 rounded-full bg-gray-300 p-0.25';
export const PROGRESS_BAR_CLASSES = 'rounded-full h-0.5';
export const ERROR_LABEL_CLASSES = 'h-2.5 text-body-s text-left text-error-600';
export const PROGRESS_PERCENTAGE_CLASSES = 'h-2.5 text-body-s text-right';

export const STATE_CLASSES = {
  default: {
    text: 'text-secondary-900',
    color: 'bg-primary-500',
    errorLabel: 'collapse',
  },
  success: {
    text: 'text-success-600',
    color: 'bg-success-600',
    errorLabel: 'collapse',
  },
  error: {
    text: 'text-error-600',
    color: 'bg-error-600',
    errorLabel: '',
  },
};

export const PLACEMENT_CLASSES = {
  bottom: {
    label: 'col-start-1 col-end-3',
    icon: 'col-start-3 col-end-4',
    progressBar: 'col-start-1 col-end-4',
    error: 'col-start-1 col-end-3',
    progress: 'col-start-3 col-end-4',
  },
  none: {
    label: 'col-start-1 col-end-3',
    icon: 'col-start-3 col-end-4',
    progressBar: 'col-start-1 col-end-4',
    error: 'col-start-1 col-end-3',
    progress: 'hidden',
  },
  right: {
    label: 'col-start-1 col-end-4',
    icon: 'col-start-2 col-end-3 row-start-2 row-end-3',
    progressBar: 'col-start-1 col-end-2 row-start-2 row-end-3',
    error: 'col-start-1 col-end-3',
    progress: 'col-start-3 col-end-4 row-start-2 row-end-3',
  },
};

export const progressBarClassBuilder = (state: ProgressBarState, placement: ProgressBarCounterPlacement) => ({
  containerClasses: CONTAINER_CLASSES,
  labelClasses: clsx(LABEL_CLASSES, PLACEMENT_CLASSES[placement].label),
  containerIconClasses: PLACEMENT_CLASSES[placement].icon,
  containerProgressBarClasses: clsx(CONTAINER_PROGRESS_BAR_CLASSES, PLACEMENT_CLASSES[placement].progressBar),
  progressBarClasses: clsx(PROGRESS_BAR_CLASSES, STATE_CLASSES[state].color),
  errorLabelClasses: clsx(ERROR_LABEL_CLASSES, PLACEMENT_CLASSES[placement].error, STATE_CLASSES[state].errorLabel),
  progressPercentageClasses: clsx(
    PROGRESS_PERCENTAGE_CLASSES,
    STATE_CLASSES[state].text,
    PLACEMENT_CLASSES[placement].progress,
  ),
});
