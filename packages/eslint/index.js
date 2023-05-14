module.exports = {
  extends: [
    'turbo',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'simple-import-sort',
    'unused-imports',
  ],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/no-extraneous-dependencies': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
};
