/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { MouseEventHandler } from 'react';
import RdsDropdownItem from './subComponents/RdsDropdownItem.tsx';
import { useRdsId } from '@/hooks/index.ts';
import { RdsIconProps } from '@/components/base/index.ts';

export type RdsDropdownOption = {
  id?: string;
  key: string;
  label: string;
  value: string;
  onItemClick: MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
  icon?: RdsIconProps['name'];
  extraClasses?: string;
};

export type RdsDropdownProps = {
  id?: string;
  items: RdsDropdownOption[];
  header?: React.ReactNode;
  emptyDropdownItem?: React.ReactNode;
  footer?: React.ReactNode;
  selected?: Set<string>;
  isMultiple?: boolean;
};

const WRAPPER_CLASSES =
  'rds-shadow-4 rds-max-h-28 rds-flex rds-flex-col rds-rounded rds-border rds-shadow-black rds-drop-shadow-sm rds-bg-gray-w';
const ITEMS_WRAPPER_CLASSES = 'rds-py-0.5 rds-grow rds-overflow-y-auto rds-ig-scrollbar';

export const RdsDropdown = ({
  items,
  selected,
  header,
  emptyDropdownItem,
  footer,
  isMultiple,
  id: propsId,
}: RdsDropdownProps) => {
  const dropdownId = useRdsId('dropdown', propsId);

  const optionItems = !items.length
    ? emptyDropdownItem
    : items.map(({ key, label, value, disabled, icon, onItemClick, extraClasses, id }) => (
        <RdsDropdownItem
          id={id}
          key={key}
          label={label}
          value={value}
          disabled={disabled}
          active={selected && selected.has(value)}
          icon={icon}
          onClick={onItemClick}
          extraClasses={extraClasses}
        />
      ));

  return (
    <div className={WRAPPER_CLASSES} role={isMultiple ? 'combobox' : undefined} id={dropdownId}>
      {header && (
        <>
          {header}
          <hr className="border-gray-300" />
        </>
      )}
      <div className={ITEMS_WRAPPER_CLASSES} role="listbox" tabIndex={-1}>
        {optionItems}
      </div>
      {footer && (
        <>
          <hr className="border-gray-300" />
          {footer}
        </>
      )}
    </div>
  );
};
