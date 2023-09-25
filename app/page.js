"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import LocomotiveScrollSetup from './components/LocomotiveScrollSetup';

const DynamicHeader = dynamic(() => import('./components/header/Header'), {
  ssr: false,
});
const DynamicHomepage = dynamic(() => import('./homepage/Page'), {
  ssr: false,
});
const DynamicAbout = dynamic(() => import('./about/Page'), {
  ssr: false,
});
const DynamicProjects = dynamic(() => import('./projects/Page'), {
  ssr: false,
});
const DynamicContact = dynamic(() => import('./contact/Page'), {
  ssr: false,
});


export default function Home() {
  return (
    <main className="w-full">
      <LocomotiveScrollSetup />
      <DynamicHeader />
      <DynamicHomepage />
      <DynamicAbout />
      <DynamicProjects />
      <DynamicContact />
    </main>
  )
};
