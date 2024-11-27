import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppProps } from "next/app";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default MyApp;
