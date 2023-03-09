import { Head } from "$fresh/runtime.ts";
import Features from "../components/Features.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Deno Fresh App</title>
      </Head>
      <main>
        <Header active="/" />
        <div>
          <Hero />
          <Features />
        </div>
        <Footer />
      </main>
    </>
  );
}
