/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  darkMode: 'selector',
  prefix: 'rds-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    { pattern: /rotate-(0|1|2|3|6|45|90|180)/ },
    { pattern: /delay-(0|75|100|150|200|300|500|700|1000)/ },
    { pattern: /duration-(0|75|100|150|200|300|500|700|1000)/ },
    {
      pattern: /bg-(.*)-(.*)/,
      variants: ['hover'],
    },
    'bg-updates-notes',
    'max-h-14',
  ],
  theme: {
    screens: {
      sm: '1024px',
      md: '1280px',
      lg: '1440px',
      xl: '1920px',
    },
    colors: {
      primary: {
        50: 'var(--colors-primary-50, #f3f6fc)',
        100: 'var(--colors-primary-100,#e6eef8)',
        200: 'var(--colors-primary-200,#c7dbf0)',
        300: 'var(--colors-primary-300,#96bde3)',
        400: 'var(--colors-primary-400,#5e9ad2)',
        500: 'var(--colors-primary-500,#397ebe)',
        600: 'var(--colors-primary-600,#2964a0)',
        700: 'var(--colors-primary-700,#225082)',
        800: 'var(--colors-primary-800,#214770)',
        900: 'var(--colors-primary-900,#1f3b5b)',
        950: 'var(--colors-primary-950,#15253c)',
      },
      gray: {
        w: '#ffffff',
        50: '#f7f7f7',
        100: '#f2f4f4',
        200: '#eaeced',
        300: '#dddfe0',
        400: '#b7bec2',
        500: '#999fa1',
        600: '#6f767b',
        700: '#3b434a',
        800: '#292e33',
        900: '#11161a',
      },
      info: {
        50: '#eef7ff',
        100: '#d8ebff',
        200: '#baddff',
        300: '#8ac8ff',
        400: '#53aaff',
        500: '#2b86ff',
        600: '#1465fc',
        700: '#0d4fea',
        800: '#123fbb',
        900: '#153b93',
        950: '#122559',
      },
      error: {
        50: '#fff0f1',
        100: '#ffe5e7',
        200: '#ffccd1',
        300: '#ffa3ac',
        400: '#ff546a',
        500: '#ff3e5b',
        600: '#f71844',
        700: '#de0236',
        800: '#bd0536',
        900: '#a00836',
        950: '#630019',
      },
      success: {
        50: '#effef6',
        100: '#d9ffec',
        200: '#b5fdd9',
        300: '#65f8b0',
        400: '#3cec96',
        500: '#12d577',
        600: '#09b05f',
        700: '#0b8a4d',
        800: '#0e6d40',
        900: '#0e5937',
        950: '#01321c',
      },
      warning: {
        50: '#fef7eb',
        100: '#fce7c9',
        200: '#facf8e',
        300: '#f6ab4d',
        400: '#f8ab59',
        500: '#f38a3f',
        600: '#f36720',
        700: '#df4111',
        800: '#bc3115',
        900: '#a12c17',
        950: '#731807',
      },
      acc1: {
        50: '#fafce9',
        100: '#f3f8cf',
        200: '#e6f2a4',
        300: '#d3e86e',
        400: '#bed942',
        500: '#a4c424',
        600: '#7c9818',
        700: '#5e7417',
        800: '#4b5c18',
        900: '#404e19',
        950: '#212b08',
      },
      acc2: {
        50: '#f9f7fc',
        100: '#f3eff8',
        200: '#e6def0',
        300: '#d2c3e4',
        400: '#b89fd3',
        500: '#9979bc',
        600: '#7d5a9f',
        700: '#674883',
        800: '#563c6c',
        900: '#4a355a',
        950: '#2b1a38',
      },
      acc3: {
        50: '#edfdfe',
        100: '#d1f9fc',
        200: '#a9f2f8',
        300: '#6ee6f2',
        400: '#2bd0e5',
        500: '#0fb3cb',
        600: '#108faa',
        700: '#14738a',
        800: '#195e71',
        900: '#1a4d5f',
        950: '#0c3949',
      },
      acc4: {
        50: '#fff0f3',
        100: '#ffe1e9',
        200: '#ffc8d8',
        300: '#ff9bb8',
        400: '#ff6394',
        500: '#ff2c74',
        600: '#f60862',
        700: '#dc0059',
        800: '#ae034d',
        900: '#940749',
        950: '#530023',
      },
      acc5: {
        50: '#f8f7f8',
        100: '#f3f0f2',
        200: '#e7e3e6',
        300: '#d4cdd2',
        400: '#b9adb5',
        500: '#a2929c',
        600: '#8a7883',
        700: '#73636c',
        800: '#61535b',
        900: '#574c52',
        950: '#2f282c',
      },
      acc6: {
        50: '#fef4f2',
        100: '#fde8e3',
        200: '#fcd5cc',
        300: '#f9b7a8',
        400: '#f48d75',
        500: '#ec775c',
        600: '#d64c2c',
        700: '#b43d21',
        800: '#95351f',
        900: '#7c3120',
        950: '#43160c',
      },
      current: 'currentColor',
      transparent: 'transparent',
    },
    fontFamily: {
      body: ['"Nunito Sans Variable"'],
      sans: ['"Nunito Sans Variable"'],
    },
    spacing: {
      0: '0px',
      0.125: '1px',
      0.25: '2px',
      0.5: '4px',
      0.75: '6px',
      1: '8px',
      1.25: '10px',
      1.5: '12px',
      1.75: '14px',
      2: '16px',
      2.25: '18px',
      2.5: '20px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px',
      11: '88px',
      12: '96px',
      13: '104px',
      14: '112px',
      15: '120px',
      16: '128px',
      18: '144px',
      20: '160px',
      22: '176px',
      24: '192px',
      28: '224px',
      32: '256px',
      36: '288px',
      120: '960px',
      168: '1344px',
      '25vw': '25vw',
      '30vw': '30vw',
      '35vw': '35vw',
      '40vw': '40vw',
      '45vw': '45vw',
      '55vw': '55vw',
      '60vw': '60vw',
      '65vw': '65vw',
      '70vw': '70vw',
      '75vw': '75vw',
      '80vw': '80vw',
      '90vw': '90vw',
      '95vw': '95vw',
      '98vw': '98vw',
      fit: 'fit-content',
    },
    fontSize: {
      'button-xs': ['0.75rem', '0.75rem'],
      'button-s': ['0.875rem', '0.875rem'],
      'button-m': ['1rem', '1rem'],
      'body-xs': ['0.75rem', '1.125rem'],
      'body-s': ['0.875rem', '1.313rem'],
      'body-m': ['1rem', '1.5rem'],
      'body-l': ['1.125rem', '1.688rem'],
      'body-xl': ['1.25rem', '1.875rem'],
      'heading-xs': ['1rem', '1.2rem'],
      'heading-s': ['1.125rem', '1.35rem'],
      'heading-m': ['1.25rem', '1.5rem'],
      'heading-l': ['1.5rem', '1.8rem'],
      'heading-xl': ['1.75rem', '2.1rem'],
      'display-xs': ['2rem', '2.4rem'],
      'display-s': ['2.25rem', '2.7rem'],
      'display-m': ['2.625rem', '3.15rem'],
      'display-l': ['3rem', '3.6rem'],
      'display-xl': ['3.375rem', '4.05rem'],
      caption: ['0.75rem', '0.75rem'],
      overnote: ['0.75rem', '0.875rem'],
    },
    boxShadow: {
      1: '0px 2px 6px 0px rgba(17, 22, 26, 0.08)',
      2: '0px 2px 6px 0px rgba(17, 22, 26, 0.16)',
      3: '0px 4px 24px 0px rgba(17, 22, 26, 0.20)',
      4: '0px 2px 6px 0px rgba(17, 22, 26, 0.16), 0px 4px 10px 0px rgba(17, 22, 26, 0.10)',
      5: '0px 2px 6px 0px rgba(17, 22, 26, 0.16), 0px 6px 16px 0px rgba(17, 22, 26, 0.20)',
      6: '0px 2px 6px 0px rgba(17, 22, 26, 0.16), 0px 6px 16px 0px rgba(17, 22, 26, 0.20), 0px 16px 16px 0px rgba(17, 22, 26, 0.12)',
      7: '0px 2px 6px 0px rgba(0, 0, 0, 0.16), 0px 10px 20px 0px rgba(17, 22, 26, 0.20), 0px 24px 24px 0px rgba(17, 22, 26, 0.12)',
      'switch-unchecked-small': '1px 0px 1px 0px rgba(153, 159, 161, 0.10)',
      'switch-checked-small': '-1px 0px 1px 0px rgba(0, 156, 223, 0.10)',
      'switch-unchecked-medium': '1.5px 0px 1.5px 0px rgba(153, 159, 161, 0.10)',
      'switch-checked-medium': '-1.5px 0px 1.5px 0px rgba(0, 156, 223, 0.10)',
    },
    extend: {
      minWidth: {
        '3': '1.5rem',
        '1/2': '50%',
      },
      maxWidth: {
        168: '1344px',
        32: '256px',
      },
      maxHeight: {
        14: '112px',
      },
      gridTemplateRows: {
        'progress-bar-rows': '20px 8px 22px',
        'home-layout': '32px 144px',
      },
      gridTemplateColumns: {
        'progress-bar-columns': '100px 16px 32px',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
};
