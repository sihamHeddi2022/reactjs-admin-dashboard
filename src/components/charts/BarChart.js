import React from "react";
import { Bar, BarChart, Legend } from "recharts";


const data = [
    {
      name: 'Page A',
      target: 4000,
      "last month":4000,
      "last work":3000
    
    },
    {
      name: 'Page B',
      "target": 3000,
      "last month":5000,
last_work:2000
    },
    
    {
      name: 'Page C',
      target: 2000,
      "last month":8000,
      "last work":1000
    }
    ,

  
  
  ];

function BarChartt() {
    console.log("hi there I'm the bar chart");
    
    return (

    <BarChart width={300} height={280} data={data} >
        {/* <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip /> */}
         <Legend  align="center" valign="top" height={36}  /> 
        <Bar dataKey="target" fill="#8884d8" maxBarSize={10}/>
        <Bar dataKey="last month" fill="violet" maxBarSize={10}/>
        <Bar dataKey="last work" fill="purple" maxBarSize={10}/>
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>



        
);
}

export default BarChartt;