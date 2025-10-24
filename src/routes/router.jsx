import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import Plants from "../components/Plants/Plants";
import MyProfile from "../components/MyProfile/MyProfile";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PlantDetails from "../components/PlantDetails/PlantDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/plants',
                loader: () => fetch('plants.json'),
                Component: Plants
            },
            {
                path: '/plantDetails/:id',
                loader: () => fetch('plants.json'),
                Component: PlantDetails
            },
            {
                path: '/myprofile',
                Component: MyProfile
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/*',
                Component: ErrorPage
            },
        ]
    },
]);

export default router