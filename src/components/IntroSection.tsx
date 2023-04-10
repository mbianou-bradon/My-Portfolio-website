import React from "react"
import { BsFileCode, BsDatabaseFill } from "react-icons/bs"
import { FaMobile } from "react-icons/fa"

export default function IntroSection(){

    return(
        <div className="sm:h-[80vh] bg-[#25262a] py-10 sm:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="px-4 sm:px-10">
                    <div className="bg-primary/50 hover:bg-primary hover:text-secondary p-8 hover:shadow-md rounded-lg hover:scale-[1.02] cursor-pointer">
                        <div className="mb-6">
                            <div className="text-2xl flex justify-between">
                                <h2>Front-End</h2>
                                <div className="text-secondary/80">
                                    <BsFileCode />   
                                </div>
                            </div>
                            <p className="text-xs text-tertiary">I develop front-end applications with coding super smooth</p>
                        </div>
                        <div className="text-xs text-slate-50">
                            <a href="#">8 PROJECTS</a>
                        </div>
                    </div>

                    <div className="bg-primary/50 hover:bg-primary hover:text-secondary p-8 hover:shadow-md rounded-lg my-7 hover:scale-[1.02] cursor-pointer">
                        <div className="mb-6">
                            <div className="text-2xl flex justify-between">
                                <h2>Back-End</h2>
                                <div className="text-secondary/80">
                                    <BsDatabaseFill />   
                                </div>
                            </div>
                            <p className="text-xs text-tertiary w-[80%] leading-4">I build simple, robust and fast API backend applications with coding super smooth</p>
                        </div>
                        <div className="text-xs text-slate-50">
                            <a href="#">2 PROJECTS</a>
                        </div>
                    </div>

                    <div className="bg-primary/50 hover:bg-primary hover:text-secondary p-8 hover:shadow-md rounded-lg hover:scale-[1.02] cursor-pointer">
                        <div className="mb-6">
                            <div className="text-2xl flex justify-between">
                                <h2>Mobile Application</h2>
                                <div className="text-secondary/80">
                                    <FaMobile />   
                                </div>
                            </div>
                            <p className="text-xs text-tertiary w-[80%] leading-4">Create amazing mobile applications with smooth user interface</p>
                        </div>
                        <div className="text-xs text-slate-50">
                            <a href="#">2 PROJECTS</a>
                        </div>
                    </div>
                </div>

                <div className="px-4 sm:w-[60%]">
                    <h4 className="text-tertiary text-xs mb-5">Introduce</h4>
                    <h2 className="text-3xl">Hello! I'm Mbianou Bradon</h2>
                    <p className="italic my-8">Every great design begin with an even better story</p>
                    <p className="text-xs text-tertiary leading-6">
                        Since beginning my journey in the software world, I never stop working and improving. 
                        I have built many projects both personal and individual. I worked and collaborated with talented people to create digital products
                        for bith business and consumer user. 
                        I am quietly confident, naturally curious, enthusiatic and perpetualu working on improving on my approach to solve some problem.
                    </p>
                </div>
            </div>
        </div>
    )
}