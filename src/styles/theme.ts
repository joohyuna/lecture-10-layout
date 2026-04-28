import type { DefaultTheme } from "styled-components";

// DefaultTheme의 재지정한것을 가지고 온다.
// 왜 원래 있던 타입을 재지정해서 쓰나요?
// 그냥 새로 만들면 되지 않나요?
// 이미 styled-components가 제공하고 있는 기능이
// 저 DefaultTheme를 기반으로 제공하고 있기 때문
// +> styled-components의 메소드 기능가 매개변수로 DefaultTheme를 받도록 강제하고 있기 때문에,
// 우리는 우리 입맛에 맞춰서 바꿔쓸수 밖에 없다.
export const LightTheme: DefaultTheme = {
    color: {
        background: "#ffffff",
        text: "#111111",
        primary: "6c63ff",
        muted: "#f4f4f4",
    },
};

export const DarkTheme: DefaultTheme = {
    color: {
        background: "#111111",
        text: "#ffffff",
        primary: "6c63ff",
        muted: "#222222",
    },
};