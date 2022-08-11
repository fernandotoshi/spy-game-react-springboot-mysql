import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Spy Game</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/cadastroJogadores" className="nav-link">Cadastro de Jogadores</Link>
                        <Link to="/informacoesJogo" className="nav-link">Informações do Jogo</Link>
                        <Link to="/jogo" className="nav-link">Jogo</Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Header;