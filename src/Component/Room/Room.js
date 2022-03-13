import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from 'react';
import { FaShower } from 'react-icons/fa';
import { MdOutlineBedroomParent } from 'react-icons/md';
import './Room.css';
const Room = () => {
    return (
        <div className='room'>
            <h1>Save an extra 5-10% percent <br /> on every rooms booking</h1>
            <div className='cardRoom'>
                {/* card 1 */}

       
          <Card  className="col-md-3 boxShadows " sx={{ maxWidth: 245 }} style={{boxShadow:'  rgba(0, 0, 0, 0.25) 0px 14px 28px,rgba(0, 0, 0, 0.22) 0px 10px 10px'}} >
                      <CardMedia  
                           className="roomCardMedia"
              component="img"
              height="100"
              image="https://i.ibb.co/kgTRN9b/room1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typography"  gutterBottom variant="h5" component="div">
              <p>Classic Room</p>
              </Typography>
               
              <div className='roomService' >
            <MdOutlineBedroomParent style={{width: '21px',height: '21px',color:' #A18A65'}} /> <h6>Double room</h6>
                <FaShower style={{width: '21px',height: '21px',color:' #A18A65'}}/> <h6>Attach washroom</h6>
              </div>
              <br />
              <div className='roomService2'>
                 <h5>Starting from </h5> <h2>$50/ per night</h2>
              </div>
              
            </CardContent>
            <br />
              <button className="bookButton">Book room now</button>
           
          </Card>
           
              
        {/* card 2 */}

      
          <Card  className="col-md-3 boxShadows" sx={{ maxWidth: 245 }} style={{boxShadow:'  rgba(0, 0, 0, 0.25) 0px 14px 28px,rgba(0, 0, 0, 0.22) 0px 10px 10px'}} >
                      <CardMedia 
                           className="roomCardMedia"
                          component="img"
                          width="100"
              height="100"
              image="https://i.ibb.co/xY7Ypzc/room2.jpg"
          
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typography"  gutterBottom variant="h5" component="div">
              <p>Duplex Room</p>
              </Typography>

              <div className='roomService'>
              <MdOutlineBedroomParent style={{width: '21px',height: '21px',color:' #A18A65'}} /> <h6>Double room</h6>
                <FaShower style={{width: '21px',height: '21px',color:' #A18A65'}}/> <h6>Attach washroom</h6>
              </div>
              <br />
              <div className='roomService2'>
                 <h5>Starting from </h5> <h2>$50/ per night</h2>
              </div>
            
            </CardContent>
            <br />
              <button className="bookButton">Book room now</button>
           
          </Card>
            
              
        {/* card 3 */}

      
          <Card className="col-md-3  boxShadows" sx={{ maxWidth: 245 }} style={{boxShadow:'  rgba(0, 0, 0, 0.25) 0px 14px 28px,rgba(0, 0, 0, 0.22) 0px 10px 10px'}}  >
                      <CardMedia 
                           className="roomCardMedia"
           component="img"
              height="100"
              image="https://i.ibb.co/HxrqJwS/room-3.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typography" gutterBottom variant="h5" component="div">
              <p>Double Room</p>
              </Typography>
               
              <div className='roomService'>
              <MdOutlineBedroomParent style={{width: '21px',height: '21px',color:' #A18A65'}} /> <h6>Double room</h6>
                <FaShower style={{width: '21px',height: '21px',color:' #A18A65'}}/> <h6>Attach washroom</h6>
              </div>
              <br />
              <div className='roomService2'>
                 <h5>Starting from </h5> <h2>$50/ per night</h2>
              </div>
             
            </CardContent>
            <br />
              <button className="bookButton">Book room now</button>
            
          </Card>

          {/* card 4 */}

      
          <Card className="col-md-3  boxShadows" sx={{ maxWidth: 245 }} style={{boxShadow:'  rgba(0, 0, 0, 0.25) 0px 14px 28px,rgba(0, 0, 0, 0.22) 0px 10px 10px'}}  >
                      <CardMedia 
                           className="roomCardMedia"
           component="img"
              height="100"
              image="https://i.ibb.co/BLgYP5V/pexels-pixabay-271619.jpg"
              alt="green iguana"
             
            />
           
            <CardContent>
              <Typography className="typography" gutterBottom variant="h5" component="div">
              <p>Single Room</p>
              </Typography>
               
              <div className='roomService'>
              <MdOutlineBedroomParent style={{width: '21px',height: '21px',color:' #A18A65'}} /> <h6>Double room</h6>
                <FaShower style={{width: '21px',height: '21px',color:' #A18A65'}}/> <h6>Attach washroom</h6>
              </div>
              <br />
              
              <div className='roomService2'>
                 <h5>Starting from </h5> <h2>$50/ per night</h2>
              </div>
              
            </CardContent>
            <br />
              <button className="bookButton">Book room now</button>
            
          </Card>
       
            </div>
        </div>
    );
};

export default Room;