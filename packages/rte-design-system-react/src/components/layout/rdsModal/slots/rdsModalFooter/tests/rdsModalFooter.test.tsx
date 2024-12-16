/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { RdsModalFooter, RdsFooterInformation } from '../RdsModalFooter.tsx';
import { RdsButton } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';

const TEST_BUTTON = <RdsButton label="button" />;
const TEST_BUTTONS_ARRAY = [
  <RdsButton label="button" key="1" />,
  <RdsButton label="button" key="2" />,
  <RdsButton label="button" key="3" />,
];
const TEST_TEXT_INFORMATION = 'Information';
const TEST_ICON_INFORMATION = RdsIconId.Info;
const TEST_INFORMATION: RdsFooterInformation = {
  icon: TEST_ICON_INFORMATION,
  text: TEST_TEXT_INFORMATION,
};

describe('RdsModalFooter', () => {
  it('renders the default RdsModalFooter', () => {
    render(<RdsModalFooter>{TEST_BUTTON}</RdsModalFooter>);
    const footer = screen.getByRole('group');
    expect(footer).toBeInTheDocument();
  });

  it('render the RdsModalFooter with a defined number of buttons', () => {
    render(
      <RdsModalFooter>
        {TEST_BUTTONS_ARRAY.map((btn, idx) => (
          <span key={idx}>{btn}</span>
        ))}
      </RdsModalFooter>,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(TEST_BUTTONS_ARRAY.length);
  });

  it('render the RdsModalFooter with only one button', () => {
    render(<RdsModalFooter>{TEST_BUTTON}</RdsModalFooter>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(1);
  });

  it('render the RdsModalFooter with an information', async () => {
    render(<RdsModalFooter info={TEST_INFORMATION}>{TEST_BUTTON}</RdsModalFooter>);
    expect(screen.getByRole('note')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTitle(TEST_ICON_INFORMATION)).toBeInTheDocument());
    expect(screen.getByText(TEST_TEXT_INFORMATION)).toBeInTheDocument();
  });
});
