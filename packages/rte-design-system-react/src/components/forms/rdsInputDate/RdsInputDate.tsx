/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RefObject, useEffect, useRef, useState } from 'react';
import './rdsInputDate.css';
import { useRdsId } from '@/hooks/index.ts';
import { dateInputClassBuilder } from './dateInputClassBuilder.ts';
import { RdsRequiredIndicator } from '../rdsRequiredIndicator/RdsRequiredIndicator.tsx';
import { RdsButton, RdsIcon } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';

type InputDateType = 'dateOnly' | 'timeOnly' | 'dateAndTime';
type InputTimePrecision = 'hour' | 'minute' | 'second' | 'millisecond';

const dateToLocalDateFormat = (date: Date) =>
  `${date.getFullYear().toString().padStart(4, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

const dateToLocalTimeFormat = (date: Date) =>
  `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

const dateToUtcTimeFormat = (date: Date) =>
  `${date.getUTCHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}`;

const isValidDate = (date: Date | undefined): date is Date => date !== undefined && !isNaN(date.getTime());

const isInputRefNonEmpty = (input: RefObject<HTMLInputElement>) => input.current != null && input.current.value !== '';

const dateToLocalDateAndTimeFormats = (date: Date | undefined, inputDateType: InputDateType) => {
  if (!isValidDate(date)) {
    return { dateValue: '', timeValue: '', isValid: false };
  }
  return {
    dateValue: dateToLocalDateFormat(date),
    timeValue: inputDateType === 'timeOnly' ? dateToUtcTimeFormat(date) : dateToLocalTimeFormat(date),
    isValid: true,
  };
};

const SegmentChangingKeys = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ArrowUp', 'ArrowDown']);

const TimePrecisionToStep = {
  hour: 3600,
  minute: 60,
  second: 1,
  millisecond: 0.001,
} as Record<InputTimePrecision, number>;

/**
 * Useful links for the native inputs :
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step
 */

export type RdsInputDateProps = {
  inputDateType?: InputDateType;
  label: string;
  name?: string;
  value?: Date;
  onChange?: (value: Date | undefined) => void;
  onBlur?: (e: React.FocusEvent<{ value: string }>) => void;
  id?: string;
  disabled?: boolean;
  helperText?: string;
  forceError?: boolean;
  required?: boolean;
} & {
  inputDateType?: Omit<InputDateType, 'dateOnly'>;
  timePrecision?: InputTimePrecision;
};

/**
 * Input date, time or date and time component based on the native input date and time
 *
 * Be carefull, whe follow the API of the input type="date" for dateOnly and dateAndTime such that the value is a local date,
 * and the input type="time" for timeOnly such that the value is a UTC date
 */
