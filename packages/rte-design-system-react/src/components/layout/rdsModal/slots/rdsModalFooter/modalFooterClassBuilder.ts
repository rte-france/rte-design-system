/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const CONTAINER_CLASSES =
  'rds-flex rds-min-w-full rds-max-w-fit rds-flex-col rds-gap-2 rds-self-end rds-px-2 rds-pb-2';

export const CHILDREN_CLASSES = 'rds-flex rds-flex-wrap rds-justify-end rds-gap-2';

export const INFO_CLASSES = 'rds-flex rds-items-center rds-justify-end rds-gap-1 rds-text-caption rds-text-gray-600';

export default function modalFooterClassBuilder() {
  return {
    containerClasses: CONTAINER_CLASSES,
    childrenClasses: CHILDREN_CLASSES,
    infoClasses: INFO_CLASSES,
  };
}
