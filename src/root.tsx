import {ScrollToTop} from "./components/scroll-to-top";
import uniqolor from "uniqolor";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
      {Array.from({length: 100}, (_, i) => (
        <div key={i}
             style={{
               width: '100%',
               height: '100px',
               backgroundColor: uniqolor(i).color,
             }}/>
      ))}

      <ScrollToTop />
      </body>
    </>
  );
};
