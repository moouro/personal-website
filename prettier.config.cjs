/** @type {import("prettier").Config} */
module.exports = {
    

    ...require('prettier-config-standard'),
    pluginSearchDirs: [__dirname],
    plugins: [
        require.resolve('prettier-plugin-astro'),
        require.resolve('prettier-plugin-tailwindcss')
    ],
    overrides: [
        {
            files: ['*.astro', '*.json', '*.js'],
            options: {
                parser: ['astro', 'json']
            }
        }
    ],

    "useTabs": true,
    "singleQuote": true,
    "trailingComma": "none",
    "semi": false,
    "printWidth": 100


}
