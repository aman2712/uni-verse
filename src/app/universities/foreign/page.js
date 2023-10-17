import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="bg-gray-900 h-screen">
      <p className="text-4xl text-white font-montserrat font-extrabold pt-28 pl-20">
        Foreign Universities
      </p>
      <div className="grid grid-cols-3 gap-20 px-8 pt-14 pb-20">
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/oxford.jpg)",
          }}
          href="/universities/foreign/oxford"
        >
          <p className="text-white text-2xl font-montserrat font-bold">
            Oxford University
          </p>
        </Link>
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/princeton.jpg)",
          }}
          href="/universities/foreign/princeton"
        >
          <p className="text-white text-2xl font-montserrat font-bold">
            Princeton University
          </p>
        </Link>
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/harvard.jpg)",
          }}
          href="/universities/foreign/harvard"
        >
          <p className="text-white text-2xl font-montserrat font-bold">
            Harvard Law University
          </p>
        </Link>
      </div>
    </div>
  );
}

export default page;
