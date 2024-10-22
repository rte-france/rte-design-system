/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useInputFormState } from '@/hooks/useInputFormState';
import { StdChangeHandler } from '@/shared/types/StdBase.type';
import { PropsWithChildren, useRef } from 'react';
import { renderCheckboxClassBuilder } from './StdRenderClassBuilder';

export type StdRenderCheckboxProps = {
  selected?: boolean;
  defaultSelected?: boolean;
  onChange?: StdChangeHandler<boolean | undefined>;
};

const StdRenderCheckbox = (props: PropsWithChildren<StdRenderCheckboxProps>) => {
  const { selected, defaultSelected, onChange, children } = props;
  const checkboxRef = useRef<HTMLInputElement>(null);
  const className = renderCheckboxClassBuilder();
  const { value: isChecked, setValue: setChecked } = useInputFormState(
    selected,
    defaultSelected,
    onChange,
    (checked) => {
      if (checkboxRef.current) {
        checkboxRef.current.checked = !!checked;
      }
    },
  );
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className={className.container}>
      {children}
      <input
        ref={checkboxRef}
        className={className.input}
        placeholder="checked"
        type="checkbox"
        checked={isChecked}
        onChange={handleChecked}
      />
    </div>
  );
};

export default StdRenderCheckbox;
