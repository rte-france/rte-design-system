/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import StdIcon from '@common/base/stdIcon/StdIcon';
import { ChangeEventHandler, useState } from 'react';
import { toggleClassBuilder } from './toggleClassBuilder';
import { getToggleFocusHandlers, joinId } from './utils';

export type ToggleItem = {
  id?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  content: StdIconId | string;
};

export interface StdToggleProps {
  name: string;
  items: ToggleItem[];
  defaultSelected?: string;
  id?: string;
  disabled?: boolean;
}

const ICON_SIZE = 16;

const StdToggle = ({ name, defaultSelected, items, id: propsId, disabled }: StdToggleProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const { fieldsetClasses, inputClasses, buttonClasses, dividerClasses, textClasses } = toggleClassBuilder(
    focus,
    disabled,
  );

  const id = useStdId('tgl', propsId);
  return (
    <fieldset id={id} disabled={disabled} className={fieldsetClasses}>
      {items.map(({ value, content, onChange, id: itemId }) => (
        <label className="flex" key={value}>
          <input
            className={inputClasses}
            id={itemId ?? `${id}-${joinId(content)}`}
            type="radio"
            name={name}
            value={value}
            onChange={onChange}
            defaultChecked={defaultSelected === value}
            {...getToggleFocusHandlers(setFocus)}
          />
          <div className={buttonClasses}>
            {Object.values(StdIconId).includes(content as StdIconId) ? (
              <StdIcon name={content as StdIconId} width={ICON_SIZE} height={ICON_SIZE} />
            ) : (
              <span className={textClasses} title={content}>
                {content}
              </span>
            )}
          </div>
          <div className={dividerClasses} />
        </label>
      ))}
    </fieldset>
  );
};

export default StdToggle;
