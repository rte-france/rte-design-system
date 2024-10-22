/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import StdPagination from '@/components/common/data/stdPagination/StdPagination';
import StdPaginationControl from '@/components/common/data/stdPaginationControl/StdPaginationControl';
import { useStdId } from '@/hooks/useStdId';
import { useTranslation } from 'react-i18next';

export type StdPaginationWithControlProps = {
  id?: string;
  lastPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (value: number) => void;
  resultsPerPageOptions?: number[];
  paginationControlLabel?: string;
};

const RESULTS_PER_PAGE_OPTIONS = [15, 30, 45, 60];

const StdPaginationWithControl = ({
  id: propsId,
  lastPage,
  currentPage,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  resultsPerPageOptions,
  paginationControlLabel,
}: StdPaginationWithControlProps) => {
  const { t } = useTranslation();
  const id = useStdId('pagination-with-control', propsId);

  return (
    <div className="relative flex w-full items-center justify-center" id={id}>
      <StdPagination id={`${id}-pagination`} lastPage={lastPage} currentPage={currentPage} onChange={onPageChange} />
      <div className="absolute right-0">
        <StdPaginationControl
          id={`${id}-pagination-control`}
          label={paginationControlLabel || t('components.pagination.@resultsPerPage')}
          onChange={onItemsPerPageChange}
          options={resultsPerPageOptions || RESULTS_PER_PAGE_OPTIONS}
          selectedOption={itemsPerPage}
          size="small"
        />
      </div>
    </div>
  );
};

export default StdPaginationWithControl;
