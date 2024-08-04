import { createBrowserRouter } from "react-router-dom";
import LayOut from "../../components/mainLayout/LayOut";
import Home from "../../pages/Home";
import Contact from "../../pages/contact/Contact";


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
        }
      ]
    },
  ]);

  export default router;