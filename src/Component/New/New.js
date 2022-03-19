import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from 'react';
import Carousel from "react-elastic-carousel";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Item from './Item.js';
import './New.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const New = () => {
    return (
        <div className="new">
            <h1>WHAT NEW TODAY?</h1>


            <div className='newCard'>
                   {/* card 1 */}

          <Carousel breakPoints={breakPoints}>
          <Item>
          <Card style={{borderRadius:'2rem'}}    sx={{ maxWidth: 345 }}  >
                      <CardMedia 
                           className="newCardMedia"
              component="img"
              height="100"
              image="https://i.ibb.co/2s6yvzZ/new-today.png"
              alt="green iguana"
            />
            <CardContent>
            <h6 style={{color:'#A67C00'}}>December 25,  2021</h6>
              <Typography   gutterBottom variant="h5" component="div">
              <h4 style={{color:'#A67C00'}}>Relax than fly like going <br/> with the flow</h4>
              </Typography>
              <h5 style={{ color: '#C2D1D9' }}>View more <AiOutlineArrowRight style={{marginBottom:'-0.1rem',fontSize:'1rem'}}/></h5>
            </CardContent>
           
          </Card>
          </Item>
              
        {/* card 2 */}

           <Item>
          <Card style={{borderRadius:'2rem'}}   sx={{ maxWidth: 345 }} >
                      <CardMedia 
                           className="newCardMedia"
                          component="img"
                          width="100"
              height="100"
              image="https://i.ibb.co/Y3WV1ww/new-today-2.png"
          
              alt="green iguana"
            />
            <CardContent>
            <h6 style={{color:'#A67C00'}}>December 25,  2021</h6>
              <Typography   gutterBottom variant="h5" component="div">
              <h4 style={{color:'#A67C00'}}>Relax than fly like going <br/> with the flow</h4>
              </Typography>
               <h5 style={{color:'#C2D1D9'}}>View more <AiOutlineArrowRight style={{marginBottom:'-0.1rem',fontSize:'1rem'}}/></h5>
              
            </CardContent>
           
          </Card>
          </Item>
              
        {/* card 3 */}

        <Item>
          <Card style={{borderRadius:'2rem'}}   sx={{ maxWidth: 345 }}  >
                      <CardMedia 
                           className="newCardMedia"
           component="img"
              height="100"
              image="https://i.ibb.co/k2XPhTH/new-today-3.png"
              alt="green iguana"
            />
            <CardContent>
            <h6 style={{color:'#A67C00'}}>December 25,  2021</h6>
              <Typography   gutterBottom variant="h5" component="div">
              <h4 style={{color:'#A67C00'}}>Relax than fly like going <br/> with the flow</h4>
              </Typography>
               <h5 style={{color:'#C2D1D9'}}>View more <AiOutlineArrowRight style={{marginBottom:'-0.1rem',fontSize:'1rem'}}/></h5>
            </CardContent>
            
          </Card>
            </Item>
            
            <Item>
          <Card style={{borderRadius:'2rem'}}   sx={{ maxWidth: 345 }}  >
                      <CardMedia 
                           className="newCardMedia"
           component="img"
              height="100"
              image="https://i.ibb.co/2s6yvzZ/new-today.png"
              alt="green iguana"
            />
            <CardContent>
            <h6 style={{color:'#A67C00'}}>December 25,  2021</h6>
              <Typography   gutterBottom variant="h5" component="div">
              <h4 style={{color:'#A67C00'}}>Relax than fly like going <br/> with the flow</h4>
              </Typography>
               <h5 style={{color:'#C2D1D9'}}>View more <AiOutlineArrowRight style={{marginBottom:'-0.1rem',fontSize:'1rem'}}/></h5>
            </CardContent>
            
          </Card>
            </Item>
            
            <Item>
          <Card style={{borderRadius:'2rem'}}   sx={{ maxWidth: 345 }}  >
                      <CardMedia 
                           className="newCardMedia"
           component="img"
              height="100"
              image="https://i.ibb.co/Y3WV1ww/new-today-2.png"
              alt="green iguana"
            />
            <CardContent>
            <h6 style={{color:'#A67C00'}}>December 25,  2021</h6>
              <Typography   gutterBottom variant="h5" component="div">
              <h4 style={{color:'#A67C00'}}>Relax than fly like going <br/> with the flow</h4>
              </Typography>
               <h5 style={{color:'#C2D1D9'}}>View more <AiOutlineArrowRight style={{marginBottom:'-0.1rem',fontSize:'1rem'}}/></h5>
            </CardContent>
            
          </Card>
            </Item>
            

            <Item>
          <Card style={{borderRadius:'2rem'}}   sx={{ maxWidth: 345 }}  >
                      <CardMedia 
                           className="newCardMedia"
           component="img"
              height="100"
              image="https://i.ibb.co/k2XPhTH/new-today-3.png"
              alt="green iguana"
            />
            <CardContent>
            <h6 style={{color:'#A67C00'}}>December 25,  2021</h6>
              <Typography   gutterBottom variant="h5" component="div">
              <h4 style={{color:'#A67C00'}}>Relax than fly like going <br/> with the flow</h4>
              </Typography>
               <h5 style={{color:'#C2D1D9'}}>View more <AiOutlineArrowRight style={{marginBottom:'-0.1rem',fontSize:'1rem'}}/></h5>
            </CardContent>
            
          </Card>
          </Item>
         </Carousel>
          </div>
            
              
        </div>
    );
};

export default New;