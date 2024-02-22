# Components

> This directory contains all the web components in our library. Each component is a reusable piece of UI that encapsulates specific functionality and styles.

## Organizing components

When organizing components into subdirectories, consider the following:

- `shared``: This directory should contain components that are used across multiple projects or throughout the entire application. These could be buttons, headers, footers, or any other reusable UI elements.
- **Project Specific Directories (e.g., `project-a`, `project-b`)**: These directories should contain components that are specific to a particular project. This helps in isolating the components and makes it easier to manage the codebase.
- **Feature Specific Directories (e.g., `super-portable-feature-a`)**: If there are components that are used for a specific feature and this feature is shared across multiple projects, consider creating a separate directory for these components. This not only helps in code organization but also in code reusability.

Remember, the goal is to keep the codebase clean and organized. This makes it easier for other developers to navigate through the code and understand the structure of the application.

## Creating a New Component

To create a new component, follow these steps:

1. Create a new directory under the appropriate subdirectory in the `components` directory. The directory name should be the name of your component. For example, if you are creating a `login` component, the directory name should be `login`.
2. Inside this directory, create a new file with a `.ts` extension. This file will contain your Lit 2 component. The file name should be the same as the directory name. For example, `login.ts`.
3. In this file, define your component class that extends `LitElement`. Remember to import `LitElement` from `lit`.
4. Create a separate `.css` file in the same directory for your component's styles. This helps in separating the styles from the component logic and makes your code cleaner.
5. If your component needs any images or other assets, create an `assets` directory inside your component's directory and place your assets there.
6. Finally, define your component's properties, styles, and template in the `.ts` file.

## Best Practices

- Organize your components into subdirectories.
  - This helps with code organization and bundle splitting.
- Be sure to document your components with JSDoc comments.
  - This helps other developers understand your code.
  - This helps the robots auto document your code in other methods as well.
- Write tests for your components to ensure they work as expected.

**Happy coding!**

> In the land of logic we play,
> Crafting code night and day.
> Bugs may come and bugs may go,
> In the console, they will show.
>
> With each function, method, and class,
> We build our software to amass.
> Though challenges may make us groan,
> We know no bounds, in the code we've sown.
>
> So here's to the coders, one and all,
> In this world of brackets, big and small.
> May your code be clean and your bugs be few,
> Happy coding, from me to you.
