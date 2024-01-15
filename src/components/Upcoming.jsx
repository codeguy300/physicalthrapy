import React from "react";

const Upcoming = () => {
  return (
    <>
      <div class="w-full">
        <h1 class="text-blue-600 ml-6 my-5 text-3xl font-body">
          Latest Articles
        </h1>
        <div class="grid grid-row-3 sx:flex-col">
          <div class="py-10 flex ">
            <div class="rounded shadow-lg overflow-hidden p-8  flex-1">
              <span class="text-gray-500 text-lg font-body"> News </span>
              <h1 class="text-2xl py-4 font-body text-gray-700 ">
                Foundation for Physical Therapy Research Grants Announced
              </h1>
              <p class="text-gray-500 font-body">Jan 9, 2024</p>
            </div>
            <div class="rounded shadow-lg overflow-hidden p-8   flex-1 ">
              <span class="text-gray-500 text-lg font-body"> ROUNDUP </span>
              <h1 class="text-2xl py-4 text-gray-700 ">
                Advice for New Grads: APTA Members Share Tips for Your Physical
                Therapy Career
              </h1>
              <p class="text-gray-500 font-body">Jan 10, 2024</p>
            </div>
            <div class="rounded shadow-lg overflow-hidden p-8  flex-1">
              <span class="text-gray-500 text-lg font-body"> ROUNDUP </span>
              <h1 class="text-2xl py-4 font-body text-gray-700">
                William Coughlan, Former APTA CEO, Dies at 77
              </h1>
              <p class="text-gray-500 font-body">Jan 9, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
