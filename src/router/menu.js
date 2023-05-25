import React,{lazy} from "react";
const Form = lazy(() => import("@/pages/form"))
 
const routes=[
   {
      path:'/',
      element:<Form/>,
  },
  
]
 
export default routes