import React from 'react';
import { BarChart, Bar, XAxis,YAxis } from 'recharts';

const SimpleBarWithMissingDates = ({ color, data, barOptions = { xAxis: {}, bar: []},}) => {
    return (
        <BarChart width={500} height={150} data={data}>
            {barOptions.bar.map((item) => {
              return (
                <Bar
                  dataKey={item.key}
                  key={item.key}
                  fill={color}
                />
              );
            })
            }
            <XAxis dataKey="date" tick={{ fontSize: 10 }}/>
            <YAxis tick={{ fontSize: 10 }}/>
          </BarChart>
    )
}

export default SimpleBarWithMissingDates