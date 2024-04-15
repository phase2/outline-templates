import { ReactiveControllerHost, ReactiveController } from 'lit';
import { debounce } from '../utilities/debounce';

export type breakpointsRangeType = {
  min: number;
  max: number;
};

interface HostWithResizeController extends ReactiveControllerHost, HTMLElement {
  resizeController?: ResizeController;
}

/**
 * ResizeController class
 * @implements {ReactiveController}
 */
export class ResizeController implements ReactiveController {
  host: HostWithResizeController;
  resizeObserver: ResizeObserver;
  elementToObserve: Element;
  options: {
    debounce: number;
    breakpoints: number[];
    triggerElement: ReactiveControllerHost & HTMLElement;
  };
  currentComponentWidth: number;
  currentBreakpointRange: number;
  breakpointsRangeArray: breakpointsRangeType[] = [];

  /**
   * Create a constructor that takes a host and options
   * @param {ReactiveControllerHost & Element} host - The host element
   * @param {{debounce?: number; breakpoints?: number[]}} [options={}] - The options object
   */
  constructor(
    host: HostWithResizeController,
    options: {
      debounce?: number;
      breakpoints?: number[];
      triggerElement?: ReactiveControllerHost & HTMLElement;
    } = {}
  ) {
    // If component (host) already has resizeController attached - return early
    // e.g. outline-layout use its ancestor outline-container triggerElement,
    // but outline-container already added that controller for itself
    if (host.resizeController) {
      return;
    }

    const defaultOptions = {
      debounce: 0,
      breakpoints: [768],
      triggerElement: host,
    };

    /**
     * Remove any undefined variables from options object
     */
    const filteredOptionsObject = Object.fromEntries(
      Object.entries(options).filter(([_, value]) => value !== undefined)
    );
    this.options = { ...defaultOptions, ...filteredOptionsObject };

    // Store a reference to the host
    this.host = host;
    // Register for lifecycle updates
    host.addController(this);

    this.initializeBreakpointsRangeType();
  }

  /**
   * Initialize the breakpoints range array
   *
   * The default breakpoints array ([768]) will create this breakpoints range array:
   * [{min: 0, max: 767}, {min: 768, max: 100000}]
   *
   * If custom breakpoints array is provided, (for example [768, 1200, 2000]) this breakpoints range array will be created:
   * [{min: 0, max: 767}, {min: 768, max: 1199}, {min: 1200, max: 1999}, {min: 2000, max: 100000}]
   *
   */
  initializeBreakpointsRangeType() {
    // This will allow create an additional breakpoint from the last custom breakpoint to 100000
    this.options.breakpoints?.push(100000);

    let minBreakpoint = 0;
    this.options.breakpoints?.forEach(breakpoint => {
      const newBreakpointRange = {
        min: minBreakpoint,
        max: breakpoint - 1,
      };
      minBreakpoint = breakpoint;
      this.breakpointsRangeArray.push(newBreakpointRange);
    });
  }

  /**
   * Called when the host element is connected to the DOM
   */
  hostConnected() {
    if (!this.options.triggerElement.style.display) {
      // adding `display: block` to :host of component
      this.options.triggerElement.style.setProperty(
        'display',
        'var(--style-added-by-resize-controller, block)'
      );
    }
    // Initialize currentBreakpointRange value
    this.currentComponentWidth = this.options.triggerElement.clientWidth;
    this.calculateNewBreakpointRange();

    // Create a new ResizeObserver and pass in the function to be called when the element is resized
    this.resizeObserver = new ResizeObserver(
      (entries: ResizeObserverEntry[]) => {
        // Create a debounced version of the onElementResize function
        debounce(
          this.onElementResize.bind(this),
          this.options.debounce
        )(entries);
      }
    );

    // Observe the element for size changes
    this.resizeObserver.observe(this.options.triggerElement);
  }

  /**
   * Called when the host element is disconnected from the DOM
   */
  hostDisconnected() {
    this.resizeObserver.disconnect();
  }

  /**
   * Called when the element is resized
   * @param {ResizeObserverEntry[]} _entries - The ResizeObserverEntry array
   */
  onElementResize(_entries: ResizeObserverEntry[]) {
    this.currentComponentWidth = _entries[0].contentRect.width;

    // skip if width is not yet set
    if (this.currentComponentWidth) {
      this.calculateNewBreakpointRange();
    }
  }

  /**
   * Calculate the new breakpoint based on the current width
   */
  calculateNewBreakpointRange() {
    let newBreakpointRange = this.currentBreakpointRange;

    this.breakpointsRangeArray.forEach((breakpoint, index) => {
      if (
        this.currentComponentWidth >= breakpoint.min &&
        this.currentComponentWidth <= breakpoint.max
      ) {
        newBreakpointRange = index;
      }
    });

    if (newBreakpointRange !== this.currentBreakpointRange) {
      this.currentBreakpointRange = newBreakpointRange;
      this.host.requestUpdate();
    }
  }
}
