import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import path from 'path';

export default defineConfig(
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: path.resolve(
                    `${import.meta.dirname}/packages/protean-elements/`,
                ),
            },
        },
    },
);
