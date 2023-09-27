module.exports = {
  root: true,
  extends: [
    'universe',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'max-len': ['warn', { code: 120 }],
    'react/react-in-jsx-scope': 0,
    'no-alert': 'warn',
    'no-use-before-define': ['error', { variables: false }],
    'no-restricted-exports': [0, { restrictedNamedExports: ['default'] }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'import/no-anonymous-default-export': 0,
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-raw-text': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
