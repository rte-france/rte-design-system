/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsFloatingWrapper } from '@/components/layout/index.ts';
import { useRdsId } from '@/hooks/index.ts';
import { paginationControlClassBuilder } from './paginationControlClassBuilder.ts';
import { RdsDropdown, RdsDropdownOption } from '@/components/layout/rdsDropdown/RdsDropdown.tsx';
import RdsSelect from '@/components/forms/rdsSelect/RdsSelect.tsx';

export type PaginationControlSize = 'medium' | 'small';

export type RdsPaginationControlProps = {
  id?: string;
  label: string;
  size?: PaginationControlSize;
  options: number[];
  selectedOption: number;
  onChange: (option: number) => void;
};

const { Trigger, Element } = RdsFloatingWrapper;

const RdsPaginationControl = ({
  id: propsId,
  label,
  options,
  size = 'medium',
  selectedOption,
  onChange,
}: RdsPaginationControlProps) => {
  const id = useRdsId('pagination-control', propsId);
  const { mainClasses, labelClasses } = paginationControlClassBuilder(size);

  const dropdownItems: RdsDropdownOption[] = options.map((option) => ({
    key: `${option}`,
    label: `${option}`,
    value: `${option}`,
    onItemClick: () => {
      onChange(option);
    },
  }));

  return (
    <div className={mainClasses} id={id} role="listbox">
      <label className={labelClasses}>{label}</label>
      <RdsFloatingWrapper fitWidth>
        <Trigger>
          <RdsSelect displayValue={`${selectedOption}`} clearable={false} size={size} id={`${id}-select`} />
        </Trigger>
        <Element>
          <RdsDropdown items={dropdownItems} id={`${id}-dropdown`} />
        </Element>
      </RdsFloatingWrapper>
    </div>
  );
};

export default RdsPaginationControl;
