/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconToggle } from '@/utils/index.ts';
import { useCallback } from 'react';
import { RdsIconButton } from '../rdsIconButton/RdsIconButton.tsx';
import { TailwindColorClass, RotationOptionsType } from '@/types/index.ts';

type RdsIconButtonToggleProps = {
  icons: IconToggle;
  onClick: (newActiveStatus: boolean) => void;
  activeColor?: TailwindColorClass;
  active?: boolean;
  disabled?: boolean;
  rotationOptions?: RotationOptionsType;
  rotate?: boolean;
  id?: string;
};

export const RdsIconButtonToggle = ({
  icons,
  onClick,
  activeColor,
  active,
  disabled,
  id,
}: RdsIconButtonToggleProps) => {
  const [inactiveIcon, activeIcon] = icons;

  const handleOnClick = useCallback(() => {
    onClick(!active);
  }, [active, onClick]);

  return (
    <div className="rds-h-fit rds-w-fit">
      <RdsIconButton
        id={id}
        icon={active ? activeIcon : inactiveIcon}
        onClick={handleOnClick}
        color={active ? activeColor : undefined}
        disabled={disabled}
      />
    </div>
  );
};
