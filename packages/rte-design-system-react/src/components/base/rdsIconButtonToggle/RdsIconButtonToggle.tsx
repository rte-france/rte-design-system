/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconToggle, RotationOptionsType, TailwindColorClass } from '@/shared/index.ts';
import { useCallback } from 'react';
import { RdsIconButton } from '../rdsIconButton/RdsIconButton.tsx';

type StdIconButtonToggleProps = {
  icons: IconToggle;
  onClick: (newActiveStatus: boolean) => void;
  activeColor?: TailwindColorClass;
  active?: boolean;
  disabled?: boolean;
  rotationOptions?: RotationOptionsType;
  rotate?: boolean;
  id?: string;
};

const StdIconButtonToggle = ({ icons, onClick, activeColor, active, disabled, id }: StdIconButtonToggleProps) => {
  const [inactiveIcon, activeIcon] = icons;

  const handleOnClick = useCallback(() => {
    onClick(!active);
  }, [active, onClick]);

  return (
    <div className="h-fit w-fit">
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

export default StdIconButtonToggle;
