import React from "react";
import hhhhhImage from "../assets/hhhhhh.jpg";

const Housing = () => {
  return (
    <>
      <div class="flex mt-10   sm:flex-col xs:flex-col md:flex-row ">
        <div class="w-full ">
          <img src={hhhhhImage} alt="c1 Image" className=" " />
        </div>
        <div class="p-8">
          <div class="bg-white  text-2xl">
            <strong>
              <h1 class="text-7xl md:text-5xl sm:text-3xl  text-blue-900 ">
                APTA CSM Housing {""}Closes Soonnnnn
              </h1>{" "}
            </strong>
            <p class="text-gray-600 font-body font-medium">
              {" "}
              NOW'S THE TIME TO RESERVE YOUR HOTEL ROOM FOR APTA CSM BEFORE
              HOUSING CLOSES JAN. 16.
            </p>
            <a
              href="#"
              class="hover:text-gray-300 text-xl font-bold mb-2 border border-white rounded text-white px-10 py-1 bg-orange-500 flex items-center w-60"
            >
              RESERVE TODAY
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Housing;
