import { defineConfig } from 'vite';
import postcssNesting from 'postcss-nesting';
// https://vitejs.dev/config/

// Library build
export default defineConfig({
  base: './',
  define: {
    'Reflect.decorate': 'undefined',
  },
  css: {
    postcss: {
      plugins: [postcssNesting()],
    },
  },
  build: {
    lib: {
      entry: {
        // Component Library Bundles
        index: 'src/index.ts',
        // components: 'src/components/index.ts',
        // Individual Component Bundles
        // component1: 'src/components/component1.ts',
        // component2: 'src/components/component2.ts',
        // Add more components as needed.
      },
      formats: [
        // 'es' is the default format, modules are bundled to .mjs files
        'es',
        // Uncomment the following line to generate CommonJS bundles.
        'cjs',
      ],
    },
    minify: false,
  },
});
