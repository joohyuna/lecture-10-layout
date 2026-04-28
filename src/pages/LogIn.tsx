import styled from "styled-components";

const LogInWrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;

function LogIn() {
    return <LogInWrap>
        로그인 화면입니다.
    </LogInWrap>;
}

export default LogIn;
