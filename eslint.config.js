import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

const compat = new FlatCompat();
const { all } = js.configs;

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  { ignores: ['**/dist', '**/.nx'] },

  // Javascript
  {
    ...all,
    rules: {
      ...all.rules,
      'no-console': ['error', { allow: ['error', 'info'] }],
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
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
    settings: {
      'import/parsers': { '@typescript-eslint/parser': ['.js', '.ts', '.tsx'] },
      'import/resolver': { node: true, typescript: true },
    },
  }),

  ...compat.extends(
    'plugin:unicorn/all',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
  ),
  prettierConfig,
];
