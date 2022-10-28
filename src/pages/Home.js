
import { Button, Icon } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/Navbar';
import SideBar from '../components/SideBar';

import "../styles/home.css"; 

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
                        <small>Welcome To Your Dashboard</small>
                   </div>
                  
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
            </div>


          

          
        </div>
     );
}

export default Home;