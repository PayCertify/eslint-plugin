module.exports = {
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "generator-star-spacing": "error",
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "no-duplicate-imports": "error",
    // "no-restricted-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    // "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": true,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": true
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "prefer-numeric-literals": "error",
    // "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    // "sort-imports": "error",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error"
  }
}