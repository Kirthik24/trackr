import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import CreateOrder from "./pages/CreateOrder"

import "./css/style.scss"
import Steps from "./pages/Steps";
import MyOrders from "./pages/MyOrders";

const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
      {
        path: "/Write",
        element: <Write/>,
      },
      {
        path: "/createorder",
        element: <CreateOrder/>,
      },
      {
        path: "/steps/:order_id",
        element: <Steps/>,
      },
      {
        path: "/myorders",
        element: <MyOrders/>,
      },
    ]
  },
 
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  
  
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;