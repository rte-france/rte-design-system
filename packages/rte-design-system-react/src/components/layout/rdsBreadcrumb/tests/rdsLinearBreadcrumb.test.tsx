/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { generateFakeBreadcrumb } from '@/tests/mocks/breadcrumbItems.mock.ts';
import { RdsLinearBreadcrumb } from '../RdsLinearBreadcrumb.tsx';
import { renderWithRouter } from '@/tests/testUtils.tsx';
import { screen } from '@testing-library/react';

describe('RdsLinearBreadcrumb', () => {
  it('should display the proper amount of items', () => {
    renderWithRouter(<RdsLinearBreadcrumb items={generateFakeBreadcrumb(3)} />);
    const items = screen.getAllByRole('link');
    expect(items.length).toBe(generateFakeBreadcrumb(3).length);
  });
});
