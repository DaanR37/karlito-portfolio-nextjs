import Image from "next/image";
import { motion } from "framer-motion";
import LogoKarlito from "../../public/images/logos/karlitos-way-locations.webp";

export default function ImageComp() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
      className="relative
          mx-auto
          w-[1100px] h-[450px]"
    >
      <Image
        src={LogoKarlito}
        alt="Logo Karlitos Way"
        priority={true}
        rel="preload"
        as="image"
        sizes="
        (max-width: 768px) 100vw,
        (max-width: 1535px) 50vw,
        50vw"
        fill
        style={{
          objectFit: "cover",
          width: "100%",
        }}
        data-scroll
        data-scroll-speed="0.4"
        className=""
      />
    </motion.div>
  )
};
