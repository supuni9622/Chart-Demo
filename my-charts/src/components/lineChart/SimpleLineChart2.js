import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SimpleLineChart2 = ({data, lineOptions =  [] }) => {
    return (
        <ResponsiveContainer
            width="100%"
            height={400}
            margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
        >
            <LineChart
                width={1000}
                height={300}
                data={data}
                margin={{
                    top: 40, right: 20, left: 20, bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend  verticalAlign="top" height={36}/>
                {lineOptions.map((item)=>{
                    return (<Line key={item.key} type={item.type || "monotone"} dataKey={item.key||'value'} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`}  name={item.key}/>)
                })}
            </LineChart>
        </ResponsiveContainer>
    )
  }

export default SimpleLineChart2