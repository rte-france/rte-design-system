/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { RdsRequiredIndicator } from '../rdsRequiredIndicator/RdsRequiredIndicator.tsx';
import { getInitValues, prepareCheckboxes } from './checkboxGroupUtils.tsx';

const HELPER_TEXT_CLASSES = 'rds-text-caption rds-mt-1';

const ERROR_HELPER_TEXT_CLASSES = clsx(HELPER_TEXT_CLASSES, 'rds-text-error-600');

export type RdsCheckboxGroupItem = {
  label: string;
  value: string;
  checked?: boolean;
};

export type RdsCheckboxGroupProps = {
  name: string;
  children: ReactNode | ReactNode[];
  onChange: (value: string, status?: boolean, isCheckboxControl?: boolean) => void;
  checkedValues: string[];
  id?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  checkboxControl?: boolean;
  possibleValues?: string[];
};

export const RdsCheckboxGroupWrapper = ({
  label,
  children,
  onChange,
  checkedValues,
  name,
  required,
  error,
  helperText,
  disabled,
  possibleValues: possibleValuesProps,
  id: propsId,
}: RdsCheckboxGroupProps) => {
  const possibleValues = possibleValuesProps ?? getInitValues(children).possibleValues;
  const id = useRdsId('checkbox-group', propsId);

  return (
    <div className="rds-flex rds-flex-col rds-text-left" role="group" id={id}>
      {label && (
        <span className="rds-mb-2 rds-text-body-m">
          {label} {required && <RdsRequiredIndicator />}
        </span>
      )}
      <div>{prepareCheckboxes(children, checkedValues, possibleValues, name, onChange, disabled)}</div>
      {helperText && <span className={error ? ERROR_HELPER_TEXT_CLASSES : HELPER_TEXT_CLASSES}>{helperText}</span>}
    </div>
  );
};
