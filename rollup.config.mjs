import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default {
    input:'src/main',
    output:{
        file:"public/bundle.js",
        type:"esm"
    },
    plugins: [nodeResolve({extensions:[".js",".jsx"]}),commonjs(),
    replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        __buildDate__: () => JSON.stringify(new Date()),
        __buildVersion: 15
      })]
}