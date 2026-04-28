import { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layout/MainLayout.tsx";
import About from "../pages/About.tsx";
import Home from "../pages/Home.tsx";
import LogIn from "../pages/LogIn.tsx";

// AppRouter 는 컴포넌트X, 함수 O
// 매개변수 자리에 onClick의 이 들어가는 매개변수니까
// 타입스크립트에 의거하여 타입 명시
// 기본타입으로 먼들었음 VoidFunction
export const AppRouter = (onClick: VoidFunction) => {
    // 사용자 권한, => 일반사용자, 관리자
    // 회원관리 => /admin/users/list
    // 이관리 기능을 javascript로 접근을 해야햄, 그래서 이방식을 제공하교 있음
    // (이 방식이 react-router가 권장하는 방식)
    const routes: RouteObject[] = [
        {
            element: <MainLayout onClick={onClick} />,
            path: "/",
            children: [
                { index: true, element: <Home /> }, // 부모의 주소에 들어왔으면 여기에 걸려야 한다.
                { path: "about", element: <About /> },
            ],
        },
        { path: "auth/login", element: <LogIn /> },
    ];
    return createBrowserRouter(routes);
};
