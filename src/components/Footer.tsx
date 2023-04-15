import React from "react"
import { BsTwitter, BsGithub, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs"
import { AiOutlineCodepen } from "react-icons/ai"
import { NavLink } from "react-router-dom"

export default function Footer(){

    return(
        <footer className="bg-[#25262a] [&>*]:grid [&>*]:grid-cols-1 [&>*]:sm:grid-cols-3 [&>*]:gap-y-5 py-10 sm:py-20 px-4 sm:px-20">
            <div className="">
                <div className="col-span-2 text-3xl">
                    <h2 className="w-full sm:w-4/5 mb-6">Let's make something amazing together.</h2>

                    <h2>Start by <span className="cursor-pointer hover:underline text-secondary">Saying Hi</span></h2>
                </div>
                <div>
                    <div>
                        <h4 className="text-tertiary text-xs mb-5">Information</h4>
                        <div className="mb-4">
                            <h2 className="text-tertiary text-xl mb-2">Buea Cameroon</h2>
                            <p className="text-sm sm:text-[1rem]">mbianoubradon2000@gmail.com</p>
                        </div>
                    </div>
                    <div className="my-6">
                        <nav>
                            <ul className="flex md:flex-col sm:justify-between gap-5 text-xs [&>*:hover]:text-secondary">
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
                        </nav>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <div className="col-span-2 flex items-baseline flex-wrap gap-x-8 sm:gap-14">
                    <h2 className="brand text-lg sm:text-xl"><span className="font-bold font-serif">Mbianou</span> Bradon</h2>
                    <p className="copyright text-xs text-tertiary"> &copy; 2023. All Right Reserved</p>
                </div>

                <div className="text-xs flex gap-3 [&>*:hover]:bg-secondary/60 [&>*:hover]:text-white [&>*]:cursor-pointer">
                    <div className="w-7 h-7 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary " title="twitter">
                        <a href="https://twitter.com/Mbianou_Bradon" className="flx items-center gap-1" target="_blank" rel="noreferrer">
                        <div>
                            <BsTwitter />
                        </div>
                        </a>
                    </div>
                    <div className="w-7 h-7 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary " title="GitHub">
                        <a href="http://github.com/mbianou-bradon" className="flx items-center gap-1" target="_blank" rel="noreferrer">
                        <div>
                            <BsGithub />
                        </div>
                        </a>
                    </div>
                    <div className="w-7 h-7 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary " title="LinkedIn">
                        <a href="https://www.linkedin.com/in/mbianou-bradon/" className="flx items-center gap-1" target="_blank" rel="noreferrer">
                        <div>
                            <BsLinkedin />
                        </div>
                        </a>
                    </div>
                    <div className="w-7 h-7 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary " title="Facebook">
                        <a href="https://www.facebook.com/romeo.mbianou" className="flx items-center gap-1" target="_blank" rel="noreferrer">
                        <div>
                            <BsFacebook />
                        </div>
                        </a>
                    </div>
                    <div className="w-7 h-7 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary " title="Youtube">
                        <a href="https://www.youtube.com/@Howbradon" className="flx items-center gap-1" target="_blank" rel="noreferrer">
                        <div>
                            <BsYoutube />
                        </div>
                        </a>
                    </div>
                    <div className="w-7 h-7 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary " title="Codepen">
                        <a href="https://codepen.io/mbianou-bradon" className="flx items-center gap-1" target="_blank" rel="noreferrer">
                        <div>
                            <AiOutlineCodepen />
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}