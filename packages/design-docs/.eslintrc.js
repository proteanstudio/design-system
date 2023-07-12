module.exports = {
    root: true,
    env: {
        es2022: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/eslint-config-prettier'
    ],
    parserOptions: {
        ecmaVersion: 2022,
    },
    ignorePatterns: [
        '/protean-elements/',
        '/node_modules/',
        '/highlight.js/',
        '.eslintrc.js',
    ],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'vue/multi-word-component-names': 'off',
        'vue/component-tags-order': ['warn', {
            'order': [ 'style', 'script', 'template' ]
        }]
    },
    overrides: [
        {
            files: ['src/**'],
        },
    ],
};
