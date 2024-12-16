/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useActiveKeyboard, useRdsId } from '@/hooks/index.ts';
import { RdsIconIdKey } from '@/utils/index.ts';
import { MouseEventHandler } from 'react';
import { tabItemClassBuilder } from './tabClassBuilder.tsx';
import { RdsButton, RdsIcon } from '@/components/base/index.ts';

export type TabItemType = 'primary' | 'secondary';

export type RdsTabItemProps = {
  onClick: (selectedItemName: string) => void;
  name: string;
  tabType?: TabItemType;
  id?: string;
  label?: string;
  icon?: RdsIconIdKey;
  active?: boolean;
  disabled?: boolean;
  button?: {
    icon: RdsIconIdKey;
    onClick: MouseEventHandler<HTMLButtonElement>;
  };
  onDropdown?: MouseEventHandler<HTMLInputElement>;
  secondary?: Omit<RdsTabItemProps, 'onClick' | 'secondary'>[];
};

const ICON_SIZE = 16;

export const RdsTabItem = ({
  id: propsId,
  tabType = 'primary',
  label,
  icon,
  active,
  disabled,
  name,
  onClick,
  button,
}: RdsTabItemProps) => {
  const id = useRdsId('tbi', propsId);
  const { onBlur, onKeyDown, onKeyUp, isActiveKeyboard } = useActiveKeyboard<HTMLDivElement>(() => onClick?.(name), {
    id,
  });
  const { contentContainerClasses, borderClasses } = tabItemClassBuilder(
    tabType,
    isActiveKeyboard,
    icon,
    active,
    disabled,
  );

  return (
    <div role="tab" id={id}>
      <div
        className={contentContainerClasses}
        id={id}
        onClick={() => onClick(name)}
        tabIndex={disabled ? -1 : 0}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      >
        {icon && <RdsIcon name={icon} width={ICON_SIZE} height={ICON_SIZE} />}
        {label && <span className="whitespace-nowrap">{label}</span>}
        {button && <RdsButton icon={button.icon} onClick={button.onClick} variant="transparent" size="extraSmall" />}
      </div>
      {tabType === 'primary' && <div className={borderClasses} />}
    </div>
  );
};
