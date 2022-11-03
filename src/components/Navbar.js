
import { Avatar, Icon,IconButton,TextField } from '@material-ui/core';
import React from 'react';


function NavBar() {
    return ( 
        <div className='navbar'>

                {/* search */}
            
                <div className="search">
                    <div className="menuBtn">
                        <IconButton>
                            <Icon>
                                menu
                            </Icon>
                        </IconButton>
                    </div>
                      {/* <Icon>
                            search                 
                      </Icon> */}
                      <TextField placeholder='Search ...' fullWidth InputProps={{startAdornment: ( 
                          <Icon> 
                          search                 
                      </Icon>)  , disableUnderline: true,} } variant="filled"   />      
                </div>
           
            {/* options */}

          
          <div className="options">
                <IconButton>
                   <Icon>
                      help
                    </Icon>
               </IconButton>
               <div>
                   <IconButton>
                        <Icon>
                            notifications
                        </Icon>
                  
                   </IconButton>
                   <div className="banner">
                             3
                    </div>
               </div>
               <div className='info'>

                  <Avatar alt="Remy Sharp" src="https://remysharp.com/images/remy-2017.jpg" />
                   <div className='content'>
                       <h4>Ramy Sharp</h4>
                       <small>lorem ipsum</small>
                   </div>
               </div>
          </div>







        </div>
     );
}

export default NavBar;