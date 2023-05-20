import { BsGithub } from "react-icons/bs";
import { MdOnlinePrediction } from "react-icons/md"
import { HTML5, CSS, JAVASCRIPT, TYPESCRIPT, REACT, REDUX, TAILWINDCSS, FIREBASE, FLUTTER, MATERIALUI, BOOTSTRAP, NODEJS, MONGODB, EXPRESS, NEXTJS } from "../assets/icons/iconsfile"
import React from "react";
import { ProjectType } from "../../dataTypes";
import instance from "../api/axios";
import { useParams } from "react-router";


export default function ProjectDetails(){
    const [projectDetail, setProjectDetail] = React.useState<ProjectType>()

    const { projectId } = useParams();

    console.log(projectDetail?.techStacks);

    React.useEffect(() => {
        instance.get(`projects/${projectId}`)
        .then((response)=>{
            const data = response.data.data
            console.log(data)
            setProjectDetail(data);
        })
        .catch((err)=>{
            console.log("ProjectDetails Error:", err.message)
        })
    },[])



    return(
        <div className="px-4 sm:px-20 py-10">
            <div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <h2 className="text-2xl sm:text-5xl mb-5">{projectDetail?.title}</h2>
                        <p className="text-sm mb-10 leading-8">
                            {projectDetail?.desc}
                        </p>

                        <div className="flex justify-between mb-20 flex-wrap gap-y-5 [&>*]:flex [&>*]:gap-2 [&>*]:items-center [&>*]:justify-center [&>*]:border [&>*]:shadow-inner [&>*]:shadow-secondary [&>*]:py-3 [&>*]:rounded-md [&>*]:w-full [&>*]:sm:w-[40%] [&>*]:cursor-pointer [&>*:active]:scale-95">
                            { projectDetail?.socialLinks.GitHub &&
                                <a href={projectDetail?.socialLinks.GitHub} target="_blank" rel="noreferrer" className="text-secondary">
                                    <h2>GitHub</h2>
                                    <BsGithub />
                                </a>
                            }

                            <a href={projectDetail?.socialLinks.liveLink} target="_blank" rel="noreferrer" className="bg-secondary/80 border-secondary font-semibold hover:bg-transparent hover:text-secondary/80">
                                <h2>Live Demo</h2>
                                <MdOnlinePrediction className="text-xl"/>
                            </a>
                        </div>

                        <div>
                            <h2 className="text-3xl mb-4">Tech Stack</h2>
                            {/* Tech Stack */}
                            <div className="flex gap-5 flex-wrap">
                                {
                                    projectDetail?.techStacks.map((tech)=>{
                                        
                                    if(tech === "REACT"){
                                        return (
                                            <>
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={REACT} title="React" alt="React" width="50" height="50"/>
                                                    </div>
                                                    <h2>React</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    }
                                    if(tech==="NEXTJS"){
                                        return(
                                            <>
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={NEXTJS} title="NextJS" alt="NextJS" width="50" height="50"/>
                                                    </div>
                                                    <h2>NextJS</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    }
                                    if(tech==="REDUX"){
                                        return(
                                            <>
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={REDUX} title="Redux" alt="Redux " width="50" height="50"/>
                                                    </div>
                                                    <h2>Redux</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    }
                                    if(tech === "HTML5" || tech==="HTML"){
                                        return(
                                        <>
                                            <div className="stackIconContainer">
                                                <div className="stackIcon">
                                                    <img src={HTML5} title="HTML5" alt="HTML" width="50" height="50"/>
                                                </div>
                                                <h2>HTML5</h2>
                                            </div>&nbsp;
                                        </>
                                        )
                                    }
                                    if(tech === "CSS"){ 
                                        return(
                                        <>
                                            <div className="stackIconContainer">
                                                <div className="stackIcon">
                                                    <img src={CSS}  title="CSS3" alt="CSS" width="50" height="50"/>
                                                </div>
                                                <h2>CSS3</h2>
                                            </div>&nbsp;
                                        </>
                                        )
                                    }
                                    if(tech ==="TAILWINDCSS"){  
                                        return(
                                        <>
                                            <div className="stackIconContainer">
                                                <div className="stackIcon">
                                                    <img src={TAILWINDCSS} title="Tailwindcss" alt="Tailwindcss" width="50" height="50"/>
                                                </div>
                                                <h2>TailwindCSS</h2>
                                            </div>&nbsp;
                                        </>
                                        )
                                    }
                                    if(tech === "BOOTSTRAP"){ 
                                        return(
                                            <>
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={BOOTSTRAP} title="Bootstrap" alt="Bootstrap" width="50" height="50"/>
                                                    </div>
                                                    <h2>Bootstrap</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    }
                                    if(tech ==="MATERIALUI"){
                                        return(
                                            <>  
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={MATERIALUI} title="Material UI" alt="Material UI" width="50" height="50"/>
                                                    </div>
                                                    <h2>MaterialUI</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    } 
                                    if(tech==="JAVASCRIPT"){
                                        return(
                                            <>  
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={JAVASCRIPT} title="JavaScript" alt="JavaScript" width="40" height="40"/>
                                                    </div>
                                                    <h2>JavaScript</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    }
                                    if(tech === "TYPESCRIPT"){
                                        return(
                                            <>  
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={TYPESCRIPT} title="TypeScript" alt="TypeScript" width="40" height="40"/>
                                                    </div>
                                                    <h2>TypeScript</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    }

                                    if(tech==="NODEJS"){
                                        return(
                                            <>   
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={NODEJS} title="NodeJS" alt="NodeJS" width="50" height="50"/>
                                                    </div>
                                                    <h2>NodeJS</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    }
                                    if(tech==="EXPRESSJS"){
                                        return(
                                            <>    
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={EXPRESS} title="Express" alt="Express" width="50" height="50"/>
                                                    </div>
                                                    <h2>ExpressJS</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    }
                                    if(tech==="FLUTTER"){
                                        return(
                                            <> 
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={FLUTTER} title="Flutter" alt="Flutter" width="50" height="50"/>
                                                    </div>
                                                    <h2>Flutter</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    }
                                    if(tech==="FIREBASE"){
                                        return(
                                            <>
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={FIREBASE} title="Firebase" alt="Firebase" width="50" height="50"/>
                                                    </div>
                                                    <h2>Firebase</h2>
                                                </div>&nbsp;
                                            </>
                                        )
                                    }
                                    if(tech==="MONGODB"){
                                        return(
                                            <> 
                                                <div className="stackIconContainer">
                                                    <div className="stackIcon">
                                                        <img src={MONGODB} title="MongoDB" alt="MongoDB" width="50" height="50"/>
                                                    </div>
                                                    <h2>MongoDB</h2>
                                                </div>&nbsp; 
                                            </>
                                        )
                                    }
                                    })
                                }
                                
                            </div>
                        </div>
                    </div> 

                    <div className="flex items-center justify-end">
                        <div className="w-4/5">
                            <img src={projectDetail?.images[0]} alt="" className="w-full h-full"/>
                        </div>
                    </div>
                </div> 

                <div className="w-full mt-20">
                    <h2 className="text-3xl my-4">More Images</h2>

                    <div className="flex flex-wrap w-full [&>*]:w-full [&>*]:sm:w-[20rem] [&>*]:h-full [&>*]:sm:h-[12rem] [&>*]:bg-rose-500 [&>*]:m-4">
                        {
                            projectDetail?.images.map((image, index)=> {
                                return(
                                    <div className="cursor-zoom-in" key={index}>
                                        <img src={image} alt={`image-${index}`} className="w-full h-full"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}