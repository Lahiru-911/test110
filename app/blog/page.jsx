"use client"
import { BlogCard } from "../../components/BlogCard/BlogCard";
import { useEffect } from "react";
import React from "react";

const Blog = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);
  return (
    <div className="bg-black flex flex-col items-center justify-center text-center px-5 pb-10 ">
      <h1 className="text-4xl font-semibold text-white my-5 md:my-12">
        <br />
        <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none font-hedvig">
          My Blog Posts
        </span>
      </h1>
      <BlogCard />
     
    </div>
  );
};

export default Blog;
