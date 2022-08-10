import { React, Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class Footer extends Component {
    render(){
        return (
            <Row className="footer">
                <Col md={2}>
                    <Card className="footer-card mx-4 p-2">
                        Sobre
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className="footer-card mx-4 p-2">
                        Graduação
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className="footer-card mx-4 p-2">
                        Experiência
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className="footer-card mx-4 p-2">
                        Habilidades
                    </Card>
                </Col>
                <Col md={2}>
                    <Card className="footer-card mx-4 p-2">
                        Extra
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Footer;