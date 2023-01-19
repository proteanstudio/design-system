module.exports = {
    root: true,
    env: {
        es2022: true,
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
    ignorePatterns: [
        '/protean-elements/',
        '/node_modules/',
        '/highlight.js/',
        '.eslintrc.js',
    ],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
    },
    overrides: [
        {
            files: ['src/**'],
        },
    ],
};
