/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*": ["eslint --fix"],
  "*.{ts,tsx}": [
    () => "tsc --project tsconfig.json --noEmit",
  ],
};
