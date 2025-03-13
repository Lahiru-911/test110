"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

// Components
import MagnetButton from "../MagnetButton/page";
import WordsMarquee from "../WordsMarquee/page";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full min-h-screen md:rounded-b-3xl shadow-2xl ring-1 ring-gray-900/10 bg-[#999D9E] flex justify-start md:items-center items-end">
        {/* === Copyright Section === */}
        <div className="absolute top-4 md:top-5 md:left-10 left-3 dm-sans-regular z-10 text-black">
          © Code by Wara.
        </div>

        {/* === Background Image === */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/me.webp"
            alt="Background"
            fill
            priority
            quality={100}
            className="absolute inset-0 object-cover md:rounded-b-3xl pointer-events-none select-none"
          />
        </motion.div>

        {/* === Text Content === */}
        <motion.div
          className="absolute z-10 flex flex-col text-white mx-5 md:mx-8 lg:mx-12 my-3 gap-4 md:gap-6 xl:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <FaTerminal className="text-2xl lg:text-4xl" />

          <h1 className="text-xl lg:text-2xl xl:text-4xl dm-sans-regular md:mb-5">
            Full-Stack <br />
            Engineer & Web Developer
          </h1>

          <Link href="/contact">
            <div>
              <MagnetButton />
            </div>
          </Link>
        </motion.div>

        {/* === WordsMarquee === */}
        <div className="absolute z-50 top-[66%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-[-3%] md:left-auto md:translate-x-0 md:translate-y-0 w-full h-auto overflow-hidden pointer-events-none">
          <WordsMarquee />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
