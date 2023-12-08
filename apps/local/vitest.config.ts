import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        enabled: true,
        exclude: ['src/main.tsx', 'src/**/{index,*.d}.ts'],
        include: ['src/**/*.ts?(x)'],
      },
      environment: 'happy-dom',
      include: ['src/**/*.test.tsx'],
      setupFiles: 'src/__test__/setup.ts',
    },
  }),
);
