/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const RENDER_CONTAINER = 'ml-0.5 mr-0.5 flex h-full w-full items-center ';
export const RENDER_CHECKBOX_CONTAINER = 'mr-0.5 flex h-4 flex-auto justify-between';
export const RENDER_CHECKBOX_INPUT = 'place-content-end';

export const RENDER_FOCUSABLE =
  'cursor-pointer focus-visible:rounded focus-visible:z-10 focus-visible:outline focus-visible:outline-1';

export const renderIconLabelClassBuilder = () => ({ container: clsx(RENDER_CONTAINER, RENDER_FOCUSABLE) });
export const renderLabelClassBuilder = () => ({ container: clsx(RENDER_CONTAINER, RENDER_FOCUSABLE) });

export const renderCheckboxClassBuilder = () => ({
  container: RENDER_CHECKBOX_CONTAINER,
  input: clsx(RENDER_CHECKBOX_INPUT, RENDER_FOCUSABLE),
});
