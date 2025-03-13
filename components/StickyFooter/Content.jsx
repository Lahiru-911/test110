// "use client";
// import Link from "next/link";
// import React from "react";
// import { RiArrowRightUpLine } from "react-icons/ri";
// import { FaArrowUp } from "react-icons/fa";

// const navigationLinks = [
//   { name: "About Me", link: "/" },
//   { name: "Projects", link: "/projects" },
//   { name: "Contact", link: "/contact" },
//   { name: "Skills", link: "/skills" },
//   { name: "Experience", link: "/experience" },
//   { name: "Education", link: "/education" },
//   { name: "Blog", link: "/blog" },
// ];

// const socialLinks = [
//   { name: "LinkedIn", link: "https://www.linkedin.com" },
//   { name: "Facebook", link: "https://www.facebook.com" },
//   { name: "Instagram", link: "https://www.instagram.com" },
//   { name: "WhatsApp", link: "https://wa.me/" },
//   { name: "GitHub", link: "https://github.com" },
//   { name: "Behance", link: "https://www.behance.net" },
//   { name: "YouTube", link: "https://www.youtube.com" },
// ];

// const contactLinks = [
//   { name: "Email", link: "mailto:lahiruxk@gmail.com" },
//   { name: "Phone", link: "tel:+94775788667" },
//   { name: "Location", link: "https://www.google.com/maps" },
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white  py-6 rounded-t-3xl h-full w-full">
//       <div className="px-6 md:px-16 lg:px-20 max-w-screen-xl mx-auto">
//         {/* === Header Section === */}
//         <div className="hidden md:block">
//           <h2 className="text-xs sm:text-sm md:text-base font-semibold tracking-widest mb-1">
//             INTERESTED IN LEARNING MORE?
//           </h2>
//           <Link
//             href="/contact"
//             className="flex items-center space-x-2 mb-5 hover:text-blue-500 transition"
//           >
//             <h1 className="font-radley text-3xl md:text-5xl font-bold">
//               Connect with me
//             </h1>
//             <RiArrowRightUpLine className="text-2xl md:text-5xl" />
//           </Link>
//         </div>

//         {/* === Links Section === */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2 md:pt-4">
//           {/* Navigation Links */}
//           <FooterColumn title="NAVIGATION" links={navigationLinks} />

//           {/* Social Links */}
//           <FooterColumn title="SOCIALS" links={socialLinks} isExternal />

//           {/* Contact Links */}
//           <FooterColumn title="CONTACT" links={contactLinks} isExternal />
//         </div>

//         {/* === Copyright Section === */}
//         <div className="flex items-center justify-center text-white text-xs md:text-sm mt-6">
//           <span className="flex-1 border-t border-white"></span>
//           <span className="px-2">
//             © 2025 Lahiru Kavinda. All Rights Reserved.
//           </span>
//           <span className="flex-1 border-t border-white"></span>
//         </div>
//       </div>

//       {/* === Footer Branding & Scroll to Top Button === */}
//       <div className="grid grid-cols-12">
//         {/* Name Branding */}
//         <div className="col-span-11 flex items-center justify-center">
//           <h1 className="text-white font-bold text-[15vw] leading-none tracking-wide font-hedvig">
//             L A H I R U
//           </h1>
//         </div>

//         {/* Scroll to Top Button */}
//         <div className="col-span-1 flex justify-center items-end pr-2">
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="fixed bottom-5 right-5 shadow-2xl ring-1 ring-gray-900/10 bg-gray-700 hover:bg-gray-500 text-white p-3 rounded-full transition"
//             aria-label="Scroll to top"
//           >
//             <FaArrowUp />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const FooterColumn = ({ title, links, isExternal = false }) => (
//   <div>
//     <h3 className="font-bold mb-3 border-b border-gray-50">{title}</h3>
//     <ul className="space-y-2 md:space-y-4 font-light md:text-lg">
//       {links.map((item) => (
//         <li key={item.name} className="cursor-pointer">
//           <LinkOrAnchor href={item.link} isExternal={isExternal}>
//             {item.name}
//           </LinkOrAnchor>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const LinkOrAnchor = ({ href, children, isExternal }) =>
//   isExternal ? (
//     <a
//       href={href}
//       className="flex items-center gap-2 text-white hover:text-gray-300 transition"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       {children}
//       <RiArrowRightUpLine className="hidden group-hover:inline-block transition-all text-lg" />
//     </a>
//   ) : (
//     <Link href={href} className="text-white hover:text-gray-300 transition">
//       {children}
//     </Link>
//   );

