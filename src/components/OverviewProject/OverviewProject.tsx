import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectType } from "../../../dataTypes";
import instance from "../../api/axios";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";


export default function OverviewProject(){

    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    
    const [category, setCategory] = React.useState<string>("All");

    React.useEffect(()=> {

        setIsLoading(true)
        instance.get("/projects",{
        params: {
          category
        }
        })
        .then((project) => {
            setProjects(project.data.data)
            setIsLoading(false)
        })
        .catch((err)=> {
            console.log(err.message)
            setIsLoading(false)
        })
    },[category])

    const [projects, setProjects] = React.useState<ProjectType[]>([])
    console.log("All Projects:",projects);
    const miniProjects : ProjectType[] = []
    miniProjects[0] = projects[3];
    miniProjects[1] = projects[4];
    miniProjects[2] = projects[5];
    miniProjects[3] = projects[6];
    miniProjects[4] = projects[8];
    miniProjects[5] = projects[9];

    console.log(miniProjects)

    return (
        <div className="py-10 sm:py-20 px-4 sm:px-20">
            <div>
                <div className="mb-8">
                    <h2 className="text-4xl mb-2">Latest Works</h2>
                    <p className="text-xs text-tertiary">Perfect Solutions For digital experience</p>
                </div>
                {
                    isLoading? 
                    <div className="flex justify-center items-center">
                        <FadeLoader color="#6ff7a7" />
                    </div>
                    
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {
                            projects.length === 0 ?
                            <div></div>
                            :
                            miniProjects.map((miniProject, index) => {
                                return (<ProjectCard key={index} project={miniProject}/>)
                            })
                        }                    
                    </div>
                }
                
                <div className="mt-10 text-center">
                    <Link to="/projects" className="text-secondary underline cursor-pointer font-semibold text-xl mb-2 hover:no-underline w-fit mx-auto">
                        <h2>ALL PROJECTS</h2>
                    </Link>
                    <p className="text-[0.5rem] text-tertiary w-[50%] mx-auto">*Some projects not allow publish by NDA, if you want to see more, <span><a href="https://www.linkedin.com/in/mbianou-bradon/">contact</a></span></p>
                </div>
            </div>
        </div>
    )
}