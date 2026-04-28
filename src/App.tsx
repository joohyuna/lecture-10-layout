import { RouterProvider } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { AppRouter } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/theme/ThemeContext.tsx";

// Provider 제공자 ThemeProvider테마 제공자, <RouterProvider 라우터제공자, 계속 보게 될것임
// theme={LightTheme} 원래의 Default Theme 가 들어가야 하는 자리인데 재지정 해서 들어간 자리
// ThemeProvider로 감싸진 자식 컴포넌트들 안에서 사용되는 styled-components 들에게 해당 태마를 제공함
function App() {
    // 초기값 잘에 함수를 집어 넣을 수도 잇음,
    // useState가 state를 만들 때 그 함 수를 실행 시키고 난 결과를 초기값으로 사용함
    // 내가 처음 사용하는 상태에서는 값을 없다 그러므로 무조건 null | string
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";
        // dark가 아니면 무조건 라이트
        // dark 외의 경우에는 무조건 light가 찍힌다.
    });

    // state를 기본으로 상요하고, 그데치터의 추가 저장소로 localStorage를 사용할 뿐
    // 1. 사용자가 state값을 바꿧을때

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const onClick = () => {
        // setState에도 매개변수로 함수를 작성해줄수 있는데,
        // 이 때 함수의 매개변수 자리에는 "지금 현재 state 값"이 들어옴
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };
    // 2. Context제공자로 묶어주기
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme: onClick }}>
            <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                <GlobalStyle />
                <RouterProvider router={AppRouter()} />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
export default App;
