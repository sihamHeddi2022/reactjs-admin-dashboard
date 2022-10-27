
import React from 'react';
import NavBar from '../components/Navbar';
import SideBar from '../components/SideBar';


function Home() {
    return ( 
        <div className='content'>
            <SideBar/>
            
            <div>
                 <NavBar/>
            </div>
          
        </div>
     );
}

export default Home;