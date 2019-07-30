module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  env: {
    browser: true,
    es6: true,
  },

  plugins: ['ember'],

  extends: [
    'plugin:ember/recommended',
    require.resolve('./-private/ember/testing.js'),
    require.resolve('./-private/ember/ember-object.js'),
    require.resolve('./-private/ember/best-practices.js'),
    require.resolve('./-private/ember/possible-errors.js'),
    require.resolve('./-private/ember/stylistic-issues.js')
  ]
};