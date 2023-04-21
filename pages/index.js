import Head from "next/head";
import Room from "@/components/main/Room";
import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Contact from "@/components/main/Contact";

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
