"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Karlein from "../../public/images/profilepic/karlein.webp";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  const variants = {
    hidden: { opacity: 0, y: "300px" },
    visible: { opacity: 1, y: 0 },
  };

  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  return (
    <main
      ref={ref}
      id="about"
      className="about relative flex 
        min-h-[100vh]"
    >
      {/* Parent Container Image */}
      <motion.div
        className="left-container relative 
            w-[50%] 
            md:w-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.4 }}
        variants={variants}
      >
        {isSmallScreen && inView && (
          <div
            className="darkOverlay absolute z-[1]
             top-0 left-0 w-full h-full 
             bg-[rgba(0,0,0,0.7)] backdrop-blur-[5px]"
          ></div>
        )}

        {/* Child Container Image */}
        <div
          className="relative flex 
            h-[100vh]
            md:absolute md:w-full"
        >
          <Image
            src={Karlein}
            alt="Karlein profile picture"
            priority={true}
            rel="preload"
            as="image"
            fill
            // sizes="(max-width: 768px) 100vw,
            // (max-width: 1535px) 50vw,
            // 50vw"
            style={{
              position: "absolute",
              objectFit: "cover",
              objectPosition: "left",
              width: "100%",
              borderRadius: "5px",
            }}
          />
        </div>
      </motion.div>

      {/* Container Text */}
      <motion.div
        className="right-container flex justify-center z-[2]
            w-[50%] px-4 pt-[15%]
            md:absolute md:w-full
            md:h-full md:items-center
            md:px-0 md:pt-0"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 1.2 }}
        variants={variants}
      >
        <p
          className="text-light font-semibold
            max-w-[80%] text-xl
            lg:max-w-[90%] lg:text-[17px]
            md:max-w-[75%] xs:text-base"
        >
          <span>
            Altijd gefascineerd door unieke plekken, heeft deze passie me mijn
            hele leven gegrepen. In samenwerking met regisseurs, artdirectors en
            producenten streef ik naar het creëren van het perfecte visuele
            verhaal. Efficiëntie staat centraal, met aandacht voor de locatie,
            de omgeving en het budget, terwijl ik tegelijkertijd een creatieve
            blik hanteer om alternatieve perspectieven te ontdekken. Mijn
            missie is om de ideale setting te vinden voor film, fotografie of
            evenementen. Met een gevarieerd archief, opgebouwd door actief te
            scouten, kan ik gerichte zoekopdrachten uitvoeren en zo het vermogen
            om buitengewone locaties te vinden nog verder versterken.
          </span>
        </p>
      </motion.div>
    </main>
  );
}
