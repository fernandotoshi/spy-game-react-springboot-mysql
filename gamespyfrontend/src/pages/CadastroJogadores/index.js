import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Form, FloatingLabel, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';

export default function CadastroJogadores() {
    const[nome, setNome]=useState('')
    const[telefone, setTelefone]=useState('')
    const[jogadores, setJogadores]=useState([])
    const handleClick=(e)=>{
        e.preventDefault()
        const jogador={nome,telefone}
        console.log(jogador)
        fetch("http://localhost:8080/jogador/add",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(jogador)
        }).then(()=>{
            console.log("Novo jogador foi adicionado")
        })
        window.location.reload(false)
    }
    const handleClickDelete=(jogadorId)=>{
        fetch(`http://localhost:8080/jogador/remove/${jogadorId}`, {
            method: "DELETE"
        }).then(()=>{
            console.log("Jogador removido")
        })
        window.location.reload(false)
    }

    useEffect(()=>{
        fetch("http://localhost:8080/jogador/getTodosJogadores")
        .then(res=>res.json())
        .then((result)=>{
            setJogadores(result)
        })
    },[])

    return (
        <Container>
            <h1 className='tituloCadastro'>Cadastro de Jogadores</h1>
            <Table striped bordered hover className='tabelaCadastro'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Celular</th>
                        <th className="celulaJusta">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {jogadores.map(jogador=>(
                        <tr key={jogador.id}>
                            <td>{jogador.nome}</td>
                            <td>{jogador.telefone}</td>
                            <td><Button variant="danger" onClick={()=>handleClickDelete(jogador.id)}>Remover</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Row className="g-2 cadastroJogador">
                <Col md={6}>
                    <FloatingLabel controlId="floatingInputGrid" label="Nome">
                        <Form.Control placeholder="nome" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                    </FloatingLabel>
                </Col>
                <Col md={4}>
                    <FloatingLabel controlId="floatingInpudGrid" label="Celular">
                        <Form.Control placeholder="celular" value={telefone} onChange={(e)=>setTelefone(e.target.value)}/>
                    </FloatingLabel>
                </Col>
                <Col md={1}>
                    <Button variant="primary" className="botaoAdicionar" onClick={handleClick}>Adicionar</Button>
                </Col>
            </Row>
            <Row className="proximaEtapa">
                <Button variant="primary"><Link to="/informacoesJogo" className="nav-link">Jogadores Cadastrados</Link></Button>
            </Row>
        </Container>
    )
}