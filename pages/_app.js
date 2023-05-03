import "@/styles/globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import AppContext from "@/lib/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppContext>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppContext>
    </>
  );
}
