// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import React from "react";
import { Card } from "react-bootstrap";
import { IoMdArrowForward } from 'react-icons/io';
import "./CorePriority.css";



const CorePriority = () => {
  return (
    <div className="core">
      <h1>OUR CORE PRIORITY</h1>
      <br />
      <h3 style={{fontSize:'20px'}}>
        
        View All <IoMdArrowForward className='view' style={{marginBottom:'0.2rem'}}/>
        {/* View All <ion-icon name="arrow-forward-outline"></ion-icon> */}
      </h3>
      <br />
       
      <div className="card1  ">

        {/* card 1 */}

      <Card style={{ width: '18rem' }} className="card2">
  <Card.Img variant="top" className='cardImage' src="https://i.ibb.co/Wg1cLSq/room-service-1.png" />
  <Card.Body>
    <Card.Title className="cardTitle">Cozy room</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
        </Card>
        
           {/* card 2 */}
        
      <Card style={{ width: '18rem' }} className="card2">
  <Card.Img variant="top" className='cardImage' src="https://i.ibb.co/sQ10tBp/Vector-3.png" />
  <Card.Body>
    <Card.Title className="cardTitle">Ac service</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
        </Card>
        
            {/* card 3 */}
        
      <Card style={{ width: '18rem' }} className="card2">
  <Card.Img variant="top" className='cardImage' src="https://i.ibb.co/CMCGLd4/Group-1.png" />
  <Card.Body>
    <Card.Title className="cardTitle">Free wifi</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
      
        
           {/* card 4 */}
        
      <Card style={{ width: '18rem' }} className="card2">
  <Card.Img variant="top" className='cardImage' src="https://i.ibb.co/RzQYT8f/offers-1.png" />
  <Card.Body>
    <Card.Title className="cardTitle">Special offer</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
      </div>
    </div>
  );
};

export default CorePriority;