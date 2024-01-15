import React from "react";
import hhhImage from "../assets/coming.jpg";
import coming3Image from "../assets/coming3.jpg";
import coming4Image from "../assets/coming4.jpg";
import coming2Image from "../assets/coming2.jpg";

const Coming = () => {
  return (
    <>
      <div className="text-blue-600 ml-6 my-5 text-3xl font-body font-medium">
        Upcoming Courses and Events
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
          <div className="py-10 flex flex-grow">
            <div className="rounded shadow-lg overflow-hidden p-8 flex-1">
              <div>
                <img src={hhhImage} alt="c1 Image" />
              </div>
              <span className="text-gray-500 text-lg font-body font-medium">
                News
              </span>
              <h1 className="text-2xl py-4 font-body font-medium text-gray-700">
                McMillan Lecture and APTA Specialty and Proficiency Ceremony
              </h1>
              <p className="text-gray-500 font-body font-medium">
                BOSTON, MA FEBRUARY 14, 2024 7:30 P.M. - 9 P.M. ET
              </p>
            </div>
          </div>
          <div className="py-10 flex flex-grow">
            <div className="rounded shadow-lg overflow-hidden p-8 flex-1">
              <img src={coming3Image} alt="c2 Image" />
              <span className="text-gray-500 text-lg font-body font-medium">
                News
              </span>
              <h1 className="text-2xl py-4 font-body font-medium text-gray-700">
                APTA Combined Sections Meeting 2024
              </h1>
              <p className="text-gray-500 font-body font-medium">
                BOSTON, MA FEBRUARY 15, 2024 THRU FEB. 17, 2024
              </p>
            </div>
          </div>
          <div className="py-10 flex flex-grow">
            <div className="rounded shadow-lg overflow-hidden p-8 flex-1">
              <img src={coming4Image} alt="c4 Image" />
              <span className="text-gray-500 text-lg font-body font-medium">
                News
              </span>
              <h1 className="text-2xl py-4 font-body font-medium text-gray-700">
                PT Fund Celebration of Diversity
              </h1>
              <p className="text-gray-500 font-body font-medium ">
                MUSEUM OF SCIENCE, BOSTON FEBRUARY 15, 2024 7:30 P.M. - 9 P.M.
                ET
              </p>
            </div>
          </div>
          <div className="py-10 flex flex-grow">
            <div className="rounded shadow-lg overflow-hidden p-8 flex-1">
              <img src={coming2Image} alt="c3 Image" />
              <span className="text-gray-500 text-lg font-body font-medium">
                News
              </span>
              <h1 className="text-2xl py-4 font-body font-medium text-gray-700">
                PTPAC Party
              </h1>
              <p className="text-gray-500 font-body font-medium">
                SPIN, BOSTON FEBRUARY 16, 2024 7 P.M. - 9 P.M. ET
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coming;
