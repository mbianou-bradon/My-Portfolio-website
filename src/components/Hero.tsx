

export default function Hero(){

    return (
        <div className="h-[80vh]">
            <div className="grid grid-cols-2 h-full">
                <div className="h-[70%] w-[70%] my-auto mx-auto">
                    <div className="p-2 rounded bg-secondary text-slate-900 text-xs w-fit"><h2>Full Stack Developer</h2></div>
                    <div className="mt-4 mb-[4.5rem]">
                        <h2 className="text-4xl w-[80%] mb-5 leading-[3rem]">
                            Talk is Cheap. Show me the code
                        </h2>
                        <p className="text-xs text-tertiary w-[75%] leading-[1rem]">I design and code beautifully simple things, and I am passionate about UI.</p>
                    </div>

                    <div className="uppercase text-secondary underline cursor-pointer hover:no-underline font-semibold">
                        <a href="#">Let's Chat!</a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}