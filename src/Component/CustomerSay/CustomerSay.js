import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './CustomerSay.css';
const CustomerSay = () => {
    return (
        <div className="review">
            <h1>Our beloved customer say</h1>
            <div className='customer'>
            {/* card 1 */}

                <Card className="  reviewCard"
                    sx={{ maxWidth: 345 }}
                    style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
                >
             <CardMedia style={{width: '100px',height: '100px',marginLeft:'8rem'}}
                  className="images"
     component="img"
   //   height="100"
     image="https://i.ibb.co/x1M04gk/Ellipse-57.png"
     alt="green iguana"
   />
   <CardContent>
     
     <Typography className='text' variant="body2" color="text.secondary">
       Lizards are a widespread group of squamate reptiles, with over
       6,000 species, ranging across all continents except Antarctica
               </Typography>
               <br/><br/>
               <div className='star'>
               <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
               </div>
               <br />
               <h5 style={{ color: 'white' }}>Flip jhonson</h5>
               <h6 style={{ color: 'white' }}>CEO australia</h6>
   </CardContent>
  
 </Card>
    
     
{/* card 2 */}


                <Card className=" reviewCard "
                    sx={{ maxWidth: 345 }}
                    style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
                >
             <CardMedia  style={{width: '100px',height: '100px',marginLeft:'8rem'}}
                  className="images"
                 component="img"
                 width="100"
   //   height="100"
     image="https://i.ibb.co/HxDQxns/Ellipse-54.png"
 
     alt="green iguana"
   />
   <CardContent>
     
     <Typography className='text' variant="body2" color="text.secondary">
       Lizards are a widespread group of squamate reptiles, with over
       6,000 species, ranging across all continents except Antarctica
               </Typography>
               <br /><br />
               <div className='star'>
               <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
               </div>
               <br />
               <h5 style={{ color: 'white' }}>Flip jhonson</h5>
               <h6 style={{ color: 'white' }}>CEO australia</h6>
   </CardContent>
  
 </Card>
    
     
{/* card 3 */}


                <Card
                    className=" reviewCard "
                    sx={{ maxWidth: 345 }}
                    style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
                    >
             <CardMedia  style={{width: '100px',height: '100px',marginLeft:'8rem'}}
                  className="images"
  component="img"
   //   height="100"
     image="https://i.ibb.co/hy3ngLD/Ellipse-56.png"
     alt="green iguana"
   />
   <CardContent>
     
     <Typography className='text' variant="body2" color="text.secondary">
       Lizards are a widespread group of squamate reptiles, with over
       6,000 species, ranging across all continents except Antarctica
               </Typography>
               <br/><br/>
               <div className='star'>
               <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
               </div>
               <br />
               <h5 style={{ color: 'white' }}>Flip jhonson</h5>
               <h6 style={{ color: 'white' }}>CEO australia</h6>
   </CardContent>
   
 </Card>
             </div>
        </div>
    );
};

export default CustomerSay;