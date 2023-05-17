import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectType } from "../../../dataTypes";
import instance from "../../api/axios";


export default function OverviewProject(){

  const [projects, setProjects] = React.useState<ProjectType[]>([])
  const miniProjects : ProjectType[] = []

  React.useEffect(()=> getProject(),[])

    const getProject = ()=>{
        instance.get("/projects")
        .then((project) => {
            setProjects(project.data.data)
        })
        .catch((err)=> console.log(err))
    
    }

    console.log("All Projects:",projects);
    miniProjects[0] = projects[0];
    miniProjects[1] = projects[1];
    miniProjects[2] = projects[2];
    miniProjects[3] = projects[3];
    miniProjects[4] = projects[4];
    miniProjects[5] = projects[5];

    return (
        <div className="py-10 sm:py-20 px-4 sm:px-20">
            <div>
                <div className="mb-8">
                    <h2 className="text-4xl mb-2">Latest Works</h2>
                    <p className="text-xs text-tertiary">Perfect Solutions For digital experience</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        miniProjects.map(miniProject => {
                            return (<ProjectCard key={miniProject._id} project={miniProject}/>)
                        })
        
                    }                    

                </div>
                <div className="mt-10 text-center">
                    <div className="text-secondary underline cursor-pointer font-semibold text-xl mb-2 hover:no-underline w-fit mx-auto">
                        <h2>ALL PROJECTS</h2>
                    </div>
                    <p className="text-[0.5rem] text-tertiary w-[50%] mx-auto">*Some projects not allow publish by NDA, if you want to see more, <span><a href="https://www.linkedin.com/in/mbianou-bradon/">contact</a></span></p>
                </div>
            </div>
        </div>
    )
}