import { createBrowserRouter } from "react-router-dom";
import LayOut from "../../components/mainLayout/LayOut";
import Home from "../../pages/Home";
import Contact from "../../pages/contact/Contact";
import Gallery from "../../pages/photoGellery/Gallery";
import ComputerDepartment from "../../pages/department/computer/ComputerDepartment";
import Result from "../../pages/result/Result";


const router = createBrowserRouter([
    {
      path: "/",
      element:<LayOut/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'contact',
          element:<Contact/>
        }  ,    
        {
          path:'gallery',
          element:<Gallery/>
        },
        {
          path:'result',
          element:<Result/>
        },
        // design
        {
          path:'com',
          element:<ComputerDepartment/>
        }
      ]
    },
  ]);

  export default router;