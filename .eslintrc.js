// @ts-check
/** @type {import('eslint').Linter.Config} */
const config = {
  extends: 'next/core-web-vitals',
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};

module.exports = config;
