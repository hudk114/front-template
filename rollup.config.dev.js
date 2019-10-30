import serve from 'rollup-plugin-serve';
import config from './rollup.config';
import path from 'path';
const { dev } = require('./config');

config.output.file = `dist/${dev.name}`;
config.plugins.push(
  ...[
    serve({
      port: dev.port,
      contentBase: [
        path.resolve(__dirname, './example/'),
        path.resolve(__dirname, './dist/')
      ]
    })
  ]
);

export default config;
