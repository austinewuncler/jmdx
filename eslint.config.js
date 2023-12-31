import { resolve } from 'node:path';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import reactAll from 'eslint-plugin-react/configs/all.js';
import globals from 'globals';

const compat = new FlatCompat();
const { all } = js.configs;

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  { ignores: ['**/.nx', '**/coverage', '**/dist'] },

  // Javascript
  {
    ...all,
    rules: {
      ...all.rules,
      'no-console': ['error', { allow: ['error', 'info'] }],
      'no-magic-numbers': 'off',
      'no-ternary': 'off',
      'one-var': ['error', 'never'],
      'sort-imports': 'off',
    },
  },

  // Typescript
  ...compat.config({
    extends: [
      'plugin:@typescript-eslint/strict-type-checked',
      'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    overrides: [
      {
        extends: 'plugin:@typescript-eslint/disable-type-checked',
        files: ['**/*.js'],
      },
      {
        files: ['apps/local/*.config.ts'],
        parserOptions: {
          project: 'tsconfig.node.json',
          tsconfigRootDir: resolve('apps', 'local'),
        },
      },
    ],
    parserOptions: { project: true },
  }),

  // Node
  ...compat.config({
    extends: 'plugin:n/recommended',
    overrides: [
      {
        files: ['**/src/**/*.ts?(x)'],
        rules: { 'n/no-unpublished-import': 'error' },
      },
      {
        files: ['**/*.{d,test}.ts?(x)', '**/__test__/*.ts?(x)'],
        rules: { 'n/no-unpublished-import': 'off' },
      },
    ],
    rules: {
      'n/no-missing-import': 'off',
      'n/no-unpublished-import': 'off',
    },
  }),

  // Import
  ...compat.config({
    extends: ['plugin:import/recommended', 'plugin:import/typescript'],
    plugins: ['simple-import-sort'],
    rules: {
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': ['error', { ignore: ['^~/'] }],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
    settings: {
      'import/parsers': { '@typescript-eslint/parser': ['.js', '.ts', '.tsx'] },
      'import/resolver': { node: true, typescript: true },
    },
  }),

  // Unicorn
  ...compat.config({
    extends: 'plugin:unicorn/all',
    rules: {
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        { allowList: { Props: true, env: true, props: true } },
      ],
    },
  }),

  // Regexp
  ...compat.config({
    extends: 'plugin:regexp/all',
    rules: { 'regexp/require-unicode-sets-regexp': 'off' },
  }),

  ...compat.extends('plugin:sonarjs/recommended', 'plugin:promise/recommended'),

  // React
  {
    files: ['apps/local/src/**/*.ts?(x)'],
    ...reactAll,
    languageOptions: {
      ...reactAll.languageOptions,
      globals: { ...globals.serviceworker, ...globals.browser },
    },
    rules: {
      ...reactAll.rules,
      'react/forbid-component-props': 'off',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' },
      ],
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-props-no-spreading': ['error', { exceptions: ['button'] }],
      'react/require-default-props': [
        'error',
        { functions: 'defaultArguments' },
      ],
    },
    settings: { react: { version: 'detect' } },
  },
  ...compat.config({
    overrides: [
      {
        extends: 'plugin:react-hooks/recommended',
        files: ['apps/local/src/**/*.ts?(x)'],
      },
      {
        extends: ['plugin:jsx-a11y/strict', 'plugin:tailwindcss/recommended'],
        files: ['apps/local/src/**/*.tsx'],
        plugins: ['react-refresh'],
        rules: {
          'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
          ],
          'tailwindcss/classnames-order': 'off',
        },
        settings: {
          tailwindcss: {
            config: resolve('apps', 'local', 'tailwind.config.ts'),
          },
        },
      },
    ],
  }),

  ...compat.config({
    overrides: [
      {
        extends: [
          'plugin:vitest/all',
          'plugin:jest-formatting/strict',
          'plugin:testing-library/react',
          'plugin:jest-dom/recommended',
        ],
        files: ['**/*.test.ts?(x)'],
        rules: {
          'testing-library/no-manual-cleanup': 'off',
          'vitest/no-hooks': ['error', { allow: ['afterEach', 'beforeEach'] }],
        },
      },
    ],
  }),

  prettierConfig,
];
