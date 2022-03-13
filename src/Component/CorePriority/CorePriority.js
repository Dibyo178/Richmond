import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import "./CorePriority.css";



const CorePriority = () => {
  return (
    <div className="core">
      <h1>OUR CORE PRIORITY</h1>
      <br />
      <h3>
        View All <ion-icon name="arrow-forward-outline"></ion-icon>
      </h3>
      <br />

      <div className="card ">
        {/* card 1 */}

       
          <Card  className="col-md-3  boxShadow" sx={{ maxWidth: 345 }} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >
                      <CardMedia  style={{width: '100px',marginLeft:'5.5rem',borderRadius:'50%'}}
                           className="coreCardMedia"
              component="img"
              height="100"
              image="https://i.ibb.co/jGcn3Wj/cozy-room.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typography"  gutterBottom variant="h5" component="div">
              <p>Cozy room</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
           
          </Card>
              {/* </div> */}
              
        {/* card 2 */}

        {/* <div> */}
          <Card  className="col-md-3 boxShadow" sx={{ maxWidth: 345 }} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                      <CardMedia style={{width: '100px',marginLeft:'5.5rem',borderRadius:'50%'}}
                           className="coreCardMedia"
                          component="img"
                          width="100"
              height="100"
              image="https://i.ibb.co/TrYRK6Z/Ac-service.jpg"
          
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typography"  gutterBottom variant="h5" component="div">
              <p>Ac service</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
           
          </Card>
              {/* </div> */}
              
        {/* card 3 */}

        {/* <div > */}
          <Card className="col-md-3 boxShadow" sx={{ maxWidth: 345 }} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >
                      <CardMedia style={{width: '100px',marginLeft:'5.5rem',borderRadius:'50%'}}
                           className="coreCardMedia"
           component="img"
              height="100"
              image="https://i.ibb.co/30H9SCP/wifi.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typography" gutterBottom variant="h5" component="div">
              <p>Free wifi</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            
          </Card>
              {/* </div> */}
              
        {/* card 4 */}

        {/* <div> */}
              <Card className="col-md-3 boxShadow" sx={{ maxWidth: 345 }} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                      <CardMedia style={{width: '100px',marginLeft:'5.5rem',borderRadius:'50%'}}
                          className="coreCardMedia"
          component="img"
              height="100"
              image="https://i.ibb.co/df9kWt2/special-gift.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography className="typography" gutterBottom variant="h5" component="div">
                          <p>Special offer</p>

                          
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            
          </Card>
         {/* </div> */}
      </div>
    </div>
  );
};

export default CorePriority;
