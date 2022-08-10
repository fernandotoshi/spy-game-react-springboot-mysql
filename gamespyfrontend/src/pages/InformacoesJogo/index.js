import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

export default function InformacoesJogo() {
    return (
        <Container>
            <h1 className='tituloInformacoes'>Informações de Jogo</h1>
            <Row>
                <Container className="containerInfoJogo">
                    <Row>
                        <Col md={5}>
                            <Row><label>Quantidade de espiões</label></Row>
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Col md={1}><input type="button" class="btneg" value="-" /></Col>
                                <Col md={2}><input type="text" className="qntEspioes" id="noq1" min="1" max="15" value="2" /></Col>
                                <Col md={1}><input type="button" class="btpos" value="+" /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>

                </Container>
            </Row>
        </Container>
    )
}