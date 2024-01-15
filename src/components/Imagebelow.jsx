import React from "react";

import rightImage from "../assets/hh.jpg";

const ImageWithDivs = () => {
  return (
    <>
      <div class="bg-sky-500 flex flex-col md:flex-row border border-black">
        {/* Displayed above 1024 pixels */}
        <div className="hidden md:flex w-1/2 h-full bg-white p-8 bg-opacity-10">
          <h1 className="text-5xl font-bold mb-4 text-white font-body m-10 ">
            <span>We are </span>
            <span class="font-extrabold">building a community</span> that{" "}
            <span class="font-extrabold">advances the profession </span>of
            physical therapy to{" "}
            <span class="font-extrabold">improve the health of society.</span>
          </h1>
        </div>

        {/* Image section displayed above 1024 pixels and below 1024 pixels */}
        <div className="md:w-1/2 w-full h-auto bg-white bg-opacity-10 p-8">
          <img
            src={rightImage}
            alt="Right Image"
            className="w-full h-full object-cover"
          />
          {/* Text displayed below the image */}
          <div className="text-center p-8 md:hidden">
            <h1 className="text-5xl font-bold mb-4 text-white font-body m-10 ">
              <span>We are </span>
              <span class="font-extrabold">building a community</span> that{" "}
              <span class="font-extrabold">advances the profession </span>of
              physical therapy to{" "}
              <span class="font-extrabold">improve the health of society.</span>
            </h1>
          </div>
        </div>
      </div>

      <div class="mt-[-20px] ">
        <ul class="flex flex-col items-center md:flex-row md:justify-center lg:justify-center px-4  space-x-10">
          <li class="sm:ml-7 lg:mb-0   ">
            <img
              src="https://www.apta.org/siteassets/icons/helping-you-thrive.svg"
              class="h-20 w-20 bg-white border-8 border-white rounded-full xs:ml-8 "
              alt="Helping You Thrive"
            />
            <p class="text-blue-600 text-center md:text-left lg:text-left">
              <strong>HELPING</strong> YOU THRIVE
            </p>
          </li>
          <li class="mb-4 md:mb-0 ">
            <img
              src="https://www.apta.org/siteassets/icons/building-our-community.svg"
              class="h-20 w-20 bg-white border-8 border-white rounded-full xs:ml-14"
              alt="Building Your Community"
            />
            <p class="text-blue-600 text-center md:text-left lg:text-left">
              <strong>BUILDING</strong> YOUR COMMUNITY
            </p>
          </li>
          <li class="mb-4 md:mb-0">
            <img
              src="https://www.apta.org/siteassets/icons/transforming-society.svg"
              class="h-20 w-20 bg-white border-8 border-white rounded-full xs:ml-11"
              alt="Transforming Society"
            />
            <p class="text-blue-600 text-center md:text-left lg:text-left">
              <strong>TRANSFORMING</strong> SOCIETY
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ImageWithDivs;
