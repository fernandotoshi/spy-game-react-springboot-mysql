import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './styles.css';

export default function Jogo() {
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
            <h1 className="tituloJogo">Jogo</h1>
            <Container className="quadroJogo">
                <Row>
                    <Col md={8}>
                        <Container className="quadroInformacao">
                            <div className="textoBranco">Jogador 1 começa!</div>
                            <div className="textoSugestao">Pergunta Sugerida</div>
                            <Button className="botaoSugestao" variant="warning">Sugestão de pergunta</Button>
                        </Container>
                    </Col>
                    <Col md={4}>
                        <Container className="quadroJogadores">
                            <h5>Lista de quem já perguntou</h5>
                            {jogadores.map(jogador=>(
                                <Form key={jogador.id}>
                                    <Form.Check className="checkboxJogador" type='checkbox' label={jogador.nome}/>
                                </Form>
                            ))}
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col></Col>
                <Col md={2} className="linhaBotoes">
                    <Button variant="primary">Finalizar Rodada</Button>
                </Col>
            </Row>
        </Container>
    )
}