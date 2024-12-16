import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppProps } from "next/app";
import "@/styles/responsive.css";
import "@/styles/bootstrap.min.css";
import "@/styles/globals.css";
import Preloader from "@/components/PreLoader";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Preloader />
      <Header />
      <main className="mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default MyApp;
