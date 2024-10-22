/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { StdChangeHandler } from '@/shared/types';
import { ChangeEvent } from 'react';
import StdInputNumber from '../../stdInputNumber/StdInputNumber';
import type { StdSliderBaseProps } from '../StdInputSlider';
import { sliderClassBuilder } from './sliderClassBuilder';

export type StdSimpleSliderProps = {
  sliderType: 'simple';
  value: number;
  helperTextInput?: string;
  onChange?: StdChangeHandler<number>;
} & StdSliderBaseProps;

const StdSimpleSlider = ({
  label,
  name,
  onChange,
  value,
  disabled,
  error,
  helperText,
  helperTextInput,
  id: propsId,
  min = 0,
  max = 100,
  readOnly,
  step,
}: StdSimpleSliderProps) => {
  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    void onChange?.(event.target.valueAsNumber);
  };

  const { containerClasses, sliderClasses, helperTextClasses, styles } = sliderClassBuilder(
    readOnly,
    error,
    disabled,
    min,
    max,
    value,
  );
  const id = useStdId('range', propsId);

  return (
    <div className="flex flex-col">
      <div className="px-0.5 py-0.25 text-left text-caption text-gray-700">{label}</div>
      <div id={id} className={containerClasses}>
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center gap-1">
            <span className="text-caption">{min}</span>
            <input
              className={sliderClasses}
              value={value}
              aria-label={label}
              type="range"
              name={name}
              onInput={updateValue}
              step={step}
              min={min}
              max={max}
              disabled={disabled || readOnly}
              readOnly={readOnly}
              style={styles}
            />
            <span className="text-caption">{max}</span>
          </div>
          {helperTextInput && <div className="h-2" />}
        </div>
        <div className="min-w-22">
          <StdInputNumber
            name={name}
            variant="outlined"
            disabled={disabled || readOnly}
            error={error}
            value={value}
            helperText={helperTextInput}
            min={min}
            max={max}
            step={step}
            onChange={(newValue) => onChange?.(newValue ?? value)}
          />
        </div>
      </div>
      <span className={helperTextClasses}>{helperText}</span>
    </div>
  );
};

export default StdSimpleSlider;
