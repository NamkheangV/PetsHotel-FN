import "@/styles/globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
