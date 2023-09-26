import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Donation from "../ChildPage/Donation/Donation";
import Statistics from "../ChildPage/Statistics/Statistics";
import ErrorPage from "../ChildPage/ErrorPage/ErrorPage";
import ClickData from "../ChildPage/ClickData/ClickData";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/donation',
                element: <Donation></Donation>
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>
            },
            {
                path:'/catagory/:id',
                element: <ClickData></ClickData>,
                loader:()=>fetch('/data.json')
            }
        ]
    }
])

export default Route;