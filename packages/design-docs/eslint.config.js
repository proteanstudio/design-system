import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default defineConfig(
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    eslintConfigPrettier,
    {
        plugins: {
            vue: pluginVue,
            '@typescript-eslint': tsEslint.plugin,
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.vue'],
            },
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.builtin,
            },
        },
        ignores: [
            '/protean-elements/',
            '/node_modules/',
            '/highlight.js/',
            '.eslintrc.js',
        ],
        rules: {
            'no-console': 'warn',
            'no-debugger': 'warn',
            'vue/multi-word-component-names': 'off',
            'vue/block-order': [
                'warn',
                {
                    order: ['style', 'script', 'template'],
                },
            ],
        },
    },
);
