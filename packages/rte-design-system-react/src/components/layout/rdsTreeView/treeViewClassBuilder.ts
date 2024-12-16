/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const ACTIVATE = 'rds-bg-primary-100';
export const TREE_CONTAINER_CLASSES =
  'rds-flex rds-h-full rds-w-full rds-flex-row rds-items-center rds-pl-0.5 hover:rds-bg-gray-100';
export const RENDER_CONTAINER_FOCUSABLE =
  'rds-rounded focus-visible:rds-z-10 focus-visible:rds-outline focus-visible:rds-outline-1';
export const COLLAPSE_CONTAINER_CLASSES = 'rds-absolute rds-h-4 rds-w-2 rds-items-center rds-py-0.75 -rds-ml-0.125';

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
