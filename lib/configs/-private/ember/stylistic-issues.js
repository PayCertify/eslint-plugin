module.exports = {
  plugins: ['ember'],

  rules: {
    'ember/order-in-components': 'off',
    'ember/order-in-controllers': 'off',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',
  }
}