import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import sizes from 'rollup-plugin-sizes';
import filesize from 'rollup-plugin-filesize';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    banner: '#!/usr/bin/env node',
    file: 'dist/index.js',
    format: 'module',
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    nodeResolve({ exportConditions: ['node'], extensions: ['.ts'] }),
    commonjs(),
    sizes(),
    filesize(),
  ],
});
