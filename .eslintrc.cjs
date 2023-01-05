module.exports = {
    root: true,
    extends: [
        '@antfu/eslint-config-vue',
        'plugin:tailwindcss/recommended'
    ],
    plugins: ['tailwindcss'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'import/named': 'off',
        'import/no-unresolved': 'off',
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/comma-dangle': ['error', 'never'],
        '@typescript-eslint/indent': ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/component-tags-order': ['error', {
            order: [['template', 'script'], 'style']
        }]
    }
}
