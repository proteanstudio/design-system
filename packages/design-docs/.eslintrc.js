module.exports = {
    root: true,
    env: {
        es2022: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2022,
    },
    ignorePatterns: ['/protean-elements/', '/node_modules/', '/highlight.js/'],
    rules: {
        'no-console': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': import.meta.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
        },
    ],
};
