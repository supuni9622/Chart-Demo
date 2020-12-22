import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';

const getDatesSeries = (startDate, stopDate) => {
    let dateArray = [];
    let currentDate = moment(startDate);
    let endDate = moment(stopDate);
    while (currentDate <= endDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
};

const fromDate = '2020-12-8';
const toDate = '2020-12-20';

const dateSeries = getDatesSeries(fromDate,toDate);

const LineChartWithMissingDates = ({data, lineOptions =  [] }) => {

    const dateSeriesLineChart = dateSeries.reduce((result, data) => {
        result[data] = { date: moment(data).format("MMM-DD")};
        return result;
      }, {});

      const transformedLineData= data.reduce((result,{rewardId,date, count})=>{
        if (result[date]) {
          result[date]={
            date: moment(date).format("MMM-DD"), 
            [rewardId]: count
          }
        }else{
          result[date]={
            date: moment(date).format("MMM-DD"), 
            [rewardId]: 0
          }
        }
        return result;
        },dateSeriesLineChart);
        
        const transformedLineChartData = data.reduce((result,{rewardId,date, count})=>{
        if(result[date] && !result[rewardId]){
           result[date][rewardId]=count;
        }else{
           result[date]={
              date:moment(date).format("MMM-DD"),
              [rewardId]: count
           }
        };
        
        return result;

        },transformedLineData);

        const transformedArray = Object.values(transformedLineChartData);

    return (
        <ResponsiveContainer
        width="100%"
        height={400}
        margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
    >
        <LineChart
            width={1000}
            height={300}
            data={transformedArray}
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

export default LineChartWithMissingDates
