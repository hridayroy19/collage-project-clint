import { createBrowserRouter } from "react-router-dom";
import LayOut from "../../components/mainLayout/LayOut";


const router = createBrowserRouter([
    {
      path: "/",
      element:<LayOut/>
     ,
    },
  ]);

  export default router;