import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { MdMailOutline} from "react-icons/md";
import { FiMenu } from "react-icons/fi"
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center h-[10vh] px-4 sm:px-10 [&_*]:transition-colors [&_*]:ease-linear [&_*]:duration-150">
      <div className="logo font-sans text-lg">
        <span className="font-bold">Mbianou</span> Bradon
      </div>
      <div className="menu hidden md:block">
        <ul className="flex justify-between items-center gap-10 [&>*:hover]:text-secondary">
          <li>
            <NavLink to="/">
                {
                  ({isActive}) => (
                    isActive? <div className="text-secondary tracking-tighter"><span className="text-xs">&lt;</span> Home <span className="text-xs">/&gt;</span></div>  : <span className="">Home</span>
                  )
                }
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutme">
                {
                  ({isActive}) => (
                    isActive? <div className="text-secondary tracking-tighter"><span className="text-xs">&lt;</span> AboutMe <span className="text-xs">/&gt;</span></div>  : <span className="">AboutMe</span>
                  )
                }
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
                {
                  ({isActive}) => (
                    isActive? <div className="text-secondary tracking-tighter"><span className="text-xs">&lt;</span> Works <span className="text-xs">/&gt;</span></div> : <span className="">Works</span>
                  )
                }
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs">
                {
                  ({isActive}) => (
                    isActive? <div className="text-secondary tracking-tighter"><span className="text-xs">&lt;</span> Blogs <span className="text-xs">/&gt;</span></div>  : <span className="">Blog</span>
                  )
                }
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
                {
                  ({isActive}) => (
                    isActive? <div className="text-secondary tracking-tighter"><span className="text-xs">&lt;</span> Contact <span className="text-xs">/&gt;</span></div>  : <span className="">Contact</span>
                  )
                }
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socials hidden sm:flex gap-12 items-center">
        <ul className="flex justify-between gap-4 text-sm [&>*:hover]:bg-secondary/60 [&>*:hover]:text-white [&>*]:cursor-pointer">
          <li
            className="w-10 h-10 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary "
            title="twitter"
          >
            <a href="" className="flx items-center gap-1">
              <div>
                <BsTwitter />
              </div>
            </a>
          </li>
          <li
            className="w-10 h-10 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary "
            title="GitHub"
          >
            <a href="" className="flx items-center gap-1">
              <div>
                <BsGithub />
              </div>
            </a>
          </li>
          <li
            className="w-10 h-10 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary "
            title="Mail"
          >
            <div>
              <MdMailOutline />
            </div>
          </li>
        </ul>
      </div>

      <div className="text-3xl md:hidden">
        <FiMenu />
      </div>
    </nav>
  );
}
