/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { DependencyList } from 'react';
import usePrevious from './usePrevious';

export const useEffectDebugger = (dependencies: DependencyList, dependencyNames: Array<string> = [], tag?: string) => {
  const previousDeps = usePrevious(dependencies, []);

  const changedDeps = Object.fromEntries(
    dependencies
      .map((dependency, index) => {
        const keyName = dependencyNames[index] || index;
        return [
          keyName,
          {
            before: previousDeps[index],
            after: dependency,
          },
        ] as const;
      })
      .filter((item) => item[1].after !== item[1].before),
  );

  if (Object.keys(changedDeps).length) {
    // eslint-disable-next-line no-console
    console.log(`[${tag || 'use-effect-debugger'}] `, changedDeps);
  }
};
