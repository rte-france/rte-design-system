/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import { useTranslation } from 'react-i18next';
import { fileStatusClassBuilder } from './fileStatusClassBuilder.ts';
import { RdsButton, RdsIcon } from '@/components/base/index.ts';
import { RdsDivider } from '@/components/layout/rdsDivider/RdsDivider.tsx';

export type FileInputStatus = 'loading' | 'success' | 'error' | 'empty';

export interface RdsFileStatusProps {
  fileName: string;
  status: FileInputStatus;
  onDelete: () => void;
  progress?: number;
  id?: string;
}

const iconMap = {
  loading: {
    name: RdsIconId.Downloading,
    color: 'primary-500',
  },
  success: {
    name: RdsIconId.Done,
    color: 'success-600',
  },
  error: {
    name: RdsIconId.Close,
    color: 'error-600',
  },
} as const;

export const RdsFileStatus = ({ fileName, status, progress, onDelete, id: propsId }: RdsFileStatusProps) => {
  const { t } = useTranslation();
  const id = useRdsId('file-status', propsId);
  const { nameClasses } = fileStatusClassBuilder(status);

  return (
    <div className="rds-flex rds-flex-col rds-gap-0.5 rds-px-1 rds-text-left rds-text-caption" id={id}>
      <div className="rds-flex rds-items-center rds-gap-0.5">
        {status !== 'empty' && (
          <RdsIcon name={iconMap[status].name} color={iconMap[status].color} width={16} height={16} />
        )}
        <span className={nameClasses}>{fileName}</span>
        {status !== 'error' && (
          <RdsButton id={`${id}-delete`} icon={RdsIconId.Delete} onClick={onDelete} size="extraSmall" variant="text" />
        )}
      </div>
      {status === 'loading' && <span>{progress}%</span>}
      {status === 'error' && (
        <span className="rds-font-semibold rds-text-error-600">{t('components.fileInput.@error')}</span>
      )}
      <RdsDivider />
    </div>
  );
};
