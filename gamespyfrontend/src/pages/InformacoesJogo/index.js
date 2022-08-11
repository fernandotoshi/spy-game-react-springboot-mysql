import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

export default function InformacoesJogo() {
    const[jogadores, setJogadores]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/jogador/getTodosJogadores")
        .then(res=>res.json())
        .then((result)=>{
            setJogadores(result)
        })
    },[])

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col md={8}>
                    <h1 className='tituloInformacoes'>Informações de Jogo</h1>
                    <Container className="quadroInfo">
                        <Form>
                            <Form.Group as={Row} className="mb-1 pt-1" controlId="qtdEspioesInfo">
                                <Form.Label column sm="6">
                                    <div className="divCampo">Quantidade de Espiões:</div>
                                </Form.Label>
                                <Col sm="6">
                                    <Form.Control defaultValue="2" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-1" controlId="tempoDiscussaoInfo">
                                <Form.Label column sm="6">
                                    <div className="divCampo">Tempo de Discussão:</div>
                                </Form.Label>
                                <Col sm="6">
                                    <Form.Control defaultValue="60" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-1" controlId="revelarEspioes">
                                <Form.Label column sm="6">
                                    <div className="divCampo">Revelar espiões restantes:</div>
                                </Form.Label>
                                <Col sm="6">
                                    <Form.Control defaultValue="Sim" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-1" controlId="dicaRodada">
                                <Form.Label column sm="6">
                                    <div className="divCampo">Dica no fim da rodada:</div>
                                </Form.Label>
                                <Col sm="6">
                                    <Form.Control defaultValue="Sim" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-1 pb-1" controlId="revelarPersonagem">
                                <Form.Label column sm="6">
                                    <div className="divCampo">Revelação do personagem:</div>
                                </Form.Label>
                                <Col sm="6">
                                    <Form.Control defaultValue="Sim" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Container>
                    <Container className="quadroPlacar">
                        <Row className="linhaBotoes">
                            <Col md={9}>
                                <h2>Placar</h2>
                            </Col>
                            <Col><Button variant="danger">Zerar placar</Button></Col>
                        </Row>
                        <Table hover className='tabelaPlacar'>
                            <thead>
                                <tr>
                                    <th>Jogador</th>
                                    <th>Pontos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jogadores.map(jogador=>(
                                    <tr key={jogador.id}>
                                        <td>{jogador.nome}</td>
                                        <td>0</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                    <Container>
                        <Row className="linhaBotoes">
                            <Col md={6}><Button variant="secondary"><Link to="/cadastroJogadores" className="nav-link">Cadastro de Jogadores</Link></Button></Col>
                            <Col></Col>
                            <Col md={3}><Button variant="primary"><Link to="/jogo" className="nav-link">Iniciar Jogo</Link></Button></Col>
                        </Row>
                    </Container>                    
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}