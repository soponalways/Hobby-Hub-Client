import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from '../Pages/Home'; 
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import CreateGroup from "../Pages/CreateGroup";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        children: [
            {
                index: true, 
                Component: Home, 
            } ,
            {
                path: '/register' ,
                Component: Register
            }, 
            {
                path: '/login', 
                Component: Login ,
            }, 
            {
                path: '/createGroup', 
                Component: CreateGroup
            }
        ]
    }
]);