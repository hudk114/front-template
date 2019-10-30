import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';
const { dev } = require('./config');

const options = {
  input: 'src/index.ts',
  output: {
    file: `dist/${dev.name}`,
    format: 'umd',
    // 暴露给window的name
    name: ''
  },
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};

export default options;
