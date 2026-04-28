import  { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layout/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import LogIn from "../pages/LogIn.tsx";

export const AppRouter = (onClick: VoidFunction) => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout onClick={onClick} />,
            path: "/",
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
            ],
        },
        {path: "auth/login", element: <LogIn />}
    ];
    return createBrowserRouter(routes);
};
