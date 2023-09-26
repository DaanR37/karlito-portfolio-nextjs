import Image from "next/image";
import styles from "./footer.module.scss";
import { motion } from "framer-motion";

import LinkedInIcon from "../../../../../public/images/icons/svgSocials/linkedin.svg";
import InstagramIcon from "../../../../../public/images/icons/svgSocials/instagram-logo-thin.svg";

export default function Footer() {
  return (
    <div className="relative w-full flex items-center text-sm gap-[25px]">
      <div className="w-full h-full">
        <ul className="w-full flex justify-around">
          <li className="flex list-none">
            <motion.a
              href="https://www.linkedin.com/in/karlein-nolet-451566a/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`${styles.hoverUnderlineAnimation} ${styles.textShadow}
                  w-[40px] h-[40px]`}
            >
              <Image
                src={LinkedInIcon}
                alt="LinkedIn Icon"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  opacity: "0.9",
                }}
              />
            </motion.a>
          </li>
          <li className="flex list-none">
            <motion.a
              href="https://www.instagram.com/karlein/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`${styles.hoverUnderlineAnimation} ${styles.textShadow}
                  w-[40px] h-[40px]`}
            >
              <Image
                src={InstagramIcon}
                alt="Instagram Icon"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  opacity: "0.9",
                }}
              />
            </motion.a>
          </li>
        </ul>
      </div>
    </div>
  )
}