export const RdsInputDate = ({
  inputDateType = 'dateOnly',
  label,
  name,
  onChange,
  onBlur,
  value,
  id: propsId,
  disabled = false,
  forceError = false,
  required = false,
  helperText,
  timePrecision = 'minute',
}: RdsInputDateProps) => {
  const id = useRdsId('input-date', propsId);
  const inputDateRef = useRef<HTMLInputElement>(null);
  const inputTimeRef = useRef<HTMLInputElement>(null);
  const [hasInputPartiallyChanged, setHasInputPartiallyChanged] = useState(false);

  const { dateValue, timeValue, isValid } = dateToLocalDateAndTimeFormats(value, inputDateType);
  const hasInputContent = isInputRefNonEmpty(inputDateRef) || isInputRefNonEmpty(inputTimeRef);

  useEffect(() => {
    if (!isValid && hasInputContent) {
      inputDateRef.current?.setCustomValidity('error');
      inputTimeRef.current?.setCustomValidity('error');
    } else {
      inputDateRef.current?.setCustomValidity('');
      inputTimeRef.current?.setCustomValidity('');
    }
  }, [hasInputContent, isValid]);

  // use effects to update the inputs value when the value prop changes
  // this is necessary because we need to update it only when it is different than their current value
  // otherwise, the cursor would move to the beginning of the input and partial edition (day, month...) would be impossible
  useEffect(() => {
    const newDate = dateValue || '';
    if (inputDateRef.current && inputDateRef.current.value !== newDate) {
      inputDateRef.current.value = newDate;
    }
  }, [dateValue]);

  useEffect(() => {
    const newTime = timeValue || '';
    if (inputTimeRef.current && inputTimeRef.current.value !== newTime && inputDateRef.current?.value != '') {
      inputTimeRef.current.value = newTime;
    }
  }, [timeValue]);

  const getDateTimeFromInputs = () => {
    const datePart = inputDateRef.current?.valueAsDate || undefined;
    const timePart = inputTimeRef.current?.valueAsDate || undefined;
    datePart?.setHours(0, 0, 0, 0);
    switch (inputDateType) {
      case 'dateOnly':
        return datePart;
      case 'timeOnly':
        return timePart;
      case 'dateAndTime': {
        if (!datePart) {
          return undefined;
        } else if (!timePart) {
          return datePart;
        }
        const newDate = new Date(datePart.setHours(timePart.getUTCHours(), timePart.getUTCMinutes()));
        return newDate;
      }
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    onChange?.(getDateTimeFromInputs());
  };

  const handleClear = () => {
    setHasInputPartiallyChanged(false);
    if (inputDateRef.current) {
      inputDateRef.current.value = '';
    }
    if (inputTimeRef.current) {
      inputTimeRef.current.value = '';
    }
    onChange?.(undefined);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      // prevent the opening of the picker when the spacebar is pressed
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      // allow to move from time input to date input with the left arrow key
      // not sure why it actually works but it only
      // changes the focus if the focused part is the left one (hour), as we want
      if (e.target === inputTimeRef.current && inputDateRef.current) {
        inputDateRef.current.focus();
      }
      // allow to move from date input to time input with the right arrow key
      // it only changes the focus if the focused part is the right one (year)
    } else if (e.key === 'ArrowRight') {
      if (e.target === inputDateRef.current && inputTimeRef.current) {
        inputTimeRef.current.focus();
      }
    } else if (SegmentChangingKeys.has(e.key)) {
      // if any digit or up/bottom arrow key is pressed, we consider the input as changed
      setHasInputPartiallyChanged(true);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // only blur if the related target is not the other initialized input
    // or it means we navigate between the two inputs
    if (
      (!!inputDateRef.current && inputDateRef.current === e.relatedTarget) ||
      (!!inputTimeRef.current && inputTimeRef.current === e.relatedTarget)
    ) {
      return;
    }
    onBlur?.(e);
  };

  const { divLabelClasses, divInputsClasses, spanClasses, inputClasses, separatorDivClasses } =
    dateInputClassBuilder(forceError);

  const showClearButton = !disabled && (hasInputPartiallyChanged || isValidDate(value));
  return (
    <div
      id={id}
      className="rds-group rds-inline-flex rds-w-full rds-flex-col rds-items-start rds-justify-start"
      onBlur={handleBlur}
    >
      <div className={divLabelClasses}>
        <label htmlFor={`${id}-time ${id}-date`}>
          {label}
          {required && <RdsRequiredIndicator />}
        </label>
      </div>
      <div className={divInputsClasses}>
        {(inputDateType === 'dateOnly' || inputDateType === 'dateAndTime') && (
          <>
            <RdsIcon name={RdsIconId.CalendarMonth} color="gray-500" />
            <input
              id={`${id}-date`}
              ref={inputDateRef}
              className={inputClasses}
              type="date"
              name={name}
              onChange={handleChange}
              required={required}
              disabled={disabled}
              onKeyDown={handleKeyDown}
            />
          </>
        )}
        {inputDateType === 'dateAndTime' && <div className={separatorDivClasses} />}
        {(inputDateType === 'timeOnly' || inputDateType === 'dateAndTime') && (
          <>
            <RdsIcon name={RdsIconId.Schedule} color="gray-500" />
            <input
              id={`${id}-time`}
              ref={inputTimeRef}
              className={inputClasses}
              type="time"
              name={name}
              onChange={handleChange}
              required={required}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              step={TimePrecisionToStep[timePrecision]}
              role="time"
            />
          </>
        )}
        {showClearButton && (
          <RdsButton variant="transparent" icon={RdsIconId.Close} onClick={handleClear} size="extraSmall" />
        )}
      </div>
      <span className={spanClasses}>{helperText}</span>
    </div>
  );
};

export default RdsInputDate;
