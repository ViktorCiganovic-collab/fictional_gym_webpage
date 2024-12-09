

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/Splitsection.scss';
import gym_image from '../Images/gym_image.jpg';

function Splitsection() {
  return (
    <Container fluid="lg">
      <Row>
        <Col md={6}>       
        <h3 id="halfSectionheader">Welcome to the leading gym chain in the Nordics – we have everything you need to achieve your fitness goals!</h3>  
        <p>Our extensive and diverse range of options ensures that we have something for everyone, no matter your fitness level or training goals. Together, we’ll make sure you have everything you need to reach your targets and discover the joy of training!</p>      
        </Col>

        <Col md={6}>        
       <img src={gym_image} className='img-fluid halfSectionImg'></img>        
        </Col>

      </Row>
    </Container>
  );
}

export default Splitsection;