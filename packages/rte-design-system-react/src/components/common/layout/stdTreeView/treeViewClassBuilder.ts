/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const ACTIVATE = 'bg-primary-100';
export const TREE_CONTAINER_CLASSES = 'flex h-full w-full flex-row items-center pl-0.5 hover:bg-gray-100';
export const RENDER_CONTAINER_FOCUSABLE = 'rounded focus-visible:z-10 focus-visible:outline focus-visible:outline-1';
export const COLLAPSE_CONTAINER_CLASSES = 'absolute h-4 w-2 items-center py-0.75 -ml-0.125';

export const treeItemContainerClassBuilder = (isActive?: boolean) => {
  const className = {
    container: clsx(TREE_CONTAINER_CLASSES, RENDER_CONTAINER_FOCUSABLE),
  };
  if (isActive) {
    className.container = clsx(className.container, ACTIVATE);
  }
  return className;
};

export const treeCollaplseIconClassBuilder = () => ({
  container: COLLAPSE_CONTAINER_CLASSES,
});
