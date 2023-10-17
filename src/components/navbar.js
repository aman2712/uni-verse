import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

function navbar() {
  return (
    <div className="flex justify-between absolute top-0 w-full border-b-2 border-red-800 align-center">
      <div className="flex items-center pl-20">
        <Image src="/logo.png" width={70} height={10} />
        <div>
          <p
            className="font-montserrat text-2xl font-bold"
            style={{ color: "#54C1D8" }}
          >
            uni-verse
          </p>
          <p className="text-xs text-white font-poppins">
            FOR THE YOUTH, BY THE YOUTH
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex">
          <Link
            href="/"
            className="pr-8 tracking-wide font-medium cursor-pointer transition duration-100 hover:text-red-600 text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="pr-8 tracking-wide font-medium cursor-pointer transition duration-100 hover:text-red-600 text-white"
          >
            About Us
          </Link>

          <p className="pr-8 tracking-wide font-medium cursor-pointer transition duration-100 hover:text-red-600 text-white">
            Sign Up
          </p>
          <AiOutlineSearch color="white" size={25} className="mr-5" />
        </div>
      </div>
    </div>
  );
}

export default navbar;
