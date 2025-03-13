"use client";
import { Skill } from "@/components/HeroSkill/Skill";
import { TimelineExp } from "@/components/Timeline/TimelineExp";
import { useEffect } from "react";
import React from "react";

const AllThree = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);
  return (
    <div className="bg-black">
      {/* Expertise */}
      <section>
        <Skill />
      </section>
      {/* Journey */}
      <section>
        <TimelineExp />
      </section>
    </div>
  );
};

export default AllThree;
