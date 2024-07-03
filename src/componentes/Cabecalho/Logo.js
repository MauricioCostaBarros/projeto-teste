import React from "react";
import imgLogo from "../../imagens/logoSenai.jpg";
import styled from "styled-components";

const LogoContainer = styled.div`
    width: 9%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 2px;
    #imgLogo{
        width: 100%;
        border: 2px solid black;
    }
    #textoLogo{
        margin: 0;
        padding: 0;
        font-size: 20px;
        color: white;
    }
`
function Logo(){
    return(
        <LogoContainer>
                <img id="imgLogo" src={imgLogo} alt=""/>
                <h4 id="textoLogo"></h4>
        </LogoContainer>
    );
}
export default Logo;