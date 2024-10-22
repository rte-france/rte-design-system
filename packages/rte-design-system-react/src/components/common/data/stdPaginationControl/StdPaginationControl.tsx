/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import StdSelect from '../../forms/stdSelect/StdSelect';
import StdDropdown, { StdDropdownOption } from '../../layout/stdDropdown/StdDropdown';
import StdFloatingWrapper from '../../layout/stdFloatingWrapper/StdFloatingWrapper';
import { paginationControlClassBuilder } from './paginationControlClassBuilder';

export type PaginationControlSize = 'medium' | 'small';

export type StdPaginationControlProps = {
  id?: string;
  label: string;
  size?: PaginationControlSize;
  options: number[];
  selectedOption: number;
  onChange: (option: number) => void;
};

const { Trigger, Element } = StdFloatingWrapper;

const StdPaginationControl = ({
  id: propsId,
  label,
  options,
  size = 'medium',
  selectedOption,
  onChange,
}: StdPaginationControlProps) => {
  const id = useStdId('pagination-control', propsId);
  const { mainClasses, labelClasses } = paginationControlClassBuilder(size);

  const dropdownItems: StdDropdownOption[] = options.map((option) => ({
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
      <StdFloatingWrapper fitWidth>
        <Trigger>
          <StdSelect displayValue={`${selectedOption}`} clearable={false} size={size} id={`${id}-select`} />
        </Trigger>
        <Element>
          <StdDropdown items={dropdownItems} id={`${id}-dropdown`} />
        </Element>
      </StdFloatingWrapper>
    </div>
  );
};

export default StdPaginationControl;
