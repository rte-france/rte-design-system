/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { defineConfig } from 'vitest/config';
import path, { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['src'] }), svgr({ include: '**/*.svg' }), libInjectCss()],
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './testSetup.ts',
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'rte-design-system-react',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'tailwindcss', 'react-router-dom'],
      input: Object.fromEntries(
        glob
          .sync('src/**/*.{ts,tsx}', {
            ignore: ['src/**/*.d.ts'],
          })
          .map((file) => [
            // The name of the entry point
            // src/nested/foo.ts becomes nested/foo
            relative('src', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // src/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsx',
          tailwindcss: 'tailwindcss',
        },
      },
    },

    copyPublicDir: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
