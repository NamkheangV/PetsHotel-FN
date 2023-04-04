import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout className="mainLayout">
      <Component {...pageProps} />
    </Layout>
  );
}
