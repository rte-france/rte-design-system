/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsButton } from '@/components/base/index.ts';
import { useRdsId } from '@/hooks/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import { useTranslation } from 'react-i18next';

export type RdsTablePaginationProps = {
  id?: string;
  count: number;
  current: number;
  intervalSize: number;
  onChange: (index: number) => void;
};

export const RdsTablePagination = ({
  id: propsId,
  count,
  intervalSize,
  current,
  onChange,
}: RdsTablePaginationProps) => {
  const { t } = useTranslation();
  const id = useRdsId('table-pagination', propsId);

  const intervalStart = current * intervalSize + 1;
  const intervalEnd = Math.min((current + 1) * intervalSize, count);

  const handlePreviousClick = () => {
    if (current > 0) onChange(current - 1);
  };

  const handleNextClick = () => {
    if (current < Math.ceil(count / intervalSize) - 1) onChange(current + 1);
  };

  return (
    <div className="flex items-center gap-2" id={id} role="navigation">
      <label className="text-overnote font-semibold">
        {intervalStart}-{intervalEnd} {t('components.tablePagination.@of')} {count}
      </label>
      <div className="flex items-center gap-2">
        <RdsButton
          icon={RdsIconId.KeyboardArrowLeft}
          onClick={handlePreviousClick}
          disabled={current <= 0}
          id={`${id}-previous-button`}
          size="small"
          color="secondary"
          variant="transparent"
        />
        <RdsButton
          icon={RdsIconId.KeyboardArrowRight}
          onClick={handleNextClick}
          disabled={current >= Math.ceil(count / intervalSize) - 1}
          id={`${id}-next-button`}
          size="small"
          color="secondary"
          variant="transparent"
        />
      </div>
    </div>
  );
};
