# Outline Storybook Starter-kit

This starter kit provides a comprehensive setup for developing web components using Outline, Storybook, and TypeScript. It aims to streamline the development and testing process by leveraging the power of Storybook for component visualization and testing.

## Tools Utilized

- **Outline**: Tooling infrastructure for modern web component development. [Outline GitHub](https://github.com/phase2/outline)
- **Storybook**: Development environment for UI components. [Storybook Docs](https://storybook.js.org/docs/web-components/introduction)
- **TypeScript**: Statically typed superset of JavaScript. [TypeScript Website](https://www.typescriptlang.org/)
- **PostCSS**: CSS preprocessor for transforming styles with JavaScript. [PostCSS Website](https://postcss.org/)
- **Vite**: Next-generation frontend build tool. [Vite Docs](https://vitejs.dev/)

## Getting Started

To begin using this starter kit, follow these steps:

1. Clone this `storybook` starter kit.
   - Inside a separate repository
   - Nested in another application
2. Install dependencies with `yarn install`.
3. Start the development server with `yarn dev`.

## Scripts

- `yarn start`: Alias for `yarn dev`.
- `yarn dev`: Alias for `yarn watch`.
- `yarn watch`: Concurrently runs all watch scripts.
- `yarn watch:bundle`: Watches Vite build.
- `yarn watch:vite`: Starts Vite development server.
- `yarn watch:storybook`: Starts Storybook development server.
- `yarn build`: Concurrently runs all build scripts.
- `yarn build:vite`: Builds project using Vite.
- `yarn build:storybook`: Builds Storybook for production.
- `yarn clean`: Concurrently runs all clean scripts.
- `yarn clean:dist`: Removes the dist directory.
- `yarn clean:storybook`: Removes the storybook-static directory.
- `yarn clean:modules`: Removes the node_modules directory.
- `yarn reset`: Cleans and reinstalls dependencies.
- `yarn restart`: Resets and starts the development server.
