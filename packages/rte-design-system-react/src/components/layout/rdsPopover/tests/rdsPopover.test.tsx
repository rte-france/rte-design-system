/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';
import { RdsPopover } from '../RdsPopover.tsx';
import { ELEMENT_PREFIX_ID, TRIGGER_PREFIX_ID } from '../../rdsFloatingWrapper/RdsFloatingWrapper.tsx';
import { RdsButton } from '@/components/base/index.ts';

const TEST_ID = 'some-id';
const TEST_TRIGGER = <RdsButton label="trigger" />;
const TEST_CONTENT = <div>content</div>;
const TEST_FOOTER = <RdsButton label="button" />;

const triggerId = `#${TRIGGER_PREFIX_ID}-${TEST_ID}`;
const contentId = `#${ELEMENT_PREFIX_ID}-${TEST_ID}`;

describe('RdsPopover', () => {
  it('renders the RdsPopover with Trigger and Content', () => {
    render(
      <RdsPopover id={TEST_ID} show>
        <RdsPopover.Trigger>{TEST_TRIGGER}</RdsPopover.Trigger>
        <RdsPopover.Content>{TEST_CONTENT}</RdsPopover.Content>
      </RdsPopover>,
    );
    expect(document.querySelector(triggerId)).toBeInTheDocument();
    expect(document.querySelector(triggerId)).toHaveTextContent('trigger');
    expect(document.querySelector(contentId)).toBeInTheDocument();
    expect(document.querySelector(contentId)).toHaveTextContent('content');
  });

  it('renders the RdsPopover with Footer when specified', () => {
    render(
      <RdsPopover id={TEST_ID} show>
        <RdsPopover.Trigger>{TEST_TRIGGER}</RdsPopover.Trigger>
        <RdsPopover.Content>{TEST_CONTENT}</RdsPopover.Content>
        <RdsPopover.Footer>{TEST_FOOTER}</RdsPopover.Footer>
      </RdsPopover>,
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(document.querySelector(contentId)).toHaveTextContent('button');
  });
});
