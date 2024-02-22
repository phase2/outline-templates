# Reactive Controllers in Lit

Reactive controllers are a powerful feature in Lit that allow you to encapsulate and manage pieces of functionality in a reusable way. They can be used to manage side effects, encapsulate complex state logic, and more.

## What are Reactive Controllers?

Reactive controllers are classes that encapsulate a piece of functionality or logic that is used in a Lit component. They are designed to be reusable and can be shared between different components. The controller's lifecycle is tied to the component it's used in, meaning it can react to changes in the component's lifecycle.

## Example: Simple State Controller

Let's create a simple reactive controller that attaches a piece of state data to any Lit component that implements it. This controller will manage a `message` state that can be updated and read by the component.

Here's the TypeScript code for the controller:

```typescript
class MessageController {
  host: ReactiveControllerHost;
  message: string;

  constructor(host: ReactiveControllerHost, initialMessage: string) {
    this.host = host;
    this.host.addController(this);
    this.message = initialMessage;
  }

  setMessage(newMessage: string) {
    this.message = newMessage;
    this.host.requestUpdate();
  }
}
```

And here's how you can use this controller in a Lit component:

```typescript
import { LitElement, html } from 'lit';
import { MessageController } from './MessageController';

class MyElement extends LitElement {
  messageController = new MessageController(this, 'Initial message');

  render() {
    return html`
      <p>${this.messageController.message}</p>
      <button @click=${() => this.messageController.setMessage('New message')}>
        Update message
      </button>
    `;
  }
}
```

In the above example, `MyElement` uses `MessageController` to manage a `message` state. The `message` is displayed in the component's template and can be updated by clicking a button.
