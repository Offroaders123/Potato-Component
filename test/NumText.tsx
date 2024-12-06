import { createSignal } from "solid-js";

export interface NumTextProps {
  value: string;
}

export default function NumText(props: NumTextProps) {
  const [getValue, setValue] = createSignal<string>(props.value);

  return (
    <>
      <ol></ol>
      <textarea
        value={getValue()}
        oninput={event => setValue(event.currentTarget.value)}
      />
    </>
  );
}

declare class NumTextElement extends HTMLElement {}

declare global {
  interface HTMLElementTagNameMap {
    "num-text": NumTextElement;
  }
}