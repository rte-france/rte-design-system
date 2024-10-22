/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { renderHook } from '@testing-library/react';
import { useStdId } from '../useStdId';

const PREFIX = 'test';
const ID = 'id';
const NEW_ID = 'new value';

describe('useStdId', () => {
  it('init with no id should return an autogenerate id', () => {
    const { result } = renderHook(() => useStdId(PREFIX));
    expect(result.current).toBeDefined();
  });
  it('init with id should return this id with prefix', () => {
    const { result } = renderHook(() => useStdId(PREFIX, ID));
    expect(result.current).toBe(ID);
  });
  it('change id after first id', () => {
    const initialProps = { prefix: PREFIX, id: ID };
    const { result, rerender } = renderHook(({ prefix, id }) => useStdId(prefix, id), { initialProps });
    rerender({ ...initialProps, id: NEW_ID });
    expect(result.current).toBe(NEW_ID);
  });
});
