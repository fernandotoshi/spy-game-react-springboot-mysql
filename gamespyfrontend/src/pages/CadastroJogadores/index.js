import React from 'react';
import { Table, Button, Row, Form, FloatingLabel, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';

export default function CadastroJogadores() {
    return (
        <Container>
            <h1 className='tituloCadastro'>Cadastro de Jogadores</h1>
            <Table striped bordered hover className='tabelaCadastro'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Celular</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='celulaJusta'>1</td>
                        <td>Toshi</td>
                        <td>948123199</td>
                        <td className='celulaJusta'><Button variant="danger">Remover</Button></td>
                    </tr>
                    <tr>
                        <td className='celulaJusta'>2</td>
                        <td>Gabi</td>
                        <td>995332254</td>
                        <td className='celulaJusta'><Button variant="danger">Remover</Button></td>
                    </tr>
                    <tr>
                        <td className='celulaJusta'>3</td>
                        <td>Taka</td>
                        <td>948123456</td>
                        <td className='celulaJusta'><Button variant="danger">Remover</Button></td>
                    </tr>
                </tbody>
            </Table>
            <Row className="g-2 cadastroJogador">
                <Col md={6}>
                    <FloatingLabel controlId="floatingInputGrid" label="Nome">
                        <Form.Control placeholder="nome" />
                    </FloatingLabel>
                </Col>
                <Col md={4}>
                    <FloatingLabel controlId="floatingInpudGrid" label="Celular">
                        <Form.Control placeholder="celular" />
                    </FloatingLabel>
                </Col>
                <Col md={1}>
                    <Button variant="primary" className="botaoAdicionar">Adicionar</Button>
                </Col>
            </Row>
            <Row className="proximaEtapa">
                <Button variant="primary"><Link to="/informacoesJogo" className="nav-link">Jogadores Cadastrados</Link></Button>
            </Row>
        </Container>
    )
}