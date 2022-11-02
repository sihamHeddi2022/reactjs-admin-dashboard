import { Checkbox } from "@material-ui/core";
import React from "react";




function ListOfTasks() {
    return (
        
        
        <div className="tasks">
            <ul>
                <li>
                    <Checkbox
                      
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <label>Marketing Dashboard App</label>
                </li>
                <li>
                    <Checkbox
                      
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                     checked />
                    <label>Marketing Dashboard App</label>
                </li>
                <li>
                    <Checkbox
                      
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <label>Create new version 4.0</label>
                </li>
                <li>
                    <Checkbox
                      
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        checked
                    />
                    <label>Marketing Dashboard App</label>
                </li>
                <li>
                    <Checkbox
                      
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <label>Create new version 4.0</label>
                </li>
            </ul>
        </div>


     );
}

export default ListOfTasks;