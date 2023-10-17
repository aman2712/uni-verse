import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="bg-gray-900 h-auto">
      <p className="text-4xl text-white font-montserrat font-extrabold pt-28 pl-20">
        Indian Universities
      </p>
      <div className="grid grid-cols-3 gap-20 px-8 pt-14 pb-20">
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/delhi.jpg)",
          }}
          href="/universities/indian/delhi"
        >
          <p className="text-white text-2xl font-montserrat font-bold">
            University of Delhi
          </p>
        </Link>
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/madras.jpg)",
          }}
          href="/universities/indian/msoe"
        >
          <p className="text-white text-2xl font-montserrat font-bold">
            Madras School of Economics
          </p>
        </Link>
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/jawahar.jpg)",
          }}
          href="/universities/indian/jnu"
        >
          <p className="text-white text-2xl font-montserrat font-bold">
            Jawaharlal Nehru University
          </p>
        </Link>
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/gokhale.jpg)",
          }}
          href="/universities/indian/gokhale"
        >
          <p className="text-white text-2xl font-montserrat font-bold text-center">
            Gokhale Institute of Politics and Economics, Pune
          </p>
        </Link>
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/sae.jpg)",
          }}
          href="/universities/indian/sae"
        >
          <p className="text-white text-2xl font-montserrat font-bold text-center">
            Institute for social and economic change in Bengaluru
          </p>
        </Link>
        <Link
          className="w-96 h-64 bg-center bg-cover rounded flex justify-center items-center cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/kolkata.jpg)",
          }}
          href="/universities/indian/kolkata"
        >
          <p className="text-white text-2xl font-montserrat font-bold">
            University of Calcutta
          </p>
        </Link>
      </div>
    </div>
  );
}

export default page;
