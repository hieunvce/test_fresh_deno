import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import HeroTitle from "../components/HeroTitle.tsx";
import Carousel from "../islands/Carousel.tsx";
import Campaign from "../components/Campaign.tsx";
import ThemeChanger from "../islands/ThemeChanger.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Deno Fresh App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/style.css" />
      </Head>
      <ThemeChanger/>
      <main className="max-w-screen-xl mx-auto">
        <Header active="/" />
        <div>
          <div className="flex h-[calc(100vh-80px)] items-center">
            <div className="w-2/3 border h-full flex flex-col justify-between">
              <div className="px-16 flex items-center justify-center flex-1">
                <HeroTitle />
              </div>
              <div className="py-8 border-t-1 px-8">
                <Campaign />
              </div>
            </div>
            <div className="w-1/3 border border-l-0 h-full px-8">
              <Carousel />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
