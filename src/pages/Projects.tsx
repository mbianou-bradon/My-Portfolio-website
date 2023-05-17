import React from 'react'
import instance from '../api/axios'
import { ProjectType } from '../../dataTypes'
import ProjectCard from '../components/OverviewProject/ProjectCard'



export default function Projects() {

  const [projects, setProjects] = React.useState<ProjectType[]>([])

  React.useEffect(
    ()=>{
      instance.get("/projects")
      .then((project) => {
        const temp = project.data.data
        setProjects(temp)
      })
      .catch((err)=> console.log(err))
    },[])

    console.log(projects)



  return (
    <div className="px-4 sm:px-8 min-h-screen">
      <header>
        <h2 className="text-3xl font-semibold mb-5">Projects</h2>
        <div className="flex items-center justify-between flex-wrap gap-y-5">
            <div className="border rounded-full w-fit flex px-2 sm:px-4 py-1 text-sm sm:text-[1rem]">
              <label htmlFor="projectType">Project Type :</label>
              <select name="projextType" id="" className="focus:outline-0 bg-transparent text-sm [&>*:hover]:bg-primary min-w-0">
                <option value=""></option>
                <option value="all">All</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="mobile">Mobile App</option>
              </select>
            </div>

        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-min gap-5 my-6">
          {
            projects.map((project, index)=> {
              return <ProjectCard key={index} project={project} />;
            })
          }
      </div>

    </div>
  )
}