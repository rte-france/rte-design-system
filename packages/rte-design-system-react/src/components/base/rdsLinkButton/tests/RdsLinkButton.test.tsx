/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { screen } from '@testing-library/react';
import { RdsIconId } from '@/shared/index.ts';
import { RenderWrapper } from '@/shared/tests/testUtils.tsx';
import { RdsLinkButton } from '../RdsLinkButton.tsx';

const TEST_LABEL = 'Label';
const TEST_ICON = RdsIconId.Add;
const TEST_ID = 'my-link';
const TEST_HREF_EXTERNAL = 'https://www.rte-france.com/';
const TEST_HREF_INTERNAL = '/test-route';

describe('RdsLinkButton', () => {
  it('renders the default RdsLinkButton component', () => {
    RenderWrapper.create(<RdsLinkButton label={TEST_LABEL} href={TEST_HREF_EXTERNAL} location="external" />)
      .withRouter()
      .render();
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link.textContent).toBe(TEST_LABEL);
  });

  it('renders the RdsLinkButton with the proper id when specified', () => {
    RenderWrapper.create(
      <RdsLinkButton label={TEST_LABEL} id={TEST_ID} href={TEST_HREF_EXTERNAL} location="external" />,
    )
      .withRouter()
      .render();
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the RdsLinkButton component with icon + label', () => {
    RenderWrapper.create(
      <RdsLinkButton label={TEST_LABEL} icon={TEST_ICON} href={TEST_HREF_EXTERNAL} location="external" />,
    )
      .withRouter()
      .render();
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link.textContent).toContain(TEST_LABEL);
    expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument();
  });

  it('renders the RdsLinkButton component with icon and no label', () => {
    RenderWrapper.create(<RdsLinkButton icon={TEST_ICON} href={TEST_HREF_EXTERNAL} location="external" />)
      .withRouter()
      .render();
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument();
  });

  it('renders the RdsLinkButton component with the expected href attribute', () => {
    RenderWrapper.create(<RdsLinkButton icon={TEST_ICON} href={TEST_HREF_EXTERNAL} location="external" />)
      .withRouter()
      .render();
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(screen.getByRole('link').getAttribute('href')).toBe(TEST_HREF_EXTERNAL);
  });

  it('renders the RdsLinkButton component with the expected href attribute', () => {
    RenderWrapper.create(<RdsLinkButton icon={TEST_ICON} href={TEST_HREF_EXTERNAL} location="external" />)
      .withRouter()
      .render();
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(screen.getByRole('link').getAttribute('href')).toBe(TEST_HREF_EXTERNAL);
  });

  it('renders the RdsLinkButton component with the expected internal route value', () => {
    RenderWrapper.create(<RdsLinkButton icon={TEST_ICON} href={TEST_HREF_INTERNAL} location="internal" />)
      .withRouter()
      .render();
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(screen.getByRole('link').getAttribute('href')).toBe(TEST_HREF_INTERNAL);
  });
});
