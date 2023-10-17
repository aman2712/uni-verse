import React from "react";

function page() {
  return (
    <div className="bg-gray-900 h-screen">
      <p className="text-4xl text-white font-montserrat font-extrabold pt-28 pl-20 text-center">
        Gokhale Institute of Politics and Economics, Pune
      </p>
      <div className="px-20 mt-10 flex">
        <img className="w-96 h-64 rounded mr-10" src="/delhi.jpg" />
        <p className="text-white">
          The institute was founded on 6 June 1930 by R. R. Kale as a centre for
          research and higher learning in economics. The institute was founded
          with an endowment offered to the Servants of India Society by Shri R R
          Kale. The Servants of India Society, a registered body founded by the
          nationalist leader Gopal Krishna Gokhale, are the trustees of the
          institute. The institute is registered under the Societies
          Registration Act, 1860, and the Bombay Public Trusts Act, 1950.
          <br />
          <br />
          Curriculum:- UG
          <br />
          Admission Test:- GIPE Entrance Examination
          <br />
          Percentage in the entrance:- At least 50 percentage
          <br />
          Subjects in admission test:- Aptitude in Mathematics and Statistics 30
          marks 30 questions, Analytical Ability and Reasoning 20 marks, 20
          questions Undergraduate level knowledge in Economics
        </p>
      </div>
    </div>
  );
}

export default page;
