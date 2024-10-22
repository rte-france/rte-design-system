const path = require('path');

/* eslint-env node */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: { browser: true, es2020: true, node: true },
  plugins: ['@amarant/eslint-plugin-i18n-json'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@amarant/i18n-json/identical-keys': [
      2,
      {
        filePath: path.resolve('./src/shared/i18n/fr.json'),
      },
    ],
    '@amarant/i18n-json/sorted-keys': [
      2,
      {
        order: 'asc',
        indentSpaces: 2,
      },
    ],
    '@amarant/i18n-json/identical-keys': 0,
    '@amarant/i18n-json/identical-placeholders': 0,
  },
};
