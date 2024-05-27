import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

const settings = [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    extends: [
      'plugin:react/recommended',
      'plugin:jsx-ally/recommended',
      'plugin:prettier/recommended',
      'plugin:react-hooks/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];

export default settings;
