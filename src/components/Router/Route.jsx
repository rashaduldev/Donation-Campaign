import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Donation from "../ChildPage/Donation/Donation";
import Statistics from "../ChildPage/Statistics/Statistics";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=>fetch('../../../public/data.json')
            },
            {
                path:'/donation',
                element: <Donation></Donation>
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default Route;