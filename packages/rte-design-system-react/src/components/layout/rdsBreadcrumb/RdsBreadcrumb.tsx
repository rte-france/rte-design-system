/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsFloatingWrapper } from '../rdsFloatingWrapper/RdsFloatingWrapper.tsx';
import { useRdsId } from '@/hooks/index.ts';
import { RdsLinearBreadcrumb } from './RdsLinearBreadcrumb.tsx';
import { RdsDropdown, RdsDropdownOption } from '../rdsDropdown/RdsDropdown.tsx';
import { RdsButton } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import { RdsBreadcrumbSeparator } from './RdsBreadcrumbSeparator.tsx';

export type BreadcrumbItem = {
  key: string;
  label: string;
  target: string;
  id?: string;
};

type RdsBreadcrumbProps = {
  items: BreadcrumbItem[];
  id?: string;
};

const { Trigger, Element } = RdsFloatingWrapper;

export const RdsBreadcrumb = ({ items, id: propsId }: RdsBreadcrumbProps) => {
  // const navigate = useNavigate();

  const id = useRdsId('breadcrumb', propsId);

  if (items.length <= 3) {
    return (
      <div id={id} className="rds-flex rds-gap-0.5 rds-align-middle">
        <RdsLinearBreadcrumb items={items} />
      </div>
    );
  }

  const extraItems: RdsDropdownOption[] = items.slice(0, -2).map((item) => ({
    id: item.id,
    key: item.key,
    label: item.label,
    value: item.label,
    onItemClick: () => {}, //navigate(item.target),
  }));

  return (
    <div id={id} className="rds-flex rds-items-center rds-align-middle">
      <RdsFloatingWrapper placement="bottom-start" autoClose offset={3}>
        <Trigger>
          <div className="rds-flex rds-items-center">
            <RdsButton variant="transparent" size="small" color="secondary" icon={RdsIconId.MoreHoriz} />
          </div>
        </Trigger>
        <Element>
          <RdsDropdown items={extraItems} />
        </Element>
      </RdsFloatingWrapper>
      <RdsBreadcrumbSeparator />
      <RdsLinearBreadcrumb items={items.slice(-2)} />
    </div>
  );
};
