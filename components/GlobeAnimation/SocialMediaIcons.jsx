"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import GlobeAnimation from "./GlobeAnimation";

export default function SocialMediaIcons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-[38%] transform -translate-y-1/2 flex flex-col items-center gap-3 z-20">
      {/* Social Icons - Smooth Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col items-center gap-3"
      >
        {[
          {
            icon: <FaFacebookF />,
            color: "bg-blue-600",
            link: "https://www.facebook.com/share/15tGGsY41E/?mibextid=LQQJ4d",
          },
          {
            icon: <FaWhatsapp />,
            color: "bg-green-500",
            link: "https://wa.me/94775788667",
          },
          {
            icon: <FaInstagram />,
            color: "bg-pink-500",
            link: "https://www.instagram.com/wara19_?igsh=azBuNmV6czY3dng0&utm_source=qr",
          },
          {
            icon: <FaLinkedinIn />,
            color: "bg-blue-700",
            link: "http://www.linkedin.com/in/lahiru-thilakasiri-367541314",
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full shadow-lg text-white ${item.color} transition-all duration-300 hover:shadow-2xl`}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Global icon */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-gray-300 px-2 pr-6 rounded-l-full flex items-center flex-row-reverse cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <GlobeAnimation />
      </motion.div>
    </div>
  );
}
