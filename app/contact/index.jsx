"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import ContactForm from "@/components/contactform/ContactForm";
import MagneticHover from "../components/magneticHover/MagneticHover";

import styles from "./page.module.scss";
import Image from "next/image";

import PhoneIcon from "../../public/images/icons/svg/phone_1.svg";
import EmailIcon from "../../public/images/icons/svg/email_icon.svg";
import PinPoint from "../../public/images/icons/svg/pin_point.svg";
import ArrowUp from "../../public/images/icons/svg/arrow_up_colored.svg";
import KarlitoLogo from "../../public/images/logos/karlitos-way-logo.webp";

export default function Contact() {
  const scroll = new LocomotiveScroll();
  const targetId = "#home";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validation, setValidation] = useState("");
  // const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  function handleFormSubmit(e) {
    // e.preventDefault();

    if (!name) {
      setValidation("Voer een naam in aub");
      return;
    }
    if (!email) {
      setValidation("voor een geldig email adres in aub");
      return;
    }
    if (!message) {
      setValidation("Schrijf hier je bericht");
      return;
    }
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleScroll(targetId) {
    scroll.scrollTo(targetId, {
      duration: 3,
      lerp: 0.05,
      smoothWheel: true,
    });
  }

  return (
    <main id="contact" className="contact relative w-full h-[100vh]">
      <div className="absolute w-full h-full bg-dark">
        {/* Image Karlein with Camera */}
        <div
          className={`${styles.karlein} absolute w-1/2 h-full left-0 bg-[#587a97]`}
        ></div>

        <div className="absolute flex items-center justify-center w-full h-full">
          <div
            className="absolute flex
              w-[75vw] h-[70vh]
              rounded-[5px] bg-dark"
          >
            {/* Container Contact Form & Contact Details */}
            <div
              className="absolute flex
                    w-full h-full"
            >
              {/* Container Contact Form right Container */}
              <div
                className="absolute 
                  w-1/2 h-full right-0
                  flex justify-center items-center 
                bg-[#587a97]"
              >
                <div className="absolute w-full mx-auto">
                  <ContactForm
                    name={name}
                    email={email}
                    message={message}
                    validation={validation}
                    successMessage={successMessage}
                    onNameChange={handleNameChange}
                    onEmailChange={handleEmailChange}
                    onMessageChange={handleMessageChange}
                    onFormSubmit={handleFormSubmit}
                  />
                </div>
              </div>

              {/* Container Contact Details left Container */}
              <div
                className="relative flex
                      w-1/2 h-full"
              >
                {/* Container Icons with Text */}
                <div
                  className="absolute text-light
                    h-full mt-24
                    left-1/2 -translate-x-1/2
                    flex flex-col justify-start"
                >
                  {/* Icon 1 */}
                  <div
                    className="flex items-center justify-start
                      mb-6"
                  >
                    <div
                      className="relative
                      w-[45px] h-[45px]"
                    >
                      <motion.a
                        href="tel:0651230756"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute"
                      >
                        <Image
                          src={PhoneIcon}
                          alt=""
                          className="invert"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            opacity: "0.9",
                            filter: "invert(1)",
                          }}
                        />
                      </motion.a>
                    </div>
                    <a href="tel:0651230756" target="_blank" rel="noreferrer">
                      <p
                        className={`${styles.hoverUnderlineAnimation} ${styles.textShadow} relative ml-6`}
                      >
                        +31 (0) 6 512 307 56
                      </p>
                    </a>
                  </div>
                  {/* Icon 2 */}
                  <div
                    className="flex items-center justify-start
                      my-6"
                  >
                    <div
                      className="relative
                        w-[45px] h-[45px]"
                    >
                      <motion.a
                        href="mailto:info@karlein.nl"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute"
                      >
                        <Image
                          src={EmailIcon}
                          alt=""
                          className="invert"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            opacity: "0.9",
                            filter: "invert(1)",
                          }}
                        />
                      </motion.a>
                    </div>
                    <a
                      href="mailto:info@karlein.nl"
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                      <p
                        className={`${styles.hoverUnderlineAnimation} ${styles.textShadow} relative ml-6`}
                      >
                        info@karlein.nl
                      </p>
                    </a>
                  </div>
                  {/* Icon 3 */}
                  <div
                    className="flex items-center justify-start
                      mt-6"
                  >
                    <div
                      className="relative
                        w-[45px] h-[45px]"
                    >
                      <motion.a
                        href="https://goo.gl/maps/C8tcosBz27NuL5dt8"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute"
                      >
                        <Image
                          src={PinPoint}
                          alt=""
                          className="invert"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            opacity: "0.9",
                            filter: "invert(1)",
                          }}
                        />
                      </motion.a>
                    </div>
                    <a
                      href="https://goo.gl/maps/C8tcosBz27NuL5dt8"
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                      <p
                        className={`${styles.hoverUnderlineAnimation} ${styles.textShadow} relative ml-6`}
                      >
                        Amsterdam
                      </p>
                    </a>
                  </div>
                </div>

                {/* Logo Karlito Footer */}
                <motion.div
                  initial={{ y: "300px" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="
                      w-full
                      flex items-end justify-center"
                >
                  <div
                    className="
                      w-[250px] h-[100px]"
                  >
                    <Image
                      src={KarlitoLogo}
                      alt="Karlito Logo Footer"
                      priority={true}
                      rel="preload"
                      as="image"
                      // sizes="(max-width: 768px) 100vw,
                      // (max-width: 1535px) 50vw,
                      // 50vw"
                      // fill
                      style={{
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Scroll Up */}
        <div className="flex justify-center">
          <div
            className="absolute flex items-center
              bottom-0 mb-4
              w-[70px] h-[70px]"
          >
            <MagneticHover>
              <ul>
                <li
                  onClick={() => handleScroll(targetId)}
                  className="cursor-pointer"
                >
                  <Image
                    src={ArrowUp}
                    alt="Button for scrolling up"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      opacity: "0.9",
                    }}
                  />
                </li>
              </ul>
            </MagneticHover>
          </div>
        </div>
      </div>
    </main>
  );
}
