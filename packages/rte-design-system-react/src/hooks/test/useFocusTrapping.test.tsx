/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import useFocusTrapping from '../useFocusTrapping';

describe('useFocusTrapping', () => {
  let container: HTMLDivElement;
  let button1: HTMLButtonElement;
  let button2: HTMLButtonElement;
  let button3: HTMLButtonElement;

  beforeEach(() => {
    container = document.createElement('div');
    button1 = document.createElement('button');
    button2 = document.createElement('button');
    button3 = document.createElement('button');

    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);

    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should trap focus when show is true', () => {
    const ref = { current: container };
    renderHook(() => useFocusTrapping(ref, true));

    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
    const shiftTabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true });

    // Test forward tabbing
    button3.focus();
    button3.dispatchEvent(tabEvent);
    expect(document.activeElement).toBe(button1);

    // Test backward tabbing
    button1.focus();
    button1.dispatchEvent(shiftTabEvent);
    expect(document.activeElement).toBe(button3);
  });

  it('should not trap focus when show is false', () => {
    const ref = { current: container };
    renderHook(() => useFocusTrapping(ref, false));

    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });

    button3.focus();
    button3.dispatchEvent(tabEvent);
    expect(document.activeElement).not.toBe(button1);
  });

  it('should clean up event listener on unmount', () => {
    const ref = { current: container };
    const removeEventListenerSpy = vi.spyOn(container, 'removeEventListener');

    const { unmount } = renderHook(() => useFocusTrapping(ref, true));
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
  });
});
