/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { clearClassBuilder, searchClassBuilder } from './SearchInputClassBuilder.ts';
import { useRef, useState } from 'react';
import { RdsIconId } from '@/utils/index.ts';
import { RdsButton } from '@/components/base/index.ts';

export type SearchVariant = 'outlined' | 'filled';
export type SearchInputSize = 'small' | 'medium';

export type RdsSearchInputBaseProps = {
  onSearch: (input: string | undefined) => void;
  placeHolder?: string;
  label?: string;
  onChange?: (input: string | undefined) => void;
  id?: string;
  disabled?: boolean;
  variant?: SearchVariant;
  name?: string;
  size?: SearchInputSize;
};

export type RdsSearchInputControlledProps = {
  value: string;
  defaultValue?: never;
};

export type RdsSearchInputUncontrolledProps = {
  value?: never;
  defaultValue?: string;
};

export type RdsSearchInputProps = RdsSearchInputBaseProps &
  (RdsSearchInputControlledProps | RdsSearchInputUncontrolledProps);

const ENTER_KEY_CODE = 'Enter';

export const RdsSearchInput = ({
  onSearch,
  disabled = false,
  id: propsId,
  label,
  placeHolder = '',
  variant = 'filled',
  name,
  size = 'medium',
  value: valueFromProps,
  defaultValue,
  onChange,
}: RdsSearchInputProps) => {
  const { inputWrapperClass, inputClasses, labelClass } = searchClassBuilder(variant, disabled, size);
  const id = useRdsId('search', propsId);
  const inputRef = useRef<HTMLInputElement>(null);

  const isControlled = valueFromProps !== undefined;
  const hasDefaultValue = defaultValue !== undefined;
  const [internalValue, setInternalValue] = useState(hasDefaultValue ? defaultValue : '');
  const value = isControlled ? valueFromProps : internalValue;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    void onChange?.(event.target.value);
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == ENTER_KEY_CODE) {
      onSearch(value);
    }
  };

  const clearValue = () => {
    void onChange?.('');
    onSearch('');
    if (!isControlled) {
      setInternalValue('');
    }
    inputRef?.current?.focus();
  };

  return (
    <div className="flex h-auto w-full flex-col justify-center" onClick={() => inputRef.current?.focus()} role="search">
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      <div className={inputWrapperClass}>
        <input
          type="search"
          name={name}
          id={id}
          className={inputClasses}
          placeholder={placeHolder}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          onKeyUp={handleEnter}
          ref={inputRef}
          role="searchbox"
        />
        <span className={clearClassBuilder(!value || disabled)}>
          <RdsButton icon={RdsIconId.Close} size="extraSmall" variant="text" onClick={clearValue} color="secondary" />
        </span>
        <RdsButton
          icon={RdsIconId.Search}
          size="extraSmall"
          variant="text"
          onClick={() => onSearch(value)}
          color="secondary"
          disabled={disabled}
        />
      </div>
    </div>
  );
};
