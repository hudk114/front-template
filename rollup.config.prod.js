import uglify from 'rollup-plugin-uglify';
import config from './rollup.config';
const { prod } = require('./config');

config.output.file = `dist/${prod.name}`;
config.plugins.push(
  ...[
    uglify()
  ]
);

export default config;
