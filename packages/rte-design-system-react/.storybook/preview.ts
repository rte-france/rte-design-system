/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { Preview } from '@storybook/react';

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [],
  tags: ['autodocs'],

  initialGlobals: {
    locale: 'fr',
    locales: {
      en: 'English',
      fr: 'Français',
    },
  },
};

export default preview;
