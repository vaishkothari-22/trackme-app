import { Alert, Col, Container, Row } from "react-bootstrap";
import { Contact } from "./Contact";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from "mdb-react-ui-kit";
import { NaviBar } from "./NaviBar";
import Footer from "./Footer";

export function About(){
    return(
        <>
        <NaviBar></NaviBar>
        <Container>
            <Alert variant="success mt-5">
                <h1><center>ABOUT US</center></h1>
            </Alert>

            <Row>
                <Col lg={4}>
                <h3><b> Mission</b></h3>
                <p><b>At Track Me , our mission is to empower individuals to lead healthier and more active lives by providing accessible and personalized fitness solutions. We believe that everyone deserves the opportunity to achieve their wellness goals, regardless of their fitness level or lifestyle.</b></p>
                </Col>
                <Col lg={4}>
                <h3><b> Vision</b></h3>
                <p><b>Our vision is to create a global community where fitness is enjoyable, inclusive, and sustainable. We aspire to be the go-to platform that inspires and supports individuals on their fitness journey, fostering a positive impact on their overall well-being.</b></p>
                </Col>
                <Col lg={4}>
                <h3><b>Our History</b></h3>
                <p><b>Track Me was founded in 2023 by VAZ Foundation with a passion for making fitness accessible to everyone. Recognizing the challenges people face in maintaining a consistent exercise routine, we set out to create an app that combines cutting-edge technology with user-friendly design to simplify the path to a healthier lifestyle.</b></p>

                </Col>
            </Row>
            <Contact></Contact>
           <Container>
           <Row className="mt-5">
        <Col lg={4}>
        <MDBCard>
      <MDBCardImage src={require('../Images/230940320126_Vaishnavi_Kothari_KH.png')} alt='...' position='top' width="300px" height="450px"/>
      <MDBCardBody>
        <b>Name: Vaishnavi Jayant Kothari<br></br>
        Roll No:230940320126<br></br>
        Contact:8805818947<br></br>
        Email:<u>kotharivaishnavi096@gmail.com</u><br></br>
        Centre: Kharghar</b>
      </MDBCardBody>
    </MDBCard>
    </Col>
    <Col lg={4}>
    <MDBCard>
      <MDBCardImage src={require('../Images/WhatsApp Image 2023-12-09 at 5.50.28 PM.jpeg')} alt='...' position='top' width="300px" height="450px" />
      <MDBCardBody>
      <b>Name: Abhijeet Ramchandra More<br></br>
        Roll No:230940320002<br></br>
        Contact:7620254758<br></br>
        Email:<u>2023abhijeetmore@gmail.com</u><br></br>
        Centre: Kharghar</b>
      </MDBCardBody>
    </MDBCard>
    </Col>
    <Col lg={4}>
    <MDBCard>
      <MDBCardImage src={require('../Images/230940320135_Zeenat_Mariyam_KH.png')} alt='...' position='top' width="300px" height="450px" />
      <MDBCardBody>
      <b>Name: Zeenat Mariyam<br></br>
        Roll No:230940320135<br></br>
        Contact:9415165912<br></br>
        Email:<u>zeenatmariyam85@gmail.com</u><br></br>
        Centre: Kharghar</b>
      </MDBCardBody>
    </MDBCard>
    </Col>
    </Row>
           </Container>
        </Container>
        <Footer></Footer>
        </>
    

    );
}