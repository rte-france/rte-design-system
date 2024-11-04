/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { screen } from '@testing-library/react';
import { RdsIconId } from '@/shared/index.ts';
import { RenderWrapper } from '@/shared/tests/testUtils.tsx';
import { RdsLinkIconButton } from '../RdsLinkIconButton.tsx';

const TEST_ICON = RdsIconId.Add;
const TEST_ID = 'my-link';
const TEST_HREF_EXTERNAL = 'https://www.rte-france.com/';
const TEST_HREF_INTERNAL = '/test-route';

describe('RdsLinkIconButton', () => {
  it('renders the default RdsLinkIconButton component with icon', () => {
    RenderWrapper.create(<RdsLinkIconButton icon={TEST_ICON} href={TEST_HREF_EXTERNAL} location="external" />)
      .withRouter()
      .render();
    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.getByTitle(TEST_ICON)).toBeDefined();
  });

  it('renders the RdsLinkIconButton component with the proper id when specified', () => {
    RenderWrapper.create(
      <RdsLinkIconButton id={TEST_ID} icon={TEST_ICON} href={TEST_HREF_EXTERNAL} location="external" />,
    )
      .withRouter()
      .render();
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it('renders the RdsLinkIconButton component with the expected internal route value', () => {
    RenderWrapper.create(<RdsLinkIconButton icon={TEST_ICON} href={TEST_HREF_INTERNAL} location="internal" />)
      .withRouter()
      .render();
    const link = screen.getByRole('link');
    expect(link).toBeDefined();
    expect(screen.getByRole('link').getAttribute('href')).toBe(TEST_HREF_INTERNAL);
  });
});
