import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export default function NavBar() {
  return (
<nav className="flex justify-between items-center h-[10vh] px-10">
      <div className="logo font-sans text-lg">
        <span className="font-bold">Mbianou</span> Bradon
      </div>
      <div className="menu">
        <ul className="flex justify-between gap-10 [&>*:hover]:text-secondary">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Works</a>
          </li>
          <li>
            <a href="">Notes</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="socials flex gap-12 items-center">
        <ul className="flex justify-between gap-4 text-sm [&>*:hover]:text-secondary">
          <li>
            <a href="" className="flex items-center gap-1">
              <div>
                <BsTwitter />
              </div>
              <h2>Twitter</h2>
            </a>
          </li>
          <li>
            <a href="" className="flex items-center gap-1">
              <div>
                <BsGithub />
              </div>
              <h2>GitHub</h2>
            </a>
          </li>
        </ul>
        <div>
          <div>
            <IoIosMail />
          </div>
        </div>
      </div>
    </nav>
  );
}
