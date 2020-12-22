import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const DoubleBarChartWithFillingMissingDates = ({data,barOptions = { xAxis: {}, yAxis: {}, bar: [] }}) => {
    return (
        <BarChart 
                    width={1000} 
                    height={300} 
                    data={data}
                    margin={{
                        top: 40, right: 20, left: 60, bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 10 }}/>
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36}/>
                    {barOptions.bar.map((item) => {
                        return (
                            <Bar 
                                dataKey={item.key1} 
                                key={item.key1}
                                fill="#8884d8" 
                            />
                        );
                    })
                    }
                    {barOptions.bar.map((item) => {
                        return (
                            <Bar 
                                dataKey={item.key2} 
                                key={item.key2}
                                fill="#64dbfe" 
                            />
                        );
                    })
                    }
                </BarChart>  
    )
}

export default DoubleBarChartWithFillingMissingDates
