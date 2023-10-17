import React from "react";
import Link from "next/link";

function index() {
  return (
    <div className="bg-gray-900 h-screen">
      <p className="text-4xl text-white font-montserrat font-extrabold pt-28 pl-20">
        Universities Catalogue
      </p>
      <div className="flex justify-between px-56 pt-14">
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/domestic.jpg)",
          }}
          href="/universities/indian"
        >
          <p className="text-white text-2xl font-montserrat font-bold">
            Domestic Universities
          </p>
        </Link>
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/foreign.jpg)",
          }}
          href="/universities/foreign"
        >
          <p className="text-white text-2xl font-montserrat font-bold">
            Foreign Universities
          </p>
        </Link>
      </div>
    </div>
  );
}

export default index;
