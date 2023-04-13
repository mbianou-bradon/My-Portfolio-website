import { BsGithub } from "react-icons/bs";


export default function ProjectDetails(){

    return(
        <div className="h-screen px-20 py-10">
            <div>
               <div className="grid grid-cols-2 gap-5">
                    <div>
                        <h2 className="text-5xl mb-5">Project Heading</h2>
                        <p className="text-sm mb-10 leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique minima eveniet sunt reprehenderit voluptates dolorum eaque perferendis quo? Qui provident accusamus facilis hic quam eius maxime officia nesciunt quis?
                        </p>

                        <div className="flex justify-between mb-20 [&>*]:flex [&>*]:gap-2 [&>*]:items-center [&>*]:justify-center [&>*]:border [&>*]:shadow-inner [&>*]:shadow-secondary [&>*]:py-3 [&>*]:rounded-md [&>*]:w-[40%] [&>*]:cursor-pointer">
                            <div className="text-secondary">
                                <h2>GitHub</h2>
                                <BsGithub />
                            </div>

                            <div className="bg-secondary/80 border-secondary font-semibold hover:bg-transparent hover:text-secondary/80">
                                <h2>Live Demo</h2>
                                {/* Live Demo Icon */}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl">Teck Stack</h2>
                            {/* Tech Stack */}
                            <div>

                            </div>
                        </div>
                    </div> 

                    <div>
                        <img src="" alt="" />
                    </div>
               </div> 

               <div>

               </div>
            </div>
        </div>
    )
}