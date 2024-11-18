/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsChangeHandler } from '@/types/components/callback.type.ts';
import { useEffect, useRef } from 'react';
import { checkboxClassBuilder } from './checkboxClassBuilder.ts';
import { useRdsId } from '@/hooks/index.ts';
import { RdsIcon } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import { RdsRequiredIndicator } from '../rdsRequiredIndicator/RdsRequiredIndicator.tsx';

export type RdsCheckboxProps = {
  label?: string;
  checkboxControl?: boolean;
  value?: Exclude<string, 'checkbox_control'>;
  name?: string;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: RdsChangeHandler<boolean | undefined>;
  onBlur?: (e: React.FocusEvent<{ checked: boolean }>) => void;
  required?: boolean;
  error?: boolean;
  delayDebounce?: number;
  indeterminate?: boolean;
};

export const RdsCheckbox = ({
  name,
  value,
  label,
  disabled = false,
  defaultChecked,
  checkboxControl,
  checked,
  onChange,
  onBlur,
  id: propsId,
  error = false,
  required = false,
  indeterminate,
}: RdsCheckboxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  const { containerClasses, inputClasses, labelClasses } = checkboxClassBuilder(disabled, error);

  const id = useRdsId('cbox', propsId);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    void onChange?.(event.target.checked);
  };

  return (
    <label className={containerClasses} aria-label={label}>
      <input
        id={id}
        ref={inputRef}
        className="peer sr-only"
        type="checkbox"
        name={name}
        disabled={disabled}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={handleOnChange}
        onMouseDown={(e) => e.preventDefault()}
        onBlur={onBlur}
        value={checkboxControl ? 'checkbox_control' : value}
      />
      <div className={inputClasses}>
        <div className="done-icon hidden">
          <RdsIcon name={RdsIconId.Done} color="gray-w" width={14} height={14} />
        </div>
        <div className="indeterminate-icon hidden">
          <RdsIcon name={RdsIconId.HorizontalRule} color="gray-w" width={14} height={14} />
        </div>
      </div>
      <span className={labelClasses}>
        {label} {required && <RdsRequiredIndicator />}
      </span>
    </label>
  );
};
