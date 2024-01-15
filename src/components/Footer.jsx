import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="bg-blue-400 text-white p-6">
        <div>
          <div>
            <div class="grid grid-cols-9 space-x-3 m-10 ">
              <div class="col-span-1">
                <img
                  class="  mr-30 "
                  src="https://www.apta.org/contentassets/1516fc349ca340d19df8c624e6a79767/apta_ntl_white_rgb.svg"
                ></img>
              </div>
              <div class="col-span-3 flex-col">
                <div class="m-2 flex justify-center ">
                  <a
                    href="#"
                    class="hover:text-gray-300 text-xl font-bold mb-2"
                  >
                    Do you need help?_______
                  </a>
                </div>
                <div class="flex justify-center">
                  <Link
                    class="hover:text-gray-300 text-xl font-bold mb-2 border border-white rounded text-gray-200 px-10 py-1 bg-blue-400 "
                    to={"/Conatct"}
                  >
                    {" "}
                    Contact Us
                  </Link>
                </div>
              </div>
              <div class="col-span-5">
                <div className="container mx-auto flex justify-end">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <FaYoutube />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          <div class="container mx-auto flex flex-col md:flex-row justify-between">
            <div class="flex flex-col-2 md:flex-row justify-between">
              <div class="mb-4 md:mb-0">
                <ul class="list-none">
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      Related APTA Sites
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      APTA Career Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      APTA Learning Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      APTA Specialist
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      Certification
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      APTA Store
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      ChoosePT.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      ValueofPT.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      Guide to Physical
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      Therapist Practice
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-4 md:mb-0">
                <ul class="list-none">
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      PTJ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      ABPTRFE
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      ACAPT
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      CAPTE
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      Foundation for
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      Physical Therapy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      Research
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-gray-300 text-xl font-bold mb-2"
                    >
                      PTPAC
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-1/2 h-full ">
              <ul>
                <li>
                  <h2 class="text-xl font-bold mb-2 ">
                    3030 Potomac Ave., Suite 100 | Alexandria, VA | 22305-3085
                  </h2>
                </li>
                <h3 class="text-xl font-bold mb-2 ">800-999-2782</h3>
                <li>
                  <a href="#" class="text-lg hover:text-gray-300">
                    For Advertisers, Exhibitors, and Sponsors | For Media
                  </a>
                </li>
                <li>
                  <a href="#" class="text-lg hover:text-gray-300">
                    About APTA | Work at APTA
                  </a>
                </li>
                <li>
                  <a href="#" class="text-lg hover:text-gray-300">
                    Privacy Policy | Disclaimer
                  </a>
                </li>
                <li>
                  <p class="text-lg">
                    All Contents &copy; 2024 American Physical Therapy
                    Association. All rights reserved. Use of this and other APTA
                    websites constitutes acceptance of our Terms & Conditions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="m-8">
            <a href="#" class="text-lg hover:text-gray-300">
              Find your chapter or section
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
