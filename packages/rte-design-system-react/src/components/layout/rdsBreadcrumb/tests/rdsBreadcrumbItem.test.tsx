/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { screen } from '@testing-library/react';
import { RdsBreadcrumbItem } from '../RdsBreadcrumbItem.tsx';
import { renderWithRouter } from '@/tests/testUtils.tsx';
import { generateFakeBreadcrumb } from '@/tests/mocks/breadcrumbItems.mock.ts';

const BREADCRUMB_ITEM = generateFakeBreadcrumb(1)[0]!;
const TEST_ID = 'breadcrumb-id';

describe('RdsBreadcrumbItem', () => {
  it('renders the breadcrumb item with the proper id', () => {
    renderWithRouter(<RdsBreadcrumbItem label={BREADCRUMB_ITEM.label} target={BREADCRUMB_ITEM.target} id={TEST_ID} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });
  it('renders the breadcrumb item with the proper label', () => {
    renderWithRouter(<RdsBreadcrumbItem label={BREADCRUMB_ITEM.label} target={BREADCRUMB_ITEM.target} />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(BREADCRUMB_ITEM.label)).toBeInTheDocument();
  });
});
