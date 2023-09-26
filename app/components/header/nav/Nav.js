"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import NavLink from './navlink/NavLink';
import Curve from './curve/Curve';
import Footer from './footer/Footer';

{/* was "/" on "home" */ }
const navItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Over mij",
    href: "#about",
  },
  {
    title: "Werk",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
]

export default function Nav({ closeMenu }) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu 
          fixed h-[100vh] right-0 top-0
          text-light bg-[rgb(41,41,41,0.875)] z-[11]"
    >
      <div className="body
          h-full p-[100px]
          3xl:p-[150px]
          2xl:p-[100px]
          flex flex-col justify-between box-border"
      >
        <div
          onMouseLeave={() => { setSelectedIndicator(pathname) }}
          className="nav
              mt-[80px] text-[45px]
              xl:mt-[60px] xl:text-[35px]
              flex flex-col gap-[12px]"
        >
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                closeMenu={closeMenu}>
              </NavLink>
            )
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  )
}
