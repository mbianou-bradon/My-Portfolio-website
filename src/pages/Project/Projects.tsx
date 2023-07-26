import React from 'react'
import instance from '../../api/axios'
import { ProjectType } from '../../../dataTypes'
import ProjectCard from '../../components/OverviewProject/ProjectCard'
import { HashLoader } from 'react-spinners'


export default function Projects() {

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [projects, setProjects] = React.useState<ProjectType[]>([])
  const [category, setCategory] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(12);

  React.useEffect(
    ()=>{
      setIsLoading(true);
      instance.get("/projects",{
        params: {
          category: category,
          page,
          limit,
        }
      })
      .then((project) => {
        const temp = project.data.data
        setProjects(temp)
        setIsLoading(false);
      })
      .catch((err)=> {
        setIsLoading(false);
        console.log("All Project Error:",err.message)
      })
    },[category, page, limit]);




  return (
    <div className="px-4 sm:px-8 min-h-screen">
      <header>
        <h2 className="text-3xl font-semibold mb-5">Projects</h2>
        <div className="flex items-center justify-between flex-wrap gap-y-5">
            <div className="border rounded-full w-fit flex px-2 sm:px-4 py-1 text-sm sm:text-[1rem]">
              <label htmlFor="projectType">Project Type :</label>
              <select name="projextType" id="" onChange={(value)=>setCategory(value.target.value)} className="focus:outline-0 bg-transparent text-sm text-secondary min-w-0">
                <option value="All">All</option>
                <option value="FRONTEND">Frontend</option>
                <option value="BACKEND">Backend</option>
                <option value="MOBILE">Mobile App</option>
              </select>
            </div>

        </div>
      </header>
      {isLoading? 
        <div className="flex justify-center items-center min-h-[70vh]">
          <HashLoader color="#6ff7a7" speedMultiplier={1}/>
        </div>
        :
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-min gap-5 my-6">
            {
              projects.map((project, index)=> {
                return <ProjectCard key={index} project={project} />;
              })
            }
        </div>
      }
    </div>
  )
}