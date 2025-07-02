import {Alert,Container} from "react-bootstrap"

// import Footer from "./Footer";
import MDBCarousell from "./MDBCarousell";
import Card from "./Card";
import { NaviBar } from "./NaviBar";
import Footer from "./Footer";

export function Home(){
    
    return(
        <>
        <NaviBar></NaviBar>
        <Container className="mt-5">
        <Alert variant="success">
        <h1><center>WELCOME TO TRACK ME</center></h1>
        </Alert>
        </Container>

        <Container>
        <MDBCarousell></MDBCarousell>
        </Container>

        <Container className="mt-5">
       <Card></Card>
        </Container>
        
        {/* <Container className="mt-5">
        <Footer></Footer>
        </Container> */}
        <Footer></Footer>
        </>
      
    );
}