import React from "react";
import styled from "styled-components";

const CardProdutoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 350px;
    width: 15%;
    background-color: gray;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.50);
    border-radius: 15px; 
    border: 2px solid #A9A9A9;
`
const NomeProduto = styled.h3`
    color: ${props => props.corNomeProduto || "blue"};
`
const PrecoProduto = styled.h4`

`
const DescricaoProduto = styled.p`

`
const ImgProduto = styled.img`
    width: 95%;
    height: 160px;
    border-radius: 15px;
    border: 2px solid #A9A9A9;
`
function CardProduto({
    nomeProduto,
    precoProduto,
    descricaoProduto,
    imgProduto,
    corNomeProduto
}) {
    return (
        <CardProdutoContainer>
            <ImgProduto src={imgProduto} />
            <NomeProduto corNomeProduto={corNomeProduto}>{nomeProduto}</NomeProduto>
            <PrecoProduto>{precoProduto}</PrecoProduto>
            <DescricaoProduto>{descricaoProduto}</DescricaoProduto>
        </CardProdutoContainer>
    );
}
export default CardProduto;