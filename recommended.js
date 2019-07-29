module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    require.resolve('./lib/es6.js'),
    require.resolve('./lib/node.js'),
    require.resolve('./lib/variables.js'),
    require.resolve('./lib/best-practices.js'),
    require.resolve('./lib/possible-errors.js'),
    require.resolve('./lib/stylistic-issues.js')
  ],
};