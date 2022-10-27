

import React from 'react';
import { Icon } from '@material-ui/core';

function SideBar() {
    return ( 
        <div className='sidebar'>
            <div className="header">
                    {/* menu icon  */}
                    <Icon>
                       menu
                    </Icon>
                <div className="logo">
          
                    {/*   icon logo */}
                    
                    <Icon>
                        attractions
                    </Icon>


                    <h3>Lorem Ipsum</h3>
                </div>
            </div>
            
            <div className="list">
                <ul>
                    <li className='active'>
                       <a href="#">
                            <Icon>
                                    dashboard
                            </Icon>
                            <p>
                                dashboard
                            </p>
                       </a>
              
                    </li>
                    <li>
                        <a href='#'>
                            <Icon>
                                work
                            </Icon>
                            <p>
                                deals
                            </p>
                        </a>
                      
                    </li>
                    <li>
                        <a href="#">
                            <Icon>
                                assessment
                            </Icon>
                            <p>
                                reports
                            </p>
                        </a>
                 
                    </li>
                    <li>
                        <a href="#">
                            <Icon>
                                folder
                            </Icon>
                            <p>
                                documents
                            </p>

                        </a>
                      
                    </li>
                  
                </ul>
            </div>


        </div>
     );
}

export default SideBar;