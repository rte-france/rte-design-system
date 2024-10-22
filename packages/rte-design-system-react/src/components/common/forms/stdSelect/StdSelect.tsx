/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { stopPropagation } from '@/shared/utils/event/stopPropagation';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import StdButton from '@common/base/stdButton/StdButton';
import StdIcon from '@common/base/stdIcon/StdIcon';
import StdRequiredIndicator from '../stdRequiredIndicator/StdRequiredIndicator';
import { selectClassBuilder } from './selectClassBuilder';

export type StdSelectSize = 'small' | 'medium';

type StdSelectProps = {
  placeholder?: string;
  label?: string;
  size?: StdSelectSize;
  showLabel?: boolean;
  isActive?: boolean;
  id?: string;
  icon?: StdIconId;
  displayValue?: string;
  onClick?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
  onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
  clearable?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
};

export default function StdSelect({
  label = '',
  placeholder = '',
  size = 'medium',
  showLabel = false,
  isActive = false,
  id: propsId,
  icon,
  displayValue,
  onClick,
  onClear,
  clearable = true,
  disabled = false,
  required = false,
  error = false,
  helperText,
}: StdSelectProps) {
  const id = useStdId('select', propsId);
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
          {label} {required && <StdRequiredIndicator />}
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
        <div className="flex">{icon && <StdIcon name={icon} color="gray-500" />}</div>
        <span className="w-full overflow-hidden whitespace-nowrap text-left">{displayValue ?? placeholder}</span>
        <div className="flex">
          {clearable && !disabled && displayValue && (
            <StdButton
              icon={StdIconId.Close}
              variant="text"
              color="secondary"
              size="extraSmall"
              onClick={onClear && ((e) => stopPropagation(e, onClear))}
            />
          )}
          <div>
            <StdIcon
              name={isActive ? StdIconId.KeyboardArrowUp : StdIconId.KeyboardArrowDown}
              color={toggleIconClasses}
            />
          </div>
        </div>
      </div>
      {helperText && <div className={helperClasses}>{helperText}</div>}
    </div>
  );
}
