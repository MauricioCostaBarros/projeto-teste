import React from "react";
import styled from "styled-components";
import Produtos from "./Produtos";

const CorpoContainer = styled.main`
    background-color: #778899;
    height: 90vh;
    display: flex;
    justify-content: center;
`


function Corpo(){
    return(
        <CorpoContainer>
           <Produtos/>
        </CorpoContainer>
    );
}
export default Corpo;