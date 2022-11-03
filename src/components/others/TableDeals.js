import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Avatar, Box, CircularProgress, Typography } from '@material-ui/core';
import "../../styles/responsive.css"
const useStyles = makeStyles({
  table: {
    minWidth:"fit-content",
  },
});



const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export default function TableDeals() {
  const classes = useStyles();

  return (
    // <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="right">Ref</TableCell>
            <TableCell align="right">Leads</TableCell>
            <TableCell align="right">Tasks</TableCell>
            <TableCell align="right">Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">
                <div className="info-cell">
                    <div className="avatar">
                       
                      <Avatar alt="Remy Sharp" src="https://remysharp.com/images/remy-2017.jpg" />


                    </div>
                    <div className="">
                        <h5>Ramy Sharp</h5>
                        <small>$8,500.00</small>
                    </div>

                </div>
              </TableCell>
             <TableCell align="right">187</TableCell>
              <TableCell align="right">154</TableCell>
              <TableCell align="right">28 <span className='tasks'>Tasks </span> done</TableCell> 
              
              <TableCell align="right" className='progress'>
                 <p>75 %</p>
                 <CircularProgress variant="determinate" value={75} />

              </TableCell> 
           
            </StyledTableRow>
            <StyledTableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">
                <div className="info-cell">
                <div className="avatar">
                       
                <Avatar alt="Remy Sharp" src="https://remysharp.com/images/remy-2017.jpg" />
 
 
                     </div>
                    <div className="">
                        <h5>Ramy Sharp</h5>
                        <small>$8,500.00</small>
                    </div>

                </div>
              </TableCell>
             <TableCell align="right">187</TableCell>
              <TableCell align="right">154</TableCell>
              <TableCell align="right">28 <span className='tasks'>Tasks </span> done</TableCell> 
              
              <TableCell align="right" className='progress'>
                 <p>100%</p>
                 <CircularProgress variant="determinate" value={100} />

              </TableCell> 
           
            </StyledTableRow>
            <StyledTableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">
                <div className="info-cell">
                <div className="avatar">
                       
                <Avatar alt="Remy Sharp" src="https://lisarichards.co.uk/wp-content/uploads/elementor/thumbs/Lara-McDonnell-Headshot-2-scaled-pud2vvqc6s9kbcmh6msnculkjyqqkph3ce1csbv4v4.jpeg" />
        
        
                </div>
                    <div className="">
                        <h5>Ramy Sharp</h5>
                        <small>$8,500.00</small>
                    </div>

                </div>
              </TableCell>
             <TableCell align="right">187</TableCell>
              <TableCell align="right">154</TableCell>
              <TableCell align="right">28 <span className='tasks'>Tasks</span> done</TableCell> 
              
              <TableCell align="right" className='progress'>
                 <p>25 %</p>
                 <CircularProgress variant="determinate" value={25} />

              </TableCell> 
           
            </StyledTableRow>
            <StyledTableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">
                <div className="info-cell">
                <div className="avatar">
                       
                <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg" />
               
               
                       </div>
                    <div className="">
                        <h5>Ramy Sharp</h5>
                        <small>$8,500.00</small>
                    </div>

                </div>
              </TableCell>
             <TableCell align="right">187</TableCell>
              <TableCell align="right">154</TableCell>
              <TableCell align="right">28 <span className='tasks'>Tasks </span>done</TableCell> 
              
              <TableCell align="right" className='progress'>
                 <p>45 %</p>
                 <CircularProgress variant="determinate" value={45} />

              </TableCell> 
           
            </StyledTableRow>
        </TableBody>
      </Table>
    // </TableContainer>
  );
}
