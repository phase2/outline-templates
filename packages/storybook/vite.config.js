/**
 * @file Configures Vite for the project, setting up PostCSS plugins for CSS transformations.
 */
import { defineConfig } from 'vite';
import * as glob from 'glob';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNested from 'postcss-nested';
import postcssNestedImport from 'postcss-nested-import';
import postcssDiscardComments from 'postcss-discard-comments';
import ts from 'vite-plugin-ts';
import { terser } from 'rollup-plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [ts()],
  define: {
    'Reflect.decorate': 'undefined',
  },
  css: {
    postcss: {
      plugins: [
        /**
         * @see https://www.npmjs.com/package/postcss-preset-env
         * Applies a set of CSS transformations based on the latest CSS specifications.
         */
        postcssPresetEnv({ stage: 1 }),
        /**
         * @see https://www.npmjs.com/package/postcss-nested
         * Allows you to nest style rules inside each other, similar to Sass and Less.
         */
        postcssNested(),
        /**
         * @see https://www.npmjs.com/package/postcss-nested-import
         * Enables nested @import statements in CSS.
         */
        postcssNestedImport(),
        /**
         * @see https://www.npmjs.com/package/postcss-discard-comments
         * Discards comments in your CSS files during the PostCSS process.
         */
        postcssDiscardComments(),
      ],
    },
  },
  build: {
    lib: {
      entry: {
        // Manually curated component bundle
        index: 'src/index.ts',
        // Individual components
        ...Object.fromEntries(
          glob
            .sync('src/components/**/*.ts', {
              ignore: ['src/components/index.ts'],
            })
            .map((file) => [
              `components/${file.replace(/^src\/components\/|\.ts$/g, '')}`,
              file,
            ]),
        ),
      },
      formats: ['es'],
    },
    rollupOptions: {
      plugins: [
        terser({
          format: {
            comments: false,
          },
          mangle: {
            keep_classnames: false,
            reserved: [],
          },
        }),
      ],
    },
    minify: 'terser',
    sourcemap: true,
    target: 'esnext',
    TerserOptions: {
      maxWorkers: 16,
    },
  },
});
