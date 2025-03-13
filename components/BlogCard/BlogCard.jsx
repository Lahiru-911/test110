"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WobbleCard } from "./wobble-card.tsx";
import { db } from "../../utils/firebaseConfig.js"; 
import { ref, get } from "../../utils/firebaseConfig.js"; 

export function BlogCard() {
  const [cards, setCards] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
      
        const dbRef = ref(db, "blogs"); 
        const snapshot = await get(dbRef); 

        if (snapshot.exists()) {
          const blogs = snapshot.val();
    
          const blogArray = Object.keys(blogs).map((key) => ({
            id: key, 
            ...blogs[key], 
          }));
          setCards(blogArray); 
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchData();
  }, []);

 
  const cardStyles = [
    "col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]",
    "col-span-1 min-h-[300px] bg-gray-700", 
    "col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[400px]", 
    "col-span-1 min-h-[300px] bg-green-800", 
    "col-span-1 lg:col-span-2 h-full bg-purple-700 min-h-[500px] lg:min-h-[300px]", 
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <WobbleCard key={card.id} containerClassName={cardStyles[index % 5]}>
          <div className="max-w-2xl">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold text-white ">
              {card.title} 
            </h2>
            <p className="mt-4 text-left text-sm md:text-base/6 text-neutral-200 lg:w-8/12">
              {card.excerpt} 
            </p>

            <Link href={`/blog/${card.id}`}>
              <button className="absolute cursor-pointer flex items-center justify-center bg-gradient-to-l from-blue-500 to-purple-600  rounded-full text-white tracking-wide shadow-lg hover:from-purple-500 hover:to-blue-600 hover:scale-105 duration-300 hover:ring-1 dm-sans-regular mt-4 w-auto px-4 py-1 sm:px-4 sm:py-2 md:px-4 md:py-2">
                Read More
              </button>
            </Link>
          </div>
          {(index % 5 === 0 || index % 5 === 2 || index % 5 === 4) && (
            <Image
              src={card.thumbnail}
              width={260}
              height={300}
              alt={card.title} 
              className="absolute right-3 lg:right-[2%] bottom-3 object-contain rounded-2xl w-[260px] md:w-[400px] lg:w-[260px] h-auto"
            />
          )}
        </WobbleCard>
      ))}
    </div>
  );
}
