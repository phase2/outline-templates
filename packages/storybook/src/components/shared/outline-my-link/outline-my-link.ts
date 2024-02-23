import { customElement } from 'lit/decorators.js';
import { OutlineCoreLink } from '@phase2/outline-core-link';
/**
 * Alert component.
 *
 * @see {@link https://lit.dev/docs/components/defining/ | Defining components}
 * @see {@link https://www.npmjs.com/package/@phase2/outline-core-alert | @phase2/outline-core-alert }
 * @element outline-alert
 * @extends OutlineCoreAlert
 */

@customElement('outline-my-link')
export class OutlineMyLink extends OutlineCoreLink {
  firstUpdated() {
    console.log('I was here')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-my-link': OutlineMyLink;
  }
}
