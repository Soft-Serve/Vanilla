module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'import/extensions': ['off', 'never'],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 0,
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'global-require': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/ban-ts-ignore': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-multiple-empty-lines': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
      },
      webpack: {
        config: 'vue.config.js',
      },
    },
  },
  overrides: [
    {
      files: [
        './src/**/__tests__/*.spec.{j,t}s',
        './src/**/__mock__/*.{j,t}s',
      ],
      env: {
        jest: true,
      },
      rules: {
        'no-unused-expressions': 0,
      },
    },
  ],
};
