"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationData from "@/public/earth-globe.json";

const GlobeAnimation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-16 h-16 md:w-20 md:h-20"
      />
    </div>
  );
};

export default GlobeAnimation;
