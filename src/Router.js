import {createBrowserRouter,} from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import Category from "./components/Category";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
        children:[
            {
                    path: "/",
                    element: <>
                    <Body/>
                    <Category/>
                    
                  </>,
                  },
                  {
                    path:"/Login",
                    element:<Login/>
               },
               {
                path:"/register",
                element:<Register/>
               }
 ]}]);