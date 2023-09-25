// "use client"
import React from 'react';
import dynamic from 'next/dynamic';
import LocomotiveScrollSetup from './components/LocomotiveScrollSetup';
import HomePage from "./homepage/page";
import ContactPage from "./contact/page";

const DynamicHeader = dynamic(() => import('./components/header/Header'), {
  ssr: false,
});
// const DynamicHomepage = dynamic(() => import('./homepage/page'), {
//   ssr: false,
// });
const DynamicAbout = dynamic(() => import('./about/page'), {
  ssr: false,
});
const DynamicProjects = dynamic(() => import('./projects/page'), {
  ssr: false,
});
// const DynamicContact = dynamic(() => import('./contact/page'), {
//   ssr: false,
// });


export default function Home() {
  return (
    <main className="w-full">
      <LocomotiveScrollSetup />
      <DynamicHeader />
      <HomePage />
      {/* <DynamicHomepage /> */}
      <DynamicAbout />
      <DynamicProjects />
      {/* <DynamicContact /> */}
      <ContactPage />
    </main>
  )
};
