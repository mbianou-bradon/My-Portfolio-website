import React from 'react'
import {IoMdAdd} from "react-icons/io"



export default function Projects() {
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

            {/* <div className="w-fit px-6 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary cursor-pointer active:scale-95 select-none">
              <h2 className="flex items-center gap-1">Add Project <div><IoMdAdd/></div></h2>
            </div> */}
        </div>
      </header>

      <div className="flex flex-wrap min-h-min gap-5 my-6">
    
      </div>

    </div>
  )
}