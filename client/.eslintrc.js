// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'airbnb-typescript',

    // formatter
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [],
  settings: {
    "react": {
      "version": "detect"
    },
    'import/extensions': [".js",".jsx",".ts",".tsx"],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts",".tsx"]
     },
     'import/resolver': {
         'node': {
             'extensions': [".js",".jsx",".ts",".tsx"]
         }
     }
  },
  rules: {
    // Use CamelCase
    "camelcase": ['error', {
      'properties':'always'
    }],

    // We should use preserverd code
    "@typescript-eslint/no-empty-function": 'off',
    "@typescript-eslint/no-unused-vars" : [
      'warn',
      {argsIgnorePattern: '^_'}
    ],
    "import/prefer-default-export": 'off',

    // props spreading is needed by HOC
    "react/jsx-props-no-spreading": 'off',

    // `switch` is not expression
    "no-nested-ternary": 'off',

    // Not true
    "no-use-before-define": 'off',
    "@typescript-eslint/no-use-before-define":'off',

    // Give up support for older OS
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["CustomLabel"],
      "labelAttributes": ["inputLabel"],
      "controlComponents": ["CustomInput"],
      "assert": "either",
      "depth": 3,
    }],

    // Erase only javascripts rules
    "react/prop-types": 'off',
    "import/extensions":['error','never'],
    "react/jsx-filename-extension": 'off',
    "default-case": 'off',
    "consistent-return": 'off',
    "no-param-reassign": ["error", { "props": false }],
  },
  overrides:[
    {
      "files":["src/reducers/**/*"],
      "rules":{
        // To prevent unexpected implicit structured type conversions on Reducer
        "@typescript-eslint/explicit-function-return-type": ["error",{
          "allowHigherOrderFunctions" : false,
          "allowTypedFunctionExpressions":false
        }],
      }
    },
    {
      "files":["src/actions/**/*"],
      "rules":{
        // To reduce the redux boilerplate on ActionCreators
        "@typescript-eslint/explicit-module-boundary-types": 'off',
      }
    }
  ]
}
