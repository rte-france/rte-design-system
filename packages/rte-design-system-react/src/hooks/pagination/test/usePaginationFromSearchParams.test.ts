/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import RenderHookWrapper from '@/shared/test/renderHookWrapper';
import { act } from '@testing-library/react';
import usePaginationFromSearchParams from '../usePaginationFromSearchParams';

const TEST_ITEMS_LENGTH = 32;
const TEST_ITEMS_PER_PAGE = 15;
const TEST_START_PAGE = 1;
const TEST_NEW_ITEMS_PER_PAGE = 30;
const TEST_NEW_PAGE_TWO = 2;
const TEST_NEW_PAGE_THREE = 3;

const getHookWrapper = () =>
  RenderHookWrapper.create(usePaginationFromSearchParams)
    .withRouter({
      location: `/pagination?page=${TEST_START_PAGE}&itemsPerPage=${TEST_ITEMS_PER_PAGE}`,
      route: '/pagination',
    })
    .renderHook();

describe('usePaginationFromSearchParams', () => {
  it('should have the expected lastPage', () => {
    const { result } = getHookWrapper();
    expect(result.current.limit).toBe(TEST_ITEMS_PER_PAGE);
    expect(result.current.offset).toBe(0);
    expect(result.current.getPagination(TEST_ITEMS_LENGTH).lastPage).toBe(
      Math.ceil(TEST_ITEMS_LENGTH / TEST_ITEMS_PER_PAGE),
    );
  });

  it('should have the expected currentStartPage', () => {
    const { result } = getHookWrapper();
    expect(result.current.getPagination(TEST_ITEMS_LENGTH).currentPage).toBe(TEST_START_PAGE);
  });

  it('should have the expected currentPage after change with onPageChange handler', () => {
    const { result } = getHookWrapper();
    act(() => result.current.getPagination(TEST_ITEMS_LENGTH).onPageChange(TEST_NEW_PAGE_THREE));
    expect(result.current.getPagination(TEST_ITEMS_LENGTH).currentPage).toBe(TEST_NEW_PAGE_THREE);
  });

  it('should have the expected currentPage after change with onItemsPerPageChange handler', () => {
    const { result } = getHookWrapper();
    act(() => result.current.getPagination(TEST_ITEMS_LENGTH).onItemsPerPageChange(TEST_NEW_ITEMS_PER_PAGE));

    expect(result.current.getPagination(TEST_ITEMS_LENGTH).itemsPerPage).toBe(TEST_NEW_ITEMS_PER_PAGE);
  });

  it('should have the expected limit and offset values', () => {
    const { result } = getHookWrapper();

    expect(result.current.limit).toBe(TEST_ITEMS_PER_PAGE);
    expect(result.current.offset).toBe((TEST_START_PAGE - 1) * TEST_ITEMS_PER_PAGE);
  });

  it('should have the expected limit and offset values after change', () => {
    const { result } = getHookWrapper();
    act(() => result.current.getPagination(TEST_ITEMS_LENGTH).onItemsPerPageChange(TEST_NEW_ITEMS_PER_PAGE));
    act(() => result.current.getPagination(TEST_ITEMS_LENGTH).onPageChange(TEST_NEW_PAGE_TWO));

    expect(result.current.limit).toBe(TEST_NEW_ITEMS_PER_PAGE);
    expect(result.current.offset).toBe((TEST_NEW_PAGE_TWO - 1) * TEST_NEW_ITEMS_PER_PAGE);
  });
});
