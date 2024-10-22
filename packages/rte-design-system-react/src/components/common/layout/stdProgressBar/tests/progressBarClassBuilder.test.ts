/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { ProgressBarState, ProgressBarCounterPlacement } from '../StdProgressBar';
import {
  CONTAINER_CLASSES,
  LABEL_CLASSES,
  CONTAINER_PROGRESS_BAR_CLASSES,
  PROGRESS_BAR_CLASSES,
  ERROR_LABEL_CLASSES,
  PROGRESS_PERCENTAGE_CLASSES,
  STATE_CLASSES,
  PLACEMENT_CLASSES,
  progressBarClassBuilder,
} from '../progressBarClassBuilder';

describe('progressBarClassBuilder', () => {
  it('should include default classes', () => {
    (Object.keys(STATE_CLASSES) as ProgressBarState[]).forEach((state) => {
      (Object.keys(PLACEMENT_CLASSES) as ProgressBarCounterPlacement[]).forEach((placement) => {
        expect(progressBarClassBuilder(state, placement).containerClasses.includes(CONTAINER_CLASSES)).toBe(true);
        expect(progressBarClassBuilder(state, placement).labelClasses.includes(LABEL_CLASSES)).toBe(true);
        expect(
          progressBarClassBuilder(state, placement).containerProgressBarClasses.includes(
            CONTAINER_PROGRESS_BAR_CLASSES,
          ),
        ).toBe(true);
        expect(progressBarClassBuilder(state, placement).progressBarClasses.includes(PROGRESS_BAR_CLASSES)).toBe(true);
        expect(progressBarClassBuilder(state, placement).errorLabelClasses.includes(ERROR_LABEL_CLASSES)).toBe(true);
        expect(
          progressBarClassBuilder(state, placement).progressPercentageClasses.includes(PROGRESS_PERCENTAGE_CLASSES),
        ).toBe(true);
      });
    });
  });
  it('should include the state classes', () => {
    (Object.keys(STATE_CLASSES) as ProgressBarState[]).forEach((state) => {
      (Object.keys(PLACEMENT_CLASSES) as ProgressBarCounterPlacement[]).forEach((placement) => {
        const classBuilderResult = progressBarClassBuilder(state, placement);
        expect(classBuilderResult.progressBarClasses.includes(STATE_CLASSES[state].color)).toBe(true);
        expect(classBuilderResult.errorLabelClasses.includes(STATE_CLASSES[state].errorLabel)).toBe(true);
        expect(classBuilderResult.progressPercentageClasses.includes(STATE_CLASSES[state].text)).toBe(true);
      });
    });
  });
  it('should include the placement classes', () => {
    (Object.keys(STATE_CLASSES) as ProgressBarState[]).forEach((state) => {
      (Object.keys(PLACEMENT_CLASSES) as ProgressBarCounterPlacement[]).forEach((placement) => {
        const classBuilderResult = progressBarClassBuilder(state, placement);
        expect(classBuilderResult.labelClasses.includes(PLACEMENT_CLASSES[placement].label)).toBe(true);
        expect(classBuilderResult.containerIconClasses.includes(PLACEMENT_CLASSES[placement].icon)).toBe(true);
        expect(classBuilderResult.containerProgressBarClasses.includes(PLACEMENT_CLASSES[placement].progressBar)).toBe(
          true,
        );
        expect(classBuilderResult.errorLabelClasses.includes(PLACEMENT_CLASSES[placement].error)).toBe(true);
        expect(classBuilderResult.progressPercentageClasses.includes(PLACEMENT_CLASSES[placement].progress)).toBe(true);
      });
    });
  });
});
