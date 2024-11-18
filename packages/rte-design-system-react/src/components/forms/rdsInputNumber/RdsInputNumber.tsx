/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useInputFormState, useRdsId } from '@/hooks/index.ts';
import { RdsChangeHandler } from '@/types/components/callback.type.ts';
import { ChangeEvent, useRef } from 'react';
import { numberClassBuilder } from './numberClassBuilder.ts';
import { getInputNumberValue } from './utils.ts';
import { RdsRequiredIndicator } from '../rdsRequiredIndicator/RdsRequiredIndicator.tsx';
import { RdsButton } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';

export type NumberVariant = 'outlined' | 'text';

export interface RdsInputNumberProps {
  name: string;
  label?: string;
  onChange?: RdsChangeHandler<number | undefined>;
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

export const RdsInputNumber = ({
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
}: RdsInputNumberProps) => {
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
  const id = useRdsId('inb', propsId);

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
            {required && <RdsRequiredIndicator />}
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
          <RdsButton
            aria-label="minus"
            icon={RdsIconId.HorizontalRule}
            size="small"
            color="secondary"
            variant="text"
            onClick={substractVal}
            disabled={disabledMin}
          />
          <div className={dividerClasses}></div>
          <RdsButton
            aria-label="plus"
            icon={RdsIconId.Add}
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
