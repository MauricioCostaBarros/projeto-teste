import React from "react";
import Icones from "./Icones";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";

const CabecalhoContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    background-color: #808080;
    border-bottom: 2px solid #A9A9A9;
`
function Cabecalho(){
    return(
        <CabecalhoContainer>    
            <Logo/>
            <Menu/>
            <Icones/>
        </CabecalhoContainer> 
    );
}
export default Cabecalho;