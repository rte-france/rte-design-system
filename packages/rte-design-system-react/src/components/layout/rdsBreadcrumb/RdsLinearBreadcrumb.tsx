/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { BreadcrumbItem } from './RdsBreadcrumb.tsx';
import { RdsBreadcrumbItem } from './RdsBreadcrumbItem.tsx';
import { RdsBreadcrumbSeparator } from './RdsBreadcrumbSeparator.tsx';

export const RdsLinearBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) =>
  items.map((item, index) => (
    <div key={item.key} className="flex gap-0.5 align-middle">
      {index ? <RdsBreadcrumbSeparator /> : ''}
      <RdsBreadcrumbItem label={item.label} target={item.target} id={item.id} />
    </div>
  ));
