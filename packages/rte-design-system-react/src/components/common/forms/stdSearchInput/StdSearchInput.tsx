/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import { useRef, useState } from 'react';
import StdButton from '../../base/stdButton/StdButton';
import { clearClassBuilder, searchClassBuilder } from './SearchInputClassBuilder';

export type SearchVariant = 'outlined' | 'filled';
export type SearchInputSize = 'small' | 'medium';

export type StdSearchInputBaseProps = {
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

export type StdSearchInputControlledProps = {
  value: string;
  defaultValue?: never;
};

export type StdSearchInputUncontrolledProps = {
  value?: never;
  defaultValue?: string;
};

export type StdSearchInputProps = StdSearchInputBaseProps &
  (StdSearchInputControlledProps | StdSearchInputUncontrolledProps);

const ENTER_KEY_CODE = 'Enter';

const StdSearchInput = ({
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
}: StdSearchInputProps) => {
  const { inputWrapperClass, inputClasses, labelClass } = searchClassBuilder(variant, disabled, size);
  const id = useStdId('search', propsId);
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
          <StdButton icon={StdIconId.Close} size="extraSmall" variant="text" onClick={clearValue} color="secondary" />
        </span>
        <StdButton
          icon={StdIconId.Search}
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

export default StdSearchInput;
