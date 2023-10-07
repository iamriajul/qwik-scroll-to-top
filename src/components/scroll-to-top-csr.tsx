import {$, component$, useOnDocument, useSignal} from "@builder.io/qwik";
import ScrollButton from "./scroll-button/scroll-button";
import {IScrollToTopProps} from "./scroll-to-top";

export default component$<IScrollToTopProps>((props) => {
  const visible = useSignal(false);

  const top = props.top!;
  useOnDocument('scroll', $(() => {
    visible.value = document.documentElement.scrollTop >= top;
  }));

  return (
    <>
      {visible.value && <ScrollButton {...props} />}
    </>
  );
});