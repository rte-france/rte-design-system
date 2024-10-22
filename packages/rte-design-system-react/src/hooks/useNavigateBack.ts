/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DEFAULT_LOCATION_KEY = 'default';

const useNavigateBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (fallbackRedirect: string, numberBack: number = 1) => {
      if (location.key !== DEFAULT_LOCATION_KEY) {
        return navigate(-numberBack);
      }
      return navigate(fallbackRedirect);
    },
    [location, navigate],
  );
};

export default useNavigateBack;
