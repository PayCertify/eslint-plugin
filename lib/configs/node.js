module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    es6: true,
    node: true
  },

  plugins: ['node'],

  extends: [
    'plugin:node/recommended'
  ],

  rules: {
    'node/no-unpublished-require': 'off'
  }
};