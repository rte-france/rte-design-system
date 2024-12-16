/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import RdsPagination from '../rdsPagination/RdsPagination.tsx';
import RdsPaginationControl from '../rdsPaginationControl/RdsPaginationControl.tsx';
import i18n from '@/i18n.ts';

export type RdsPaginationWithControlProps = {
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

export const RdsPaginationWithControl = ({
  id: propsId,
  lastPage,
  currentPage,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  resultsPerPageOptions,
  paginationControlLabel,
}: RdsPaginationWithControlProps) => {
  const id = useRdsId('pagination-with-control', propsId);

  return (
    <div className="relative flex w-full items-center justify-center" id={id}>
      <RdsPagination id={`${id}-pagination`} lastPage={lastPage} currentPage={currentPage} onChange={onPageChange} />
      <div className="absolute right-0">
        <RdsPaginationControl
          id={`${id}-pagination-control`}
          label={paginationControlLabel || i18n.t('components.pagination.@resultsPerPage')}
          onChange={onItemsPerPageChange}
          options={resultsPerPageOptions || RESULTS_PER_PAGE_OPTIONS}
          selectedOption={itemsPerPage}
          size="small"
        />
      </div>
    </div>
  );
};
