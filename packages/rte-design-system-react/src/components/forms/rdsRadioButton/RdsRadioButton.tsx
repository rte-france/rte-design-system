/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsChangeHandler } from '@/types/components/callback.type.ts';
import radioButtonClassBuilder from './radioButtonClassBuilder.ts';
import { useInputFormState, useRdsId } from '@/hooks/index.ts';
import { ChangeEvent, useRef } from 'react';

export interface RdsRadioButtonProps {
  value: string;
  label: string;
  name?: string;
  id?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: RdsChangeHandler<boolean | undefined>;
}

export const RdsRadioButton = ({
  name,
  value,
  id: propsId,
  label,
  defaultChecked,
  checked,
  disabled,
  onChange,
}: RdsRadioButtonProps) => {
  const { labelContainerClasses, containerClasses, radioCircleClasses, textClasses } =
    radioButtonClassBuilder(disabled);
  const id = useRdsId('rbn', propsId);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setValue: setStateValue } = useInputFormState(checked, defaultChecked, onChange, (checkedStatus) => {
    if (inputRef.current) {
      inputRef.current.checked = !!checkedStatus;
    }
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStateValue(event.target.checked);
  };

  return (
    <label className={labelContainerClasses}>
      <input
        ref={inputRef}
        type="radio"
        name={name}
        id={id}
        className="rds-peer rds-sr-only"
        onChange={handleChange}
        value={value}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      <div className={containerClasses}>
        <div className="rds-rounded-full rds-p-0.25">
          <div className={radioCircleClasses} />
        </div>
      </div>
      <span className={textClasses}>{label}</span>
    </label>
  );
};
