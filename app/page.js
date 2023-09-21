"use client"
import React from 'react';
import LocomotiveScrollSetup from './_components/LocomotiveScrollSetup';
import dynamic from 'next/dynamic';

// import Header from "./_components/header/Header";
import Carousel from "./_components/Carousel";
import AboutPage from "./about/page";
import WorkPage from "./work/page";
import ContactPage from "./contact/page";

const DynamicHeader = dynamic(() => import('./_components/header/Header'), {
  ssr: false,
});
// const DynamicCarousel = dynamic(() => import('./_components/Carousel'), {
//   ssr: false,
// });
// const DynamicAbout = dynamic(() => import('./about/page'), {
//   ssr: false,
// });
// const DynamicWork = dynamic(() => import('./work/page'), {
//   ssr: false,
// });
// const DynamicContact = dynamic(() => import('./contact/page'), {
//   ssr: false,
// });

const images = [
  "/bowling.jpg",
  "/diner.jpg",
  "/poolhall.jpg",
  "/restaurant.jpg",
  "/stairs.jpg",
]

export default function Home() {
  return (
    <main className="App relative">
      <LocomotiveScrollSetup />
      <DynamicHeader />
      {/* <Header /> */}
      <Carousel images={images} interval={5000} />
      <AboutPage />
      {/* <WorkPage /> */}
      <ContactPage />
    </main>
  )
};
