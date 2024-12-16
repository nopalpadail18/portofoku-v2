"use client";

import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function Hero() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Web developer & Mobile developer",
      src: "/assets/images/gambar-1.jpeg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "Web developer & Mobile developer",
      src: "/assets/images/gambar-2.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Web developer & Mobile developer",
      src: "/assets/images/gambar-3.jpeg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Web developer & Mobile developer",
      src: "/assets/images/gambar-4.jpeg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "Web developer & Mobile developer",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const words = [
    { text: "From" },
    { text: "zero" },
    { text: "to" },
    { text: "hero" },
    { text: "🤙🏻" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:pb-40 relative">
      <div className="flex flex-col justify-center items-start px-4 md:px-40 md:mt-36 relative z-10">
        <div className="text-4xl md:text-6xl text-gray-900 dark:text-white font-bold mb-1 relative z-20">
          <TypewriterEffectSmooth words={words} />
        </div>
        <p className="text-base md:text-2xl text-gray-700 dark:text-gray-400 relative z-20">
          I am passionate about building technology that emp🔥wers people
        </p>
      </div>

      <div className="h-[240px] relative z-10">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}

export default Hero;
