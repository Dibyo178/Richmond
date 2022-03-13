import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './New.css';
const New = () => {
    return (
        <div className="new">
            <h1>WHAT NEW TODAY?</h1>


            <div className='newCard'>
                   {/* card 1 */}

       
          <Card style={{borderRadius:'2rem'}}  className="col-md-3  " sx={{ maxWidth: 345 }}  >
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
               <h5 style={{color:'#A67C00'}}>View more <AiOutlineArrowRight/></h5>
            </CardContent>
           
          </Card>
           
              
        {/* card 2 */}


          <Card style={{borderRadius:'2rem'}}  className="col-md-3 " sx={{ maxWidth: 345 }} >
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
               <h5 style={{color:'#A67C00'}}>View more <AiOutlineArrowRight/></h5>
              
            </CardContent>
           
          </Card>
             
              
        {/* card 3 */}

     
          <Card style={{borderRadius:'2rem'}}  className="col-md-3 " sx={{ maxWidth: 345 }}  >
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
               <h5 style={{color:'#A67C00'}}>View more <AiOutlineArrowRight/></h5>
            </CardContent>
            
          </Card>
          </div>
            
              
        </div>
    );
};

export default New;