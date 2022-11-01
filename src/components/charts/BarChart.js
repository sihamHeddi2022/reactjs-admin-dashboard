import React from "react";
import { Bar, BarChart } from "recharts";


const data = [
    {
      name: 'Page A',
      target: 4000,
      last_month:4000,
      last_work:3000
    
    },
    {
      name: 'Page B',
      target: 3000,
      last_month:5000,
last_work:2000
    },
    
    {
      name: 'Page C',
      target: 2000,
      last_month:8000,
      last_work:1000
    }
    ,

  
  
  ];

function BarChartt() {
    console.log("hi there I'm the bar chart");
    
    return (

    <BarChart width={300} height={250} data={data} >
        {/* <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip /> */}
        {/* <Legend /> */}
        <Bar dataKey="target" fill="#8884d8" maxBarSize={10}/>
        <Bar dataKey="last_month" fill="#8884d8" maxBarSize={10}/>
        <Bar dataKey="last_work" fill="#8884d8" maxBarSize={10}/>
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>



        
);
}

export default BarChartt;