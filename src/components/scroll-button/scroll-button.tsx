import {component$, Slot, useStylesScoped$} from "@builder.io/qwik";
import {IScrollToTopProps} from "../scroll-to-top";
import styles from "./scroll-button.css?inline";

export default component$<IScrollToTopProps>((props) => {
  useStylesScoped$(styles);
  const smooth = props.smooth || false;
  return <button
    id="qwik-scroll-to-top"
    data-smooth={smooth}
    aria-label="Scroll to top"
    {...props}
    class={`scroll-to-top ${props.class}`}
    style={{
      display: "none",
    }}
  >
    {props.useSlot ? <Slot /> : (
      <svg width={props.width} height={props.height} fill={props.color} viewBox={props.viewBox}>
        <path d={props.svgPath} />
      </svg>
    )}
  </button>;
});