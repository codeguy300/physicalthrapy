import React from "react";

const Gradiants = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-cover bg-center">
          <div className="h-96 bg-slate-500 p-8 sm:p-12 bg-gradient-to-r from-blue-950 to-blue-800 flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 mt-4 sm:mt-10">
              APTA Reports
            </h1>
            <p className="font-apta-sans font-semibold text-white text-xl sm:text-2xl leading-6 sm:leading-10 mb-8 sm:mb-20">
              Be empowered with data and insight covering the most pressing
              issues in the profession
            </p>
            <a className="border border-white text-white hover:bg-white hover:text-blue-950 w-full lg:w-auto max-w-btn-common px-4 py-2 rounded text-lg sm:text-xl font-bold text-center">
              View Reports
            </a>
          </div>
        </div>

        <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2  bg-slate-500 p-8 sm:p-12 bg-gradient-to-r from-purple-950 to-blue-800">
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              APTA Fit for Practice Initiative
            </h1>
            <p className="font-apta-sans font-semibold text-white text-xl sm:text-2xl leading-6 mb-8">
              Discover ways that you can know and grow your value — APTA members
              share their insights.
            </p>
            <a className="border border-white text-white hover:bg-white hover:text-blue-800 w-full lg:w-auto max-w-btn-common px-4 py-2 rounded text-lg sm:text-xl font-bold text-center">
              APTA Fit for Practice
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gradiants;
