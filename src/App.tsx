import React from "react"
import { ProjectType } from "../dataTypes";
import { Outlet, createBrowserRouter, RouterProvider} from "react-router-dom"
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetail';
import Projects from "./pages/Projects";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import instance from "./api/axios";
import { projectSlice } from "./app/features/project/projectSlice";
import { useAppDispatch} from "./app/store/hooks";


const MyApp = () => {

  const [projects, setProjects] = React.useState<ProjectType[]>([])
  const dispatch = useAppDispatch();

  React.useEffect(
    ()=>{
      instance.get("/projects")
      .then((project) => {
        // const tempProject = 
        setProjects(project.data.data)
        addToStore();
      })
      .catch((err)=> console.log(err))
    },[]
  )
// console.log(projects[0])
    const addToStore = ()=> {
      for (let i = 0; i < projects.length; i++){
        dispatch(projectSlice.actions.createProject(projects[i]))
        // console.log(i, projects[i]);
      }
    }
    

    // console.log(allProjects);

  return (
    <div className="bg-primary text-white font-mono [&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200">
        <NavBar/>
          <div>
             <Outlet />
          </div>
        <Footer/>
    </div>
  )
}

const router = createBrowserRouter (
  [
    {
      element: <MyApp />,
      errorElement: <Error />,
      children: [ 
        { path: '/', element: <Home />,},
        { path: '/aboutme', element: <About />},
        { path: '/contact', element: <Contact />},
        { path: '/blogs', element: <Blogs />},
        { path: '/projects', element: <Projects/>},
        { path: '/projects/:projectid', element: <ProjectDetails/>},

      ]
    }
  ]
)

function App() {
  return (
    <div className="App text-slate-800 max-w-[85rem] mx-auto">
     <RouterProvider router = {router} />
    </div>
  );
}

export default App;
