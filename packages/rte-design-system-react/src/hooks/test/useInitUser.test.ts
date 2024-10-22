/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { generateFixedUser } from '@/mocks/data/back/user.mocks';
import { renderHook } from '@testing-library/react';
import { useInitUser } from '../useInitUser';

describe('useInitUser', () => {
  it('init without user in session storage return null', () => {
    const { result } = renderHook(() => useInitUser());
    expect(result.current.user).toBeUndefined();
  });
  it('init with user in session storage return user data', () => {
    afterEach(() => sessionStorage.removeItem('user'));
    const user = generateFixedUser(1);
    sessionStorage.setItem('user', JSON.stringify(user));
    const { result } = renderHook(() => useInitUser());
    expect(result.current.user?.fullname).toBe(user.fullname);
  });
});
