import React from "react";

function page() {
  return (
    <div className="bg-gray-900 h-screen">
      <p className="text-4xl text-white font-montserrat font-extrabold pt-28 pl-20 text-center">
        Harvard Law University
      </p>
      <div className="px-20 mt-10 flex">
        <img className="w-96 h-64 rounded mr-10" src="/harvard.jpg" />
        <p className="text-white">
          a) Most advanced law degree- Doctor of juridical science
          <br />
          <br />
          b) Subjects preferred- Harvard Law School does not require applicants
          to pursue any particular undergraduate degree program. Instead, the
          school accepts students from all different undergraduate degree
          programs. The school prefers that students have a broad college
          education instead of taking many courses that are designed to provide
          vocational training. The admissions officers at Harvard Law School
          will be interested in the quality of your classes and your academic
          performance in them. They want to see that you have engaged in
          thorough learning in a major field area of your choice, including
          mathematics, government, science, philosophy, the classics, economics,
          history, IB English A Literature and others.
          <br />
          <br />
          c) Admission – We will need to either take the LSAT or the Graduate
          Record Exam. While Harvard Law School accepts either test, it might
          make more sense to choose the LSAT since it is accepted by all of the
          ABA-approved law schools. Make sure to practice with old LSATs as
          previously described and work with a tutor so that you can achieve the
          highest possible score on your LSAT. List Harvard Law School when you
          take the LSAT so that your scores will be transmitted to the school.
        </p>
      </div>
    </div>
  );
}

export default page;
