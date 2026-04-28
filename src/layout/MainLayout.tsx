import styled from "styled-components";
import { Outlet } from "react-router";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;
// props는 styled-components갑 넣어주는 데이터 props.theme프로퍼티에, 우리가 ThemeRrovider에서 넣은 theme값이 전재

const Main = styled.main`
    flex: 1;
`;

// MainLayout은 컴포넌트 0
// 얘는 ㅖ게ㅔㄴ 전달
function MainLayout({onClick}:{onClick: VoidFunction}) {
    return (
        <Wrap>
            <Header onClick={onClick} />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Wrap>
    );
}

export default MainLayout;
