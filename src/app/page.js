import { FaGraduationCap } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(/bg.jpg)",
      }}
      className="h-screen flex flex-col justify-center items-center"
    >
      <div className="flex mb-4 mt-36">
        <p className="pr-3 tracking-wide font-medium text-white cursor-pointer transition duration-100 hover:text-red-600">
          VIRTUAL TOUR
        </p>
        <span className="text-red-800 font-bold pr-3">|</span>
        <p className="pr-3 tracking-wide font-medium cursor-pointer transition duration-100 hover:text-red-600 text-white">
          STUDY MATERIAL
        </p>
        <span className="text-red-800 font-bold pr-3">|</span>

        <p className="pr-3 tracking-wide font-medium cursor-pointer transition duration-100 hover:text-red-600 text-white">
          ONLINE SERVICES
        </p>
        <span className="text-red-800 font-bold pr-3">|</span>

        <p className="tracking-wide font-medium cursor-pointer transition duration-100 hover:text-red-600 text-white">
          BLOG
        </p>
      </div>
      <p className="text-7xl text-white font-montserrat font-extrabold text-center ">
        Get ready to enter into the
        <br />
        world of opportunities
      </p>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#56CDC0" offset="0%" />
          <stop stopColor="#7C5FFF" offset="100%" />
        </linearGradient>
      </svg>
      <div className="grid grid-cols-4 gap-1 w-4/6 mt-10 bg-slate-800 bg-opacity-10 backdrop-blur-md py-5 px-6 rounded-lg">
        <Link
          href="/universities"
          className="flex items-center hover:bg-red-800 rounded px-4 cursor-pointer duration-300"
        >
          <FaGraduationCap size={45} style={{ fill: "url(#blue-gradient)" }} />
          <p className="text-white ml-4 font-poppins">Universities</p>
        </Link>
        <div className="flex items-center hover:bg-red-800 rounded px-4 cursor-pointer duration-300">
          <BsFillBriefcaseFill
            size={40}
            style={{ fill: "url(#blue-gradient)" }}
          />
          <p className="text-white ml-4 font-poppins ">Courses</p>
        </div>
        <div className="flex items-center hover:bg-red-800 rounded px-4 cursor-pointer duration-300">
          <FaRegPaperPlane size={40} style={{ fill: "url(#blue-gradient)" }} />
          <p className="text-white ml-4 font-poppins">Alumni Interaction</p>
        </div>
        <div className="flex items-center hover:bg-red-800 rounded px-4 cursor-pointer duration-300">
          <MdTour size={45} style={{ fill: "url(#blue-gradient)" }} />
          <p className="text-white ml-4 font-poppins">Virtual Tour</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <div className="flex">
          <IoIosCall size={20} color="white" />
          <p className="ml-2 text-white text-sm font-bold">
            Contact us at: 1800-2342-3445
          </p>
        </div>
        <p className="ml-2 text-white text-xs">
          For more details: visit{" "}
          <Link href="https://uni-verse-omega.vercel.app/">
            https://uni-verse-omega.vercel.app/
          </Link>
        </p>
      </div>
    </div>
  );
}
