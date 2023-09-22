"use client"
import React from 'react';
import LocomotiveScrollSetup from './_components/LocomotiveScrollSetup';
import dynamic from 'next/dynamic';
import Carousel from "./_components/Carousel";

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
  "/bowling.jpg",
  "/diner.jpg",
  "/poolhall.jpg",
  "/restaurant.jpg",
  "/stairs.jpg",
]

export default function Home() {
  return (
    <main id="home" className="App relative">
      <LocomotiveScrollSetup />
      <DynamicHeader />
      <Carousel images={images} interval={5000} />
      <DynamicAbout />
      <DynamicProjects />
      <DynamicContact />
    </main>
  )
};
