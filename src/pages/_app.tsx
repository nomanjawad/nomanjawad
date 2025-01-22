import { AppProps } from "next/app";
import { Footer, Header, Preloader, SmoothScroll } from "@/components";

import "@/styles/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <Header />
      <main className="mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default MyApp;
