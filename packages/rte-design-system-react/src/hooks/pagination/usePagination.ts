/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback, useState, useTransition } from 'react';

type UsePaginationParams = {
  itemsPerPage?: number;
  startPage?: number;
};

const usePagination = ({ itemsPerPage = 15, startPage = 1 }: UsePaginationParams | undefined = {}) => {
  const [, startTransition] = useTransition();
  const [currentPage, setCurrentPage] = useState<number>(startPage);
  const [currentItemsPerPage, setCurrentItemsPerPage] = useState<number>(itemsPerPage);

  const handleChangeCurrentPage = useCallback((newPage: number) => startTransition(() => setCurrentPage(newPage)), []);
  const handleChangeCurrentItemsPerPage = useCallback(
    (newItemsPerPage: number) =>
      startTransition(() => {
        setCurrentPage(1);
        setCurrentItemsPerPage(newItemsPerPage);
      }),
    [],
  );

  const limit = currentItemsPerPage;
  const offset = (currentPage - 1) * currentItemsPerPage;

  const getPagination = useCallback(
    (itemsCount: number) => ({
      onPageChange: handleChangeCurrentPage,
      onItemsPerPageChange: handleChangeCurrentItemsPerPage,
      currentPage,
      itemsPerPage: currentItemsPerPage,
      lastPage: Math.ceil(itemsCount / currentItemsPerPage),
    }),
    [currentItemsPerPage, currentPage, handleChangeCurrentPage, handleChangeCurrentItemsPerPage],
  );

  return {
    limit,
    offset,
    getPagination,
  };
};

export default usePagination;
