/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsChangeHandler } from '@/types/components/callback.type.ts';
import { RdsRadioButton, RdsRadioButtonProps } from '../rdsRadioButton/RdsRadioButton.tsx';
import radioButtonGroupClassBuilder from './radioButtonGroupClassBuilder.ts';
import { useInputFormState, useRdsId } from '@/hooks/index.ts';

type RdsOmittedRadioButtonProps = Omit<RdsRadioButtonProps, 'name' | 'onChange' | 'checked' | 'defaultChecked'>;

export interface RdsRadioButtonGroupProps {
  label: string;
  name: string;
  children: React.ReactElement<RdsOmittedRadioButtonProps>[];
  defaultChecked?: string;
  checked?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: RdsChangeHandler<string | undefined>;
  id?: string;
}

export const RdsRadioButtonGroup = ({
  label,
  name,
  children,
  defaultChecked,
  checked,
  disabled,
  required,
  error,
  helperText,
  onChange,
  id: propsId,
}: RdsRadioButtonGroupProps) => {
  const { fieldsetClasses, helperTextClasses, textClasses } = radioButtonGroupClassBuilder(error, disabled);
  const id = useRdsId('rbg', propsId);

  const { setValue: setStateValue, value: checkedValue } = useInputFormState(checked, defaultChecked, onChange);

  const handleChange = (newValue: string) => (selected?: boolean) => {
    if (selected) {
      setStateValue(newValue);
    }
  };

  return (
    <fieldset role="radiogroup" className={fieldsetClasses} disabled={disabled} id={id}>
      <legend className={textClasses}>
        {label} {required && <span className="rds-text-error-600">*</span>}
      </legend>
      {children.map(({ props: { id: radioId, label: labelRadio, value, ...otherProps } }) => (
        <RdsRadioButton
          key={labelRadio}
          name={name}
          id={radioId}
          label={labelRadio}
          onChange={handleChange(value)}
          checked={checkedValue === value}
          defaultChecked={defaultChecked === value}
          value={value}
          disabled={disabled}
          {...otherProps}
        />
      ))}
      {helperText && <span className={helperTextClasses}>{helperText}</span>}
    </fieldset>
  );
};
