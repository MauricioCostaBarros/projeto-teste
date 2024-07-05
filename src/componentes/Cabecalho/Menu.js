import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const textoOpcoes = ["HOME", "PRODUTO", "CADASTRAR PRODUTO"];

const MenuConteiner = styled.ul`
     width: 40%;
    display: flex;    
    color: white;
    justify-content: space-between;
    font-family: Lucida Console;
    li{
        list-style: none;
        padding: 20px;
        background-color: #778899;  
        font-size: 30px;
        font-weight: bold;
        margin: 0 15px;
        border: 2px solid #A9A9A9;
        border-radius: 15px;
    }
`
function Menu() {
    return (
        <MenuConteiner>
            {
                textoOpcoes.map( (opcao) => (
                    <Link
                     to={`/${opcao.replace(/\s+/g,'').toLowerCase()}`}
                     style={{
                        color:"black",
                        textDecoration: 'none'
                     }}
                    >
                        <li>{opcao}</li>
                    </Link>
                )) 
            }
        </MenuConteiner>
    );
}
export default Menu;