import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Options for the RevealTrigger controller.
 */
export type Options = {
  /**
   * The selector for the elements that trigger the reveal.
   */
  triggerSelector: string;
  /**
   * The class to add to the elements when they are revealed.
   */
  revealClass: string;
  /**
   * Whether to retrigger the reveal (by removing the class when the element is no longer in the viewport.)
   */
  retrigger?: boolean;
};

/**
 * The revealTrigger ReactiveController.
 *
 * This controller finds a class on the host element and adds a class when the element is in the viewport.
 * Very useful for animations - just add the class to the element and the animation will play when the element is in the viewport.
 *
 * @param host The host element
 */
export class RevealTrigger implements ReactiveController {
  host: ReactiveControllerHost & HTMLElement;
  options: Options;

  constructor(host: ReactiveControllerHost & HTMLElement, options: Options) {
    this.options = options;
    this.options = {
      triggerSelector: options.triggerSelector,
      revealClass: options.revealClass,
      retrigger: options.retrigger || false,
    };

    // Store a reference to the host
    this.host = host;
    // Register for lifecycle updates
    host.addController(this);
  }

  /**
   * Called when the host element is connected to the DOM.
   */
  hostConnected() {
    this.setRevealClasses(this.host, this.options);
  }

  /**
   * Sets the reveal classes on the host element.
   *
   * @param host The host element
   * @param options The options for the controller
   */
  setRevealClasses(host: HTMLElement, options: Options) {
    setTimeout(() => {
      const elementsToReveal = host.shadowRoot?.querySelectorAll(
        options.triggerSelector
      );

      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add(options.revealClass);
          } else if (options.retrigger) {
            entry.target.classList.remove(options.revealClass);
          }
        });
      });

      elementsToReveal?.forEach(element => {
        revealObserver.observe(element);
      });
    }, 0);
  }
}
