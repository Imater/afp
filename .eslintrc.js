module.exports = {
  'extends': 'eslint-config-airbnb',
  'plugins': [
    'react'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'ecmaFeatures': {
    'jsx': true,
    'modules': true
  },
  'parser': 'babel-eslint',
  'rules': {
    'strict': 0
  },
  'rules': {
    'block-scoped-var': 0,
    'id-length': 0,
    'max-len': [1, 120],
    'no-console': 0,
    'no-unused-expressions': 0,
    'padded-blocks': 0,
    'react/display-name': 1,
    'react/forbid-prop-types': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-handler-names': 1,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': [1, {maximum: 3}],
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-quotes': 1,
    'react/jsx-sort-prop-types': 1,
    'react/jsx-sort-props': 1,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 0,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-is-mounted': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'react/wrap-multilines': 1
  }
};
