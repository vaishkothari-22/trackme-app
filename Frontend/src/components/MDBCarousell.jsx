
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';

export default function MDBCarousell() {
  return (
    <Container className="mt-5 "  >
  <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" className='d-block w-100' alt='...' />
      
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src="https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg" className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src="https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>
    </MDBCarousel>
    </Container>
  );
}