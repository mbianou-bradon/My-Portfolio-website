import React from "react"
import { BsTwitter, BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs"

export default function Footer(){

    return(
        <footer className="md:h-[50vh] [&>*]:grid [&>*]:grid-cols-1 [&>*]:sm:grid-cols-3 [&>*]:gap-y-5 py-10 sm:py-20 px-4 sm:px-20">
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
                                <li><a href="">About</a></li>
                                <li><a href="">Works</a></li>
                                <li><a href="">Notes</a></li>
                                <li><a href="">Contact</a></li>
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
                        <a href="" className="flx items-center gap-1">
                        <div>
                            <BsTwitter />
                        </div>
                        </a>
                    </div>
                    <div className="w-7 h-7 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary " title="GitHub">
                        <a href="" className="flx items-center gap-1">
                        <div>
                            <BsGithub />
                        </div>
                        </a>
                    </div>
                    <div className="w-7 h-7 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary " title="LinkedIn">
                        <a href="" className="flx items-center gap-1">
                        <div>
                            <BsLinkedin />
                        </div>
                        </a>
                    </div>
                    <div className="w-7 h-7 text-secondary rounded-full flex items-center justify-center shadow-inner shadow-secondary " title="Facebook">
                        <a href="" className="flx items-center gap-1">
                        <div>
                            <BsFacebook />
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}