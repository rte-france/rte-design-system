/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useInputFormState } from '@/hooks/useInputFormState';
import { useStdId } from '@/hooks/useStdId';
import { StdChangeHandler } from '@/shared/types/StdBase.type';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import { ChangeEvent, useRef } from 'react';
import StdButton from '../../base/stdButton/StdButton';
import StdRequiredIndicator from '../stdRequiredIndicator/StdRequiredIndicator';
import { numberClassBuilder } from './numberClassBuilder';
import { getInputNumberValue } from './utils';

export type NumberVariant = 'outlined' | 'text';

export interface StdInputNumberProps {
  name: string;
  label?: string;
  onChange?: StdChangeHandler<number | undefined>;
  id?: string;
  defaultValue?: number;
  value?: number;
  placeHolder?: string;
  disabled?: boolean;
  variant?: NumberVariant;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const StdInputNumber = ({
  label = '',
  name,
  onChange,
  id: propsId,
  variant = 'text',
  disabled = false,
  error = false,
  required = false,
  defaultValue = 0,
  value,
  placeHolder,
  helperText,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
}: StdInputNumberProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { value: stateValue, setValue: setStateValue } = useInputFormState(
    value,
    defaultValue,
    onChange,
    (newValue) => {
      if (inputRef.current && !Number.isNaN(newValue)) {
        inputRef.current.valueAsNumber = newValue ?? defaultValue;
      }
    },
  );
  const {
    wrapperClasses,
    labelClasses,
    inputClasses,
    buttonContainerClasses,
    dividerClasses,
    containerClasses,
    helperClasses,
  } = numberClassBuilder(variant, disabled, error);
  const id = useStdId('inb', propsId);

  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    setStateValue(event.target.valueAsNumber);
  };

  const addVal = () => {
    setStateValue(getInputNumberValue(inputRef, defaultValue) + 1);
  };

  const substractVal = () => {
    setStateValue(getInputNumberValue(inputRef, defaultValue) - 1);
  };

  const handleBlur = () => {
    setStateValue((oldValue) => {
      if (oldValue !== undefined) {
        if (oldValue < min) {
          return min;
        }
        if (oldValue > max) {
          return max;
        }
        return getInputNumberValue(inputRef, defaultValue);
      }
    });
  };

  const disabledMin = disabled || (min !== undefined && stateValue !== undefined && stateValue <= min);

  const disabledMax = disabled || (max !== undefined && stateValue !== undefined && stateValue >= max);

  return (
    <div className={wrapperClasses}>
      {label && (
        <div className={labelClasses}>
          <label htmlFor={id} className="break-words">
            {label}
            {required && <StdRequiredIndicator />}
          </label>
        </div>
      )}
      <div className={containerClasses}>
        <input
          ref={inputRef}
          className={inputClasses}
          defaultValue={defaultValue}
          aria-label={label}
          placeholder={placeHolder}
          type="number"
          name={name}
          onChange={updateValue}
          onBlur={handleBlur}
          disabled={disabled}
          id={id}
          min={min}
          max={max}
          step={step}
          required={required}
        />
        <div className={buttonContainerClasses}>
          <StdButton
            aria-label="minus"
            icon={StdIconId.HorizontalRule}
            size="small"
            color="secondary"
            variant="text"
            onClick={substractVal}
            disabled={disabledMin}
          />
          <div className={dividerClasses}></div>
          <StdButton
            aria-label="plus"
            icon={StdIconId.Add}
            size="small"
            color="secondary"
            variant="text"
            onClick={addVal}
            disabled={disabledMax}
          />
        </div>
      </div>
      {helperText && <span className={helperClasses}>{helperText}</span>}
    </div>
  );
};

export default StdInputNumber;
