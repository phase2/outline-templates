/**
 * @file This is the main entry point for the application.
 *
 * It imports and exports all the components and controllers that live inside the `src` directory.
 * This allows us to bundle everything together for easier distribution, testing and usage.
 *
 * @packageDocumentation
 */

// Importing specific components from the `src/components` directory
// import { Component1 } from './components/component1';
// import { Component2 } from './components/component2';
// import { OutlineAlert } from './components/shared/outline-alert/outline-alert';
import { OutlineExample } from './components/shared/outline-example/outline-example';
// import { OutlineCoreLink } from '@phase2/outline-core-link';
// Add more component imports as needed...

// Importing specific controllers from the `src/controllers` directory
// import { AdoptedStylesheets } from '@phase2/outline-adopted-stylesheets-controller';
// import { Controller1 } from './controllers/controller1';
// import { Controller2 } from './controllers/controller2';
// Add more controller imports as needed...

// Exporting all imported components and controllers for external use
export {
  // OutlineAlert,
  OutlineExample,
  // OutlineCoreLink,
  // Component1,
  // Component2,
  // Add more component exports as needed...
  //AdoptedStylesheets,
  // Controller1,
  // Controller2
  // Add more controller exports as needed...
};
