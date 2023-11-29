import {component$, Slot, useStylesScoped$} from "@builder.io/qwik";
import {IScrollToTopProps} from "../scroll-to-top";
import styles from "./scroll-button.css?inline";

export default component$<IScrollToTopProps>(({
  smooth = false,
  'class': clazz,
  style = {},
  useSlot,
  width,
  height,
  color,
  viewBox,
  svgPath,
  ...props
}) => {
  useStylesScoped$(styles);
  return <button
    {...props}
    id="qwik-scroll-to-top"
    data-smooth={smooth}
    aria-label="Scroll to top"
    class={`scroll-to-top ${clazz}`}
    style={{
      display: "none",
      ...style,
    }}
  >
    {useSlot ? <Slot /> : (
      <svg width={width} height={height} fill={color} viewBox={viewBox}>
        <path d={svgPath} />
      </svg>
    )}
  </button>;
});