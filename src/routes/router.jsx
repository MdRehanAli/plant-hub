import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout
    },
    {
        path: '/shop',
        element: <h1>Shop</h1>
    },
    {
        path: '/services',
        element: <h1>Services</h1>
    },
    {
        path: '/*',
        element: <h1>Error 404!</h1>
    },
]);

export default router