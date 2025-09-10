export default {
  bracketSpacing: true,
  arrowParens: 'avoid',
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/', '^\\.\\.?/', '^\\.\\.?$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsonRecursiveSort: true,
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
  ],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
