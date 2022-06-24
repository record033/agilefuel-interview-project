module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['prettier', 'simple-import-sort', 'eslint-plugin-react-hooks'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    'react/no-unstable-nested-components': [
      'off',
      {
        allowAsProps: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-return-assign': 'warn',
    'no-param-reassign': ['warn', { props: false }],
    'no-useless-escape': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    'no-bitwise': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_+$',
        argsIgnorePattern: '^_+$',
      },
    ],
    'no-empty': 'error',
    curly: ['error', 'all'],
    'newline-before-return': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['function'],
        next: '*',
      },
    ],
    'sort-imports': 'off',
    'import/order': 'off',
    'comma-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-plusplus': 'off',
    'react/no-array-index-key': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'prefer-regex-literals': 'off',
    'arrow-body-style': [
      'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // External packages.
          ['^react', '^@?\\w'],
          // Internal folders.
          ['^src/'],
          // Parent imports.
          ['^\\.\\.'],
          // Other relative imports. Put same-folder imports last.
          ['^\\./(?=[^/]*?/)', '^\\.'],
          // Style and types imports.
          ['\\.s?css$', '\\.styles', '\\.types'],
        ],
      },
    ],
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/display-name': 'off',
    'react/boolean-prop-naming': [
      'warn',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      },
    ],
    'react/destructuring-assignment': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-danger': 'off',
    'react/no-children-prop': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/function-component-definition': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: false,
        noSortAlphabetically: false,
      },
    ],
    'max-len': [
      'error',
      {
        tabWidth: 2,
        code: 120,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};
