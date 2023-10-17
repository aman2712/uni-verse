import React from "react";

function page() {
  return (
    <div className="bg-gray-900 h-screen">
      <p className="text-4xl text-white font-montserrat font-extrabold pt-28 pl-20 text-center">
        Jawaharlal Nehru University
      </p>
      <div className="px-20 mt-10 flex">
        <img className="w-96 h-64 rounded mr-10" src="/jawahar.jpg" />
        <p className="text-white">
          Jawaharlal Nehru University was established in 1969 by an act of
          parliament.[6] It was named after Jawaharlal Nehru, Indias first Prime
          Minister. G. Parthasarathy was the first vice-chancellor.[7] Prof.
          Moonis Raza was the Founder Chairman and Rector.[8][9] The bill for
          the establishment of Jawaharlal Nehru University was placed in the
          Rajya Sabha on 1 September 1965 by the then-Minister of Education, M.
          C. Chagla. During the discussion that followed, Bhushan Gupta, member
          of parliament, voiced the opinion that this should not be yet another
          university. New faculties should be created, including scientific
          socialism, and one thing that this university should ensure was to
          keep noble ideas in mind and provide accessibility to students from
          weaker sections of society. The JNU Bill was passed in Lok Sabha on 16
          November 1966 and the JNU Act came into force on 22 April 1969.
          <br />
          <br />
          Curriculum:- UG, PG, Doctorate
          <br />
          <br />
          Admission test to appear:- CUET
        </p>
      </div>
    </div>
  );
}

export default page;
