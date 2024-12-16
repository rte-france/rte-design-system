/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const MODAL_WRAPPER_CONTAINER_CLASSES =
  'rds-fixed rds-left-0 rds-top-0 rds-z-50 rds-flex rds-h-full rds-w-full rds-items-start rds-justify-center rds-overflow-auto rds-bg-gray-900/25';

export const MODAL_WRAPPER_SUB_CONTAINER_CLASSES =
  'rds-flex rds-min-h-full rds-min-w-full rds-items-center rds-justify-center rds-p-2';

export const MODAL_WRAPPER_MODAL_CLASSES = 'rds-rounded rds-bg-gray-w rds-shadow-4 rds-overflow-auto';

export default function modalWrapperClassBuilder() {
  return {
    containerClasses: MODAL_WRAPPER_CONTAINER_CLASSES,
    subContainerClasses: MODAL_WRAPPER_SUB_CONTAINER_CLASSES,
    modalClasses: MODAL_WRAPPER_MODAL_CLASSES,
  };
}
