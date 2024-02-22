import type { Preview } from '@storybook/web-components';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Getting Started',
          'Documentation',
          'Design Tokens',
          'Media',
          'Navigation',
          'Content',
          'Templates',
          'Pages',
          'Code Examples',
          'Utility Components',
        ],
      },
    },
  },
};

export default preview;
