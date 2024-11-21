/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { NO_PREFIX } from '@/types/TailwindColorClass.type.ts';
import { ItemStyleConfig } from '../navbar.type.tsx';
import { render, screen, waitFor } from '@testing-library/react';
import { RdsNavbarController } from '../RdsNavbarController.tsx';
import { RdsIconId } from '@/utils/index.ts';

const TEST_LABEL = 'Controls';
const TEST_ID = 'navbar-controller-id';

const DEFAULT_CONFIG = {
  itemBackground: {
    [NO_PREFIX]: 'gray-50',
    hover: 'gray-200',
    active: 'gray-300',
    selected: 'gray-300',
  },
  itemContent: {
    [NO_PREFIX]: 'gray-700',
    hover: 'gray-900',
    active: 'gray-900',
    selected: 'gray-900',
  },
} as { itemBackground: ItemStyleConfig; itemContent: ItemStyleConfig };

describe('RdsNavbarController component', () => {
  it('should render the component with passed id', () => {
    render(<RdsNavbarController label={TEST_LABEL} action={vi.fn()} id={TEST_ID} itemsStyleConfig={DEFAULT_CONFIG} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });
  it('should render the proper content when expanded', async () => {
    render(
      <RdsNavbarController
        label={TEST_LABEL}
        action={vi.fn()}
        expanded
        id={TEST_ID}
        itemsStyleConfig={DEFAULT_CONFIG}
      />,
    );
    await waitFor(() => expect(screen.getByTitle(RdsIconId.KeyboardDoubleArrowLeft)).toBeInTheDocument());
    expect(screen.getByText(TEST_LABEL)).toBeInTheDocument();
  });
  it('should render the proper content when expanded is false', async () => {
    render(
      <RdsNavbarController
        label={TEST_LABEL}
        action={vi.fn()}
        expanded={false}
        id={TEST_ID}
        itemsStyleConfig={DEFAULT_CONFIG}
      />,
    );
    await waitFor(() => expect(screen.getByTitle(RdsIconId.KeyboardDoubleArrowRight)).toBeInTheDocument());
    expect(screen.queryByText(TEST_LABEL)).not.toBeInTheDocument();
  });
});
