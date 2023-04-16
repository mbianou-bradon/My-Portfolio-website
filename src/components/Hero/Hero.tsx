import React from "react"
import HeroImage from "./HeroImage"


export default function Hero(){

    return (
        <div className="sm:h-[80vh] mb-[6.25rem] sm:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-y-5">
                <div className="h-[85%] sm:h-[70%] w-[90%] sm:w-[80%] my-auto mx-auto">
                    <div className="p-2 rounded bg-secondary text-slate-900 text-xs w-fit"><h2>Full Stack Developer</h2></div>
                    <div className="mt-7 mb-[4.5rem]">
                        <h2 className="text-4xl sm:text-5xl mb-5 leading-[3rem]">
                            Talk is Cheap. Show me the code
                        </h2>
                        <p className="text-xs text-tertiary w-[85%] sm:w-[75%] leading-[1.5rem]">I design and code beautifully simple things, and I am passionate about UI.</p>
                    </div>

                    <div className="text-xl uppercase text-secondary underline cursor-pointer hover:no-underline font-semibold w-fit">
                        <a href="#">Let's Chat!</a>
                    </div>
                </div>
                <div className="w-full h-full col-start-1 row-start-1 md:col-start-2 flex items-center justify-center">
                    <HeroImage/>
                </div>
            </div>
        </div>
    )
}