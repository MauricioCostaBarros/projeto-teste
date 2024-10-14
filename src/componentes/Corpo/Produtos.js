import React from "react";
import styled from "styled-components";
import { produtos } from "../../produtosCadastrados";
import CardProduto from "./CardProduto";
import { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import produtosCadastrados from "../../produtosCadastrados";


const optionsProdutos = [
    { label: 'The Godfather', year: 1970},
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
]

const ProdutosContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20%;
    width: 80%;
    margin: 20px;
    gap: 20px;
`
const CardProdutosContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    font-size: 10px;
`
const Pesquisa = styled.div`
    display: flex;
    flex-direction: column;
`

function Produtos() {
    const [produtoFiltrados, setProdutoFiltrados] = useState(produtos);
    return (
        <ProdutosContainer>
            <Pesquisa>
                <input
                    placeholder="Digite o produto"
                    onChange={evento => {
                        const produtoDigitado = evento.target.value;
                        const resultadoFiltro = produtos.filter(
                            produto => produto.nome.includes(produtoDigitado)
                        )
                        setProdutoFiltrados(resultadoFiltro)
                    }
                    }
                />
            </Pesquisa>

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={optionsProdutos}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="escolha" />}
            />

            <CardProdutosContainer>
                {
                    produtoFiltrados.map(produto => (
                        <CardProduto
                            nomeProduto={produto.nome}
                            precoProduto={produto.preco}
                            descricaoProduto={produto.descricao}
                            imgProduto={produto.img}
                            corNomeProduto={"black"}
                        />
                    ))
                }
            </CardProdutosContainer>
        </ProdutosContainer>
    );
}
export default Produtos;