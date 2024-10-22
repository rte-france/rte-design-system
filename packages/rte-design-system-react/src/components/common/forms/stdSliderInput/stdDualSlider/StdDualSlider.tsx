/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { StdChangeHandler } from '@/shared/types';
import { ChangeEvent, MouseEventHandler, useRef, useState } from 'react';
import StdInputNumber from '../../stdInputNumber/StdInputNumber';
import type { StdSliderBaseProps } from '../StdInputSlider';
import { dualSliderClassBuilder } from './dualSliderClassBuilder';

export type StdDualSliderProps = {
  sliderType: 'dual';
  values: [number, number];
  error?: boolean;
  helperTextInputs?: [string, string];
  onChange?: StdChangeHandler<[number, number]>;
} & StdSliderBaseProps;

const StdDualSlider = ({
  disabled,
  error,
  helperText,
  helperTextInputs,
  name,
  readOnly,
  label,
  min = 0,
  max = 100,
  id: propsId,
  step = 1,
  values,
  onChange,
}: StdDualSliderProps) => {
  const inputMinRef = useRef<HTMLInputElement>(null);
  const inputMaxRef = useRef<HTMLInputElement>(null);
  const [minValue, maxValue] = values;
  const [foregroundFirstRangeInput, setForegroundFirstRangeInput] = useState<boolean>(false);

  const minUpdateValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.valueAsNumber <= maxValue) {
      void onChange?.([event.target.valueAsNumber, maxValue]);
    }
  };
  const maxUpdateValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.valueAsNumber >= minValue) {
      void onChange?.([minValue, event.target.valueAsNumber]);
    }
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!inputMinRef.current || !inputMaxRef.current) {
      return;
    }
    const leftThumbPosition =
      inputMinRef.current?.clientWidth * ((inputMinRef.current?.valueAsNumber - min) / (max - min));
    const rightThumbPosition =
      inputMaxRef.current?.clientWidth * ((inputMaxRef.current?.valueAsNumber - min) / (max - min));
    const currentPosition = e.clientX - inputMinRef.current?.getBoundingClientRect().left;

    setForegroundFirstRangeInput(
      Math.abs(currentPosition - leftThumbPosition) < Math.abs(currentPosition - rightThumbPosition) ||
        (leftThumbPosition === rightThumbPosition && currentPosition < leftThumbPosition),
    );
  };

  const {
    minSliderClasses,
    maxSliderClasses,
    containerClasses,
    numberContainerClasses,
    sliderContainerClasses,
    helperTextClasses,
    styles,
  } = dualSliderClassBuilder(foregroundFirstRangeInput, readOnly, disabled, error, min, max, minValue, maxValue);
  const id = useStdId('range', propsId);

  return (
    <div className="flex h-full w-full flex-col">
      <span className="px-0.5 py-0.25 text-left text-caption text-gray-700">{label}</span>
      <div id={id} className={containerClasses}>
        <div className={numberContainerClasses}>
          <StdInputNumber
            name={`min-input-slider-${name}`}
            id={`min-input-slider-${id}`}
            variant="outlined"
            disabled={disabled || readOnly}
            error={error}
            value={minValue}
            helperText={helperTextInputs?.[0]}
            min={min}
            max={maxValue ?? max}
            step={step}
            onChange={(val) => onChange?.([val ?? maxValue, maxValue])}
          />
          <div className="flex flex-col">
            <p className="text-caption">{min}</p>
            {helperTextInputs && <div className="h-2" />}
          </div>
        </div>
        <div className="w-full">
          <div className={sliderContainerClasses} onMouseMove={handleMouseMove}>
            <div className="h-0.25 w-full" style={styles} />
            <input
              ref={inputMinRef}
              className={minSliderClasses}
              value={minValue}
              type="range"
              onInput={minUpdateValue}
              step={step}
              min={min}
              max={max}
              disabled={disabled || readOnly}
              readOnly={readOnly}
            />
            <input
              ref={inputMaxRef}
              className={maxSliderClasses}
              value={maxValue}
              type="range"
              onInput={maxUpdateValue}
              id={id}
              step={step}
              min={min}
              max={max}
              disabled={disabled || readOnly}
              readOnly={readOnly}
            />
          </div>
          {helperTextInputs && <div className="h-2" />}
        </div>
        <div className={numberContainerClasses}>
          <div className="flex flex-col">
            <p className="text-caption">{max}</p>
            {helperTextInputs && <div className="h-2" />}
          </div>
          <StdInputNumber
            name={`max-input-slider-${name}`}
            id={`max-input-slider-${id}`}
            variant="outlined"
            disabled={disabled || readOnly}
            error={error}
            value={maxValue}
            helperText={helperTextInputs?.[1]}
            min={minValue ?? min}
            max={max}
            step={step}
            onChange={(val) => onChange?.([minValue, val ?? minValue])}
          />
        </div>
      </div>
      <span className={helperTextClasses}>{helperText}</span>
    </div>
  );
};

export default StdDualSlider;