// export default Footer;

"use client";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

const Content = () => {
  return (
    <footer className="bg-black text-white py-4  rounded-t-3xl h-[98vh] w-full">
      <div className="max-w-full mx-auto text-left px-6 md:px-10">
        {/* === Header Section === */}
        <div className="hidden md:block">
          <h2 className="text-xs sm:text-sm md:text-base font-semibold tracking-widest mb-1">
            INTERESTED IN LEARNING MORE?
          </h2>
          <Link
            href="/contact"
            className="flex items-center justify-start space-x-1 mb-1 hover:text-blue-500"
          >
            <h1 className="font-radley text-3xl md:text-5xl font-bold">
              Connect with me
            </h1>
            <RiArrowRightUpLine className="text-2xl md:text-5xl" />
          </Link>
        </div>

        {/* === Links Section === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 md:pt-6 text-xs md:text-base ">
          {/* Navigation Links */}
          <div>
            <h3 className="font-bold mb-3 border-b border-gray-50">
              NAVIGATION
            </h3>
            <ul className="space-y-1 md:space-y-4 font-normal ">
              {[
                { name: "About Me", link: "/" },
                { name: "Projects", link: "/projects" },
                { name: "Contact", link: "/contact" },
                { name: "Expertise & Journey", link: "/allthree" },
                { name: "Blog", link: "/blog" },
              ].map((item) => (
                <li key={item.name} className="cursor-pointer">
                  <Link
                    href={item.link}
                    className="text-white hover:text-blue-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-3 border-b border-gray-50">SOCIALS</h3>
            <ul className="space-y-1 md:space-y-4 font-normal ">
              {[
                {
                  name: "LinkedIn",
                  link: "http://www.linkedin.com/in/lahiru-thilakasiri-367541314",
                },
                {
                  name: "Facebook",
                  link: "https://www.facebook.com/share/15tGGsY41E/?mibextid=LQQJ4d",
                },
                {
                  name: "Instagram",
                  link: "https://www.instagram.com/wara19_?igsh=azBuNmV6czY3dng0&utm_source=qr",
                },
                {
                  name: "WhatsApp",
                  link: "https://wa.me/94775788667?text=Hello!%20I'm%20interested%20in%20your%20services.",
                },
                { name: "GitHub", link: "https://github.com/Lahiru-911" },
                { name: "Behance", link: "https://www.behance.net/lahirukavinda5" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="cursor-pointer flex items-center gap-2 group"
                >
                  <a
                    href={item.link}
                    className="text-white flex items-center gap-1 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                    <RiArrowRightUpLine className="hidden group-hover:inline-block transition-all text-lg" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="font-bold mb-3 border-b border-gray-50">CONTACT</h3>
            <ul className="space-y-1 md:space-y-4 font-normal ">
              {[
                { name: "Email", link: "mailto:lahiruxk@gmail.com" },
                { name: "Phone", link: "tel:+94775788667" },
                { name: "Location", link: "https://www.google.com/maps?q=Colombo,Sri+Lanka&hl=en" },
              ].map((item) => (
                <li key={item.name} className="cursor-pointer">
                  <a
                    href={item.link}
                    className="text-white hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === Copyright Section === */}
        <div className="flex items-center justify-center text-white text-xs md:text-sm mt-8 md:mt-10">
          <span className="flex-1 border-t border-white"></span>
          <span className="px-1 md:px-2">
            © 2025 Lahiru Kavinda. All Rights Reserved.
          </span>
          <span className="flex-1 border-t border-white"></span>
        </div>
      </div>

      {/* === Footer Branding & Scroll to Top Button === */}
      {/* Name Branding */}
      <div className="flex items-center justify-center mt-5">
        <h1 className="text-white font-bold text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none tracking-wide font-hedvig">
          L A H I R U
        </h1>
      </div>

      {/* Scroll to Top Button (Moved Outside for Better Behavior) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 z-50 shadow-2xl ring-1 ring-gray-900/10 bg-gray-700 hover:bg-gray-500 text-white p-3 rounded-full transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Content;
