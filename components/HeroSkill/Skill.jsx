"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";

export function Skill() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white mb-5">
              <br />
              <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none">
                Scroll Through My Expertise
              </span>
            </h1>
          </>
        }
      >
        {/* Larger Img */}
        <Image
          src="/langxl.webp"
          alt="hero"
          layout="responsive"
          height={720}
          width={1400}
          className="mx-auto w-full object-cover h-full hidden md:block"
          draggable={false}
          quality={100}
          priority
        />

        {/* Mobile Img */}
        <Image
          src="/langm.webp"
          alt="hero"
          layout="responsive"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl block md:hidden object-cover h-full object-left-top"
          draggable={false}
          quality={100}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
