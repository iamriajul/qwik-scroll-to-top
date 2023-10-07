import {type ButtonHTMLAttributes, component$, useSignal, useVisibleTask$} from "@builder.io/qwik";
import ScrollButton from "./scroll-button/scroll-button";

export interface IScrollToTopProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  top?: number;
  smooth?: boolean;
  svgPath?: string;
  viewBox?: string;
  component?: any;
  width?: string;
  height?: string;
}


export const ScrollToTop = component$<IScrollToTopProps>(({
                                                            top = 20,
                                                            color = "black",
                                                            smooth = false,
                                                            component = "",
                                                            viewBox = "0 0 256 256",
                                                            svgPath = "M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z",
                                                            width = "28",
                                                            height = "28",
                                                            ...props
                                                          }) => {
  const visible = useSignal(false);

  useVisibleTask$(ctx => {
    const onScroll = () => {
      visible.value = document.documentElement.scrollTop >= top;
    }
    onScroll();
    document.addEventListener('scroll', onScroll);
    ctx.cleanup(() => document.removeEventListener('scroll', onScroll));
  });

  return (
    <>
      {visible.value && <ScrollButton
        top={top}
        smooth={smooth}
        color={color}
        component={component}
        viewBox={viewBox}
        svgPath={svgPath}
        width={width}
        height={height}
        {...props}
      />}
    </>
  );
});