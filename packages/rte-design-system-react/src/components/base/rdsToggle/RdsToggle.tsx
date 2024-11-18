/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { ChangeEventHandler, useState } from 'react';
import { toggleClassBuilder } from './toggleClassBuilder.ts';
import { getToggleFocusHandlers, joinId } from './utils.ts';
import { RdsIcon } from '../rdsIcon/RdsIcon.tsx';
import { RdsIconId, RdsIconIdKey } from '@/utils/index.ts';

export type ToggleItem = {
  id?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  content: RdsIconIdKey | string;
};

export interface RdsToggleProps {
  name: string;
  items: ToggleItem[];
  defaultSelected?: string;
  id?: string;
  disabled?: boolean;
}

const ICON_SIZE = 16;

export const RdsToggle = ({ name, defaultSelected, items, id: propsId, disabled }: RdsToggleProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const { fieldsetClasses, inputClasses, buttonClasses, dividerClasses, textClasses } = toggleClassBuilder(
    focus,
    disabled,
  );

  const id = useRdsId('tgl', propsId);
  return (
    <fieldset id={id} disabled={disabled} className={fieldsetClasses}>
      {items.map(({ value, content, onChange, id: itemId }) => (
        <label className="rds-flex" key={value}>
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
            {Object.keys(RdsIconId).includes(content) ? (
              <RdsIcon name={content} width={ICON_SIZE} height={ICON_SIZE} />
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
