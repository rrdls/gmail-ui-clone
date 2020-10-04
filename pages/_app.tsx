import type { AppProps /*, AppContext */ } from "next/app";
import { GlobalStyles } from "../assets/styles/global";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
