// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from "eslint-config-prettier"
import tsParser from "@typescript-eslint/parser"

export default [
  {
    ignores : ["dist/*", "node_modules/*"]
  },
  {
    plugins : {
      prettierPlugin
    }
  },
  {
    files : ['**/*.ts'],
    languageOptions : {
      parser : tsParser
    }
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended
]