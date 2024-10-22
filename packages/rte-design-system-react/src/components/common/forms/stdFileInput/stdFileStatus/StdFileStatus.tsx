/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import StdButton from '@/components/common/base/stdButton/StdButton';
import StdIcon from '@/components/common/base/stdIcon/StdIcon';
import StdDivider from '@/components/common/layout/stdDivider/StdDivider';
import { useStdId } from '@/hooks/useStdId';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import { useTranslation } from 'react-i18next';
import { fileStatusClassBuilder } from './fileStatusClassBuilder';

export type FileInputStatus = 'loading' | 'success' | 'error' | 'empty';

export interface StdFileStatusProps {
  fileName: string;
  status: FileInputStatus;
  onDelete: () => void;
  progress?: number;
  id?: string;
}

const iconMap = {
  loading: {
    name: StdIconId.Downloading,
    color: 'primary-500',
  },
  success: {
    name: StdIconId.Done,
    color: 'success-600',
  },
  error: {
    name: StdIconId.Close,
    color: 'error-600',
  },
} as const;

const StdFileStatus = ({ fileName, status, progress, onDelete, id: propsId }: StdFileStatusProps) => {
  const { t } = useTranslation();
  const id = useStdId('file-status', propsId);
  const { nameClasses } = fileStatusClassBuilder(status);

  return (
    <div className="flex flex-col gap-0.5 px-1 text-left text-caption" id={id}>
      <div className="flex items-center gap-0.5">
        {status !== 'empty' && (
          <StdIcon name={iconMap[status].name} color={iconMap[status].color} width={16} height={16} />
        )}
        <span className={nameClasses}>{fileName}</span>
        {status !== 'error' && (
          <StdButton id={`${id}-delete`} icon={StdIconId.Delete} onClick={onDelete} size="extraSmall" variant="text" />
        )}
      </div>
      {status === 'loading' && <span>{progress}%</span>}
      {status === 'error' && <span className="font-semibold text-error-600">{t('components.fileInput.@error')}</span>}
      <StdDivider />
    </div>
  );
};

export default StdFileStatus;
