import { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig } from 'vite';

const nodePath = '../node_modules/@phase2/outline-docs';

const config: StorybookConfig = {
  stories: [
    // Welcome guide.
    `${nodePath}/src/guides/welcome/00-welcome.mdx`,
    // Development guides.
    // `${nodePath}/src/guides/development/**/*.mdx`,
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  staticDirs: ['../public'],
  async viteFinal(config, { configType }) {
    // Be sure to return the customized config
    return mergeConfig(config, {
      // Customize the Vite config for Storybook
      resolve: {
        alias: { foo: 'bar' },
      },
    });
  },
};
export default config;
