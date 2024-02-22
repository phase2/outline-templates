const destBasePath = 'dist';

const config = {
  destBasePath,
  assets: {
    dir: ['src/assets'],
    sync: ['dist', 'src/.storybook/static/dist'],
  },
  css: {
    global: [
      {
        src: '/public/global.css',
        dest: `${destBasePath}/global.css`,
      },
      // {
      //   src: 'src/tailwind.css',
      //   dest: `${destBasePath}/tailwind.css`,
      // },
    ],
  },
  js: {
    output: {
      lazy: false,
      eager: false,
      full: true,
      data: false,
    },
  },
  youtube: {
    defaultVideo: 'xiqgG8HUZXE',
  },
  vimeo: {
    defaultVideo: '432639001',
  },
  excludedStories: [],
};

export default config;
