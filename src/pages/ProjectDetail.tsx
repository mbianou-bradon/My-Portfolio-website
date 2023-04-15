import { BsGithub } from "react-icons/bs";
import { MdOnlinePrediction } from "react-icons/md"
import { html, css, javascript, typescript, react, redux, tailwindcss, firebase, flutter, materialui, bootstrap, nodejs, mongodb, express, nextjs } from "../assets/icons/iconsfile"


export default function ProjectDetails(){

    return(
        <div className="px-4 sm:px-20 py-10">
            <div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <h2 className="text-5xl mb-5">Project Heading</h2>
                        <p className="text-sm mb-10 leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique minima eveniet sunt reprehenderit voluptates dolorum eaque perferendis quo? Qui provident accusamus facilis hic quam eius maxime officia nesciunt quis?
                        </p>

                        <div className="flex justify-between mb-20 flex-wrap gap-y-5 [&>*]:flex [&>*]:gap-2 [&>*]:items-center [&>*]:justify-center [&>*]:border [&>*]:shadow-inner [&>*]:shadow-secondary [&>*]:py-3 [&>*]:rounded-md [&>*]:w-full [&>*]:sm:w-[40%] [&>*]:cursor-pointer [&>*:active]:scale-95">
                            <div className="text-secondary">
                                <h2>GitHub</h2>
                                <BsGithub />
                            </div>

                            <div className="bg-secondary/80 border-secondary font-semibold hover:bg-transparent hover:text-secondary/80">
                                <h2>Live Demo</h2>
                                <MdOnlinePrediction className="text-xl"/>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl mb-4">Tech Stack</h2>
                            {/* Tech Stack */}
                            <div className="flex gap-5 flex-wrap">

                                { react && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={react} title="React" alt="React" width="50" height="50"/>
                                    </div>
                                    <h2>React</h2>
                                </div>
                                }&nbsp;
                                { nextjs && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={nextjs} title="NextJS" alt="NextJS" width="50" height="50"/>
                                    </div>
                                    <h2>NextJS</h2>
                                </div>
                                }&nbsp;
                                {redux && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={redux} title="Redux" alt="Redux " width="50" height="50"/>
                                    </div>
                                    <h2>Redux</h2>
                                </div>
                                }&nbsp;
                                { html && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={html} title="HTML5" alt="HTML" width="50" height="50"/>
                                    </div>
                                    <h2>HTML5</h2>
                                </div>
                                }&nbsp;
                                { css && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={css}  title="CSS3" alt="CSS" width="50" height="50"/>
                                    </div>
                                    <h2>CSS3</h2>
                                </div>
                                }&nbsp;
                                { tailwindcss && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={tailwindcss} title="Tailwindcss" alt="Tailwindcss" width="50" height="50"/>
                                    </div>
                                    <h2>TailwindCSS</h2>
                                </div>
                                }&nbsp;
                                { bootstrap && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" width="50" height="50"/>
                                    </div>
                                    <h2>Bootstrap</h2>
                                </div>
                                }&nbsp;
                                { materialui && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={materialui} title="Material UI" alt="Material UI" width="50" height="50"/>
                                    </div>
                                    <h2>MaterialUI</h2>
                                </div>
                                }&nbsp; 
                                { javascript && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={javascript} title="JavaScript" alt="JavaScript" width="40" height="40"/>
                                    </div>
                                    <h2>JavaScript</h2>
                                </div>
                                }&nbsp;
                                { typescript && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={typescript} title="TypeScript" alt="TypeScript" width="40" height="40"/>
                                    </div>
                                    <h2>TypeScript</h2>
                                </div>
                            }&nbsp;

                                { nodejs && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={nodejs} title="NodeJS" alt="NodeJS" width="50" height="50"/>
                                    </div>
                                    <h2>NodeJS</h2>
                                </div>
                            }&nbsp;
                                { express && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={express} title="Express" alt="Express" width="50" height="50"/>
                                    </div>
                                    <h2>ExpressJS</h2>
                                </div>
                            }&nbsp;
                                { flutter && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={flutter} title="Flutter" alt="Flutter" width="50" height="50"/>
                                    </div>
                                    <h2>Flutter</h2>
                                </div>
                            }&nbsp;
                                { firebase && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={firebase} title="Firebase" alt="Firebase" width="50" height="50"/>
                                    </div>
                                    <h2>Firebase</h2>
                                </div>
                            }&nbsp;
                            { mongodb && 
                                <div className="stackIconContainer">
                                    <div className="stackIcon">
                                        <img src={mongodb} title="MongoDB" alt="MongoDB" width="50" height="50"/>
                                    </div>
                                    <h2>MongoDB</h2>
                                </div>
                            }&nbsp;
                                
                            </div>
                        </div>
                    </div> 

                    <div className="">
                        <img src="" alt="" />
                    </div>
               </div> 

               <div className="w-full">
                    <h2 className="text-3xl my-4">More Images</h2>

                    <div className="flex flex-wrap w-full [&>*]:w-full [&>*]:sm:w-[20rem] [&>*]:h-full [&>*]:sm:h-[15rem] [&>*]:bg-rose-500 [&>*]:m-4">
                        <div className="cursor-zoom-in"></div>
                        <div></div>
                        <div></div>
                        {/* <div></div> */}
                    </div>
               </div>
            </div>
        </div>
    )
}