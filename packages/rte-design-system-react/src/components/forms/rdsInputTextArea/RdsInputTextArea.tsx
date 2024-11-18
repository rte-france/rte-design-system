/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { RdsChangeHandler } from '@/types/components/callback.type.ts';
import { inputTextAreaClassBuilder } from './inputTextAreaClassBuilder.ts';
import { ChangeEvent } from 'react';
import { RdsRequiredIndicator } from '../rdsRequiredIndicator/RdsRequiredIndicator.tsx';

export interface RdsInputTextAreaProps {
  label: string;
  name?: string;
  value: string;
  onChange?: RdsChangeHandler<string>;
  onBlur?: (value: React.FocusEvent<{ value: string }>) => void;
  id?: string;
  placeHolder?: string;
  disabled?: boolean;
  helperText?: string;
  error?: boolean;
  maxLength?: number;
  maxHeight?: number;
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
}

export const RdsInputTextArea = ({
  label,
  value,
  name,
  onChange,
  onBlur,
  id: propsId,
  disabled = false,
  error = false,
  required = false,
  placeHolder,
  helperText,
  maxLength,
  maxHeight,
  readOnly,
  autoFocus = false,
}: RdsInputTextAreaProps) => {
  const id = useRdsId('area', propsId);
  const { wrapperClasses, labelClasses, inputClasses, helperClasses } = inputTextAreaClassBuilder(
    disabled,
    error,
    maxHeight,
  );

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    void onChange?.(event.target.value);
  };

  return (
    <div className={wrapperClasses}>
      <div className={labelClasses}>
        <label htmlFor={id}>
          {label}
          {required && <RdsRequiredIndicator />}
        </label>
        {maxLength && <span>{`${value?.length ?? 0}/${maxLength}`}</span>}
      </div>
      <div className="rds-relative rds-w-full">
        <textarea
          name={name}
          rows={3}
          className={inputClasses}
          value={value}
          aria-label={label}
          placeholder={placeHolder}
          onChange={handleChange}
          onBlur={onBlur}
          disabled={disabled}
          id={id}
          required={required}
          readOnly={readOnly}
          autoFocus={autoFocus}
        />
      </div>
      <span className={helperClasses}>{helperText}</span>
    </div>
  );
};

export default RdsInputTextArea;
