import {component$, useStylesScoped$} from "@builder.io/qwik";
import {IScrollToTopProps} from "../scroll-to-top";
import styles from "./scroll-button.css?inline";

function scrollToTop(smooth: boolean = false) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}

export default component$<IScrollToTopProps>((props) => {
  useStylesScoped$(styles);
  const smooth = props.smooth || false;
  return <button
    onClick$={() => scrollToTop(smooth)}
    aria-label="Scroll to top"
    {...props}
    class={`scroll-to-top ${props.class}`}
  >
    {props.component || (
      <svg width={props.width} height={props.height} fill={props.color} viewBox={props.viewBox}>
        <path d={props.svgPath} />
      </svg>
    )}
  </button>;
});