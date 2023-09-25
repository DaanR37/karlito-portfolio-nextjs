"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import LocomotiveScrollSetup from './components/LocomotiveScrollSetup';
import HomePage from "../app/homepage";


const DynamicHeader = dynamic(() => import('./components/header/Header'), {
  ssr: false,
});
// const DynamicHomepage = dynamic(() => import('./homepage'), {
//   ssr: false,
// });
const DynamicAbout = dynamic(() => import('./about'), {
  ssr: false,
});
const DynamicProjects = dynamic(() => import('./projects'), {
  ssr: false,
});
const DynamicContact = dynamic(() => import('./contact'), {
  ssr: false,
});


export default function Home() {
  return (
    <main className="relative w-full">
      <LocomotiveScrollSetup />
      <DynamicHeader />
      <HomePage />
      {/* <DynamicHomepage /> */}
      <DynamicAbout />
      <DynamicProjects />
      <DynamicContact />
    </main>
  )
};
