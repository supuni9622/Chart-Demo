import React from 'react';
import {Card} from 'react-bootstrap';
import moment from 'moment';
import SimpleLineChart1 from './SimpleLineChart1';
import SimpleLineChart2 from './SimpleLineChart2';
import LineChartWithMissingDates from './LineChartWithMissingDates';

const data2 = [
    {
      rewardId : 1,
      date: "2020-12-12",
      count: 12
    },
    {
      rewardId : 2,
      date: "2020-12-12",
      count: 34
    },
    {
      rewardId : 1,
      date: "2020-12-13",
      count: 44
    },
    {
      rewardId : 2,
      date: "2020-12-13",
      count: 10
    },
    {
      rewardId : 3,
      date: "2020-12-13",
      count: 13
    },
    {
      rewardId : 4,
      date: "2020-12-13",
      count: 20
    },
    {
      rewardId: 2,
      date: "2020-12-14",
      count: 34
    },
    {
      rewardId : 1,
      date: "2020-12-15",
      count : 30
    },
    {
      rewardId : 2,
      date: "2020-12-15",
      count : 23
    },
    {
      rewardId : 3,
      date: "2020-12-15",
      count : 45
    },
    {
      rewardId : 4,
      date: "2020-12-15",
      count : 20
    },
    {
       rewardId : 3,
       date: "2020-12-12",
       count : 24
     },
     {
      rewardId : 4,
      date: "2020-12-12",
      count : 15
    },
     {
       rewardId : 3,
       date: "2020-12-14",
       count : 100
     },
     {
      rewardId : 1,
      date: "2020-12-14",
      count : 0
    },
     {
       rewardId : 4,
       date: "2020-12-14",
       count : 90
     }
  ];

const removeLineKeyDuplication = (data, key) => {
    return [
       ... new Map(
          data.map(x => [key(x), x])
       ).values()
    ]
  };

const transformedLineData= data2.reduce((result,{rewardId,date, count})=>{

    result[date]={date: moment(date).format("MMM-DD"), [rewardId]: count}
    return result;
},{});
    
const transformedLineChartData = data2.reduce((result,{rewardId,date, count})=>{
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

const transformLines = data2.reduce((result, {rewardId}) => {
    result.push({key : rewardId});
    return result;
}, []);

const lineChartLineOptions = removeLineKeyDuplication(transformLines, line => line.key)

const Index = () => {
    return (
        <div className='my-4 p-2'>
             <h4 className='mb-3'>Line Charts</h4>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Simple Line Chart</h6>
                <div className="p-2">
                    < SimpleLineChart1/>
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Simple Line Chart with complex data format</h6>
                <div className="p-2">
                    <SimpleLineChart2
                    data={transformedArray}
                    lineOptions={lineChartLineOptions}
                  />
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Map with mock data without filling empty cells</h6>
                <div className="p-2">
                  <LineChartWithMissingDates
                    data={data2}
                    lineOptions={lineChartLineOptions}
                  />
                </div>
            </Card>
            <Card className='mb-5 py-3'>
                <h6 className='ml-2 px-2 mb-3'>Map with mock data without values</h6>
                <div className="p-2">
                   
                </div>
            </Card>
        </div>
    )
}
export default Index