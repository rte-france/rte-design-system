/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsButton } from '@/components/base/index.ts';
import { render, screen } from '@testing-library/react';
import RdsModal from '../RdsModal.tsx';

const onClose = vitest.fn();
const TEST_ID = 'some-id';
const TEST_TITLE = <div>Modal Title</div>;
const TEST_CHILDREN = <div role="article">Main Content</div>;
const TEST_LATERAL_CHILDREN = <div role="region">Lateral Content</div>;
const TEST_BUTTONS = [<RdsButton label="button" key="1" />, <RdsButton label="button" key="2" />];

describe('RdsModal', () => {
  it('renders the RdsModal with the proper id when specified', () => {
    render(
      <RdsModal id={TEST_ID}>
        <RdsModal.Content>{TEST_CHILDREN}</RdsModal.Content>
      </RdsModal>,
    );
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('render the RdsModal without lateral content', () => {
    render(
      <RdsModal>
        <RdsModal.Title onClose={onClose}>{TEST_TITLE}</RdsModal.Title>
        <RdsModal.Content>{TEST_CHILDREN}</RdsModal.Content>
        <RdsModal.Footer>{TEST_BUTTONS}</RdsModal.Footer>
      </RdsModal>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('render the RdsModal with lateral content ', () => {
    render(
      <RdsModal>
        <RdsModal.Title onClose={onClose}>{TEST_TITLE}</RdsModal.Title>
        <RdsModal.Content>{TEST_CHILDREN}</RdsModal.Content>
        <RdsModal.LateralContent>{TEST_LATERAL_CHILDREN}</RdsModal.LateralContent>
        <RdsModal.Footer>{TEST_BUTTONS}</RdsModal.Footer>
      </RdsModal>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByRole('group')).toBeInTheDocument();
  });
});
