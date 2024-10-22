/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import StdButton from '@common/base/stdButton/StdButton';
import { useNavigate } from 'react-router-dom';
import StdDropdown, { StdDropdownOption } from '../stdDropdown/StdDropdown';
import StdFloatingWrapper from '../stdFloatingWrapper/StdFloatingWrapper';
import BreadcrumbSeparator from './StdBreadcrumbSeparator';
import LinearBreadcrumb from './StdLinearBreadcrumb';

export type BreadcrumbItem = {
  key: string;
  label: string;
  target: string;
  id?: string;
};

type StdBreadcrumbProps = {
  items: BreadcrumbItem[];
  id?: string;
};

const { Trigger, Element } = StdFloatingWrapper;

const StdBreadcrumb = ({ items, id: propsId }: StdBreadcrumbProps) => {
  const navigate = useNavigate();

  const id = useStdId('breadcrumb', propsId);

  if (items.length <= 3) {
    return (
      <div id={id} className="flex gap-0.5 align-middle">
        <LinearBreadcrumb items={items} />
      </div>
    );
  }

  const extraItems: StdDropdownOption[] = items.slice(0, -2).map((item) => ({
    id: item.id,
    key: item.key,
    label: item.label,
    value: item.label,
    onItemClick: () => navigate(item.target),
  }));

  return (
    <div id={id} className="flex items-center align-middle">
      <StdFloatingWrapper placement="bottom-start" autoClose offset={3}>
        <Trigger>
          <div className="flex items-center">
            <StdButton variant="transparent" size="small" color="secondary" icon={StdIconId.MoreHoriz} />
          </div>
        </Trigger>
        <Element>
          <StdDropdown items={extraItems} />
        </Element>
      </StdFloatingWrapper>
      <BreadcrumbSeparator />
      <LinearBreadcrumb items={items.slice(-2)} />
    </div>
  );
};

export default StdBreadcrumb;
