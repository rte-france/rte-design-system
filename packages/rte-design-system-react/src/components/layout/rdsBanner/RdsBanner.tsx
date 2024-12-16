/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { DisplayStatus } from '@/types/components/DisplayStatus.type.ts';
import { RdsIconId, RdsIconIdKey } from '@/utils/index.ts';
import { MouseEventHandler } from 'react';
import { bannerClassBuilder } from './bannerClassBuilder.ts';
import { RdsButton, RdsIcon } from '@/components/base/index.ts';

const DEFAULT_ICON = {
  success: RdsIconId.Done,
  error: RdsIconId.Report,
  warning: RdsIconId.Warning,
  info: RdsIconId.Info,
};

export interface RdsBannerProps {
  message: string;
  id?: string;
  status?: DisplayStatus;
  icon?: RdsIconIdKey;
  onClose?: MouseEventHandler<HTMLButtonElement>;
}

const ICON_SIZE = 24;

export const RdsBanner = ({ message, id: propsId, status = 'info', icon, onClose }: RdsBannerProps) => {
  const { containerClasses, iconClasses, textClasses } = bannerClassBuilder(status);
  const id = useRdsId('banner', propsId);

  return (
    <div id={id} className={containerClasses} role="alert">
      <div className={iconClasses}>
        <RdsIcon name={icon ?? DEFAULT_ICON[status]} width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <span className={textClasses}>{message}</span>
      {onClose && (
        <RdsButton icon={RdsIconId.Close} variant="transparent" size="small" color="secondary" onClick={onClose} />
      )}
    </div>
  );
};
