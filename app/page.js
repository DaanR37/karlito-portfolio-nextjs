"use client"
import React from 'react';
import LocomotiveScrollSetup from './_components/LocomotiveScrollSetup';
import dynamic from 'next/dynamic';

const DynamicCarousel = dynamic(() => import('./_components/Carousel'), {
  ssr: false,
});
const DynamicAbout = dynamic(() => import('./about/page'), {
  ssr: false,
});
// const DynamicWork = dynamic(() => import('./work/page'), {
//   ssr: false,
// });
const DynamicContact = dynamic(() => import('./contact/page'), {
  ssr: false,
});

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
      <DynamicCarousel images={images} interval={5000} />
      <DynamicAbout />
      {/* <DynamicWork /> */}
      <DynamicContact />
    </main>
  )
};
