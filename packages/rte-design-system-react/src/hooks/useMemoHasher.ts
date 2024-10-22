/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { DependencyList, useMemo, useRef } from 'react';

const useMemoHasher = <T>(factory: () => T, deps: DependencyList, hash: (val: T) => string): T => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const next = useMemo(factory, deps);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextHash = useMemo(() => hash(next), [next]);
  const prevRef = useRef(next);
  const prevHashRef = useRef(nextHash);
  if (prevHashRef.current === nextHash) {
    return prevRef.current;
  } else {
    prevRef.current = next;
    prevHashRef.current = nextHash;
    return next;
  }
};

export default useMemoHasher;
