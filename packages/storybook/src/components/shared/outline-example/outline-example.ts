import { customElement } from 'lit/decorators.js';
import { LitElement, html } from 'lit';

import globalStyles from './styles/outline-example.global.css?inline';
import encapsulatedStyles from './styles/outline-example.encapsulated.css?inline';
import { AdoptedStyleSheets } from '../../../controllers/adopted-stylesheets';

/**
 * Example component.
 *
 * @see {@link https://lit.dev/docs/components/defining/ | Defining components}
 * @see {@link https://www.npmjs.com/package/@phase2/outline-example-alert | @phase2/outline-example-alert }
 * @element outline-example
 * @extends OutlineExample
 */
@customElement('outline-example')
export class OutlineExample extends LitElement {
  adoptedStyleSheets = new AdoptedStyleSheets(this, {
    globalCSS: globalStyles,
    encapsulatedCSS: encapsulatedStyles,
  });

  /**
   * Wrapping the rendered content in a div with the class "encapsulated-container".
   * This demonstrates the difference between encapsulated and light DOM styling.
   *
   * @category rendering
   * @returns {TemplateResult} The template to render.
   */
  render() {
    return html`
      <div class="encapsulated-container">
        <slot></slot>
      </div>
    `;
  }
}

/**
 * TypeScript declaration extends the HTMLElementTagNameMap interface, adding the web component.
 * This enhances type checking and autocompletion in IDEs.
 *
 * @see {@link https://lit.dev/docs/components/defining/#typescript-typings | Providing good TypeScript typings}
 */
declare global {
  interface HTMLElementTagNameMap {
    'outline-example': OutlineExample;
  }
}
