import { createBrowserRouter } from "react-router-dom";
import LayOut from "../../components/mainLayout/LayOut";
import Home from "../../pages/Home";
import Contact from "../../pages/contact/Contact";
import Gallery from "../../pages/photoGellery/Gallery";
import ComputerDepartment from "../../pages/department/computer/ComputerDepartment";
import Result from "../../pages/result/Result";
import Error from "../../sharedcomponents/Error";
import Principal from "../../pages/administration/principal/Principal";
import DeparmnetHead from "../../pages/administration/deparmnetHead/DeparmnetHead";
import Notice from "../../pages/academics/Notice";
import VicePrincipal from "../../pages/administration/vice_principale/VicePrincipal";
import Civil from "../../pages/department/civil/Civil";


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
// Adminstration
        {
          path:'principal',
          element:<Principal/>
        },
        {
          path:'viceprincipal',
          element:<VicePrincipal/>
        },
        ,
        {
          path:'deparmentHead/all',
          element:<DeparmnetHead/>
        },
// all department path section
        {
          path:'civil',
          element:<Civil/>
        },
        {
          path:'computerDept',
          element:<ComputerDepartment/>
        },
        // academics nav
        {
          path:"notice",
          element:<Notice/>
        }
      ]
    },
  ]);

  export default router;