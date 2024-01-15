import React from "react";
import phyImage from "../assets/phy.jpg";
const Physical = () => {
  return (
    <>
      <div class="py-14">
        <div
          className="flex items-center justify-center bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${phyImage})` }}
        >
          <div class="p-20">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 font-body">
              <div class="rounded shadow-lg overflow-hidden p-8 xs:h-full bg-white opacity-80 md:w-full">
                <h3 class="h2 text-black text-3xl font-extrabold">
                  Find a Physical Therapist
                </h3>
                <p class="text-black text-base my-6">
                  Our directory provides access to PTs nationwide.
                </p>
                <p>
                  <a
                    class="text-lg text-blue-600"
                    title="Find a PT Directory"
                    href="http://aptaapps.apta.org/APTAPTDirectory/FindAPTDirectory.aspx"
                  >
                    Start Your Search
                  </a>{" "}
                  |{" "}
                  <a
                    class="text-lg text-blue-600"
                    title="For APTA Members: Find a PT Profile"
                    href="/apta-and-you/explore-apta-membership/membership-benefits/find-a-pt-profile-for-apta-members"
                  >
                    Update Your Profile
                  </a>
                </p>
              </div>
              <div class="rounded shadow-lg overflow-hidden p-8 md:h-full bg-white opacity-70 md:w-full">
                <h3 class="h2 text-3xl font-extrabold">
                  Choose Physical Therapist
                </h3>
                <p class="text-base my-4">
                  Our ChoosePT website educates the public about the benefits of
                  physical therapy.
                </p>
                <p>
                  <a
                    class="text-lg text-blue-600"
                    title="Find a PT Directory"
                    href="http://aptaapps.apta.org/APTAPTDirectory/FindAPTDirectory.aspx"
                  >
                    Visit ChoosePT.com
                  </a>{" "}
                  |{" "}
                  <a
                    class="text-lg text-blue-600"
                    title="For APTA Members: Find a PT Profile"
                    href="/apta-and-you/explore-apta-membership/membership-benefits/find-a-pt-profile-for-apta-members"
                  >
                    Help Spread the Word
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Physical;
