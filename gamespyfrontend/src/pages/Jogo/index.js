import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react';
import './styles.css';

export default function Jogo() {
    return (
        <Container>
            <h1 className="tituloJogo">Jogo</h1>
            <Container className="quadroJogo">
                <Row>
                    <Col md={8}>
                        <Container className="quadroInformacao">
                            <div className="textoBranco">Jogador 1</div>
                        </Container>
                    </Col>
                    <Col md={4}>
                        <Container className="quadroJogadores">

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