import NumText from "./NumText.js";

export default function App() {
  return (
    <>
      <h1>Potato-Component</h1>
      <p>Hello world!</p>
      <NumText
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