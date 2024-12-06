import { render } from "solid-js/web";

import type { Component } from "solid-js";

declare class ComponentClass<P extends Record<string, any>> extends HTMLElement {
  constructor(props: P);
}

export type { ComponentClass };

export function createComponent<K extends keyof HTMLElementTagNameMap, P extends Record<string, any>>(name: K, component: Component<P>): typeof ComponentClass<P> {
  const componentClass: typeof ComponentClass<P> = class extends HTMLElement {
    constructor(props: P) {
      super();
      render(() => component({ ...props }), this);
    }
  } satisfies CustomElementConstructor;
  customElements.define(name, componentClass);
  return componentClass;
}