/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import { MouseEvent } from 'react';

export const joinId = (content: string | StdIconId) => content.split(' ').join('-');

export const getToggleFocusHandlers = (setState: React.Dispatch<React.SetStateAction<boolean>>) => ({
  onFocus: () => {
    setState(true);
  },
  onClick: (event: MouseEvent<HTMLInputElement>) => {
    if (event.clientX !== 0 && event.clientY !== 0) {
      setState(false);
    }
  },
  onBlur: () => {
    setState(false);
  },
});
