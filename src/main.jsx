
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './layout'

import Home from '../page/Home'
import About from '../page/About'
import Service from '../page/service'
import Contact from '../page/Contact'
import Singlestudent from '../page/Singlestudent'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Service",
        element:<Service/>
      },
      {
        path:"Contact",
        element:<Contact/>
      },
        {
        path: "Singlestudent/:id",
        element: <Singlestudent/>
      },
      {
        path:"*",
        element: <h1>Not found</h1>
      }
      
    ]
  }
])







createRoot(document.getElementById('root')).render(
 <RouterProvider router ={router}> </RouterProvider>
)
