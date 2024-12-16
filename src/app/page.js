"use client";

import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import Lazyloading from "../components/lazyloading";
import Navbar from "../components/navbar";
import About from "../components/about";

export default function Home() {
  const [loadingPreloader, setLoadingPreloader] = useState(true);
  const [endedLoading, setEndedLoading] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (loadingPreloader) {
      body?.classList.add("overflow-hidden");
      const preloaderTimeout = setTimeout(() => {
        setLoadingPreloader(false);
      }, 4000);
      const endedLoadingTimeout = setTimeout(() => {
        setEndedLoading(true);
      }, 3000);

      return () => {
        clearTimeout(preloaderTimeout);
        clearTimeout(endedLoadingTimeout);
      };
    } else {
      body?.classList.remove("overflow-hidden");
    }
  }, [loadingPreloader]);

  if (loadingPreloader) {
    return (
      <div>
        <Lazyloading endedLoading={endedLoading} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}
