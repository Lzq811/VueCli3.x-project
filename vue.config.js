module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      less: {},
      postcss: {
        plugins: [
          require('postcss-adaptive')({
            remUnit: 192,
            baseDpr: 2,
            autoRem: true
            /**
            * remUnit: number, rem unit value (default: 75)
            * baseDpr: number, base device pixel ratio (default: 2)
            * remPrecision: number, rem value precision (default: 6)
            * hairlineClass: string, class name of 1px border (default 'hairlines')
            * autoRem: boolean, whether to transform to rem unit (default: false)
            * */
          })
        ]
      }
    }
  }
}