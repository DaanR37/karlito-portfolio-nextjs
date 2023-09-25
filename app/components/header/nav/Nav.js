"use client"
import React, { useState } from 'react'
import styles from './nav.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import NavLink from './navlink/NavLink';
import Curve from './curve/Curve';
import Footer from './footer/Footer';

{/* Was "/" at Home */}
const navItems = [
  {
    title: "Home",
    href: "/", 
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
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => { setSelectedIndicator(pathname) }}
          className={styles.nav}
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
