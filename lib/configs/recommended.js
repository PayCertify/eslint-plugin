module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
  },

  env: {
    es6: true
  },

  plugins: ['@paycertify'],

  extends: [
    'eslint:recommended',
    require.resolve('./-private/es6.js'),
    require.resolve('./-private/node.js'),
    require.resolve('./-private/variables.js'),
    require.resolve('./-private/best-practices.js'),
    require.resolve('./-private/possible-errors.js'),
    require.resolve('./-private/stylistic-issues.js')
  ],
};