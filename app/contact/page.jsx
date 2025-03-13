"use client";
import { WavyBackground } from "@/components/WavyBackground/WavyBackground";
import { useState, useEffect } from "react";
import Image from "next/image";

const InputField = ({ placeholder, type, icon, name, value, onChange }) => (
  <div className="flex items-center w-full h-[40px] text-white/60 bg-[#09090b] border border-white/10 rounded-lg focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out">
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="bg-transparent text-[#f4f4f5] px-3 py-1 focus:outline-none w-full"
    />
    {icon}
  </div>
);

const Contact = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    
    if (!name || !phone || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          access_key: "e86b5632-b553-48e3-9b74-f8cbe7ab19fe", 
        }),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" }); 
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form.");
    }
  };

  const icons = {
    name: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline mr-3"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline mr-3"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.34 12.34 0 0 0 .73 3.26 2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 6 6l1.9-1.19a2 2 0 0 1 2.11-.45 12.34 12.34 0 0 0 3.26.73A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    email: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-mail mr-3"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
        <path d="M3 7l9 6l9 -6"></path>
      </svg>
    ),
  };

  return (
    <div className="bg-black">
      <div className="flex justify-center p-5 md:p-10 pt-16 md:pt-20 bg-black">
        <div className="rounded-3xl w-full h-auto p-6 shadow-lg bg-black shadow-blue-400 outline outline-1 outline-blue-600">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Section */}
            <div className="space-y-4">
              <h1 className="text-white text-2xl font-light sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                Hey! Let’s Build Something <br />
                <span className="text-[#0081FB]">Amazing!</span>
              </h1>
              <p className="text-white mb-4 text-xs font-normal sm:text-sm lg:text-base italic">
                Drop a message with a few details, and I'll get back with the
                best solution for you.
              </p>
              <form
                className="space-y-4 text-sm md:text-base"
                onSubmit={handleSubmit}
              >
                <InputField
                  placeholder="Name"
                  type="text"
                  icon={icons.name}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  placeholder="Contact Number"
                  type="tel"
                  icon={icons.phone}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <InputField
                  placeholder="Email"
                  type="email"
                  icon={icons.email}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[100px] px-3 py-2 text-white bg-[#09090b] border border-white/10 rounded-lg focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] focus:outline-none transition-all duration-150 ease-in-out bg-transparent"
                ></textarea>
                {/* Hidden Access Key Field */}
                <input
                  type="hidden"
                  name="access_key"
                  value="e86b5632-b553-48e3-9b74-f8cbe7ab19fe"
                />
                <button type="submit" className="group relative w-full">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                  <span className="relative flex justify-center items-center rounded-2xl bg-black px-10 py-3 leading-none">
                    <span className="text-sm md:text-base font-medium text-white uppercase">
                      Submit
                    </span>
                  </span>
                </button>
              </form>
            </div>

            {/* Right Section (GIF Box) */}
            <div className="hidden sm:block relative w-full h-full rounded-[20px] overflow-hidden">
              <Image
                src="/cs.gif"
                alt="Animated Illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <WavyBackground />
      </div>
      <div className="bg-black w-full h-16"/>
    </div>
  );
};

export default Contact;

