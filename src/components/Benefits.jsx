import React from "react";
import hhhhImage from "../assets/hhhh.jpg";

const Benefits = () => {
  return (
    <>
      <div class="flex mt-10   sm:flex-col xs:flex-col md:flex-row ">
        <div class="p-8">
          <div class="bg-white  text-2xl">
            <strong>
              <h1 class="text-7xl  md:text-7xl sm:text-3xl  text-blue-900 ">
                We help you thrive.
              </h1>{" "}
            </strong>
            <p class="text-gray-600 font-body font-medium">
              {" "}
              ADVANCE YOUR CAREER THROUGH APTA MEMBERSHIP
              <li>Access free and discounted continuing education courses.</li>
              <li> Save on specialist certification and APTA CSM.</li>
              <li>
                Enjoy full-text access to scientific literature via APTA Article
                Search.
              </li>
              <li>
                Support our national advocacy and public awareness campaigns.
              </li>
            </p>
            <a
              href="#"
              class="hover:text-gray-300 text-xl font-bold mb-2 border border-white rounded text-white px-10 py-1 bg-orange-500 flex items-center w-60 sm:w-auto md:w-auto   "
            >
              <p class="md:ml-24 sm:ml-40 xs:ml-8">EXPLORE DISCOUNTS</p>
            </a>
          </div>
        </div>
        <div class="w-full md:h-full">
          <img src={hhhhImage} alt="c1 Image" className=" " />
        </div>
      </div>
    </>
  );
};

export default Benefits;
