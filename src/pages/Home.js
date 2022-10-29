
import { Box, Button, Icon, Typography } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/Navbar';
import SideBar from '../components/SideBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import "../styles/home.css"; 
import LinearProgress from '@material-ui/core/LinearProgress';

function Home() {
    return ( 
        <div className='content'>
            <SideBar/>
            
            <div>
                 <NavBar/>
                   {/* Main Section */}
            
            <div className="main-section">
                <div className="heading">
                   <div className="title">
                        <h2>
                            Hi Ramy Sharp
                        </h2>
                        <small>Welcome To Your Dashboard Lorem Ipsum Lorum Ipsum</small>
                   </div>
                  
                  <div className="actions">
                        <Button variant='outlined' color='light'>
                                <Icon>download</Icon>
                                Download
                            </Button>
                        <Button variant='contained' color='secondary'>
                                +
                                Add Dashlet
                        </Button>
                  </div>
                </div>
                
                <div className="cards">
                    <Card >
                        <CardContent>
                            <div className="details">
                                <div>
                                    <h2>2,555.000 $</h2>   
                                    <small>Lorem ipsum dolor sit.</small>   
                                </div>
                                <Icon color="primary">
                                    work
                                </Icon>
                            </div> 

                           {/* <div className="percentage"> */}
                           <Box  display="flex" alignItems="center">

                           <Box width="100%" mr={1}>
                           <LinearProgress variant='determinate'   value={60} />                        
                           </Box>

                              <Box minWidth={35}>
                                  <Typography variant="body2" color="textSecondary">60%</Typography>
                              </Box>
                           {/* </div> */}
                         </Box>
                        </CardContent>
                    </Card>
           
                    <Card >
                        <CardContent>
                            <div className="details">
                                <div>
                                    <h2>3,095.3000 $</h2>   
                                    <small>Lorem ipsum dolor sit.</small>   
                                </div>
                                <Icon color="secondary">
                                  money
                                </Icon>
                            </div> 

                           {/* <div className="percentage"> */}
                           <Box  display="flex" alignItems="center">

                           <Box width="100%" mr={1}>
                           <LinearProgress variant='determinate' color='secondary'   value={60} />                        
                           </Box>

                              <Box minWidth={35}>
                                  <Typography variant="body2" color="textSecondary">60%</Typography>
                              </Box>
                           {/* </div> */}
                         </Box>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardContent>
                            <div className="details">
                                <div>
                                    <h2>60.98%</h2>   
                                    <small>Lorem ipsum dolor sit.</small>   
                                </div>
                                <Icon className='info'>
                                    anchor
                                </Icon>
                            </div> 

                           {/* <div className="percentage"> */}
                           <Box  display="flex" alignItems="center">

                           <Box width="100%" mr={1}>
                           <LinearProgress variant='determinate' className='infob' value={60} />                        
                           </Box>

                              <Box minWidth={35}>
                                  <Typography variant="body2" color="textSecondary">60%</Typography>
                              </Box>
                           {/* </div> */}
                         </Box>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardContent>
                            <div className="details">
                                <div>
                                    <h2>2,555.000 $</h2>   
                                    <small>Lorem ipsum dolor sit.</small>   
                                </div>
                                <Icon color="primary">
                                    work
                                </Icon>
                            </div> 

                           {/* <div className="percentage"> */}
                           <Box  display="flex" alignItems="center">

                           <Box width="100%" mr={1}>
                           <LinearProgress variant='determinate'   value={60} />                        
                           </Box>

                              <Box minWidth={35}>
                                  <Typography variant="body2" color="textSecondary">60%</Typography>
                              </Box>
                           {/* </div> */}
                         </Box>
                        </CardContent>
                    </Card>
                </div>









            </div>
            </div>


          

          
        </div>
     );
}

export default Home;