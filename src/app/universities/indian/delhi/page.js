import React from "react";

function page() {
  return (
    <div className="bg-gray-900 h-screen">
      <p className="text-4xl text-white font-montserrat font-extrabold pt-28 pl-20 text-center">
        Delhi University
      </p>
      <div className="px-20 mt-10 flex">
        <img className="w-96 h-64 rounded mr-10" src="/delhi.jpg" />
        <p className="text-white">
          Delhi University (DU, ISO: Dillī Viśvavidyālaya), formally the
          University of Delhi, is a central university located in Delhi, India.
          It was founded in 1922 by an Act of the Central Legislative Assembly
          and is recognized as an Institute of Eminence (IoE) by the University
          Grants Commission (UGC). The university has 16 faculties and 86
          departments distributed across its North and South campuses, and
          remaining colleges across the region. It has 91 constituent colleges.
          Delhi University is one of the largest university systems in the world
          with over 400,000 students on its campuses and affiliated colleges.[5]
          The Vice President of India serves as the university chancellor. The
          university is ranked 11th by National Institutional Ranking Framework
          2023.
          <br />
          <br />
          Curriculum followed :- UC (Undergraduate curriculum)
          <br />
          <br />
          Admission test to appear and its percentage:- NTA CUET ( subjects
          according to your stream and preferences)
        </p>
      </div>
    </div>
  );
}

export default page;
