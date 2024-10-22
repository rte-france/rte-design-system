/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { generateFakeBreadcrumb } from '@/mocks/data/components/breadcrumbItems.mock';
import { renderWithRouter } from '@/shared/test/testUtils';
import { screen } from '@testing-library/react';
import StdLinearBreadcrumb from '../StdLinearBreadcrumb';

describe('StdLinearBreadcrumb', () => {
  it('should display the proper amount of items', () => {
    renderWithRouter(<StdLinearBreadcrumb items={generateFakeBreadcrumb(3)} />);
    const items = screen.getAllByRole('link');
    expect(items.length).toBe(generateFakeBreadcrumb(3).length);
  });
});
