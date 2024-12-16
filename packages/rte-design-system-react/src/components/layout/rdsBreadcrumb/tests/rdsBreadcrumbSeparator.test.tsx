/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { RdsBreadcrumbSeparator } from '../RdsBreadcrumbSeparator.tsx';
import { RdsIconId } from '@/utils/index.ts';

const SEPARATOR_ICON = RdsIconId.KeyboardArrowRight;

describe('RdsBreadcrumbSeparator', () => {
  it('renders RdsIcon component', async () => {
    render(<RdsBreadcrumbSeparator />);
    await waitFor(() => expect(screen.getByTitle(SEPARATOR_ICON)).toBeInTheDocument());
  });
});
