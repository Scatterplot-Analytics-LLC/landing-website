import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import importHelpers from 'eslint-plugin-import-helpers'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import sonarjs from 'eslint-plugin-sonarjs'
import tailwindcss from 'eslint-plugin-tailwindcss'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default [
  // Base recommended configs
  js.configs.recommended,

  // Global ignores
  {
    ignores: [
      'tailwind.config.ts',
      'postcss.config.mjs',
      'node_modules/**',
      '*.css',
      '*.svg',
      '.next/**',
      'src/components/ui/**',
      'src/hooks/use-toast.ts',
      '*.config.js',
    ],
  },

  // Config files override - exclude from TypeScript parser
  {
    files: ['*.config.{js,mjs,cjs}', 'next.config.js'],
    languageOptions: {
      parser: undefined,
      parserOptions: undefined,
      sourceType: 'module',
      globals: {
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-unsupported-features': 'off',
      '@typescript-eslint/no-unsupported-features/es-syntax': 'off',
    },
  },

  // Main configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        React: 'readonly',
      },
    },

    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'import-helpers': importHelpers,
      prettier,
      sonarjs,
      tailwindcss,
    },

    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          moduleDirectory: ['node_modules', 'src/'],
        },
        alias: {
          map: [['@', './']],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      react: {
        version: 'detect',
      },
      tailwindcss: {
        config: './tailwind.config.ts',
      },
    },

    rules: {
      // Import rules
      'import/no-unresolved': 'error',
      'import/no-named-as-default': 0,

      // General rules
      'no-console': 'off',
      'consistent-return': 'off',
      'no-unused-expressions': [2, { allowTaggedTemplates: true }],
      'no-param-reassign': [2, { props: false }],
      'no-unused-vars': 'off', // Turn off base rule as it conflicts with @typescript-eslint/no-unused-vars
      eqeqeq: ['warn', 'always'],
      'no-nested-ternary': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      semi: ['error', 'never'],

      // Prettier
      'prettier/prettier': 'error',

      // Max lines
      'max-lines': [
        'error',
        { max: 1600, skipBlankLines: true, skipComments: true },
      ],

      // Import-helpers
      'import-helpers/order-imports': 'off',

      // TypeScript
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      '@typescript-eslint/no-unused-vars': 'off', // Allow type-only usages

      // SonarJS rules
      'sonarjs/no-same-line-conditional': 'error',
      'sonarjs/no-small-switch': 'error',
      'sonarjs/cognitive-complexity': ['warn', 20],

      // Accessibility
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',

      // Tailwind
      'tailwindcss/no-arbitrary-value': 'error',
      'tailwindcss/no-custom-classname': 'off',

      // React
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/button-has-type': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      // 'react-hooks/rules-of-hooks': 'error',
      // 'react-hooks/exhaustive-deps': 'off',
      'react/destructuring-assignment': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: [
            'arrow-function',
            'function-declaration',
            'function-expression',
          ],
          unnamedComponents: 'arrow-function',
        },
      ],

      // Recommended rules from plugins
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...jsxA11y.configs.recommended.rules,
    },
  },
]
