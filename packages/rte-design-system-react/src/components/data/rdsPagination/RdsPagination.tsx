/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsButton } from '@/components/base/index.ts';
import { useRdsId } from '@/hooks/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import { generatePaginationItems } from './utils.ts';
import { RdsPaginationButton } from '../rdsPaginationButton/RdsPaginationButton.tsx';

export type RdsPaginationProps = {
  id?: string;
  lastPage: number;
  currentPage: number;
  onChange: (page: number) => void;
};

const RdsPagination = ({ id: propsId, lastPage, currentPage, onChange }: RdsPaginationProps) => {
  const id = useRdsId('pagination', propsId);

  if (lastPage <= 0) return;

  const handlePreviousClick = () => {
    if (currentPage > 0) onChange(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < lastPage) onChange(currentPage + 1);
  };

  return (
    <div className="flex items-center gap-1" id={id} role="navigation">
      <RdsButton
        icon={RdsIconId.KeyboardArrowLeft}
        onClick={handlePreviousClick}
        disabled={currentPage <= 1}
        id={`${id}-previous-button`}
        size="small"
        variant="contained"
        color="secondary"
      />
      {generatePaginationItems(lastPage, currentPage).map((el, idx) =>
        el > 0 ? (
          <RdsPaginationButton value={el} onClick={() => onChange(el)} active={el === currentPage} key={idx} />
        ) : (
          <div className="w-3" key={idx}>
            ...
          </div>
        ),
      )}
      <RdsButton
        icon={RdsIconId.KeyboardArrowRight}
        onClick={handleNextClick}
        disabled={currentPage >= lastPage}
        id={`${id}-next-button`}
        size="small"
        variant="contained"
        color="secondary"
      />
    </div>
  );
};

export default RdsPagination;
