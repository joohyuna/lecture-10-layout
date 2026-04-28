import { RouterProvider } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { AppRouter } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import { useState } from "react";

// Provider 제공자 ThemeProvider테마 제공자, <RouterProvider 라우터제공자, 계속 보게 될것임
// theme={LightTheme} 원래의 Default Theme 가 들어가야 하는 자리인데 재지정 해서 들어간 자리
// ThemeProvider로 감싸진 자식 컴포넌트들 안에서 사용되는 styled-components 들에게 해당 태마를 제공함
function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const onClick = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    return (
        <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
            <GlobalStyle />
            <RouterProvider router={AppRouter(onClick)} />
        </ThemeProvider>
    );
}
export default App;
