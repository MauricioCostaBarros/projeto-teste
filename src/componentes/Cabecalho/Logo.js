import React from "react";
import imgLogo from "../../imagens/cpuLogo.jpg";
import styled from "styled-components";

const LogoContainer = styled.div`
    width: 9%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #A9A9A9;
    background-color: #778899;

    #imgLogo{
        width: 100%;
        border-bottom: 1px solid #A9A9A9;
    }
    #textoLogo{
        margin: 0;
        padding: 0;
        font-size: 12px;
        font-family: URW Chancery L, cursive;
        color: black;
    }
`
function Logo(){
    return(
        <LogoContainer>
                <img id="imgLogo" src={imgLogo} alt=""/>
        </LogoContainer>
    );
}
export default Logo;