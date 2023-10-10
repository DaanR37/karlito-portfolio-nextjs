"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import ContactForm from "@/components/contactform/ContactForm";
import MagneticHover from "../components/magneticHover/MagneticHover";
import { poppins } from "@/fonts";

import styles from "./page.module.scss";
import Image from "next/image";

import PhoneIcon from "../../public/images/icons/svg/phone_1.svg";
import EmailIcon from "../../public/images/icons/svg/email_icon.svg";
import PinPoint from "../../public/images/icons/svg/pin_point.svg";
import ArrowUp from "../../public/images/icons/svg/arrow_up_colored.svg";

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
    <main
      id="contact"
      className="contact relative 
        w-full h-[100vh]
        lg:h-[200vh]
        xs:h-[150vh]"
    >
      <div className="absolute w-full h-full bg-dark">
        {/* Image Karlein with Camera */}
        <div
          className="absolute 
            w-1/2 h-full left-0 
            bg-[#949595]"
          style={{
            backgroundImage: 'url("/images/profilepic/Karlito_x4-left.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionX: "left",
            backgroundPositionY: "10%",
          }}
        ></div>

        <div
          className="relative w-full h-full 
              flex items-center justify-center"
        >
          <div
            className="relative flex rounded-[5px] bg-dark
              w-[75vw] h-[70vh]
              lg:border-solid lg:border-light 
              lg:border-[1px] lg:rounded-[10px]
              lg:w-[80vw] lg:h-[170vh]
              xs:w-[80vw] xs:h-[120vh]"
          >
            {/* Container Contact Form & Contact Details */}
            <div
              className="relative flex
                    w-full h-full"
            >
              {/* Container Contact Form right Container */}
              <div
                className="absolute 
                  w-1/2 h-full right-0 
                  flex justify-center items-center 
                  lg:w-full lg:h-1/2 lg:top-0 lg:items-start 
                  lg:rounded-t-[10px] bg-[#949595]"
              >
                <div
                  className="
                    w-full mx-auto"
                >
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

              {/* Container Contact Details left Container !!!!!!!! */}
              <div
                className="absolute 
                      w-1/2 h-full left-0
                      flex justify-center items-center
                      lg:w-full lg:h-1/2 lg:bottom-0"
              >
                {/* Container Icons with Text */}
                <div
                  className="relative text-light
                    h-full flex flex-col justify-center"
                >
                  <div
                    className="
                      w-full flex flex-col"
                  >
                    {/* Icon 1 */}
                    <div
                      className="flex items-center
                          mb-6
                          lg:mb-10
                          xs:mb-7"
                    >
                      <div
                        className="relative
                            w-[50px] h-[50px]
                            xs:w-[35px] xs:h-[35px]"
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
                          className={`${styles.hoverUnderlineAnimation} ${styles.textShadow} 
                            relative text-lg 
                            ml-6
                            lg:ml-6 lg:text-xl
                            md:ml-4 md:text-lg
                            xs:text-base`}
                        >
                          +31 (0)6 5123 0756
                        </p>
                      </a>
                    </div>
                    {/* Icon 2 */}
                    <div
                      className="flex items-center
                          my-6
                          lg:my-10
                          xs:my-7"
                    >
                      <div
                        className="relative
                            w-[50px] h-[50px]
                            xs:w-[35px] xs:h-[35px]"
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
                          className={`${styles.hoverUnderlineAnimation} ${styles.textShadow} 
                            relative text-lg 
                            ml-6
                            lg:ml-6 lg:text-xl
                            md:ml-4 md:text-lg
                            xs:text-base`}
                        >
                          info@karlein.nl
                        </p>
                      </a>
                    </div>
                    {/* Icon 3 */}
                    <div
                      className="flex items-center
                          mt-6
                          lg:mt-10
                          xs:mt-7"
                    >
                      <div
                        className="relative
                            w-[50px] h-[50px]
                            xs:w-[35px] xs:h-[35px]"
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
                          className={`${styles.hoverUnderlineAnimation} ${styles.textShadow} 
                            relative text-lg 
                            ml-6
                            lg:ml-6 lg:text-xl
                            md:ml-4 md:text-lg
                            xs:text-base`}
                        >
                          Amsterdam
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Scrolling Up */}
        <div className="flex justify-center">
          <div
            className="absolute 
              flex items-center
              bottom-0 mb-4
              w-[70px] h-[70px]
              sm:w-[65px] sm:h-[65px]
              xs:w-[55px] xs:h-[55px]"
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

        {/* FrontLabs Credentials */}
        <div
          className={`${poppins.className} absolute bottom-0 right-0 mr-6 mb-3
          sm:hidden`}
        >
          <a
            href="https://www.frontlabsamsterdam.nl/"
            target="_blank"
            rel="noreferrer"
          >
            <p
              className="flex text-light
                opacity-75 hover:opacity-100 transition duration-[350ms]
                text-sm
                md:text-xs"
            >
              FrontLabs {new Date().getFullYear()} &copy; All Rights Reserved
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
