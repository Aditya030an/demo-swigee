import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './component/Body.jsx'
import Search from './component/Search.jsx'
import Help from './component/Help.jsx'
import RestaurentMenu from './component/RestaurentMenu.jsx'
import HelpPartner from './component/HelpPartner.jsx'
import HelpLegal from './component/HelpLegal.jsx'
import HelpFaq from './component/HelpFaq.jsx'
import Cart from './component/Cart.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/restaurents/:restId",
        element:<RestaurentMenu/>
      },
      {
        path:"/search",
        element:<Search/>
      },
      {
        path:"/help",
        element:<Help/>,
        children:[
          {
            path:'partner-onboarding',
            element:<HelpPartner/>
          },
          {
            path:'legal',
            element:<HelpLegal/>
          },
          {
            path:'faq',
            element:<HelpFaq/>
          },
        ]
        
      },
      // {
      //   path:"/username",
      //   element:<UserName/>
      // },
      {
        path:"/cart",
        element:<Cart/>
      },
    ]
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={appRouter}/>
)
