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
    require.resolve('./-private/ember/ember-data.js'),
    require.resolve('./-private/ember/ember-object.js'),
    require.resolve('./-private/ember/best-practices.js'),
    require.resolve('./-private/ember/possible-errors.js'),
    require.resolve('./-private/ember/stylistic-issues.js')
  ],

  overrides: [
    // Node files
    {
      files: [
        '.eslintrc.js',
        '.stylelintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      
      parserOptions: {
        sourceType: 'script'
      },
    
      env: {
        es6: true,
        node: true
      },
    
      plugins: ['node'],
    
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, require('./node').rules)
    }
  ]
};