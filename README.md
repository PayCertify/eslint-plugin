# @paycertify/eslint-plugin

ESLint plugin for javascript projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@paycertify/eslint-plugin`:

```
$ npm install @paycertify/eslint-plugin --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@paycertify/eslint-plugin` globally.

## Usage

### Plugin

Add `eslint-plugin` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "plugins": [
        "@paycertify"
    ]
}
```

### Configs

Add `@paycertify` to the extends section of your `.eslintrc` configuration file to extends by all recommended JS rules:

```json
{
    "extends": [
        "plugin:@paycertify/recommended",
    ]
}
```

#### Available Configs

- `plugin:@paycertify/recommended` - recommended rules
- `plugin:@paycertify/ember` - ember.js rules
- `plugin:@paycertify/node` - node.js rules






