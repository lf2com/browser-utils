import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores(['node_modules/', 'dist/']),
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    name: 'js/ts',
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      curly: ['error', 'all'],
      'default-case': 'error',
      'default-case-last': 'error',
      eqeqeq: 'error',
      'no-duplicate-imports': 'error',
      'no-console': 'error',
      'no-fallthrough': 'error',
      'no-nested-ternary': 'error',
      'no-plusplus': 'error',
      'object-property-newline': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-spread': 'off',
    },
  },
  {
    name: 'ts/tsx',
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  eslintConfigPrettier
);
