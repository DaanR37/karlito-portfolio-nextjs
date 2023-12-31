"use client"
import { useState, useEffect } from "react";
import Nav from "./nav/Nav";
import styles from "./header.module.scss";
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';


export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    setIsActive(prevIsActive => {
      if (prevIsActive) return false;
      return prevIsActive;
    });
  }, [pathname]);

  return (
    <>
      <header className={`${styles.header} fixed right-0 p-[30px] z-[12]
            xs:p-[25px]`}>
        <div onClick={() => { setIsActive(!isActive) }}
          className={`${styles.button} 
            w-[55px] h-[55px] 
            xs:w-[45px] xs:h-[45px]
            flex items-center justify-center 
            rounded-full bg-[#f8f0e5] 
            cursor-pointer`}
        >
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>

          </div>
        </div>
      </header>
      <AnimatePresence mode="wait">
        {isActive && <Nav closeMenu={closeMenu} />}
      </AnimatePresence>
    </>
  )
};
