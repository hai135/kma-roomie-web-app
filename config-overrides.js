const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@font-size-base': '16px',
        '@layout-body-background': '#FFFFFF',
        '@layout-header-background': '#FFFFFF',
        '@layout-footer-background': '#FFFFFF',
        '@primary-color': '#3b82f6',
      },
    },
  })
)
