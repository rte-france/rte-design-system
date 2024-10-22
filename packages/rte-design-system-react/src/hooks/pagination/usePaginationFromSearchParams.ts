/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback, useTransition } from 'react';
import { useSearchParams } from 'react-router-dom';

const parseIntOrDefault = (value: string | null, defaultInt: number) => {
  if (value === null) {
    return defaultInt;
  }
  const parsedValue = parseInt(value);
  return isNaN(parsedValue) ? defaultInt : parsedValue;
};

const PAGE_KEY = 'page';
const ITEMS_PER_PAGE_KEY = 'itemsPerPage';
const DEFAULT_PAGE = 1;
const DEFAULT_ITEMS_PER_PAGE = 15;

const usePaginationFromSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseIntOrDefault(searchParams.get(PAGE_KEY), DEFAULT_PAGE);
  const currentItemsPerPage = parseIntOrDefault(searchParams.get(ITEMS_PER_PAGE_KEY), DEFAULT_ITEMS_PER_PAGE);

  const [, startTransition] = useTransition();

  const handleChangeCurrentPage = useCallback(
    (newPage: number) =>
      startTransition(() => {
        setSearchParams((params) => {
          const newParams = new URLSearchParams(params);
          newParams.set(PAGE_KEY, String(newPage));
          return newParams;
        });
      }),
    [setSearchParams],
  );
  const handleChangeCurrentItemsPerPage = useCallback(
    (newItemsPerPage: number) =>
      startTransition(() => {
        setSearchParams((params) => {
          const newParams = new URLSearchParams(params);
          newParams.set(PAGE_KEY, String(DEFAULT_PAGE));
          newParams.set(ITEMS_PER_PAGE_KEY, String(newItemsPerPage));
          return newParams;
        });
      }),
    [setSearchParams],
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

export default usePaginationFromSearchParams;
