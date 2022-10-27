import React from 'react';

// import Icon from '@material-ui/core/Icon';
import "./styles/index.css"; 


import { BrowserRouter as Router,Switch , Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (    
      <div className="App">
{/*             hi there 
            
             <Icon>home</Icon>
   */}

            <Router>
              <Switch>
                 
                  <Route exact path="/">
                     <Home/>
                 </Route>

                 <Route  path="/deals">
                      <p>deals</p>
                 </Route>

                 <Route path="/documents">
                    <p>documents</p>
                 </Route>

                 <Route path="/reports">
                    <p>reports</p>
                 </Route>
                
                <Route>
                  <p>
                     404 Not Found
                  </p>
                </Route>
              </Switch>
            </Router>



      </div> 
   );
}


export default App;
