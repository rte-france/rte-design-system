/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { renderHook } from '@testing-library/react';
import { t } from 'i18next';
import { useDateFormatter } from '../useDateFormatter';

const now = new Date();

const TEST_DATA = {
  NOW_DATE: now,
  MINUTES_AGO_DATE: new Date(now.getTime() - 10 * 60 * 1000), // 10 minutes ago
  MINUTES_AGO: 10,
  HOURS_AGO_DATE: new Date(now.getTime() - 2 * 60 * 60 * 1000), // 2 hours ago
  HOURS_AGO: 2,
  DAYS_AGO_DATE: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  DAYS_AGO: 3,
  MONTHS_AGO_DATE: new Date(now.getTime() - 2 * 30 * 24 * 60 * 60 * 1000), // 2 months ago
  MONTHS_AGO: 2,
  YEARS_AGO_DATE: new Date(now.getTime() - 2 * 365 * 24 * 60 * 60 * 1000), // 2 years ago
  YEARS_AGO: 2,
};

describe('useDateFormatter', () => {
  describe('formatRelativeDate', () => {
    const { result } = renderHook(() => useDateFormatter());

    it(`should return "components.relativeDate.@justNow" when date is NOW`, () => {
      const formattedDate = result.current.formatRelativeDate(TEST_DATA.NOW_DATE);
      expect(formattedDate).toBe(t('components.relativeDate.@justNow'));
    });

    it('should return "components.relativeDate.@minutes" when date is > than 1 minute ago', () => {
      const formattedDate = result.current.formatRelativeDate(TEST_DATA.MINUTES_AGO_DATE);
      expect(formattedDate).toBe(t('components.relativeDate.@minutes', { count: TEST_DATA.MINUTES_AGO }));
    });

    it('should return "components.relativeDate.@hours" when date is > than 1 hour ago', () => {
      const formattedDate = result.current.formatRelativeDate(TEST_DATA.HOURS_AGO_DATE);
      expect(formattedDate).toBe(t('components.relativeDate.@hours', { count: TEST_DATA.HOURS_AGO }));
    });

    it('should return "components.relativeDate.@days" when date is > than 1 day ago', () => {
      const formattedDate = result.current.formatRelativeDate(TEST_DATA.DAYS_AGO_DATE);
      expect(formattedDate).toBe(t('components.relativeDate.@days', { count: TEST_DATA.DAYS_AGO }));
    });

    it('should return "components.relativeDate.@months" when date is > than 1 month ago', () => {
      const formattedDate = result.current.formatRelativeDate(TEST_DATA.MONTHS_AGO_DATE);
      expect(formattedDate).toBe(t('components.relativeDate.@months', { count: TEST_DATA.MONTHS_AGO }));
    });

    it('should return "components.relativeDate.@Years" when date is > than 1 year ago', () => {
      const formattedDate = result.current.formatRelativeDate(TEST_DATA.YEARS_AGO_DATE);
      expect(formattedDate).toBe(t('components.relativeDate.@years', { count: TEST_DATA.YEARS_AGO }));
    });
  });
});
