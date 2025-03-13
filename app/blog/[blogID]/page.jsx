'use client'; // This ensures that this component is a client component

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Use useParams for App Router
import { db } from "../../../utils/firebaseConfig"; // Correct the path
import { ref, get } from "../../../utils/firebaseConfig"; // Import the necessary functions
import Image from "next/image";

export default function BlogDetail() {
  const { blogID } = useParams(); // Use `useParams` to get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!blogID) return; // If there's no ID, exit

    async function fetchBlogDetail() {
      try {
        const dbRef = ref(db, `blogDetails/${blogID}`); // Path to 'blogDetails' node in Firebase
        const snapshot = await get(dbRef); // Get the data snapshot

        if (snapshot.exists()) {
          setBlog(snapshot.val());
        } else {
          console.log("No data available for this blog.");
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    }

    fetchBlogDetail();
  }, [blogID]); // Re-fetch if ID changes

  if (!blog) {
    return <div className="text-center py-8 text-gray-500">Loading...</div>; // Show a loading message until the blog data is fetched
  }

  return (
    <div className="max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto my-8  p-5 bg-[#eff5ff]  shadow-xl rounded-xl space-y-6">
      {/* Blog Title */}
      <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">{blog.title}</h1>
      
      {/* Blog Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={500}
        className="w-full h-auto rounded-xl shadow-lg object-cover "
      />

      {/* Blog Content */}
      <div className="text-sm lg:text-lg text-gray-700 text-justify md:px-5">
        <p className="mt-6">{blog.content}</p>
      </div>

      {/* Published Date */}
      <p className="mt-4 text-base text-gray-700 italic md:px-5">Published on {blog.date}</p>
      
      {/* Back to Blog Button */}
      <div className="mt-6 md:px-5">
        <a
          href="/blog"
          className="inline-block  px-4 md:px-6 py-2 md:py-3 bg-red-600 text-white hover:bg-red-700 rounded-2xl shadow-md transition duration-300 transform hover:scale-105"
        >
          Back to Blogs
        </a>
      </div>
    </div>
  );
}
