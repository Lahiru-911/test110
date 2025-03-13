import { WavySource } from "./WavySource";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export function WavyBackground() {
  return (
    <WavySource className="font-normal text-white font-inter ">
      {/* Main heading section */}
      <div className="text-center">
        <p className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:mt-16 font-bold">
          Let's Connect and Collaborate.
        </p>

        <p className="p-2 m-2 text-base sm:p-3 sm:m-4 sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold">
          Have Questions, Need Support, or Want to Share Feedback? I’m Here to
          Assist You Every Step of the Way.
          <br />
          Reach Out, and Let's Create Something Amazing!
        </p>
      </div>

      {/* contact details */}
      <div className="flex flex-col justify-between gap-6 mx-3 mt-8 mb-2 md:flex-row sm:mx-6 md:mx-10 md:mt-16 md:gap-8 lg:gap-10 xl:gap-12">
        {/* Phone section */}
        <div className="flex flex-col items-center w-full gap-3 text-center transition-all duration-300 ease-in-out md:w-auto md:items-start md:text-left md:flex-row">
          <FaPhoneVolume className="text-xl sm:text-xl md:text-2xl mt-2" />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Phone
            <br />
            <a
              href="tel:(+94) 77 578 8667"
              className="text-white hover:text-[#0081FB]"
            >
              (+94) 77 578 8667
            </a>
          </p>
        </div>

        {/* Email section */}
        <div className="flex flex-col items-center w-full gap-3  text-center transition-all duration-300 ease-in-out md:w-auto md:items-start md:text-left md:flex-row">
          <MdEmail className="text-xl sm:text-2xl md:text-3xl mt-1" />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Email
            <br />
            <a
              className="text-white hover:text-[#0081FB]"
              href="mailto:lahiruxk@gmail.com"
            >
              lahiruxk@gmail.com
            </a>
          </p>
        </div>

        {/* Location section */}
        <div className="flex flex-col items-center w-full gap-3 text-center transition-all duration-300 ease-in-out md:w-auto md:items-start md:text-left md:flex-row">
          <IoLocationSharp className="text-xl sm:text-2xl md:text-3xl mt-1" />
          <address className="text-xs sm:text-sm md:text-base lg:text-lg">
            <a
              className="text-white hover:text-[#0081FB] not-italic"
              href="https://www.google.com/maps?q=Colombo,Sri+Lanka&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colombo,
              <br />
              Sri Lanka.
            </a>
          </address>
        </div>
      </div>
    </WavySource>
  );
}
