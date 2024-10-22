/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { BreadcrumbItem } from './StdBreadcrumb';
import StdBreadcrumbItem from './StdBreadcrumbItem';
import StdBreadcrumbSeparator from './StdBreadcrumbSeparator';

const StdLinearBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) =>
  items.map((item, index) => (
    <div key={item.key} className="flex gap-0.5 align-middle">
      {index ? <StdBreadcrumbSeparator /> : ''}
      <StdBreadcrumbItem label={item.label} target={item.target} id={item.id} />
    </div>
  ));

export default StdLinearBreadcrumb;
