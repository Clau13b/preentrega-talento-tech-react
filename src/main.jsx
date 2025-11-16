import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import CartContent from './Components/CartContent/CartContent.jsx'
import ContexProvider from './Context/Context.jsx'


const router=createBrowserRouter([

{     
  path:"/",
  element:<App/>
},
{     
  path:"/cart",
  element:<CartContent/>
},

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContexProvider>
       <RouterProvider router={router}/>
    </ContexProvider>
  </StrictMode>,
)
