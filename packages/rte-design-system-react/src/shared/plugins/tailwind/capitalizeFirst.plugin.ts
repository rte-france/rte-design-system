/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import plugin from 'tailwindcss/plugin';

// eslint-disable-next-line @typescript-eslint/unbound-method
const capitalizeFirst = plugin(({ addUtilities }) => {
  const newUtilities = {
    '.capitalize-first:first-letter': {
      textTransform: 'uppercase',
    },
  };
  addUtilities(newUtilities);
});

export default capitalizeFirst;
