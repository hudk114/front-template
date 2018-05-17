import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
const { dev, prod } = require('./config');

const options = {
  input: 'src/index.js',
  output: {
    file: `dist/${dev.name}`,
    format: 'umd',
    // 暴露给window的name
    name: ''
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  options.output.file = `dist/${prod.name}`;
  options.plugins.push(uglify());
}

export default options;
