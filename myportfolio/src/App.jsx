import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Template from './component/layout/Template'
import Home from './component/pages/Home'
import Resume from './component/pages/Resume'
import Project from './component/pages/Project'
import ProjectItem from './component/pages/ProjectItem'

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Template />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/project",
          element: <Project />
        },
        {
          path: "/resume",
          element: <Resume />
        },
        {
          path: "/projectItem",
          element: <ProjectItem />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
