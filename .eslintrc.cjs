module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      alias: {
        map: [['@', './src/']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: { version: 'detect' },
    tailwindcss: {
      config: './tailwind.config.ts',
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
        tsconfigRootDir: __dirname,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'sonarjs',
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'import-helpers',
    'prettier',
    'import',
    'tailwindcss',
  ],
  ignorePatterns: ['tailwind.config.ts', 'postcss.config.mjs'],
  rules: {
    'import/no-unresolved': 'error',
    'import/no-named-as-default': 0,
    'no-console': 'off',
    'consistent-return': 'off',
    'no-unused-expressions': [2, { allowTaggedTemplates: true }],
    'no-param-reassign': [2, { props: false }],
    'no-unused-vars': [
      1,
      { ignoreRestSiblings: true, argsIgnorePattern: 'res|next|^err' },
    ],
    eqeqeq: ['warn', 'always'],
    'no-nested-ternary': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],

    semi: ['error', 'never'],
    'prettier/prettier': 'error',

    'max-lines': [
      'error',
      { max: 1600, skipBlankLines: true, skipComments: true },
    ],

    // Import-helpers
    'import-helpers/order-imports': 'off',

    // Typescript
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',

    // SonarJS rules configuration
    'sonarjs/no-same-line-conditional': 'error',
    'sonarjs/no-small-switch': 'error',
    'sonarjs/cognitive-complexity': ['warn', 20],

    // Accessibility
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off', // Disabled for intentional click events on <div> elements

    // Tailwind
    'tailwindcss/no-arbitrary-value': 'error',
    'tailwindcss/no-custom-classname': 'off',

    // React v17 or higher
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
}
