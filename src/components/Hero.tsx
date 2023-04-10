import React from "react"
import bradon_hero from "../assets/images/bradon_hero.png"

export default function Hero(){

    return (
        <div className="h-[80vh] bg-red-60">
            <div className="grid grid-cols-2 h-full">
                <div className="h-[70%] w-[80%] my-auto mx-auto">
                    <div className="p-2 rounded bg-secondary text-slate-900 text-xs w-fit"><h2>Full Stack Developer</h2></div>
                    <div className="mt-7 mb-[4.5rem]">
                        <h2 className="text-5xl mb-5 leading-[3rem]">
                            Talk is Cheap. Show me the code
                        </h2>
                        <p className="text-xs text-tertiary w-[75%] leading-[1.5rem]">I design and code beautifully simple things, and I am passionate about UI.</p>
                    </div>

                    <div className="text-xl uppercase text-secondary underline cursor-pointer hover:no-underline font-semibold">
                        <a href="#">Let's Chat!</a>
                    </div>
                </div>
                <div className="w-full h-full flex items-end">
                    <img src={bradon_hero} alt="Bradon Profile" title="Bradon Profile" className="h-[80%] w-[80%] aspect-square object-center"/>
                </div>
            </div>
        </div>
    )
}