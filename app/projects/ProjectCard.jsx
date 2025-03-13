"use client";

import { useState, useEffect } from "react";
import { db, ref, get } from "../../utils/firebaseConfig";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const dbRef = ref(db, "projects");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const projectsData = snapshot.val();

          const projectArray = Object.keys(projectsData).map((key) => ({
            id: key,
            ...projectsData[key],
          }));
          setProjects(projectArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 className="mx-6 md:mx-12 mt-20 mb-14 p-3 text-3xl font-semibold md:text-5xl lg:text-6xl text-white text-center md:text-left tracking-wider duration-500 font-hedvig">
        Featured Projects
      </h1>

      {/* Project Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24 md:gap-20 m-6 md:m-12">
        {/* Map over the projects array */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative flex flex-col w-full h-full rounded-xl bg-[#121128] shadow-purple-400 outline outline-1 outline-purple-600 text-gray-100 shadow-md transition-all duration-300 ease-in-out hover:scale-105"
          >
            {/* Project Card Header Section */}
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-purple-400 outline outline-1 outline-purple-600 text-white shadow-lg shadow-blue-gray-500/40">
              <Image
                src={project.projectCoverImage}
                alt={`Cover image for ${project.projectTitle}`}
                layout="responsive"
                width={800} // set your image width
                height={450} // set your image height (aspect ratio)
                objectFit="contain" // or "cover", depending on your goal
                className="rounded-xl"
              />
            </div>

            {/* Project Description Section */}
            <div className="px-6 pt-6 flex-1">
              {/* Project Title */}
              <h5 className="mb-2 block font-sans text-lg md:text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {project.projectTitle}
              </h5>

              {/* Short Description */}
              <p className="block font-sans text-sm md:text-sm font-normal leading-relaxed text-inherit antialiased">
                {project.shortSummary}
              </p>

              {/* Technologies Used Section */}
              <div className="mt-4">
                <span className="inline-block font-semibold md:text-lg text-gray-50 mb-1">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-4 py-2 bg-blue-600 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Explore More Button Section */}
            <div className="p-6 pt-0 mt-auto">
              <Link href={`/projects/${project.id}`}>
                <button className="flex items-center justify-center bg-gradient-to-l from-blue-500 to-purple-600 px-3 py-2 rounded-xl text-white tracking-wide shadow-lg hover:from-purple-500 hover:to-blue-600 hover:scale-105 duration-300 hover:ring-1 dm-sans-regular mt-4 sm:px-4 sm:py-2 md:px-5 md:py-2 w-full text-sm">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
