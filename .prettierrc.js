module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  printWidth: 100,
  arrowParens: 'avoid',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
