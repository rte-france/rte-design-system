/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, renderHook, screen } from '@testing-library/react';
import { useState } from 'react';
import { RdsFloatingWrapper } from '../RdsFloatingWrapper.tsx';
import { RdsButton } from '@/components/base/index.ts';

const TEST_FLOATING_WRAPPER_ID = 'floating-wrapper-id';
const TEST_TRIGGER_COMPONENT = <RdsButton />;
const TEST_FLOATING_COMPONENT = <div role="region" />;

describe('RdsFloatingWrapper', () => {
  it('renders the RdsFloatingWrapper component with the expected trigger id and trigger component', () => {
    const { Trigger, Element } = RdsFloatingWrapper;
    const {
      result: {
        current: [show, setShow],
      },
    } = renderHook(() => useState<boolean>(false));
    render(
      <RdsFloatingWrapper show={show} setShow={setShow} id={TEST_FLOATING_WRAPPER_ID}>
        <Trigger>{TEST_TRIGGER_COMPONENT}</Trigger>
        <Element>{TEST_FLOATING_COMPONENT}</Element>
      </RdsFloatingWrapper>,
    );

    expect(document.querySelector(`#trigger-floating-${TEST_FLOATING_WRAPPER_ID}`)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders the RdsFloatingWrapper with its floating element and floating id', () => {
    const { Trigger, Element } = RdsFloatingWrapper;
    const {
      result: {
        current: [show, setShow],
      },
    } = renderHook(() => useState<boolean>(true));

    render(
      <RdsFloatingWrapper show={show} setShow={setShow} id={TEST_FLOATING_WRAPPER_ID} interactiveMode="hover">
        <Trigger>{TEST_TRIGGER_COMPONENT}</Trigger>
        <Element>{TEST_FLOATING_COMPONENT}</Element>
      </RdsFloatingWrapper>,
    );

    expect(document.querySelector(`#element-floating-${TEST_FLOATING_WRAPPER_ID}`)).toBeInTheDocument();
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
