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
import Mechanical from "../../pages/department/mechanical/Mechanical";
import Electrical from "../../pages/department/electrical/Electrical";
import Database from "../../pages/databasc/Database";
import FristSemister from "../../pages/databasc/studentData/first_semister/FristSemister";
import TeacherData from "../../pages/databasc/teacher_all/TeacherData";
import Architechar from "../../pages/department/architechar/Architechar";
import ClassRoutin from "../../pages/academics/ClassRoutin";
import Instractor from "../../pages/administration/instractor/Instractor";
import Employes from "../../pages/administration/employees/Employes";
import BoardOfDirectcrs from "../../pages/administration/board_of_directcrs/BoardOfDirectcrs";
import Login from "../../pages/auth/login/Login";
import Registation from "../../pages/auth/registation/Registation";


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
          path:'bordDirecters',
          element:<BoardOfDirectcrs/>
        },
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
        {
          path:"instructor",
          element:<Instractor/>
        },
        {
          path:"employees",
          element:<Employes/>
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
        {
          path:'mechanical',
          element:<Mechanical/>
        },
        ,  
        {
          path:'electrical',
          element:<Electrical/>
        },
        ,  
        {
          path:'architechar',
          element:<Architechar/>
        },
        // academics nav
        {
          path:"notice",
          element:<Notice/>
        },
        {
          path:"classRoutin",
          element:<ClassRoutin/>
        },

        // student database
        {
          path:'/database',
          element:<Database/>,
          children:[{
            path:"firstSemister",
            element:<FristSemister/>
          },
          {
            path:"secondSemister",
            element:<FristSemister/>
          },
          {
            path:"thirdSemister",
            element:<FristSemister/>
          },
          {
            path:"fourSemister",
            element:<FristSemister/>
          },
          // teacher
          {
            path:"alTeacher",
            element:<TeacherData/>
          }
        
        
        ]
        }
      ]
    },
    // login routes
    {
      path:"/admin",
      element:<Login/>
    },
    {
      path:"/admin/signIn",
      element:<Registation/>
    }
  ]);

  export default router;