import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar, Footer } from "./components";
import {
  Home,
  Blogs,
  About,
  Contact,
  Error,
  ProjectDetails,
  Projects,
} from "./pages";

const MyApp = () => {
  return (
    <div className="bg-primary text-white font-mono [&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200">
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MyApp />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutme", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:projectId", element: <ProjectDetails /> },
    ],
  },
]);

function App() {
  return (
    <div className="App text-slate-800 max-w-[85rem] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
