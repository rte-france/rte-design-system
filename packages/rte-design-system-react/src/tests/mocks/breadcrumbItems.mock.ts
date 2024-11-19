/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { BreadcrumbItem } from '@/components/layout/rdsBreadcrumb/RdsBreadcrumb.tsx';

export const generateFakeBreadcrumb = (size: number): BreadcrumbItem[] =>
  Array.from({ length: size }, (_, idx) => ({ key: `item-${idx}`, label: `Item Label ${idx}`, target: '/' }));
