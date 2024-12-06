export default function App() {
  return (
    <>
      <h1>Potato-Component</h1>
      <p>Hello world!</p>
      <num-text
        value="Coding is for geeks, like me!"
      />
    </>
  );
}

declare class AppComponentElement extends HTMLElement {}

declare global {
  interface HTMLElementTagNameMap {
    "app-component": AppComponentElement;
  }
}

declare module "solid-js" {
  export namespace JSX {
    interface HTMLElementTags {
      "app-component": HTMLAttributes<AppComponentElement>;
    }
  }
}