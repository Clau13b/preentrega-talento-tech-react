import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CardContent from './Components/CardContent/CardContent.jsx'


const router=createBrowserRouter([

{     
  path:"/",
  element:<App/>
},
{     
  path:"/card",
  element:<CardContent/>
}

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
