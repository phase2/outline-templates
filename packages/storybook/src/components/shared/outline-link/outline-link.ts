import { customElement } from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import globalStyles from './styles/outline-link.global.css?inline';
import encapsulatedStyles from './styles/outline-link.encapsulated.css?inline';
import { AdoptedStylesheets } from '@phase2/outline-adopted-stylesheets-controller';

/**
 * Alert component.
 *
 * @see {@link https://lit.dev/docs/components/defining/ | Defining components}
 * @see {@link https://www.npmjs.com/package/@phase2/outline-core-alert | @phase2/outline-core-alert }
 * @element outline-alert
 * @extends OutlineCoreAlert
 */
@customElement('outline-link')
export class OutlineLink extends LitElement {
  GlobalStylesheets: AdoptedStylesheets | undefined = new AdoptedStylesheets(
    this,
    globalStyles,
    document,
  );

  EncapsulatedStylesheets: AdoptedStylesheets | undefined;

  createRenderRoot() {
    const root = super.createRenderRoot();
    this.EncapsulatedStylesheets = this.shadowRoot
      ? new AdoptedStylesheets(this, encapsulatedStyles, this.shadowRoot)
      : undefined;
    return root;
  }

  render() {
    return html` <div class="encapsulated-container">
      <slot></slot>
    </div>`;
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
    'outline-link': OutlineLink;
  }
}
