import { customElement } from 'lit/decorators.js';
import { html } from 'lit';

import { OutlineCoreLink } from '@phase2/outline-core-link';
import globalStyles from './styles/outline-link.global.css?inline';
import encapsulatedStyles from './styles/outline-link.encapsulated.css?inline';
import { AdoptedStylesheets } from '@phase2/outline-adopted-stylesheets-controller';

/**
 * Link component.
 *
 * @see {@link https://lit.dev/docs/components/defining/ | Defining components}
 * @see {@link https://www.npmjs.com/package/@phase2/outline-core-alert | @phase2/outline-core-alert }
 * @element outline-link
 * @extends OutlineCoreLink
 */
@customElement('outline-link')
export class OutlineLink extends OutlineCoreLink {
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

  /**
   * Overrides the render method from the parent class to wrap the rendered content
   * in a div with the class "encapsulated-container". This demonstrates the difference
   * between encapsulated and light DOM styling.
   *
   * @category rendering
   * @returns {TemplateResult} The template to render.
   */
  render() {
    return html` <div class="encapsulated-container">${super.render()}</div> `;
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
