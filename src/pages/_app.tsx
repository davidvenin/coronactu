import "../glossy/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Coronactu - Tout ce que vous devez savoir avant de partir</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
