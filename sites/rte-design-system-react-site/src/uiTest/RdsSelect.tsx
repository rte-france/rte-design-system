/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  RdsButton,
  RdsIcon,
  RdsIconId,
  RdsIconIdKey,
  RdsRequiredIndicator,
  selectClassBuilder,
  useRdsId,
} from 'rte-design-system-react';

export type RdsSelectSize = 'small' | 'medium';

type RdsSelectProps = {
  placeholder?: string;
  label?: string;
  size?: RdsSelectSize;
  showLabel?: boolean;
  isActive?: boolean;
  id?: string;
  icon?: RdsIconIdKey;
  displayValue?: string;
  onClick?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
  onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
  clearable?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
};

export default function RdsSelect({
  label = '',
  placeholder = '',
  size = 'medium',
  showLabel = false,
  isActive = false,
  id: propsId,
  icon,
  displayValue,
  onClick,
  clearable = true,
  disabled = false,
  required = false,
  error = false,
  helperText,
}: RdsSelectProps) {
  const id = useRdsId('select', propsId);
  const { selectClasses, labelClasses, helperClasses, toggleIconClasses } = selectClassBuilder(
    size,
    disabled,
    error,
    !!displayValue,
  );

  return (
    <div>
      {showLabel && (
        <label className={labelClasses}>
          {label} {required && <RdsRequiredIndicator />}
        </label>
      )}
      <div
        className={selectClasses}
        id={id}
        onClick={!disabled ? onClick : undefined}
        tabIndex={disabled ? -1 : 0}
        aria-label={label}
        role="button"
      >
        <div className="rds-flex">{icon && <RdsIcon name={icon} color="gray-500" />}</div>
        <span className="rds-w-full rds-overflow-hidden rds-whitespace-nowrap rds-text-left">
          {displayValue ?? placeholder}
        </span>
        <div className="rds-flex">
          {clearable && !disabled && displayValue && (
            <RdsButton icon={RdsIconId.Close} variant="text" color="secondary" size="extraSmall" />
          )}
          <div>
            <RdsIcon
              name={isActive ? RdsIconId.KeyboardArrowUp : RdsIconId.KeyboardArrowDown}
              color={toggleIconClasses}
            />
          </div>
        </div>
      </div>
      {helperText && <div className={helperClasses}>{helperText}</div>}
    </div>
  );
}
