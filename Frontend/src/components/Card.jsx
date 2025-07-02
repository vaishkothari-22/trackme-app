
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { Container,Row,Col } from 'react-bootstrap';

export default function Card() {
  return (
    <Container>
      <Row>
        <Col lg={4}>
        <MDBCard>
      <MDBCardImage src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=600" alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
       <p> <b>Cycling</b> improves overall function in your lower body and strengthens your leg muscles without overstressing your joints. It targets your quads, glutes, hamstrings, and calves.</p>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Col>
    <Col lg={4}>
    <MDBCard>
      <MDBCardImage src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600" alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
        <b>Yoga</b> improves strength, balance and flexibility.Slow movements and deep breathing increase blood flow and warm up muscles, while holding a pose can build strength.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Col>

    <Col lg={4}>
    <MDBCard>
      <MDBCardImage src='https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=600' alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
        <b>Swimming</b> can help a person manage or lose weight, build strength, and improve breathing control. The benefits of swimming may also extend to mental health.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Col>
    </Row>
    <Row className="mt-5">
    <Col lg={4}>
        <MDBCard>
      <MDBCardImage src="https://images.pexels.com/photos/103520/pexels-photo-103520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='...' position='top' />
      <MDBCardBody>
        <MDBCardText>
        Regular physical activity such as <b>running</b> can significantly improve mental health, self-confidence, healthy ageing, and quality of life. 
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Col>

    <Col lg={4}>
        <MDBCard>
      <MDBCardImage src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <MDBCardBody>
        <MDBCardText>
        <b>Working Out</b> regularly can help prevent weight gain, type 2 diabetes, heart disease, and high blood pressure. 
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Col>

    <Col lg={4}>
        <MDBCard>
      <MDBCardImage src="https://images.pexels.com/photos/7207107/pexels-photo-7207107.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <MDBCardBody>
        <MDBCardText>
        <b>Skipping rope</b> is the best cardio exercise as it increases the heart rate. This will significantly reduce the risk of heart diseases and stroke.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Col>
    </Row>
    </Container>
  );
}