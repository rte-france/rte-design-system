/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { toastClassBuilder } from './toastClassBuilder.ts';
import { RdsButton } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import { DisplayStatus } from '@/types/components/DisplayStatus.type.ts';

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface RdsToastProps {
  message: string;
  id?: string;
  status?: DisplayStatus;
  action?: ToastAction;
  onClose?: () => void;
  progressBarPlaceholder?: boolean;
}

export const RdsToast = ({
  message,
  id: propsId,
  status = 'info',
  action,
  onClose,
  progressBarPlaceholder = false,
}: RdsToastProps) => {
  const { containerClasses, textClasses } = toastClassBuilder(status, progressBarPlaceholder);
  const id = useRdsId('toast', propsId);
  return (
    <div id={id} className={containerClasses} role="alert">
      <span className={textClasses}>{message}</span>
      {action && (
        <RdsButton
          onClick={action.onClick}
          variant="transparent"
          size="small"
          color="secondary"
          label={action.label}
          aria-label={action.label}
        />
      )}
      {onClose && <RdsButton icon={RdsIconId.Close} onClick={onClose} variant="text" />}
    </div>
  );
};
