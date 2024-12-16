/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { valueOf } from '@/types/Generic.type.ts';
import { SpacerType } from './TreeType.ts';

const ELEMENTS_WITH_NATIVE_BEHAVIOR = new Set(['INPUT', 'BUTTON']);

export const handleTreeKeyboardNavigation: (primaryAction: () => void) => React.KeyboardEventHandler<HTMLDivElement> =
  (primaryAction) => (event) => {
    if (ELEMENTS_WITH_NATIVE_BEHAVIOR.has((event.target as Element)?.tagName)) {
      // prevent the customised tree behavior for input/button target elements, use their native behavior
      return;
    }
    if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      primaryAction();
    } else if (event.key === 'ArrowDown') {
      const item = document.activeElement;
      if (item?.nextElementSibling) {
        (item.nextElementSibling as HTMLDivElement).focus();
      }
    } else if (event.key === 'ArrowUp') {
      const item = document.activeElement;
      if (item?.previousElementSibling) {
        (item.previousElementSibling as HTMLDivElement).focus();
      }
    }
    event.preventDefault();
    event.stopPropagation();
  };

export const updateSpacerWithIndex = (spacer: valueOf<typeof SpacerType>, isLastSpacer: boolean) => {
  if (isLastSpacer) return spacer;
  if (spacer === SpacerType.ItemWithSiblings) return SpacerType.Line;
  if (spacer === SpacerType.LastItem) return SpacerType.None;
  return spacer;
};
