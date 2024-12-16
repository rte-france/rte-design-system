/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { RdsChangeHandler } from '@/types/components/callback.type.ts';
import { useRef } from 'react';
import { textClassBuilder } from './textClassBuilder.ts';
import { RdsRequiredIndicator } from '../rdsRequiredIndicator/RdsRequiredIndicator.tsx';
import { RdsIconId } from '@/utils/index.ts';
import { RdsButton } from '@/components/base/index.ts';

export type TextVariant = 'outlined' | 'text';

export interface RdsInputTextProps {
  value: string;
  label?: string;
  onChange?: RdsChangeHandler<string>;
  onBlur?: (e: React.FocusEvent<{ value: string }>) => void;
  id?: string;
  placeHolder?: string;
  disabled?: boolean;
  variant?: TextVariant;
  helperText?: string;
  error?: boolean;
  maxLength?: number;
  password?: boolean;
  required?: boolean;
  autoFocus?: boolean;
}

export const RdsInputText = ({
  label = '',
  onChange,
  onBlur,
  value,
  id: propsId,
  variant = 'text',
  disabled = false,
  error = false,
  password = false,
  required = false,
  placeHolder,
  helperText,
  maxLength,
  autoFocus = false,
}: RdsInputTextProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useRdsId('input', propsId);
  const { wrapperInputClasses, labelClasses, inputClasses, helperClasses, buttonClasses } = textClassBuilder(
    variant,
    disabled,
    error,
    !value || disabled,
  );

  const clearValue = () => {
    if (!onChange) {
      return;
    }
    void onChange('');
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }
    void onChange(e.target.value);
  };

  return (
    <div className="rds-inline-flex rds-w-full rds-flex-col rds-items-start rds-justify-start">
      <div className={labelClasses}>
        <label htmlFor={id}>
          {label}
          {required && <RdsRequiredIndicator />}
        </label>
        {maxLength && <span>{`${value?.length ?? 0}/${maxLength}`}</span>}
      </div>
      <div className={wrapperInputClasses}>
        <input
          ref={inputRef}
          className={inputClasses}
          value={value}
          aria-label={label}
          placeholder={placeHolder}
          type={password ? 'password' : 'text'}
          name={value}
          onChange={handleChange}
          onBlur={onBlur}
          disabled={disabled}
          id={id}
          required={required}
          autoFocus={autoFocus}
        />
        <div className={buttonClasses}>
          <RdsButton icon={RdsIconId.Close} variant="text" color="secondary" size="extraSmall" onClick={clearValue} />
        </div>
      </div>
      <span className={helperClasses}>{helperText}</span>
    </div>
  );
};

export default RdsInputText;
