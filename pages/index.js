import Head from "next/head";
import Link from "next/link";
import { Carousel, Button, Divider } from "antd";
import styles from "@/styles/Home.module.css";
import Room from "@/components/Room";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Pets Hotel</title>
        <meta name="description" content="Pets Hotel,โรงแรมสัตว์เลี้ยง" />
      </Head>
      <Hero />
      <Room />
    </div>
  );
}
