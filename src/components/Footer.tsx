import styled from "styled-components";

const Foot= styled.footer`
height: 70px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Footer() {
    return <Foot>Copyright </Foot>;
}

export default Footer;
