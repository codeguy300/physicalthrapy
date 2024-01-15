import React from "react";
import fImage from "../assets/f.jpg";
import ffImage from "../assets/ff.jpg";
import fffImage from "../assets/fff.jpg";

const Cards = () => {
  return (
    <>
      <div className="text-blue-600 ml-6 my-5 text-3xl font-body font-medium">
        Featured contents
      </div>

      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center p-8 space-y-4 sm:space-y-2 sm:space-x-4 md:space-x-4 lg:space-x-4 xl:space-x-4 2xl:space-x-4  xl:mr-24 2xl:ml-40">
        <div className="max-w-sm w-full sm:w-1/3 overflow-hidden shadow-xl mx-2 my-2 sm:mx-0">
          <img
            src={fImage}
            alt="c1 Image"
            className="w-full h-48 object-cover"
          />
          <div className="px-6 py-4 h-full flex flex-col justify-between">
            <p className="text-gray-600 font-body text-2xl font-medium">
              The "2023" Year in Reviews of the years
            </p>
          </div>
        </div>

        <div className="max-w-sm w-full sm:w-1/3 overflow-hidden shadow-xl mx-2 my-2 sm:mx-0">
          <img
            src={ffImage}
            alt="c1 Image"
            className="w-full h-48 object-cover"
          />
          <div className="px-6 py-4 h-full flex flex-col justify-between">
            <p className="text-gray-600 font-body text-2xl font-medium">
              Medicare Physician Fee Schedule
            </p>
          </div>
        </div>

        <div className="max-w-sm w-full sm:w-1/3 overflow-hidden shadow-xl mx-2 my-2 sm:mx-0">
          <img
            src={fffImage}
            alt="c1 Image"
            className="w-full h-48 object-cover"
          />
          <div className="px-6 py-4 h-full flex flex-col justify-between">
            <p className="text-gray-600 font-body text-2xl font-medium">
              New CPT Codes Will Support the Critical
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
