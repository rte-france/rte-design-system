/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { ChangeEvent, useRef } from 'react';
import { switchClassBuilder } from './SwitchClassBuilder.ts';
import { useRdsId } from '@/hooks/index.ts';
import { RdsIcon } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import { RdsChangeHandler } from '@/types/components/callback.type.ts';
import { useInputFormState } from '@/hooks/form/useInputFormState.ts';

export type SwitchSize = 'small' | 'medium';

export interface RdsSwitchProps {
  name: string;
  value: string;
  label?: string;
  id?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: RdsChangeHandler<boolean | undefined>;
  size?: SwitchSize;
  disabled?: boolean;
}

export const RdsSwitch = (props: RdsSwitchProps) => {
  const { id: propsId, name, value, label, defaultChecked, checked, onChange, disabled, size = 'medium' } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { setValue: setStateValue } = useInputFormState(checked, defaultChecked, onChange, (checkedStatus) => {
    if (inputRef.current) {
      inputRef.current.checked = !!checkedStatus;
    }
  });
  const { labelClasses, inputClasses, backgroundClasses, slideClasses, iconContainerClasses, iconSize } =
    switchClassBuilder(size, disabled);
  const id = useRdsId('switch', propsId);

  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setStateValue(event.target.checked);
    }
  };

  return (
    <label className={labelClasses}>
      <input
        ref={inputRef}
        id={id}
        type="checkbox"
        name={name}
        value={value}
        className={inputClasses}
        onChange={updateValue}
        defaultChecked={checked}
        disabled={disabled}
      />
      {label && <span className="rds-sr-only">{label}</span>}
      <div className={backgroundClasses} />
      <div className={slideClasses}>
        <div className={iconContainerClasses}>
          <RdsIcon name={RdsIconId.Done} width={iconSize} height={iconSize} />
        </div>
      </div>
    </label>
  );
};
