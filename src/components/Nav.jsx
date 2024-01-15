import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav class=" flex justify-between h-36">
        <Link to={"/"}>
          {" "}
          <img
            class="  p-4 "
            src="https://www.apta.org/contentassets/1516fc349ca340d19df8c624e6a79767/apta-full.svg"
          ></img>
        </Link>

        <ul class=" space-x-10 mr-8 mt-28 font-body font-medium hidden lg:flex ">
          <li>
            <Link to={"/career"}>YOUR CAREER</Link>
          </li>
          <li>
            <a href="#">YOUR PRACTICE</a>
          </li>
          <li>
            <a href="#">PATIENT CARE</a>
          </li>
          <li>
            <a href="#">ADVOCACY</a>
          </li>
          <li>
            <a href="#">APTA AND YOU</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
