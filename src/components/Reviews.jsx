import React from "react";
import hhhImage from "../assets/hhh.jpg";
import reImage from "../assets/re.jpg";
import reeImage from "../assets/ree.jpg";
import reeeImage from "../assets/reee.jpg";

const Reviews = () => {
  return (
    <>
      <div className="text-blue-600 ml-6 my-5 text-3xl font-body font-medium">
        Public Reviews
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="py-10 flex">
          <div class="rounded shadow-lg overflow-hidden p-8 flex-1">
            <div class="aspect-w-1 aspect-h-1">
              <img
                src={reImage}
                alt="c1 Image"
                class="object-cover rounded-full bg-white"
              />
            </div>
            <span class="text-gray-500 text-lg font-body font-medium">
              {" "}
              JAMES ODEN{" "}
            </span>
            <h1 class="text-2xl py-4 font-body font-medium">
              "Incredible find! This website stands out for its comprehensive
              coverage, engaging layout"
            </h1>
            <p class="text-gray-500 font-body font-medium">Jan 9, 2024</p>
          </div>
        </div>

        <div class="py-10 flex">
          <div class="rounded shadow-lg overflow-hidden p-8 flex-1">
            <img src={reeImage} alt="c1 Image " class="bg-white rounded-full" />
            <span class="text-gray-500 text-lg font-body font-medium">
              {" "}
              HARRY MARTIN{" "}
            </span>
            <h1 class="text-2xl py-4 font-body font-medium">
              "Exceptional content and seamless navigation define this website"
            </h1>
            <p class="text-gray-500 font-body font-medium">Jan 9, 2024</p>
          </div>
        </div>

        <div class="py-10 flex">
          <div class="rounded shadow-lg overflow-hidden p-8 flex-1">
            <img src={hhhImage} alt="c1 Image" class="rounded-full bg-white" />
            <span class="text-gray-500 text-lg font-body font-medium">
              {" "}
              ALINA COT{" "}
            </span>
            <h1 class="text-2xl py-4 font-body font-medium">
              "Impressive! The site's user-friendly interface, combined with
              up-to-date and reliable information"
            </h1>
            <p class="text-gray-500 font-body font-medium   ">Jan 9, 2024</p>
          </div>
        </div>

        <div class="py-10 flex">
          <div class="rounded shadow-lg overflow-hidden p-8 flex-1">
            <img src={reeeImage} alt="c1 Image" class="rounded-full bg-white" />
            <span class="text-gray-500 text-lg font-body font-medium">
              {" "}
              POWELL MENROW{" "}
            </span>
            <h1 class="text-2xl py-4 font-body font-medium">
              "This website is a game-changer!"
            </h1>
            <p class="text-gray-500 font-body font-medium">Jan 9, 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
