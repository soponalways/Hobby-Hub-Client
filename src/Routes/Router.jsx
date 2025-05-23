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
import GroupDetails from "../Pages/GroupDetails";
import Loading from "../Pages/Loading";
import ErrorPages from "../Pages/ErrorPages";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        errorElement: <ErrorPages/>,
        children: [
            {
                index: true, 
                Component: Home, 
                loader: () => fetch('https://hobby-hub-chi.vercel.app/groupsOngoing'),
                HydrateFallback: Loading
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
                loader: () => fetch('https://hobby-hub-chi.vercel.app/groups'),
                HydrateFallback: Loading 
            }, 
            {
                path: '/myGroups', 
                element: <PrivateRoute><MyGroups></MyGroups></PrivateRoute>, 
            },
            {
                path: '/updateGroup/:id', 
                loader: ({ params }) => fetch(`https://hobby-hub-chi.vercel.app/group/${params.id}`), 
                element: <PrivateRoute><UpdateGroup></UpdateGroup></PrivateRoute>, 
                HydrateFallback: Loading
            }, 
            {
                path: '/group/:id', 
                element: <PrivateRoute><GroupDetails/></PrivateRoute>, 
                loader: ({ params }) => fetch(`https://hobby-hub-chi.vercel.app/group/${params.id}`),
                HydrateFallback: Loading         
            }
        ]
    }
]);