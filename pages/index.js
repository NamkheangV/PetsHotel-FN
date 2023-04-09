import Head from "next/head";
import Room from "@/components/Room";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Pets Hotel</title>
        <meta name="description" content="Pets Hotel,โรงแรมสัตว์เลี้ยง" />
      </Head>

      <Hero />
      <Room />
      <Contact />
    </div>
  );
}
