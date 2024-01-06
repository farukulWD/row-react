import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import  babel  from "@rollup/plugin-babel";

export default {
  input: "src/main",
  output: {
    file: "public/bundle.js",
    type: "esm",
  },
  plugins: [
    nodeResolve({ extensions: [".js", ".jsx"] }),
   
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15,
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
  ],
};
