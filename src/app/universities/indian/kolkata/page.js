import React from "react";

function page() {
  return (
    <div className="bg-gray-900 h-screen">
      <p className="text-4xl text-white font-montserrat font-extrabold pt-28 pl-20 text-center">
        University of Calcutta
      </p>
      <div className="px-20 mt-10 flex">
        <img className="w-96 h-64 rounded mr-10" src="/delhi.jpg" />
        <p className="text-white">
          The University of Calcutta (informally known as Calcutta University;
          abbreviated as CU) is a public state university located in Kolkata,
          West Bengal, India. It has 151 affiliated undergraduate colleges and
          16 institutes in Kolkata and nearby areas. It was established on 24
          January 1857 and is the oldest multidisciplinary university of Indian
          Subcontinent and South East Asian Region. Today, the universitys
          jurisdiction is limited to a few districts of West Bengal, but at the
          time of its establishment it had a catchment area ranging from Kabul
          to Myanmar. Within India, it is recognized as a Five-Star University
          and accredited an A++ grade by the National Assessment and
          Accreditation Council (NAAC).
          <br />
          <br />
          Curriculum:- UG
          <br />
          Admission test :- BA LLB and LLM.
          <br />
          Percentage:- 45 in best sub
        </p>
      </div>
    </div>
  );
}

export default page;
