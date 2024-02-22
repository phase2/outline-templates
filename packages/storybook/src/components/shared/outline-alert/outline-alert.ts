import { customElement } from 'lit/decorators.js';
//import { OutlineCoreAlert } from '@phase2/outline-core-alert';
import { LitElement, html } from 'lit';

/**
 * Alert component.
 *
 * @see {@link https://lit.dev/docs/components/defining/ | Defining components}
 * @see {@link https://www.npmjs.com/package/@phase2/outline-core-alert | @phase2/outline-core-alert }
 * @element outline-alert
 * @extends OutlineCoreAlert
 */
@customElement('outline-alert')
export class OutlineAlert extends LitElement {}

/**
 * TypeScript declaration extends the HTMLElementTagNameMap interface, adding the web component.
 * This enhances type checking and autocompletion in IDEs.
 *
 * @see {@link https://lit.dev/docs/components/defining/#typescript-typings | Providing good TypeScript typings}
 */
declare global {
  interface HTMLElementTagNameMap {
    'outline-alert': OutlineAlert;
  }
}
