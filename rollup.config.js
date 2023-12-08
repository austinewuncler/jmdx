import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { defineConfig } from 'rollup';
import filesize from 'rollup-plugin-filesize';
import sizes from 'rollup-plugin-sizes';

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
