"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import Carousel from "./_components/Carousel";
// import Contact from "./contact/page";
import LocomotiveScrollSetup from './_components/LocomotiveScrollSetup';

const DynamicHeader = dynamic(() => import('./_components/header/Header'), {
  ssr: false,
});
const DynamicAbout = dynamic(() => import('./about/page'), {
  ssr: false,
});
const DynamicProjects = dynamic(() => import('./projects/page'), {
  ssr: false,
});
const DynamicContact = dynamic(() => import('./contact/page'), {
  ssr: false,
});

const images = [
  "/homepageCarousel/bowling.jpg",
  "/homepageCarousel/diner.jpg",
  "/homepageCarousel/poolhall.jpg",
  "/homepageCarousel/restaurant.jpg",
  "/homepageCarousel/stairs.jpg",
]

export default function Home() {
  return (
    <main className="relative w-full">
      <LocomotiveScrollSetup />
      <DynamicHeader />
      <Carousel images={images} interval={5000} />
      <DynamicAbout />
      <DynamicProjects />
      <DynamicContact />
      {/* <Contact /> */}
    </main>
  )
};
