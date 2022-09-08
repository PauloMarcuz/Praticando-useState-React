import React from "react";
import { useState } from "react";
import '../Form/formulario.css'


const Form = (props) =>{
    const cadastrarUsuario = (e) => {
        e.preventDefault()
        alert(`usuario cadastrado: 
        Nome: ${nome}
        Email: ${email}
        Senha: ${senha}`)
    }

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <>
        <form onSubmit={cadastrarUsuario}>
            <h1>Formulário simples com useState</h1>
            <div className="nome">
                <label className="labelEome" htmlFor="nome">Nome:</label>
                <input 
                    className="inputNome" 
                    type="text" 
                    placeholder="Digite seu nome"
                    name="nome"
                    autoComplete="off"
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div className="email">
                <label className="labelEmail" htmlFor="email">E-mail:</label>
                <input 
                    className="inputEmail" 
                    type="text" 
                    placeholder="Digite seu e-mail"
                    name="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}  
                />
            </div>
            <div className="senha">
                <label htmlFor="senha" className="labelSenha">Senha:</label>
                <input 
                    type="password" 
                    className="inputSenha" 
                    placeholder="Digite sua senha"
                    name="senha"
                    autoComplete="off"
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>
            <input type="submit" value="Cadastrar"/>
        </form>
        </>
    )
}

export default Form