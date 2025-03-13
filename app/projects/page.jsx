"use client";
import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";

const ProjectParallax = dynamic(
  () =>
    import("@/components/ProjectParallax/projectparallax").then(
      (mod) => mod.ProjectParallax
    ),
  {
    loading: () => <div>Loading Parallax...</div>,
    ssr: false,
  }
);

const ProjectCard = dynamic(
  () => import("./ProjectCard").then((mod) => mod.default),
  {
    loading: () => <div>Loading Project...</div>,
  }
);

const Projects = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);
  return (
    <div className="bg-black">
      <Head>
        <title>My Projects</title>
        <meta
          name="description"
          content="Check out my latest software development projects."
        />
        <meta name="keywords" content="projects, software, React, Next.js" />
      </Head>

      <ProjectParallax />
      <ProjectCard />
     
      <div className="h-10" />
    </div>
  );
};

export default Projects;
