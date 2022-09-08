import React from "react";
import { useState } from "react";
import '../Carrinho/carrinho.css'


function Carrinho(){

    const [valor, setValor] = useState(0)

    function Aumentar(){
        setValor(valor + 1)
    }

    function Diminuir(){
        setValor(valor - 1)
    }
    
    return(
        <div className="carrinhoDeCompras">
            <h1>Adicionando itens ao carrinho com useState</h1>
            <div className="text">Quantidade de itens no carrinho <b>{valor}</b></div>
            <button onClick={Aumentar}><b>ADICIONAR</b> um item ao carrinho</button>
            <button onClick={Diminuir}><b>REMOVER</b> um item do carrinho</button>
        </div>
    )
}

export default Carrinho;