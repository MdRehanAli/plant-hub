import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import Plants from "../components/Plants/Plants";
import MyProfile from "../components/MyProfile/MyProfile";

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
                Component: Plants
            },
            {
                path: '/myprofile',
                Component: MyProfile
            },
        ]
    },
    {
        path: '/*',
        element: <h1>Error 404!</h1>
    },
]);

export default router