import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from '../Pages/Home'; 
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import CreateGroup from "../Pages/CreateGroup";
import PrivateRoute from "../Provider/PrivateRoute";
import AllGroup from "../Pages/AllGroup";
import MyGroups from "../Pages/MyGroups";
import UpdateGroup from "../Pages/UpdateGroup";

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
                element: <PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
            }, 
            {
                path: '/groups', 
                Component : AllGroup, 
                loader: () => fetch('http://localhost:5000/groups'), 
            }, 
            {
                path: '/myGroups', 
                element: <PrivateRoute><MyGroups></MyGroups></PrivateRoute>, 
            },
            {
                path: '/updateGroup/:id', 
                loader: ({ params }) => fetch(`http://localhost:5000/group/${params.id}`), 
                element: <PrivateRoute><UpdateGroup></UpdateGroup></PrivateRoute>, 
            }
        ]
    }
]);