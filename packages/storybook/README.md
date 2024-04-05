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

### Clone the `Storybook` starter kit

```bash
git clone https://github.com/phase2/outline-templates
```

### Move starter kit to desired location

In this example, we'll move the `packages/storybook` directory to a new location where we will set up a stand alone design system based on this starter kit.

Assuming you are still in the directory where you ran the `git clone` command:

```bash
cp -R outline-templates/packages/storybook ./design-system
```

### Install and setup project basics

Enable version control with:

```bash
# Change to the directory created during the copy command.
cd design-system
# Setup git AND commit immediately to track changes.
git init -b main
git add .
git commit -m "chore(init): Initializing Design System."
# You could now push your code if you have a location, otherwise
# changes can now still be tracked locally during testing.
```

Install and start project with:

```bash
yarn install
yarn dev
```

## Development Environment(s)

When we use the `yarn dev` command in the Storybook starter-kit, we have two servers running in parallel. Two development environments, one for Storybook, and one for Vite are running. The following are the links available out of the box. As seen in the following code from `package.json`, we can see where we would customize the ports used at a per-project level, and how we would alter the links below.

- **Local Vite Environment:** [localhost:6001](http://localhost:6001/)
- **Local Storybook Environment:** [localhost:6002](http://localhost:6002/)

```json
{
  "scripts": {
    "dev": "yarn watch",
    "watch": "npm-run-all -n -p 'watch:**'",
    "watch:vite": "yarn vite dev --port 6001",
    "watch:storybook": "yarn storybook dev -p 6002"
  }
}
```

### Storybook Development Mode

Storybook serves as a dynamic platform for showcasing your components. By running the Storybook server, you can create `*.stories.ts` files or `*.md[x]` documentation that are directly tied to your components. This setup leverages Hot Module Replacement (HMR), ensuring that any modifications you make to your component files are instantly reflected in the Storybook UI. This real-time feedback loop is invaluable for developing and fine-tuning your components' visual and functional aspects in isolation.

### Vite Development Mode

Vite Development Mode provides a convenient way to test your components in a
simplified environment. At the root of Vite projects, there is an `index.html`
file that acts as the entry point for the application. This file is served by
the Vite dev server and can be used to manually test components.

Incorporating your web components into the `index.html` file allows you to
observe their behavior in a live setting. This is especially advantageous for
conducting swift experiments or demonstrations, as it bypasses the need for
an intricate setup. Additionally, Vite's development server employs Hot Module
Replacement (HMR), which means any changes you make to your components are
immediately updated in the browser without requiring a full page reload. This
feature streamlines the development process by providing instant feedback.

## Scripts

### `yarn start`

This command is an alias for `yarn dev`, which in turn starts the development server.

### `yarn dev`

An alias for `yarn watch`, this command initiates all the watch scripts to run concurrently.

### `yarn watch`

Runs all configured watch scripts at the same time, allowing for simultaneous monitoring and processing of changes across the project.

### `yarn watch:bundle`

Specifically watches the Vite build process for changes, ensuring that the build is updated with any changes made to the source files.

### `yarn watch:vite`

Starts the Vite development server, which serves your project with hot module replacement for a more efficient development experience.

### `yarn watch:storybook`

Launches the Storybook development server, providing a live preview of your components as you work on them.

### `yarn build`

Concurrently executes all build scripts, compiling the project for production deployment.

### `yarn build:vite`

Utilizes Vite to build the project, optimizing and bundling your code for production.

### `yarn build:storybook`

Builds your Storybook for production, outputting a static site that can be deployed or shared with stakeholders.

### `yarn clean`

Runs all "clean" scripts concurrently, which is useful for removing generated files and directories before a fresh build.

### `yarn clean:dist`

Removes the `dist` directory, clearing the distribution files from your project.

### `yarn clean:storybook`

Deletes the `storybook-static` directory, which contains the built version of Storybook.

### `yarn clean:modules`

Eliminates the `node_modules` directory, effectively removing all installed dependencies.

### `yarn reset`

Cleans the project by removing generated files and directories, then reinstalls all dependencies to ensure a clean state.

### `yarn restart`

Performs a reset of the project and then starts the development server, useful for when you want to start from a clean slate.
