import { render } from "solid-js/web";

import type { Component } from "solid-js";

export declare class ComponentClass<P extends Record<string, any>> extends HTMLElement {
  constructor(props: P);
}

export function createComponent<P extends Record<string, any>>(name: string, component: Component<P>): typeof ComponentClass<P> {
  const Component: Component<P> = component;
  const componentClass: typeof ComponentClass<P> = class extends HTMLElement {
    constructor(props: P) {
      super();
      render(() => <Component {...props}/>, this);
    }
  };
  customElements.define(name, componentClass);
  return componentClass;
}