import { createBrowserRouter } from "react-router-dom";
import LayOut from "../../components/mainLayout/LayOut";
import Home from "../../pages/Home";
import Contact from "../../pages/contact/Contact";
import Gallery from "../../pages/photoGellery/Gallery";
import ComputerDepartment from "../../pages/department/computer/ComputerDepartment";
import Result from "../../pages/result/Result";
import Error from "../../sharedcomponents/Error";
import Principal from "../../pages/administration/principal/Principal";


const router = createBrowserRouter([
    {
      path: "/",
      element:<LayOut/>,
      errorElement:<Error/>,
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
        ,
        {
          path:'p',
          element:<Principal/>
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