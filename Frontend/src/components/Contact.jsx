
import { Alert, Col, Container, Row } from "react-bootstrap";

export function Contact(){
    return(
        <Container className="mt-5">
        <Row>
        <Col lg={12}>
        <Alert variant="success mt-5">
                <h1><center>OUR TEAM</center></h1>
        </Alert>
        </Col>
        </Row>
        </Container>
    );
}