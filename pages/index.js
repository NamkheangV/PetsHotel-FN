import Head from "next/head";
import Room from "@/components/Room";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Pets Hotel</title>
        <meta name="description" content="Pets Hotel,โรงแรมสัตว์เลี้ยง" />
      </Head>

      <Hero />
      <About />
      <Room />
      <Contact />
    </>
  );
}
