"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Karlein from "../../public/images/profilepic/karlein.webp";

export default function About() {

  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  const variants = {
    hidden: { opacity: 0, y: "300px" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main ref={ref} id='about' className='about relative flex h-[100vh]'> {/* w-full */}
      <motion.div
        className="left-container relative w-[50%]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.4 }}
        variants={variants}
      >
        <Image
          src={Karlein}
          alt='Karlein profile picture'
          priority={true}
          rel="preload"
          as="image"
          fill
          // sizes="(max-width: 768px) 100vw,
          // (max-width: 1535px) 50vw,
          // 50vw"
          style={{
            objectFit: "cover",
            objectPosition: "left",
            width: "100%",
            borderRadius: "5px",
          }}
        />
      </motion.div>
      <motion.div
        className="right-container w-[50%] flex justify-center pt-14 px-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 1.2 }}
        variants={variants}
      >
        <p className='text-light text-lg max-w-[80%]'> {/* or max-w-[42.5vw] */}
          <span className="">
            Altijd ben ik op zoek naar unieke plekken, dat fascineert
            mij al mijn leven lang. Samen met een regisseur,
            artdirector of producent ga ik aan de slag om het perfecte
            plaatje te maken. Daarbij is het belangrijk efficiënt te werk
            te gaan, te kijken naar de locatie, de omgeving en het
            budget, maar ook creatief kunnen kijken naar oplossingen.
            Een andere invalshoek te kunnen geven.
            De perfectie locatie voor film, fotografie of een evenement,
            omdat ik het nou eenmaal niet kan laten net even het
            hoekje om te lopen of achter dat muurtje te kijken. Naast
            het actieve scouten heb ik door een nauwe samenwerking
            <br /> <br />
            met Bente Locations een enorm divers archief waarin we
            gerichte zoekopdrachten kunnen uitvoeren.
            Altijd ben ik op zoek naar unieke plekken, dat fascineert
            mij al mijn leven lang. Samen met een regisseur,
            artdirector of producent ga ik aan de slag om het perfecte
            plaatje te maken. Daarbij is het belangrijk efficiënt te werk
            te gaan, te kijken naar de locatie, de omgeving en het
            budget, maar ook creatief kunnen kijken naar oplossingen.
            Een andere invalshoek te kunnen geven.
            De perfectie locatie voor film, fotografie of een evenement,
            omdat ik het nou eenmaal niet kan laten net even het
            hoekje om te lopen of achter dat muurtje te kijken. Naast
            het actieve scouten heb ik divers archief waarin ik gerichte
            zoekopdrachten kan uitvoeren.
          </span>
        </p>
      </motion.div>
    </main>
  )
};
