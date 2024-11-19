/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { DisplayStatus } from '@/types/components/DisplayStatus.type.ts';
import { RdsIconId, RdsIconIdKey } from '@/utils/index.ts';
import { alertClassBuilder } from './alertClassBuilder.ts';
import { useRdsId } from '@/hooks/index.ts';
import { RdsButton, RdsIcon } from '@/components/base/index.ts';

const DEFAULT_ICON = {
  success: RdsIconId.Done,
  error: RdsIconId.Report,
  warning: RdsIconId.Warning,
  info: RdsIconId.Info,
};

export interface AlertAction {
  label: string;
  onClick: () => void;
}

export interface RdsAlertProps {
  message: string;
  id?: string;
  status?: DisplayStatus;
  icon?: RdsIconIdKey;
  onClose?: () => void;
  action?: AlertAction;
}

const ICON_SIZE = 24;

export const RdsAlert = ({ message, id: propsId, status = 'info', icon, onClose, action }: RdsAlertProps) => {
  const { containerClasses, iconClasses, textClasses } = alertClassBuilder(status);
  const id = useRdsId('alert', propsId);
  return (
    <div id={id} className={containerClasses} role="alert">
      <div className={iconClasses}>
        <RdsIcon name={icon ?? DEFAULT_ICON[status]} width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <span className={textClasses}>{message}</span>
      <div className="flex items-center gap-1">
        {action && (
          <RdsButton
            variant="transparent"
            onClick={action.onClick}
            size="small"
            color="secondary"
            label={action.label}
            aria-label={action.label}
          />
        )}
        {onClose && (
          <RdsButton
            variant="transparent"
            onClick={onClose}
            size="small"
            color="secondary"
            icon={RdsIconId.Close}
            aria-label="Close"
          />
        )}
      </div>
    </div>
  );
};
