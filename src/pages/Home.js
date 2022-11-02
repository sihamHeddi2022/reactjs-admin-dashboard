
import { Box, Button, Icon, IconButton, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/Navbar';
import SideBar from '../components/SideBar';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import "../styles/home.css"; 
import LinearProgress from '@material-ui/core/LinearProgress';
import {PieChartt}  from '../components/charts/PieChart';
import BarChartt from '../components/charts/BarChart';
import AreaChartt from '../components/charts/AreaChart';
import TableDeals from '../components/others/TableDeals';
import ListOfTasks from '../components/others/ListOfTasks';

function Home() {

    const StyledLinearProgress3 = withStyles({
        colorPrimary: {
          backgroundColor: "#D0D0D0"
        },
        barColorPrimary: {
          backgroundColor: "green"
        }
      })(LinearProgress);

      const StyledLinearProgress4 = withStyles({
        barColorPrimary: {
          backgroundColor: "#1ad1ff"
        },
        colorPrimary: {
          backgroundColor: "#e6faff"
        }
      })(LinearProgress);



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
                           <LinearProgress variant='determinate' color='secondary'   value={50} />                        
                           </Box>

                              <Box minWidth={35}>
                                  <Typography variant="body2" color="textSecondary">50%</Typography>
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
                           <StyledLinearProgress3 variant='determinate'   
                              
                            
                              
                              
                              value={40} />                        
                           </Box>

                              <Box minWidth={35}>
                                  <Typography variant="body2" color="textSecondary">40%</Typography>
                              </Box>
                           {/* </div> */}
                         </Box>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardContent>
                            <div className="details">
                                <div>
                                    <h2>778</h2>   
                                    <small>Lorem ipsum dolor sit.</small>   
                                </div>
                                <Icon style={{color:"#1ad1ff"}}>
                                    cake
                                </Icon>
                            </div> 

                           {/* <div className="percentage"> */}
                           <Box  display="flex" alignItems="center">

                           <Box width="100%" mr={1}>
                           <StyledLinearProgress4 variant='determinate'   value={80} />                        
                           </Box>

                              <Box minWidth={35}>
                                  <Typography variant="body2" color="textSecondary">80%</Typography>
                              </Box>
                           {/* </div> */}
                         </Box>
                        </CardContent>
                    </Card>
                </div>



                <div className="graphs">
                    <Card >
                        <CardContent >
                            <div className='header'>
                                <div className="title">
                                    <h2>Email Sent Total</h2>
                                    <small>March 2020</small>
                                </div>
                                <IconButton>
                                    <Icon>
                                        more_vert
                                    </Icon>
                                </IconButton>
                            </div>
                           
                           <PieChartt/>

                        
                        </CardContent>
                    </Card>
                    <Card >
                        <CardContent >
                           <div className='header'>
                                <div className="title">
                                        <h2>Income Amounts</h2>
                                    
                                </div>
                                <IconButton>
                                        <Icon>
                                            more_vert
                                        </Icon>
                                </IconButton>
                            
                           </div>
                          
                          <BarChartt/>
                           
                        
                        </CardContent>
                    </Card>
                    <Card >
                        <CardContent>
                         

                           <div className="header">
                                <div className="title">
                                        <h3>Revenue</h3>
                                        <h2>5690.90 $</h2>
                                        <small>
                                            With 20 deals
                                        </small>
                                    </div>
                                    <IconButton>
                                        <Icon>
                                            more_vert
                                        </Icon>
                                    </IconButton>
                            

                           </div>
                         
                         <AreaChartt/>
                        
                        </CardContent>
                    </Card>
                </div>


                <div className="other-details">
                    {/* table */}
                    <Card >
                        <CardContent>
                            <h2>Top Performance</h2>
                            <small>Last 2 weeks</small>
                            <TableDeals/>

                        </CardContent>
                    </Card>
                           {/* tasks */}
                    <Card >
                        <CardContent>
                            <h2>Tasks</h2>
                            <small>4 of 8 remainig</small>
                            <ListOfTasks/>
                        </CardContent>
                    </Card>
                </div>




            </div>
            </div>


          

          
        </div>
     );
}

export default Home;