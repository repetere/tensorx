import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
// import async from 'rollup-plugin-async';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import pkg from './package.json';

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify 
  // `file` and `format` for each target)
  {
    input: 'index.mjs',
    external: [
      '@tensorflow/tfjs-node',
      '@tensorflow/tfjs',
      'lodash.range',
      // 'lodash.rangeright'
    ],
    output: [
      {
        exports: 'named',
        file: pkg.node,
        name: 'tensorscript',
        format: 'cjs',
      },
      {
        exports: 'named',
        file: pkg.es,
        name: 'tensorscript',
        format: 'es',
      },
    ],
  },
];
