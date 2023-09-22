"use client"
import React from 'react';
import LocomotiveScrollSetup from './_components/LocomotiveScrollSetup';
import dynamic from 'next/dynamic';

// import Header from "./_components/header/Header";
import Carousel from "./_components/Carousel";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import ProjectPage from "./projects/page";

const DynamicHeader = dynamic(() => import('./_components/header/Header'), {
  ssr: false,
});
const DynamicCarousel = dynamic(() => import('./_components/Carousel'), {
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
    <main className="App relative">
      <LocomotiveScrollSetup />
      <DynamicHeader />
      <DynamicCarousel images={images} interval={5000} />
      <DynamicAbout />
      <DynamicProjects />
      <DynamicContact />
    </main>
  )
};
